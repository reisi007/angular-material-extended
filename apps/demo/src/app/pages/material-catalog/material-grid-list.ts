import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialGridListBasic } from './grid-list/material-grid-list-basic';

@Component({
  selector: 'rui-material-grid-list',
  standalone: true,
  imports: [MaterialGridListBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Grid List</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-grid-list (deprecated — use CSS Grid instead).</p>
      </div>

      <rui-material-grid-list-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialGridList {}
