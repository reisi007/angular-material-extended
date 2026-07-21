import { Component, input, model, output, signal, booleanAttribute, ChangeDetectionStrategy } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { RuiFileItem, RuiUploadHandler } from '@all-the.rest/mat-extended/file-upload';
import { formatSize } from '@all-the.rest/mat-extended/file-upload';
import { RuiFileManagerItem } from './file-manager-item.component';

@Component({
  selector: 'rui-file-manager',
  standalone: true,
  imports: [DragDropModule, RuiFileManagerItem],
  template: `
    @if (files().length > 0) {
      <div class="flex flex-col gap-2"
        cdkDropList
        [cdkDropListDisabled]="!sortable()"
        (cdkDropListDropped)="onDropListDropped($event)">
        @for (item of files(); track item.id) {
          <rui-file-manager-item
            [item]="item"
            [sortable]="sortable()"
            [editable]="editable()"
            [fileManagement]="fileManagement()"
            [editingItemId]="editingItemId()"
            [editInputValue]="editInputValue()"
            (remove)="removeFile(item.id)"
            (cancelUpload)="cancelUpload.emit(item.id)"
            (retry)="retryFile(item.id)"
            (startRename)="startRename(item.id)"
            (confirmRename)="confirmRename(item.id)"
            (cancelRename)="cancelRename()"
            (editInputChange)="editInputValue.set($event)"
          />
        }
      </div>
      @if (fileManagement()) {
        <div class="mt-4 flex justify-center">
          <button type="button"
            class="px-4 py-2 text-xs font-medium border border-[var(--mat-sys-outline)] rounded-full bg-transparent text-[var(--mat-sys-on-surface-variant)] cursor-pointer transition-background-color duration-200 hover:bg-[var(--mat-sys-surface-variant)]"
            (click)="clearAll()">
            Clear all
          </button>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block',
  },
})
export class RuiFileManager {
  readonly files = model<RuiFileItem[]>([]);
  readonly sortable = input<boolean, boolean>(false, { transform: booleanAttribute });
  readonly editable = input<boolean, boolean>(false, { transform: booleanAttribute });
  readonly fileManagement = input<boolean, boolean>(true, { transform: booleanAttribute });
  readonly uploadHandler = input<RuiUploadHandler | undefined>(undefined);

  readonly cancelUpload = output<string>();
  readonly deleteFile = output<RuiFileItem>();
  readonly rename = output<RuiFileItem>();

  readonly editingItemId = signal<string | null>(null);
  readonly editInputValue = signal('');

  private abortControllers = new Map<string, AbortController>();

  removeFile(id: string): void {
    const currentFiles = this.files();
    const item = currentFiles.find(f => f.id === id);
    if (item?.preview) URL.revokeObjectURL(item.preview);
    const updated = currentFiles.filter(f => f.id !== id);
    this.files.set(updated);
    if (item) this.deleteFile.emit(item);
  }

  clearAll(): void {
    for (const item of this.files()) {
      if (item.preview) URL.revokeObjectURL(item.preview);
    }
    this.files.set([]);
  }

  async retryFile(id: string): Promise<void> {
    const handler = this.uploadHandler();
    if (!handler) return;
    const item = this.files().find(f => f.id === id);
    if (!item) return;

    this.files.update(files =>
      files.map(f => f.id === id ? { ...f, status: 'uploading' as const, progress: 0, error: undefined } : f),
    );

    const controller = new AbortController();
    this.abortControllers.set(id, controller);

    try {
      await handler(item, controller.signal);
      if (!controller.signal.aborted) {
        this.files.update(files =>
          files.map(f => f.id === id ? { ...f, status: 'done' as const, progress: 100 } : f),
        );
      }
    } catch (e: unknown) {
      if (!controller.signal.aborted) {
        this.files.update(files =>
          files.map(f => f.id === id ? { ...f, status: 'error' as const, error: e instanceof Error ? e.message : 'Upload failed' } : f),
        );
      }
    } finally {
      this.abortControllers.delete(id);
    }
  }

  onDropListDropped(event: CdkDragDrop<RuiFileItem[]>): void {
    const current = [...this.files()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.files.set(current);
  }

  startRename(id: string): void {
    const item = this.files().find(f => f.id === id);
    if (item) {
      this.editingItemId.set(id);
      this.editInputValue.set(item.editName ?? item.file.name);
    }
  }

  confirmRename(id: string): void {
    const newName = this.editInputValue().trim() || this.files().find(f => f.id === id)?.file.name || '';
    this.files.update(files =>
      files.map(f => f.id === id ? { ...f, editName: newName } : f),
    );
    const updated = this.files().find(f => f.id === id);
    if (updated) this.rename.emit(updated);
    this.editingItemId.set(null);
    this.editInputValue.set('');
  }

  cancelRename(): void {
    this.editingItemId.set(null);
    this.editInputValue.set('');
  }

  protected formatSize = formatSize;
}
