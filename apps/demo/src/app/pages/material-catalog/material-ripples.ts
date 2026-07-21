import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialRipplesBasic } from './ripples/material-ripples-basic';

@Component({
  selector: 'rui-material-ripples',
  standalone: true,
  imports: [MaterialRipplesBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Ripples</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">matRipple directive adds Material Design ripple feedback to any element.</p>
      </div>

      <rui-material-ripples-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialRipples {}
