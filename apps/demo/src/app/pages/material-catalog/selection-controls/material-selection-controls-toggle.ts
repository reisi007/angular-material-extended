import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-selection-controls-toggle',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="selection-controls-toggle" class="mb-8">
      <h2 id="selection-controls-toggle" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Slide Toggle</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-slide-toggle with off, on, and disabled states.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-4 flex-wrap items-center">
        <fieldset>
          <legend class="sr-only">Toggles</legend>
          <mat-slide-toggle>Off</mat-slide-toggle>
          <mat-slide-toggle checked>On</mat-slide-toggle>
          <mat-slide-toggle disabled>Disabled</mat-slide-toggle>
        </fieldset>
      </div>

      <rui-showcase-code
        html="<mat-slide-toggle>Off</mat-slide-toggle>
<mat-slide-toggle checked>On</mat-slide-toggle>
<mat-slide-toggle disabled>Disabled</mat-slide-toggle>"
        ts="import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// In component imports:
imports: [MatSlideToggleModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSelectionControlsToggle {}
