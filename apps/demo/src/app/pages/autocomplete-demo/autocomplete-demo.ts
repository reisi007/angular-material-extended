import { Component, ChangeDetectionStrategy, signal, type WritableSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ShowcaseCode } from '../../shared/showcase-code';
import { RuiAutocomplete } from '@all-the.rest/mat-extended/autocomplete';

@Component({
  selector: 'rui-autocomplete-demo',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatCardModule,
    ShowcaseCode,
    RuiAutocomplete,
  ],
  template: `
<div class="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
  <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Autocomplete</h1>
  <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
    Standalone autocomplete with built-in filtering, signal API, and form integration.
  </p>

  <section>
    <h2 id="signal-forms" class="!text-xl !font-semibold mb-1">Signal Forms</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Using <code>[(selectedOption)]</code> with a <code>signal</code>.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-autocomplete
          label="Select a fruit"
          placeholder="Type to filter..."
          [options]="fruits"
          [(selectedOption)]="selectedFruit"
        />
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
          Selected: {{ selectedFruit() | json }}
        </p>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="signalHtmlCode" [ts]="signalTsCode" />
  </section>

  <section>
    <h2 id="reactive-forms" class="!text-xl !font-semibold mb-1">Reactive Forms</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Using <code>[formControl]</code> with a <code>FormControl</code>.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-autocomplete
          label="Select a state"
          placeholder="Start typing..."
          [options]="states"
          [formControl]="reactiveControl"
        />
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
          Selected: {{ reactiveControl.value | json }}
        </p>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="reactiveHtmlCode" [ts]="reactiveTsCode" />
  </section>

  <section>
    <h2 id="template-driven-forms" class="!text-xl !font-semibold mb-1">Template-driven Forms</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Using <code>[(ngModel)]</code> with the autocomplete.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-autocomplete
          label="Select a country"
          placeholder="Search countries..."
          [options]="countries"
          [(ngModel)]="ngModelCountry"
        />
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
          Selected: {{ ngModelCountry | json }}
        </p>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="templateHtmlCode" [ts]="templateTsCode" />
  </section>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteDemo {
  readonly fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
  readonly states = ['California', 'Colorado', 'Florida', 'New York', 'Texas', 'Washington'];
  readonly countries = ['Austria', 'Brazil', 'Canada', 'Denmark', 'Germany', 'Japan', 'Switzerland'];

  readonly selectedFruit: WritableSignal<string | null> = signal<string | null>(null);
  readonly reactiveControl = new FormControl<string | null>(null);
  ngModelCountry: string | null = null;

  protected signalHtmlCode = [
    `<rui-autocomplete`,
    `  label="Select a fruit"`,
    `  placeholder="Type to filter..."`,
    `  [options]="fruits"`,
    `  [(selectedOption)]="selectedFruit"`,
    `/>`,
  ].join('\n');

  protected signalTsCode = [
    `import { signal } from '@angular/core';`,
    `import { RuiAutocomplete } from '@all-the.rest/mat-extended/autocomplete';`,
    ``,
    `readonly fruits = ['Apple', 'Banana', 'Cherry'];`,
    `readonly selectedFruit = signal<string | null>(null);`,
  ].join('\n');

  protected reactiveHtmlCode = [
    `<rui-autocomplete`,
    `  label="Select a state"`,
    `  placeholder="Start typing..."`,
    `  [options]="states"`,
    `  [formControl]="reactiveControl"`,
    `/>`,
  ].join('\n');

  protected reactiveTsCode = [
    `import { FormControl } from '@angular/forms';`,
    `import { RuiAutocomplete } from '@all-the.rest/mat-extended/autocomplete';`,
    ``,
    `readonly states = ['California', 'Colorado', 'Florida'];`,
    `readonly reactiveControl = new FormControl<string | null>(null);`,
  ].join('\n');

  protected templateHtmlCode = [
    `<rui-autocomplete`,
    `  label="Select a country"`,
    `  placeholder="Search countries..."`,
    `  [options]="countries"`,
    `  [(ngModel)]="ngModelCountry"`,
    `/>`,
  ].join('\n');

  protected templateTsCode = [
    `import { FormsModule } from '@angular/forms';`,
    `import { RuiAutocomplete } from '@all-the.rest/mat-extended/autocomplete';`,
    ``,
    `ngModelCountry: string | null = null;`,
  ].join('\n');
}
