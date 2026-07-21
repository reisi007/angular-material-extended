import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialBottomSheetBasic } from './bottom-sheet/material-bottom-sheet-basic';

@Component({
  selector: 'rui-material-bottom-sheet',
  standalone: true,
  imports: [MaterialBottomSheetBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Bottom Sheet</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">MatBottomSheet displays contextual information as a panel anchored to the bottom of the screen.</p>
      </div>

      <rui-material-bottom-sheet-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialBottomSheet {}
