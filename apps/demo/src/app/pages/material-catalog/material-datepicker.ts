import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialDatepickerBasic } from './datepicker/material-datepicker-basic';
import { MaterialDatepickerRange } from './datepicker/material-datepicker-range';

@Component({
  selector: 'rui-material-datepicker',
  standalone: true,
  imports: [MaterialDatepickerBasic, MaterialDatepickerRange],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Datepicker</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-datepicker for single date and range selection.</p>
      </div>

      <rui-material-datepicker-basic />
      <rui-material-datepicker-range />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDatepicker {}
