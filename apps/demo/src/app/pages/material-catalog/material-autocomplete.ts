import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialAutocompleteBasic } from './autocomplete/material-autocomplete-basic';
import { MaterialAutocompleteFiltered } from './autocomplete/material-autocomplete-filtered';

@Component({
  selector: 'rui-material-autocomplete',
  standalone: true,
  imports: [MaterialAutocompleteBasic, MaterialAutocompleteFiltered],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Autocomplete</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-autocomplete with simple options and reactive filtering.</p>
      </div>

      <rui-material-autocomplete-basic />
      <rui-material-autocomplete-filtered />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialAutocomplete {}
