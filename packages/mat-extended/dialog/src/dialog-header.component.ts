import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rui-dialog-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (header() || !disableClose()) {
      <div class="rui-dialog-header">
        @if (header()) {
          <h2 class="rui-dialog-header__title" [id]="id()">{{ header() }}</h2>
        }
        @if (!disableClose()) {
          <div class="rui-dialog-header__spacer"></div>
          <button
            class="rui-dialog-header__close"
            (click)="dismiss.emit()"
            aria-label="Close dialog">&#x2715;</button>
        }
      </div>
    }
  `,
  styleUrl: './dialog-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiDialogHeaderComponent {
  readonly id = input<string>('');
  readonly header = input<string>();
  readonly disableClose = input<boolean>(false);
  readonly dismiss = output<void>();
}
