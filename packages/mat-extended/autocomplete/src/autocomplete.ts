import { Component, input, output, model, signal, computed, forwardRef, DestroyRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RuiValueAccessor } from '@all-the.rest/mat-extended';

let nextId = 0;

@Component({
  selector: 'rui-autocomplete',
  standalone: true,
  imports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RuiAutocomplete),
      multi: true,
    },
  ],
})
export class RuiAutocomplete<T = string> extends RuiValueAccessor<T> {
  private readonly destroyRef = inject(DestroyRef);
  private readonly instanceId = nextId++;

  readonly panelId = `rui-autocomplete-panel-${this.instanceId}`;
  readonly panelOpen = signal(false);

  readonly options = input<T[]>([]);
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly appearance = input<'fill' | 'outline'>('outline');
  readonly displayWith = input<(value: T) => string>((v: T) => String(v ?? ''));
  readonly filterFn = input<((options: T[], query: string) => T[]) | null>(null);
  readonly compareWith = input<((a: T, b: T) => boolean) | null>(null);

  readonly query = signal('');
  readonly selectedOption = model<T | null>(null);
  readonly optionSelected = output<T>();

  readonly filteredOptions = computed(() => {
    const raw = this.query();
    const opts = this.options();
    const fn = this.filterFn();

    if (fn) {
      return fn(opts, raw);
    }

    const q = raw.toLowerCase();
    if (!q) {
      return opts;
    }

    return opts.filter(opt => {
      const label = this.displayWith()(opt);
      return label.toLowerCase().includes(q);
    });
  });

  protected onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.query.set(input.value);
  }

  protected onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value as T;
    this.selectedOption.set(value);
    this.markAsChanged(value);
    this.markAsTouched();
    this.optionSelected.emit(value);
  }

  protected onOpened(): void {
    this.panelOpen.set(true);
  }

  protected onClosed(): void {
    this.panelOpen.set(false);
  }

  override writeValue(value: T | undefined): void {
    super.writeValue(value);
    this.selectedOption.set(value ?? null);
  }

  protected compareFn = (a: T, b: T): boolean => {
    const cmp = this.compareWith();
    return cmp ? cmp(a, b) : a === b;
  };

  protected displayFn = (value: T): string => {
    return this.displayWith()(value);
  };

  protected trackByOption(index: number, option: T): T {
    return option;
  }
}
