import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-menu-icons',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, MatDividerModule, ShowcaseCode],
  template: `
    <section id="menu-icons" class="mb-8">
      <h2 id="menu-icons" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Menu with Icons</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">Menu items with leading icons for better visual recognition.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-2 flex-wrap items-center">
        <button mat-raised-button color="accent" [matMenuTriggerFor]="iconMenu">Actions</button>
        <mat-menu #iconMenu="matMenu">
          <button mat-menu-item>
            <mat-icon>folder_open</mat-icon>
            <span>Folder</span>
          </button>
          <button mat-menu-item>
            <mat-icon>share</mat-icon>
            <span>Share</span>
          </button>
          <button mat-menu-item>
            <mat-icon>drive_file_move</mat-icon>
            <span>Move</span>
          </button>
          <mat-divider></mat-divider>
          <button mat-menu-item class="text-[var(--mat-sys-error)]">
            <mat-icon color="warn">delete</mat-icon>
            <span>Delete</span>
          </button>
        </mat-menu>
      </div>

      <rui-showcase-code
        html="<button mat-raised-button color=&quot;accent&quot; [matMenuTriggerFor]=&quot;iconMenu&quot;>Actions</button>
<mat-menu #iconMenu=&quot;matMenu&quot;>
  <button mat-menu-item>
    <mat-icon>folder_open</mat-icon>
    <span>Folder</span>
  </button>
  <button mat-menu-item>
    <mat-icon>share</mat-icon>
    <span>Share</span>
  </button>
  <button mat-menu-item>
    <mat-icon>drive_file_move</mat-icon>
    <span>Move</span>
  </button>
  <mat-divider></mat-divider>
  <button mat-menu-item>
    <mat-icon>delete</mat-icon>
    <span>Delete</span>
  </button>
</mat-menu>"
        ts="import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports: [MatMenuModule, MatButtonModule, MatIconModule]"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuIcons {}
