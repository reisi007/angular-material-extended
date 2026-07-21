import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-progress-bar-showcase',
  standalone: true,
  imports: [MatProgressBarModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="progress-bar" class="mb-8">
      <h2 id="progress-bar" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Progress Bar</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-progress-bar in determinate and indeterminate modes.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 space-y-4">
        <div>
          <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-2">Determinate (65%)</p>
          <mat-progress-bar mode="determinate" [value]="65"></mat-progress-bar>
        </div>
        <div>
          <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-2">Indeterminate</p>
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        </div>
      </div>

      <rui-showcase-code
        html="<mat-progress-bar mode=&quot;determinate&quot; [value]=&quot;65&quot;></mat-progress-bar>
<mat-progress-bar mode=&quot;indeterminate&quot;></mat-progress-bar>"
        ts="import { MatProgressBarModule } from '@angular/material/progress-bar';

// In component imports:
imports: [MatProgressBarModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialProgressBarShowcase {}
