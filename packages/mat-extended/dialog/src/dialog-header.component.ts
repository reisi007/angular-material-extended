import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rui-dialog-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (header() || !disableClose()) {
      <div class="flex items-center px-6 py-4 border-b border-[var(--mat-sys-outline-variant)] shrink-0">
        @if (header()) {
          <h2 class="m-0 text-lg font-medium text-[var(--mat-sys-on-surface)]">{{ header() }}</h2>
        }
        @if (!disableClose()) {
          <div class="flex-1"></div>
          <button
            class="flex items-center justify-center w-8 h-8 border-none bg-transparent cursor-pointer text-[var(--mat-sys-on-surface-variant)] rounded-full text-base hover:bg-[var(--mat-sys-surface-variant)]"
            (click)="dismiss.emit()"
            aria-label="Close dialog">&#x2715;</button>
        }
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiDialogHeaderComponent {
  readonly header = input<string>();
  readonly disableClose = input<boolean>(false);
  readonly dismiss = output<void>();
}
