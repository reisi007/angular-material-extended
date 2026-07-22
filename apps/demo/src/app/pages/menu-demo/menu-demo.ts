import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RuiMenuButton } from '@all-the.rest/mat-extended/menu';
import type { RuiMenuItem } from '@all-the.rest/mat-extended/menu';
import { ShowcaseCode } from '../../shared/showcase-code';

@Component({
  selector: 'rui-menu-demo',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    RuiMenuButton,
    ShowcaseCode,
  ],
  template: `
<div class="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
  <h1 class="font-bold">Menu / Hamburger</h1>

  <section>
    <h2 id="menu-basic" class="!text-xl !font-semibold mb-1">Basic Hamburger Menu</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-menu-button [items]="menuItems" />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="basicHtml" [ts]="basicTs" />
  </section>

  <section>
    <h2 id="menu-icons" class="!text-xl !font-semibold mb-1">Menu with Icons</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-menu-button [items]="iconMenuItems" />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="iconHtml" [ts]="iconTs" />
  </section>

  <section>
    <h2 id="menu-disabled" class="!text-xl !font-semibold mb-1">Menu with Disabled Items</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-menu-button [items]="disabledMenuItems" />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="disabledHtml" [ts]="disabledTs" />
  </section>

  <section>
    <h2 id="menu-divider" class="!text-xl !font-semibold mb-1">Menu with Divider / Separator</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-menu-button [items]="advancedMenuItems" />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="advancedHtml" [ts]="advancedTs" />
  </section>

  <section>
    <h2 id="menu-router-links" class="!text-xl !font-semibold mb-1">Menu with Router Links</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-menu-button [items]="routerMenuItems" />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="routerHtml" [ts]="routerTs" />
  </section>
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
    { label: 'Edit', icon: 'edit', handler: () => alert('Edit') },
    { label: 'Copy', icon: 'content_copy', handler: () => alert('Copy') },
    { label: 'Delete', icon: 'delete', handler: () => alert('Delete') },
  ];

  disabledMenuItems: RuiMenuItem[] = [
    { label: 'New File', icon: 'description', handler: () => alert('New File') },
    { label: 'Open', icon: 'folder_open', handler: () => alert('Open') },
    { separator: true },
    { label: 'Save', icon: 'save', handler: () => alert('Save') },
    { label: 'Save As...', icon: 'save_as', handler: () => alert('Save As...'), disabled: true },
  ];

   advancedMenuItems: RuiMenuItem[] = [
    { label: 'New File', icon: 'description', handler: () => alert('New File') },
    { label: 'Open', icon: 'folder_open', handler: () => alert('Open') },
    { separator: true },
    { label: 'Save', icon: 'save', handler: () => alert('Save') },
    { label: 'Save As...', icon: 'save_as', handler: () => alert('Save As...'), disabled: true },
    { separator: true },
    { label: 'Export', icon: 'file_upload', children: [
      { label: 'PDF', handler: () => alert('Export PDF') },
      { label: 'CSV', handler: () => alert('Export CSV') },
    ]},
    { label: 'Print', icon: 'print', handler: () => alert('Print') },
  ];

  routerMenuItems: RuiMenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', routerLink: '/dashboard' },
    { label: 'Settings', icon: 'settings', routerLink: '/settings' },
    { separator: true },
    { label: 'User Profile', icon: 'person', routerLink: ['/users', '123'] },
    { label: 'Logout', icon: 'logout', handler: () => alert('Logout') },
  ];

  protected basicHtml = `<rui-menu-button [items]="menuItems" />`;

  protected basicTs = [
    `import { RuiMenuButton } from '@all-the.rest/mat-extended/menu';`,
    `import type { RuiMenuItem } from '@all-the.rest/mat-extended/menu';`,
    ``,
    `@Component({`,
    `  imports: [RuiMenuButton],`,
    `})`,
    `export class MyComponent {`,
    `  menuItems: RuiMenuItem[] = [`,
    `    { label: 'Profile', handler: () => ... },`,
    `    { label: 'Settings', handler: () => ... },`,
    `    { separator: true },`,
    `    { label: 'Logout', handler: () => ... },`,
    `  ];`,
    `}`,
  ].join('\n');

  protected iconHtml = `<rui-menu-button [items]="iconMenuItems" />`;

  protected iconTs = [
    `import { RuiMenuButton } from '@all-the.rest/mat-extended/menu';`,
    `import type { RuiMenuItem } from '@all-the.rest/mat-extended/menu';`,
    ``,
    `@Component({`,
    `  imports: [RuiMenuButton],`,
    `})`,
    `export class MyComponent {`,
    `  iconMenuItems: RuiMenuItem[] = [`,
    `    { label: 'Edit', icon: 'edit', handler: () => ... },`,
    `    { label: 'Copy', icon: 'content_copy', handler: () => ... },`,
    `    { label: 'Delete', icon: 'delete', handler: () => ... },`,
    `  ];`,
    `}`,
  ].join('\n');

  protected disabledHtml = `<rui-menu-button [items]="disabledMenuItems" />`;

  protected disabledTs = [
    `import { RuiMenuButton } from '@all-the.rest/mat-extended/menu';`,
    `import type { RuiMenuItem } from '@all-the.rest/mat-extended/menu';`,
    ``,
    `@Component({`,
    `  imports: [RuiMenuButton],`,
    `})`,
    `export class MyComponent {`,
    `  disabledMenuItems: RuiMenuItem[] = [`,
    `    { label: 'New File', icon: 'description', handler: () => ... },`,
    `    { label: 'Open', icon: 'folder_open', handler: () => ... },`,
    `    { separator: true },`,
    `    { label: 'Save', icon: 'save', handler: () => ... },`,
    `    { label: 'Save As...', icon: 'save_as', handler: () => ..., disabled: true },`,
    `  ];`,
    `}`,
  ].join('\n');

   protected advancedHtml = `<rui-menu-button [items]="advancedMenuItems" />`;

   protected advancedTs = [
    `import { RuiMenuButton } from '@all-the.rest/mat-extended/menu';`,
    `import type { RuiMenuItem } from '@all-the.rest/mat-extended/menu';`,
    ``,
    `@Component({`,
    `  imports: [RuiMenuButton],`,
    `})`,
    `export class MyComponent {`,
    `  advancedMenuItems: RuiMenuItem[] = [`,
    `    { label: 'New File', icon: 'description', handler: () => ... },`,
    `    { label: 'Open', icon: 'folder_open', handler: () => ... },`,
    `    { separator: true },`,
    `    { label: 'Save', icon: 'save', handler: () => ... },`,
    `    { label: 'Save As...', icon: 'save_as', handler: () => ..., disabled: true },`,
    `    { separator: true },`,
    `    { label: 'Export', icon: 'file_upload', children: [`,
    `      { label: 'PDF', handler: () => ... },`,
    `      { label: 'CSV', handler: () => ... },`,
    `    ]},`,
    `    { label: 'Print', icon: 'print', handler: () => ... },`,
    `  ];`,
    `}`,
  ].join('\n');

  protected routerHtml = `<rui-menu-button [items]="routerMenuItems" />`;

  protected routerTs = [
    `import { RuiMenuButton } from '@all-the.rest/mat-extended/menu';`,
    `import type { RuiMenuItem } from '@all-the.rest/mat-extended/menu';`,
    ``,
    `@Component({`,
    `  imports: [RuiMenuButton],`,
    `})`,
    `export class MyComponent {`,
    `  routerMenuItems: RuiMenuItem[] = [`,
    `    { label: 'Dashboard', icon: 'dashboard', routerLink: '/dashboard' },`,
    `    { label: 'Settings', icon: 'settings', routerLink: '/settings' },`,
    `    { separator: true },`,
    `    { label: 'User Profile', icon: 'person', routerLink: ['/users', '123'] },`,
    `    { label: 'Logout', icon: 'logout', handler: () => ... },`,
    `  ];`,
    `}`,
  ].join('\n');
}
