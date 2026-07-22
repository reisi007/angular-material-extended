import { Component, input, output, computed, ChangeDetectionStrategy, inject, effect, untracked } from '@angular/core';
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
    <div class="flex items-center gap-3 p-2 px-3 border border-[var(--mat-sys-outline-variant)] rounded-lg bg-[var(--mat-sys-surface-container-low)] transition-shadow duration-200 group" cdkDrag [cdkDragDisabled]="!sortable()" [cdkDragStartDelay]="dragStartDelay()">
      @if (sortable()) {
        <div class="flex items-center gap-0.5 shrink-0">
          <div class="flex flex-col gap-px">
            <button type="button" class="flex items-center justify-center w-4 h-4 border-none bg-transparent text-[var(--mat-sys-on-surface-variant)] cursor-pointer rounded-sm transition-colors duration-150 hover:bg-[var(--mat-sys-surface-variant)] hover:text-[var(--mat-sys-on-surface)]" (pointerdown)="$event.stopPropagation()" (click)="onMoveUp()" aria-label="Move up">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
            <button type="button" class="flex items-center justify-center w-4 h-4 border-none bg-transparent text-[var(--mat-sys-on-surface-variant)] cursor-pointer rounded-sm transition-colors duration-150 hover:bg-[var(--mat-sys-surface-variant)] hover:text-[var(--mat-sys-on-surface)]" (pointerdown)="$event.stopPropagation()" (click)="onMoveDown()" aria-label="Move down">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
          <div class="flex items-center text-[var(--mat-sys-on-surface-variant)] opacity-60 group-hover:opacity-100 transition-opacity duration-200 cursor-grab active:cursor-grabbing" cdkDragHandle>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="8" cy="6" r="2"/><circle cx="16" cy="6" r="2"/>
              <circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/>
              <circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>
            </svg>
          </div>
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
          <div class="flex items-center gap-1">
            <input
              (pointerdown)="$event.stopPropagation()"
              class="text-sm text-[var(--mat-sys-on-surface)] bg-[var(--mat-sys-surface-container-high)] border rounded p-0.5 px-1.5 outline-none w-full box-border"
              [style.border-color]="editInputValue().trim() === '' ? 'var(--mat-sys-error)' : 'var(--mat-sys-primary)'"
              [value]="editInputValue()"
              (input)="onEditInputChange($event)"
              (keydown.enter)="onConfirmRename()"
              (keydown.escape)="onCancelRename()"
            />
            @if (!editableExtension()) {
              <span class="text-sm text-[var(--mat-sys-on-surface-variant)] shrink-0 whitespace-nowrap">{{ fileExtension() }}</span>
            }
            <button type="button"
              (pointerdown)="$event.stopPropagation()"
              (click)="onConfirmRename()"
              class="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[var(--mat-sys-primary)] cursor-pointer rounded-full text-base transition-[background-color,color] duration-200 shrink-0 hover:bg-[var(--mat-sys-primary-container)]"
              aria-label="Confirm rename">
              ✓
            </button>
            <button type="button"
              (pointerdown)="$event.stopPropagation()"
              (click)="onCancelRename()"
              class="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[var(--mat-sys-error)] cursor-pointer rounded-full text-base transition-[background-color,color] duration-200 shrink-0 hover:bg-[var(--mat-sys-error-container)]"
              aria-label="Cancel rename">
              ✕
            </button>
          </div>
        } @else {
          <div class="flex items-center gap-1 min-w-0">
            <span class="text-sm text-[var(--mat-sys-on-surface)] truncate">{{ fileBaseName() }}</span>
            @if (fileExtension()) {
              <span class="shrink-0 text-xs font-medium text-[var(--mat-sys-on-surface-variant)] bg-[var(--mat-sys-surface-container-high)] rounded px-1.5 py-px whitespace-nowrap">{{ fileExtension() }}</span>
            }
          </div>
        }
        <span class="text-xs text-[var(--mat-sys-on-surface-variant)]">{{ formatSize(item().file.size) }}</span>
      </div>
      <div class="flex items-center gap-2 shrink-0 justify-end">
        @if (editable() && fileManagement() && editingItemId() !== item().id) {
          <button type="button" class="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[var(--mat-sys-on-surface-variant)] cursor-pointer rounded-full text-sm transition-[background-color,color] duration-200 shrink-0 hover:bg-[var(--mat-sys-surface-variant)] hover:text-[var(--mat-sys-on-surface)]" (pointerdown)="$event.stopPropagation()" (click)="onStartRename()" [attr.aria-label]="'Rename ' + item().file.name">
            ✎
          </button>
        }
        @if (fileManagement() && editingItemId() !== item().id) {
          <button type="button" class="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[var(--mat-sys-on-surface-variant)] cursor-pointer rounded-full text-sm transition-[background-color,color] duration-200 shrink-0 hover:bg-[var(--mat-sys-error-container)] hover:text-[var(--mat-sys-error)]" (pointerdown)="$event.stopPropagation()" (click)="onRemove()" [attr.aria-label]="'Remove ' + item().file.name">
            ✕
          </button>
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
