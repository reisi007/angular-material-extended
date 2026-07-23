import { Component, input, output, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { DragDropModule, CDK_DROP_LIST } from '@angular/cdk/drag-drop';
import { RuiFileItem } from './file-upload.types';
import { formatSize } from './file-upload-utils';

@Component({
  selector: 'rui-file-upload-item',
  standalone: true,
  imports: [DragDropModule],
  styleUrl: './file-upload-item.component.scss',
  viewProviders: [
    {
      provide: CDK_DROP_LIST,
      useFactory: () => inject(CDK_DROP_LIST, { optional: true, skipSelf: true }),
    },
  ],
  template: `
    <div class="rui-file-upload-item__row" role="listitem" cdkDrag [cdkDragDisabled]="!sortable()" [cdkDragStartDelay]="dragStartDelay()">
      @if (sortable()) {
        <div class="rui-file-upload-item__sort">
          <div class="rui-file-upload-item__sort-buttons">
            <button type="button" class="rui-file-upload-item__sort-btn" (pointerdown)="$event.stopPropagation()" (click)="onMoveUp()" aria-label="Move up">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
            <button type="button" class="rui-file-upload-item__sort-btn" (pointerdown)="$event.stopPropagation()" (click)="onMoveDown()" aria-label="Move down">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
          <div class="rui-file-upload-item__drag-handle" cdkDragHandle>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="8" cy="6" r="2"/><circle cx="16" cy="6" r="2"/>
              <circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/>
              <circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>
            </svg>
          </div>
        </div>
      }
      @if (item().preview) {
        <img [src]="item().preview" class="rui-file-upload-item__preview" [alt]="item().file.name" />
      } @else {
        <div class="rui-file-upload-item__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
      }
      <div class="rui-file-upload-item__info">
        @if (editable() && editingItemId() === item().id) {
          <div class="rui-file-upload-item__edit-row">
            <input
              (pointerdown)="$event.stopPropagation()"
              class="rui-file-upload-item__edit-input"
              [value]="editInputValue()"
              (input)="onEditInputChange($event)"
              (keydown.enter)="onConfirmRename()"
              (keydown.escape)="onCancelRename()"
              (blur)="onConfirmRename()"
            />
            @if (!editableExtension()) {
              <span class="rui-file-upload-item__edit-ext">{{ fileExtension() }}</span>
            }
          </div>
        } @else {
          <div class="rui-file-upload-item__name-row">
            <span class="rui-file-upload-item__name">{{ fileBaseName() }}</span>
            @if (fileExtension()) {
              <span class="rui-file-upload-item__ext">{{ fileExtension() }}</span>
            }
          </div>
        }
        <span class="rui-file-upload-item__size">{{ formatSize(item().file.size) }}</span>
      </div>
      <div class="rui-file-upload-item__actions">
        @if (item().status === 'uploading') {
          <div class="rui-file-upload-item__progress-bar">
            <div
              class="rui-file-upload-item__progress-fill"
              [style.width.%]="item().progress"
              role="progressbar"
              [attr.aria-valuenow]="item().progress"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          @if (fileManagement()) {
            <button type="button" class="rui-file-upload-item__cancel-btn" (pointerdown)="$event.stopPropagation()" (click)="onCancelUpload()" [attr.aria-label]="'Cancel upload for ' + item().file.name">
              ✕
            </button>
          }
        }
        @if (item().status === 'error') {
          @if (item().error) {
            <span class="rui-file-upload-item__error-msg">{{ item().error }}</span>
          }
          @if (fileManagement()) {
            <button type="button" class="rui-file-upload-item__retry-btn" (pointerdown)="$event.stopPropagation()" (click)="onRetry()" [attr.aria-label]="'Retry upload for ' + item().file.name">
              Retry
            </button>
          }
        }
        @if (item().status === 'done') {
          <span class="rui-file-upload-item__checkmark">✓</span>
        }
        @if (item().status === 'selected' || item().status === 'error' || (item().status === 'done' && fileManagement())) {
          @if (editable() && fileManagement() && editingItemId() !== item().id) {
            <button type="button" class="rui-file-upload-item__rename-btn" (pointerdown)="$event.stopPropagation()" (click)="onStartRename()" [attr.aria-label]="'Rename ' + item().file.name">
              ✎
            </button>
          }
          @if (fileManagement() && editingItemId() !== item().id) {
            <button type="button" class="rui-file-upload-item__remove-btn" (pointerdown)="$event.stopPropagation()" (click)="onRemove()" [attr.aria-label]="'Remove ' + item().file.name">
              ✕
            </button>
          }
        }
      </div>
      <div *cdkDragPreview class="rui-file-upload-item__drag-preview">
        @if (item().preview) {
          <img [src]="item().preview" class="rui-file-upload-item__preview" style="width:2rem;height:2rem" alt="" />
        } @else {
          <div class="rui-file-upload-item__icon" style="width:2rem;height:2rem">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
        }
        <span class="rui-file-upload-item__name">{{ fileName() }}</span>
      </div>
      <div *cdkDragPlaceholder class="rui-file-upload-item__drag-placeholder"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiFileUploadItem {
  readonly item = input.required<RuiFileItem>();
  readonly sortable = input(false);
  readonly dragStartDelay = input(100);
  readonly editable = input(false);
  readonly editableExtension = input(true);
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
  readonly moveUp = output<void>();
  readonly moveDown = output<void>();

  protected formatSize = formatSize;

  protected fileName = computed(() => this.item().editName ?? this.item().file.name);

  protected fileExtension = computed(() => {
    const name = this.fileName();
    const lastDot = name.lastIndexOf('.');
    if (lastDot <= 0) return '';
    return name.slice(lastDot);
  });

  protected fileBaseName = computed(() => {
    const name = this.fileName();
    const lastDot = name.lastIndexOf('.');
    if (lastDot <= 0) return name;
    return name.slice(0, lastDot);
  });

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

  onMoveUp(): void {
    this.moveUp.emit();
  }

  onMoveDown(): void {
    this.moveDown.emit();
  }
}
