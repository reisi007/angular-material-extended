import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialFormFieldsBasic } from './form-fields/material-form-fields-basic';
import { MaterialFormFieldsTypes } from './form-fields/material-form-fields-types';

@Component({
  selector: 'rui-material-form-fields',
  standalone: true,
  imports: [MaterialFormFieldsBasic, MaterialFormFieldsTypes],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Form Fields & Inputs</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-form-field with outline and fill appearances, matInput, prefix/suffix icons.</p>
      </div>

      <rui-material-form-fields-basic />
      <rui-material-form-fields-types />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialFormFields {}
