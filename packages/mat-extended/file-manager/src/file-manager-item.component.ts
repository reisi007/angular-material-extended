import { Component, input, output, ChangeDetectionStrategy, inject } from '@angular/core';
import { DragDropModule, CDK_DROP_LIST } from '@angular/cdk/drag-drop';
import { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';
import { formatSize } from '@all-the.rest/mat-extended/file-upload';

@Component({
  selector: 'rui-file-manager-item',
  standalone: true,
  imports: [DragDropModule],
  viewProviders: [
    {
      provide: CDK_DROP_LIST,
      useFactory: () => inject(CDK_DROP_LIST, { optional: true, skipSelf: true }),
    },
  ],
  template: `
    <div class="flex items-center gap-3 p-2 px-3 border border-[var(--mat-sys-outline-variant)] rounded-lg bg-[var(--mat-sys-surface-container-low)] transition-shadow duration-200 group" cdkDrag [cdkDragDisabled]="!sortable()">
      @if (sortable()) {
        <div class="flex items-center cursor-grab text-[var(--mat-sys-on-surface-variant)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 active:cursor-grabbing" cdkDragHandle>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="8" cy="6" r="2"/><circle cx="16" cy="6" r="2"/>
            <circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/>
            <circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>
          </svg>
        </div>
      }
      @if (item().preview) {
        <img [src]="item().preview" class="w-10 h-10 rounded object-cover shrink-0" [alt]="item().file.name" />
      } @else {
        <div class="w-10 h-10 flex items-center justify-center text-[var(--mat-sys-on-surface-variant)] shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
      }
      <div class="flex-1 min-w-0 flex flex-col gap-0.5">
        @if (editable() && editingItemId() === item().id) {
          <input
            class="text-sm text-[var(--mat-sys-on-surface)] bg-[var(--mat-sys-surface-container-high)] border border-[var(--mat-sys-primary)] rounded p-0.5 px-1.5 outline-none w-full box-border"
            [value]="editInputValue()"
            (input)="onEditInputChange($event)"
            (keydown.enter)="onConfirmRename()"
            (keydown.escape)="onCancelRename()"
            (blur)="onConfirmRename()"
          />
        } @else {
          <span class="text-sm text-[var(--mat-sys-on-surface)] truncate">{{ item().editName ?? item().file.name }}</span>
        }
        <span class="text-xs text-[var(--mat-sys-on-surface-variant)]">{{ formatSize(item().file.size) }}</span>
      </div>
      <div class="flex items-center gap-2 min-w-[100px] justify-end">
        @if (item().status === 'uploading') {
          <div class="w-24 h-1 bg-[var(--mat-sys-surface-variant)] rounded overflow-hidden shrink-0">
            <div class="h-full bg-[var(--mat-sys-primary)] rounded transition-[width] duration-300" [style.width.%]="item().progress"></div>
          </div>
          @if (fileManagement()) {
            <button type="button" class="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[var(--mat-sys-error)] cursor-pointer rounded-full text-sm transition-background-color duration-200 shrink-0 hover:bg-[var(--mat-sys-error-container)]" (click)="onCancelUpload()" [attr.aria-label]="'Cancel upload for ' + item().file.name">
              ✕
            </button>
          }
        }
        @if (item().status === 'error') {
          @if (item().error) {
            <span class="text-xs text-[var(--mat-sys-error)] whitespace-nowrap">{{ item().error }}</span>
          }
          @if (fileManagement()) {
            <button type="button" class="px-3 py-1 text-xs font-medium border border-[var(--mat-sys-primary)] rounded-full bg-transparent text-[var(--mat-sys-primary)] cursor-pointer transition-background-color duration-200 shrink-0 whitespace-nowrap hover:bg-[var(--mat-sys-primary-container)]" (click)="onRetry()" [attr.aria-label]="'Retry upload for ' + item().file.name">
              Retry
            </button>
          }
        }
        @if (item().status === 'done') {
          <span class="text-lg text-[var(--mat-sys-primary)] font-bold">✓</span>
        }
        @if (item().status === 'selected' || item().status === 'error' || (item().status === 'done' && fileManagement())) {
          @if (editable() && fileManagement() && editingItemId() !== item().id) {
            <button type="button" class="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[var(--mat-sys-on-surface-variant)] cursor-pointer rounded-full text-sm transition-[background-color,color] duration-200 shrink-0 hover:bg-[var(--mat-sys-surface-variant)] hover:text-[var(--mat-sys-on-surface)]" (click)="onStartRename()" [attr.aria-label]="'Rename ' + item().file.name">
              ✎
            </button>
          }
          @if (fileManagement()) {
            <button type="button" class="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[var(--mat-sys-on-surface-variant)] cursor-pointer rounded-full text-sm transition-[background-color,color] duration-200 shrink-0 hover:bg-[var(--mat-sys-error-container)] hover:text-[var(--mat-sys-error)]" (click)="onRemove()" [attr.aria-label]="'Remove ' + item().file.name">
              ✕
            </button>
          }
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block',
  },
})
export class RuiFileManagerItem {
  readonly item = input.required<RuiFileItem>();
  readonly sortable = input(false);
  readonly editable = input(false);
  readonly fileManagement = input(true);
  readonly editingItemId = input<string | null>(null);
  readonly editInputValue = input('');

  readonly remove = output<void>();
  readonly cancelUpload = output<void>();
  readonly retry = output<void>();
  readonly startRename = output<void>();
  readonly confirmRename = output<void>();
  readonly cancelRename = output<void>();
  readonly editInputChange = output<string>();

  protected formatSize = formatSize;

  onRemove(): void {
    this.remove.emit();
  }

  onCancelUpload(): void {
    this.cancelUpload.emit();
  }

  onRetry(): void {
    this.retry.emit();
  }

  onStartRename(): void {
    this.startRename.emit();
  }

  onConfirmRename(): void {
    this.confirmRename.emit();
  }

  onCancelRename(): void {
    this.cancelRename.emit();
  }

  onEditInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editInputChange.emit(value);
  }
}
