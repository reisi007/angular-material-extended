import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SnackbarBasic } from './snackbar/material-snackbar-basic';
import { SnackbarAction } from './snackbar/material-snackbar-action';

@Component({
  selector: 'rui-material-snackbar',
  standalone: true,
  imports: [SnackbarBasic, SnackbarAction],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Snackbar</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">MatSnackBar displays brief messages at the bottom of the screen with optional action buttons.</p>
      </div>

      <rui-material-snackbar-basic />
      <rui-material-snackbar-action />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSnackbar {}
