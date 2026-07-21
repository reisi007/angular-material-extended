import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RuiMenuButton } from '@all-the.rest/mat-extended/menu';
import type { RuiMenuItem } from '@all-the.rest/mat-extended/menu';

@Component({
  selector: 'rui-menu-demo',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    RuiMenuButton,
  ],
  template: `
    <div class="max-w-4xl mx-auto space-y-8 p-4">
      <h1 class="text-2xl font-bold">Menu / Hamburger</h1>

      <mat-card>
        <mat-card-header><mat-card-title>Hamburger Menu</mat-card-title></mat-card-header>
        <mat-card-content>
          <rui-menu-button [items]="menuItems" />
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header><mat-card-title>Menu with Icons</mat-card-title></mat-card-header>
        <mat-card-content>
          <rui-menu-button [items]="iconMenuItems" />
        </mat-card-content>
      </mat-card>

      <mat-card>
        <mat-card-header><mat-card-title>Menu with Separator and Disabled Items</mat-card-title></mat-card-header>
        <mat-card-content>
          <rui-menu-button [items]="advancedMenuItems" />
        </mat-card-content>
      </mat-card>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDemo {
  menuItems: RuiMenuItem[] = [
    { label: 'Profile', handler: () => alert('Profile') },
    { label: 'Settings', handler: () => alert('Settings') },
    { separator: true },
    { label: 'Help', handler: () => alert('Help') },
    { label: 'Logout', handler: () => alert('Logout') },
  ];

  iconMenuItems: RuiMenuItem[] = [
    { label: 'Edit', icon: '✎', handler: () => alert('Edit') },
    { label: 'Copy', icon: '📋', handler: () => alert('Copy') },
    { label: 'Delete', icon: '🗑', handler: () => alert('Delete') },
  ];

  advancedMenuItems: RuiMenuItem[] = [
    { label: 'New File', icon: '📄', handler: () => alert('New File') },
    { label: 'Open', icon: '📁', handler: () => alert('Open') },
    { separator: true },
    { label: 'Save', icon: '💾', handler: () => alert('Save') },
    { label: 'Save As...', icon: '💿', handler: () => alert('Save As...'), disabled: true },
    { separator: true },
    { label: 'Export', icon: '📤', children: [{ label: 'PDF' }, { label: 'CSV' }] },
    { label: 'Print', icon: '🖨', handler: () => alert('Print') },
  ];
}
