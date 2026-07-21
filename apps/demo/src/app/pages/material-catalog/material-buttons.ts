import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialButtonsBasic } from './buttons/material-buttons-basic';
import { MaterialButtonsFab } from './buttons/material-buttons-fab';
import { MaterialButtonsIcon } from './buttons/material-buttons-icon';

@Component({
  selector: 'rui-material-buttons',
  standalone: true,
  imports: [MaterialButtonsBasic, MaterialButtonsFab, MaterialButtonsIcon],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Buttons</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">All mat-button variants: basic, raised, stroked, flat, FAB, mini-FAB, and icon buttons.</p>
      </div>

      <rui-material-buttons-basic />
      <rui-material-buttons-fab />
      <rui-material-buttons-icon />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialButtons {}
