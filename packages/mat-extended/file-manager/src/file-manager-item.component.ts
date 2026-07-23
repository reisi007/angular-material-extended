import { Component, input, output, computed, ChangeDetectionStrategy, inject, effect, untracked } from '@angular/core';
import { DragDropModule, CDK_DROP_LIST } from '@angular/cdk/drag-drop';
import { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';
import { formatSize } from '@all-the.rest/mat-extended/file-upload';

@Component({
  selector: 'rui-file-manager-item',
  standalone: true,
  imports: [DragDropModule],
  styleUrl: './file-manager-item.component.scss',
  viewProviders: [
    {
      provide: CDK_DROP_LIST,
      useFactory: () => inject(CDK_DROP_LIST, { optional: true, skipSelf: true }),
    },
  ],
  template: `
    <div class="rui-file-manager-item__row" role="listitem" cdkDrag [cdkDragDisabled]="!sortable()" [cdkDragStartDelay]="dragStartDelay()">
      @if (sortable()) {
        <div class="rui-file-manager-item__sort">
          <div class="rui-file-manager-item__sort-buttons">
            <button type="button" class="rui-file-manager-item__sort-btn" (pointerdown)="$event.stopPropagation()" (click)="onMoveUp()" aria-label="Move up">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
            <button type="button" class="rui-file-manager-item__sort-btn" (pointerdown)="$event.stopPropagation()" (click)="onMoveDown()" aria-label="Move down">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
          <div class="rui-file-manager-item__drag-handle" cdkDragHandle role="button" aria-label="Drag to reorder" tabindex="0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="8" cy="6" r="2"/><circle cx="16" cy="6" r="2"/>
              <circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/>
              <circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>
            </svg>
          </div>
        </div>
      }
      @if (item().preview) {
        <img [src]="item().preview" class="rui-file-manager-item__preview" [alt]="item().file.name" />
      } @else {
        <div class="rui-file-manager-item__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
      }
      <div class="rui-file-manager-item__info">
        @if (editable() && editingItemId() === item().id) {
          <div class="rui-file-manager-item__edit-row">
            <input
              (pointerdown)="$event.stopPropagation()"
              class="rui-file-manager-item__edit-input"
              [style.border-color]="editInputValue().trim() === '' ? 'var(--mat-sys-error)' : 'var(--mat-sys-primary)'"
              [value]="editInputValue()"
              (input)="onEditInputChange($event)"
              (keydown.enter)="onConfirmRename()"
              (keydown.escape)="onCancelRename()"
            />
            @if (!editableExtension()) {
              <span class="rui-file-manager-item__edit-ext">{{ fileExtension() }}</span>
            }
            <button type="button"
              (pointerdown)="$event.stopPropagation()"
              (click)="onConfirmRename()"
              class="rui-file-manager-item__confirm-btn"
              aria-label="Confirm rename">
              ✓
            </button>
            <button type="button"
              (pointerdown)="$event.stopPropagation()"
              (click)="onCancelRename()"
              class="rui-file-manager-item__cancel-btn"
              aria-label="Cancel rename">
              ✕
            </button>
          </div>
        } @else {
          <div class="rui-file-manager-item__name-row">
            <span class="rui-file-manager-item__name">{{ fileBaseName() }}</span>
            @if (fileExtension()) {
              <span class="rui-file-manager-item__ext">{{ fileExtension() }}</span>
            }
          </div>
        }
        <span class="rui-file-manager-item__size">{{ formatSize(item().file.size) }}</span>
      </div>
      <div class="rui-file-manager-item__actions">
        @if (editable() && fileManagement() && editingItemId() !== item().id) {
          <button type="button" class="rui-file-manager-item__rename-btn" (pointerdown)="$event.stopPropagation()" (click)="onStartRename()" [attr.aria-label]="'Rename ' + item().file.name">
            ✎
          </button>
        }
        @if (fileManagement() && editingItemId() !== item().id) {
          <button type="button" class="rui-file-manager-item__remove-btn" (pointerdown)="$event.stopPropagation()" (click)="onRemove()" [attr.aria-label]="'Remove ' + item().file.name">
            ✕
          </button>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiFileManagerItem {
  readonly item = input.required<RuiFileItem>();
  readonly sortable = input(false);
  readonly dragStartDelay = input(0);
  readonly editable = input(false);
  readonly editableExtension = input(true);
  readonly fileManagement = input(true);
  readonly editingItemId = input<string | null>(null);
  readonly editInputValue = input('');

  readonly remove = output<void>();
  readonly startRename = output<void>();
  readonly confirmRename = output<void>();
  readonly cancelRename = output<void>();
  readonly editInputChange = output<string>();
  readonly moveUp = output<void>();
  readonly moveDown = output<void>();

  readonly fileName = computed(() => this.item().editName ?? this.item().file.name);

  readonly fileExtension = computed(() => {
    const name = this.fileName();
    const lastDot = name.lastIndexOf('.');
    if (lastDot <= 0) return '';
    return name.slice(lastDot);
  });

  readonly fileBaseName = computed(() => {
    const name = this.fileName();
    const lastDot = name.lastIndexOf('.');
    if (lastDot <= 0) return name;
    return name.slice(0, lastDot);
  });

  readonly formatSize = formatSize;

  constructor() {
    effect(() => {
      if (this.editingItemId() !== this.item().id) return;
      const wantExtension = this.editableExtension();
      untracked(() => {
        const ext = this.fileExtension();
        if (!ext) return;
        const current = this.editInputValue();
        if (wantExtension && !current.endsWith(ext)) {
          this.editInputChange.emit(current + ext);
        } else if (!wantExtension && current.endsWith(ext)) {
          this.editInputChange.emit(current.slice(0, -ext.length));
        }
      });
    });
  }

  onRemove(): void {
    this.remove.emit();
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
