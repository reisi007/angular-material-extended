import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-divider-vertical',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="divider-vertical" class="mb-8">
      <h2 id="divider-vertical" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Vertical Divider</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-divider with [vertical]="true" separates items in a flex row.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <div class="flex items-center gap-3">
          <button mat-icon-button aria-label="Favorite"><mat-icon>favorite</mat-icon></button>
          <mat-divider [vertical]="true" class="h-6"></mat-divider>
          <button mat-icon-button aria-label="Share"><mat-icon>share</mat-icon></button>
          <mat-divider [vertical]="true" class="h-6"></mat-divider>
          <button mat-icon-button aria-label="Delete"><mat-icon>delete</mat-icon></button>
        </div>
      </div>

      <rui-showcase-code
        html='<div class="flex items-center gap-3">
  <button mat-icon-button><mat-icon>favorite</mat-icon></button>
  <mat-divider [vertical]="true" class="h-6"></mat-divider>
  <button mat-icon-button><mat-icon>share</mat-icon></button>
  <mat-divider [vertical]="true" class="h-6"></mat-divider>
  <button mat-icon-button><mat-icon>delete</mat-icon></button>
</div>'
        ts="import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatDividerModule, MatButtonModule, MatIconModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDividerVertical {}
