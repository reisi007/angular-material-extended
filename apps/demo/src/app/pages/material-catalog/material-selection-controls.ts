import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialSelectionControlsCheckbox } from './selection-controls/material-selection-controls-checkbox';
import { MaterialSelectionControlsRadio } from './selection-controls/material-selection-controls-radio';
import { MaterialSelectionControlsToggle } from './selection-controls/material-selection-controls-toggle';

@Component({
  selector: 'rui-material-selection-controls',
  standalone: true,
  imports: [MaterialSelectionControlsCheckbox, MaterialSelectionControlsRadio, MaterialSelectionControlsToggle],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Selection Controls</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">Checkbox, Radio Buttons, and Slide Toggles with various states.</p>
      </div>

      <rui-material-selection-controls-checkbox />
      <rui-material-selection-controls-radio />
      <rui-material-selection-controls-toggle />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSelectionControls {}
