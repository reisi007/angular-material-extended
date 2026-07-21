import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialToolbarBasic } from './toolbar/material-toolbar-basic';
import { MaterialToolbarMultiRow } from './toolbar/material-toolbar-multirow';

@Component({
  selector: 'rui-material-toolbar',
  standalone: true,
  imports: [MaterialToolbarBasic, MaterialToolbarMultiRow],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Toolbar</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-toolbar for app headers and multi-row layouts.</p>
      </div>

      <rui-material-toolbar-basic />
      <rui-material-toolbar-multi-row />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialToolbar {}
