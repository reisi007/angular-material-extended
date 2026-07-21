import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialTabsBasic } from './tabs/material-tabs-basic';

@Component({
  selector: 'rui-material-tabs',
  standalone: true,
  imports: [MaterialTabsBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Tabs</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-tab-group with mat-tab including disabled tab state</p>
      </div>

      <rui-material-tabs-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTabs {}
