import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-grid-list-basic',
  standalone: true,
  imports: [MatGridListModule, ShowcaseCode],
  template: `
    <section id="grid-list-basic" class="mb-8">
      <h2 id="grid-list-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Grid List</h2>
      <div class="mb-4 rounded-lg border border-amber-600/30 bg-amber-600/10 p-3 text-sm text-amber-700 dark:text-amber-400">
        <strong>Note:</strong> mat-grid-list is deprecated. CSS Grid is recommended instead.
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-grid-list with 3 columns and 100px row height.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-grid-list cols="3" rowHeight="100px">
          <mat-grid-tile class="bg-[var(--mat-sys-primary-container)] text-[var(--mat-sys-on-primary-container)] font-medium">Tile 1</mat-grid-tile>
          <mat-grid-tile class="bg-[var(--mat-sys-secondary-container)] text-[var(--mat-sys-on-secondary-container)] font-medium">Tile 2</mat-grid-tile>
          <mat-grid-tile class="bg-[var(--mat-sys-tertiary-container)] text-[var(--mat-sys-on-tertiary-container)] font-medium">Tile 3</mat-grid-tile>
          <mat-grid-tile class="bg-[var(--mat-sys-primary-container)] text-[var(--mat-sys-on-primary-container)] font-medium">Tile 4</mat-grid-tile>
          <mat-grid-tile class="bg-[var(--mat-sys-secondary-container)] text-[var(--mat-sys-on-secondary-container)] font-medium">Tile 5</mat-grid-tile>
          <mat-grid-tile class="bg-[var(--mat-sys-tertiary-container)] text-[var(--mat-sys-on-tertiary-container)] font-medium">Tile 6</mat-grid-tile>
        </mat-grid-list>
      </div>

      <rui-showcase-code
        html='<mat-grid-list cols="3" rowHeight="100px">
  <mat-grid-tile>Tile 1</mat-grid-tile>
  <mat-grid-tile>Tile 2</mat-grid-tile>
  <mat-grid-tile>Tile 3</mat-grid-tile>
  <mat-grid-tile>Tile 4</mat-grid-tile>
  <mat-grid-tile>Tile 5</mat-grid-tile>
  <mat-grid-tile>Tile 6</mat-grid-tile>
</mat-grid-list>'
        ts="import { MatGridListModule } from '@angular/material/grid-list';

// In component imports:
imports: [MatGridListModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialGridListBasic {}
