import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-chips-basic',
  standalone: true,
  imports: [MatChipsModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="chips-basic" class="mb-8">
      <h2 id="chips-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Chips</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-chip-set with mat-chip, including disabled state.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <fieldset>
          <legend class="sr-only">Technologies</legend>
          <mat-chip-set>
            <mat-chip>Angular</mat-chip>
            <mat-chip>Material</mat-chip>
            <mat-chip>TypeScript</mat-chip>
            <mat-chip disabled>Deprecated</mat-chip>
          </mat-chip-set>
        </fieldset>
      </div>

      <rui-showcase-code
        html="<mat-chip-set>
  <mat-chip>Angular</mat-chip>
  <mat-chip>Material</mat-chip>
  <mat-chip>TypeScript</mat-chip>
  <mat-chip disabled>Deprecated</mat-chip>
</mat-chip-set>"
        ts="import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatChipsModule, MatIconModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialChipsBasic {}
