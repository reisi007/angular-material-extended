import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialButtonToggleSingle } from './button-toggle/material-button-toggle-single';
import { MaterialButtonToggleMulti } from './button-toggle/material-button-toggle-multi';

@Component({
  selector: 'rui-material-button-toggle',
  standalone: true,
  imports: [MaterialButtonToggleSingle, MaterialButtonToggleMulti],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Button Toggle</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-button-toggle-group for single and multi selection.</p>
      </div>

      <rui-material-button-toggle-single />
      <rui-material-button-toggle-multi />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialButtonToggle {}
