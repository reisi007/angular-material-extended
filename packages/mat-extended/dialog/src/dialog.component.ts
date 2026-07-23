import { Component, ChangeDetectionStrategy, input, output, inject, ElementRef, AfterViewInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FocusTrapFactory, FocusTrap } from '@angular/cdk/a11y';
import { RuiDialogConfig } from './dialog.types';
import { RuiDialogHeaderComponent } from './dialog-header.component';
import { RuiDialogFooterComponent } from './dialog-footer.component';

@Component({
  selector: 'rui-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, RuiDialogHeaderComponent, RuiDialogFooterComponent],
  templateUrl: './dialog.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiDialogComponent implements AfterViewInit {
  private static _nextDialogId = 0;
  private readonly _dialogId = `rui-dialog-${++RuiDialogComponent._nextDialogId}`;

  readonly config = input.required<RuiDialogConfig>();
  readonly dismiss = output<void>();

  readonly headerId = computed(() => `${this._dialogId}-header`);
  readonly contentId = computed(() => `${this._dialogId}-content`);

  readonly dialogSizeClass = computed(() => {
    const size = this.config().size || 'md';
    return `rui-dialog--${size}`;
  });

  private _elementRef = inject(ElementRef);
  private _focusTrapFactory = inject(FocusTrapFactory);
  private _focusTrap: FocusTrap | null = null;

  ngAfterViewInit(): void {
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    this._focusTrap.focusInitialElementWhenReady();
  }
}
