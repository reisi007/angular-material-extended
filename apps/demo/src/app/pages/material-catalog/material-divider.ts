import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialDividerBasic } from './divider/material-divider-basic';
import { MaterialDividerVertical } from './divider/material-divider-vertical';

@Component({
  selector: 'rui-material-divider',
  standalone: true,
  imports: [MaterialDividerBasic, MaterialDividerVertical],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Divider</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-divider for separating sections horizontally or vertically.</p>
      </div>

      <rui-material-divider-basic />
      <rui-material-divider-vertical />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDivider {}
