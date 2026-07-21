import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialTooltipBasic } from './tooltip/material-tooltip-basic';
import { MaterialTooltipShowDelay } from './tooltip/material-tooltip-show-delay';

@Component({
  selector: 'rui-material-tooltip',
  standalone: true,
  imports: [MaterialTooltipBasic, MaterialTooltipShowDelay],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Tooltip</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">matTooltip for context-aware hints on hover or focus.</p>
      </div>

      <rui-material-tooltip-basic />
      <rui-material-tooltip-show-delay />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTooltip {}
