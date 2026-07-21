import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialListBasic } from './list/material-list-basic';
import { MaterialListMultiline } from './list/material-list-multiline';

@Component({
  selector: 'rui-material-list',
  standalone: true,
  imports: [MaterialListBasic, MaterialListMultiline],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">List</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-list for displaying rows of items with icons, titles, and descriptions.</p>
      </div>

      <rui-material-list-basic />
      <rui-material-list-multiline />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialList {}
