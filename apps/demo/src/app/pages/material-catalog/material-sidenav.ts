import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialSidenavBasic } from './sidenav/material-sidenav-basic';

@Component({
  selector: 'rui-material-sidenav',
  standalone: true,
  imports: [MaterialSidenavBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Sidenav</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-drawer-container for side navigation layouts.</p>
      </div>

      <rui-material-sidenav-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSidenav {}
