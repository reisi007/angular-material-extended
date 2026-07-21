import { Component, ChangeDetectionStrategy, input, output, inject, ElementRef, AfterViewInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FocusTrapFactory, FocusTrap } from '@angular/cdk/a11y';
import { RuiDialogConfig } from './dialog.types';

@Component({
  selector: 'rui-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiDialogComponent implements AfterViewInit {
  readonly config = input.required<RuiDialogConfig>();
  readonly dismiss = output<void>();

  readonly dialogClasses = computed(() => {
    const base = 'flex flex-col bg-[var(--mat-sys-surface-container-high)] rounded-xl shadow-lg max-h-[90vh] overflow-hidden';
    const size = this.config().size || 'md';
    switch (size) {
      case 'sm': return `${base} w-80`;
      case 'md': return `${base} w-96`;
      case 'lg': return `${base} w-[640px]`;
      case 'xl': return `${base} w-[800px]`;
      case 'fullscreen': return `${base} w-screen h-screen max-h-screen rounded-none`;
      default: return `${base} w-96`;
    }
  });

  private _elementRef = inject(ElementRef);
  private _focusTrapFactory = inject(FocusTrapFactory);
  private _focusTrap: FocusTrap | null = null;

  ngAfterViewInit(): void {
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    this._focusTrap.focusInitialElementWhenReady();
  }
}
