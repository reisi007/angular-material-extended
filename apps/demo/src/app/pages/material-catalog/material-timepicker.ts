import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialTimepickerBasic } from './timepicker/material-timepicker-basic';

@Component({
  selector: 'rui-material-timepicker',
  standalone: true,
  imports: [MaterialTimepickerBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Timepicker</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">Native time input styled with mat-form-field.</p>
      </div>

      <rui-material-timepicker-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTimepicker {}
