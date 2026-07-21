import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialExpansionAccordion } from './expansion/material-expansion-accordion';
import { MaterialExpansionMulti } from './expansion/material-expansion-multi';

@Component({
  selector: 'rui-material-expansion',
  standalone: true,
  imports: [MaterialExpansionAccordion, MaterialExpansionMulti],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Expansion Panel</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-expansion-panel for accordion and multi-panel layouts.</p>
      </div>

      <rui-material-expansion-accordion />
      <rui-material-expansion-multi />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialExpansion {}
