import { ControlValueAccessor } from '@angular/forms';
import { signal, WritableSignal } from '@angular/core';

export abstract class RuiValueAccessor<T> implements ControlValueAccessor {
  readonly value: WritableSignal<T | undefined> = signal<T | undefined>(
    undefined,
  );
  readonly disabled = signal(false);

  protected onChange: (value: T | undefined) => void = /* @__NO_SIDE_EFFECTS__ */ () => {};
  protected onTouched: () => void = /* @__NO_SIDE_EFFECTS__ */ () => {};

  writeValue(value: T | undefined): void {
    this.value.set(value);
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

  protected markAsChanged(value: T | undefined = this.value()): void {
    this.value.set(value);
    this.onChange(value);
  }

  protected markAsTouched(): void {
    this.onTouched();
  }
}
