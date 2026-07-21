import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialChipsBasic } from './chips/material-chips-basic';
import { MaterialChipsIcon } from './chips/material-chips-icon';

@Component({
  selector: 'rui-material-chips',
  standalone: true,
  imports: [MaterialChipsBasic, MaterialChipsIcon],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Chips</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-chip-set, mat-chip with and without icons, disabled state</p>
      </div>

      <rui-material-chips-basic />
      <rui-material-chips-icon />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialChips {}
