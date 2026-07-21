import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-chips-icon',
  standalone: true,
  imports: [MatChipsModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="chips-icon" class="mb-8">
      <h2 id="chips-icon" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Chips with Icons</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-chip with mat-icon avatar via matChipAvatar.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-chip-set>
          <mat-chip>
            <mat-icon matChipAvatar>home</mat-icon>
            Home
          </mat-chip>
          <mat-chip>
            <mat-icon matChipAvatar>settings</mat-icon>
            Settings
          </mat-chip>
          <mat-chip>
            <mat-icon matChipAvatar>info</mat-icon>
            About
          </mat-chip>
        </mat-chip-set>
      </div>

      <rui-showcase-code
        html="<mat-chip-set>
  <mat-chip>
    <mat-icon matChipAvatar>home</mat-icon>
    Home
  </mat-chip>
  <mat-chip>
    <mat-icon matChipAvatar>settings</mat-icon>
    Settings
  </mat-chip>
  <mat-chip>
    <mat-icon matChipAvatar>info</mat-icon>
    About
  </mat-chip>
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
export class MaterialChipsIcon {}
