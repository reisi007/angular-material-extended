import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-progress-spinner-showcase',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="progress-spinner" class="mb-8">
      <h2 id="progress-spinner" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Progress Spinner</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-spinner in different sizes.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-6 items-center">
        <div>
          <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-2">Default</p>
          <mat-spinner diameter="32"></mat-spinner>
        </div>
        <div>
          <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-2">Small</p>
          <mat-spinner diameter="20"></mat-spinner>
        </div>
      </div>

      <rui-showcase-code
        html="<mat-spinner diameter=&quot;32&quot;></mat-spinner>
<mat-spinner diameter=&quot;20&quot;></mat-spinner>"
        ts="import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// In component imports:
imports: [MatProgressSpinnerModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialProgressSpinnerShowcase {}
