import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rui-dialog-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-end items-center gap-2 px-6 py-4 border-t border-[var(--mat-sys-outline-variant)] shrink-0">
      <ng-content select="[ruiDialogActions]"></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiDialogFooterComponent {}
