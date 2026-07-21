import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialProgressBarShowcase } from './progress/material-progress-bar';
import { MaterialProgressSpinnerShowcase } from './progress/material-progress-spinner';

@Component({
  selector: 'rui-material-progress',
  standalone: true,
  imports: [MaterialProgressBarShowcase, MaterialProgressSpinnerShowcase],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Progress</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-progress-bar (determinate + indeterminate), mat-spinner (various sizes)</p>
      </div>

      <rui-material-progress-bar-showcase />
      <rui-material-progress-spinner-showcase />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialProgress {}
