import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialIconBasic } from './icon/material-icon-basic';
import { MaterialIconSvg } from './icon/material-icon-svg';

@Component({
  selector: 'rui-material-icon',
  standalone: true,
  imports: [MaterialIconBasic, MaterialIconSvg],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Icons</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-icon with color variants, sizes, and SVG support.</p>
      </div>

      <rui-material-icon-basic />
      <rui-material-icon-svg />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialIcon {}
