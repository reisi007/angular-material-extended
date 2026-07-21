import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-toolbar-basic',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="toolbar-basic" class="mb-8">
      <h2 id="toolbar-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Toolbar</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-toolbar with menu icon, title, and right-aligned action icons.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-toolbar color="primary" class="rounded">
          <button mat-icon-button aria-label="Menu">
            <mat-icon>menu</mat-icon>
          </button>
          <span class="ml-2">My App</span>
          <span class="flex-1"></span>
          <button mat-icon-button aria-label="Search">
            <mat-icon>search</mat-icon>
          </button>
          <button mat-icon-button aria-label="Account">
            <mat-icon>account_circle</mat-icon>
          </button>
        </mat-toolbar>
      </div>

      <rui-showcase-code
        html='<mat-toolbar color="primary">
  <button mat-icon-button aria-label="Menu">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="flex-1"></span>
  <button mat-icon-button aria-label="Search">
    <mat-icon>search</mat-icon>
  </button>
  <button mat-icon-button aria-label="Account">
    <mat-icon>account_circle</mat-icon>
  </button>
</mat-toolbar>'
        ts="import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatToolbarModule, MatButtonModule, MatIconModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialToolbarBasic {}
