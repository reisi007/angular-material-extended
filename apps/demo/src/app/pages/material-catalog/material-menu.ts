import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MenuBasic } from './menu/material-menu-basic';
import { MenuIcons } from './menu/material-menu-icons';

@Component({
  selector: 'rui-material-menu',
  standalone: true,
  imports: [MenuBasic, MenuIcons],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Menu</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">MatMenu provides a floating panel of selectable options triggered by a button or other element.</p>
      </div>

      <rui-material-menu-basic />
      <rui-material-menu-icons />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialMenu {}
