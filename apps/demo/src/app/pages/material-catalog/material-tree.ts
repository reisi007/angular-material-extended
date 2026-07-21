import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialTreeBasic } from './tree/material-tree-basic';
import { MaterialTreeCheckboxes } from './tree/material-tree-checkboxes';

@Component({
  selector: 'rui-material-tree',
  standalone: true,
  imports: [MaterialTreeBasic, MaterialTreeCheckboxes],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Tree</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-tree for hierarchical data display with expand/collapse and checkboxes.</p>
      </div>

      <rui-material-tree-basic />
      <rui-material-tree-checkboxes />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTree {}
