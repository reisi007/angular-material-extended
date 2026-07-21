import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-toolbar-multi-row',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, ShowcaseCode],
  template: `
    <section id="toolbar-multi-row" class="mb-8">
      <h2 id="toolbar-multi-row" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Multi-Row Toolbar</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">Two stacked mat-toolbar rows: one for branding and actions, one for navigation tabs.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-toolbar color="primary" class="rounded-t">
          <button mat-icon-button aria-label="Menu">
            <mat-icon>menu</mat-icon>
          </button>
          <span class="ml-2">My App</span>
          <span class="flex-1"></span>
          <button mat-icon-button aria-label="Notifications">
            <mat-icon>notifications</mat-icon>
          </button>
          <button mat-icon-button aria-label="Account">
            <mat-icon>account_circle</mat-icon>
          </button>
        </mat-toolbar>
        <mat-toolbar class="rounded-b border-t border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface-container)]">
          <mat-tab-group class="w-full">
            <mat-tab label="Overview"></mat-tab>
            <mat-tab label="Details"></mat-tab>
            <mat-tab label="Settings"></mat-tab>
          </mat-tab-group>
        </mat-toolbar>
      </div>

      <rui-showcase-code
        html='<mat-toolbar color="primary">
  <button mat-icon-button aria-label="Menu">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="flex-1"></span>
  <button mat-icon-button>
    <mat-icon>notifications</mat-icon>
  </button>
  <button mat-icon-button>
    <mat-icon>account_circle</mat-icon>
  </button>
</mat-toolbar>
<mat-toolbar>
  <mat-tab-group class="w-full">
    <mat-tab label="Overview"></mat-tab>
    <mat-tab label="Details"></mat-tab>
    <mat-tab label="Settings"></mat-tab>
  </mat-tab-group>
</mat-toolbar>'
        ts="import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

// In component imports:
imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialToolbarMultiRow {}
