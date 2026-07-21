import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialSelectSingle } from './select-slider/material-select-single';
import { MaterialSelectMulti } from './select-slider/material-select-multi';
import { MaterialSliderBasic } from './select-slider/material-slider-basic';

@Component({
  selector: 'rui-material-select-slider',
  standalone: true,
  imports: [MaterialSelectSingle, MaterialSelectMulti, MaterialSliderBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Select & Slider</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-select with single and multi selection, mat-slider with thumb value display.</p>
      </div>

      <rui-material-select-single />
      <rui-material-select-multi />
      <rui-material-slider-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSelectSlider {}
