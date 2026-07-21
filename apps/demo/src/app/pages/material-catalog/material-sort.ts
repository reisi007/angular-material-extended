import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialSortBasic } from './sort/material-sort-basic';

@Component({
  selector: 'rui-material-sort',
  standalone: true,
  imports: [MaterialSortBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Sort Header</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-sort-header enables column-based sorting on tables and lists.</p>
      </div>

      <rui-material-sort-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSort {}
