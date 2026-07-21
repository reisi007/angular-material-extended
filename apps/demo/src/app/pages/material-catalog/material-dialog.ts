import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogBasic } from './dialog/material-dialog-basic';
import { DialogTemplate } from './dialog/material-dialog-template';

@Component({
  selector: 'rui-material-dialog',
  standalone: true,
  imports: [DialogBasic, DialogTemplate],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Dialog</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">MatDialog provides a configurable dialog overlay for displaying content in a modal window.</p>
      </div>

      <rui-material-dialog-basic />
      <rui-material-dialog-template />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDialog {}
