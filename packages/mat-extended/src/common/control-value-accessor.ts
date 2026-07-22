import { ControlValueAccessor } from '@angular/forms';
import { signal } from '@angular/core';

export abstract class RuiValueAccessor<T> implements ControlValueAccessor {
  readonly disabled = signal(false);

  protected onChange: (value: T | undefined) => void = () => undefined;
  protected onTouched: () => void = () => undefined;

  private readonly _value = signal<T | undefined>(undefined);

  get value(): T | undefined {
    return this._value();
  }

  set value(v: T | undefined) {
    this._value.set(v);
  }

  writeValue(value: T | undefined): void {
    this._value.set(value);
  }

  registerOnChange(fn: (value: T | undefined) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  markAsChanged(value: T | undefined = this._value()): void {
    this._value.set(value);
    this.onChange(value);
  }

  markAsTouched(): void {
    this.onTouched();
  }
}
