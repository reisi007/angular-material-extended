import { Component, input, model, output, signal, booleanAttribute, ChangeDetectionStrategy } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';
import { RuiFileManagerItem } from './file-manager-item.component';

@Component({
  selector: 'rui-file-manager',
  standalone: true,
  imports: [DragDropModule, RuiFileManagerItem],
  styleUrl: './file-manager.component.scss',
  template: `
    @if (files().length > 0) {
      <div class="rui-file-manager__list"
        role="list"
        cdkDropList
        [cdkDropListDisabled]="!sortable()"
        [cdkDropListOrientation]="'vertical'"
        (cdkDropListDropped)="onDropListDropped($event)">
        @for (item of files(); track item.id; let idx = $index) {
          <rui-file-manager-item
            [item]="item"
            [sortable]="sortable()"
            [dragStartDelay]="dragStartDelay()"
            [editable]="editable()"
            [editableExtension]="editableExtension()"
            [fileManagement]="fileManagement()"
            [editingItemId]="editingItemId()"
            [editInputValue]="editInputValue()"
            (remove)="removeFile(item.id)"
            (startRename)="startRename(item.id)"
            (confirmRename)="confirmRename(item.id)"
            (cancelRename)="cancelRename()"
            (editInputChange)="editInputValue.set($event)"
            (moveUp)="onItemMoveUp(idx)"
            (moveDown)="onItemMoveDown(idx)"
          />
        }
      </div>
      @if (fileManagement()) {
        <div class="rui-file-manager__actions">
          <button type="button"
            class="rui-file-manager__clear-btn"
            (click)="clearAll()">
            Clear all
          </button>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiFileManager {
  readonly files = model<RuiFileItem[]>([]);
  readonly sortable = input<boolean, boolean>(false, { transform: booleanAttribute });
  readonly editable = input<boolean, boolean>(false, { transform: booleanAttribute });
  readonly editableExtension = input<boolean, boolean>(true, { transform: booleanAttribute });
  readonly dragStartDelay = input(0);
  readonly fileManagement = input<boolean, boolean>(true, { transform: booleanAttribute });

  readonly deleteFile = output<RuiFileItem>();
  readonly rename = output<RuiFileItem>();

  readonly editingItemId = signal<string | null>(null);
  readonly editInputValue = signal('');

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

  onDropListDropped(event: CdkDragDrop<RuiFileItem[]>): void {
    if (event.previousIndex === event.currentIndex) return;
    const current = [...this.files()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.files.set(current);
  }

  onItemMoveUp(index: number): void {
    if (index <= 0) return;
    const current = [...this.files()];
    const temp = current[index];
    const prev = current[index - 1];
    if (temp === undefined || prev === undefined) return;
    current[index] = prev;
    current[index - 1] = temp;
    this.files.set(current);
  }

  onItemMoveDown(index: number): void {
    const current = [...this.files()];
    if (index >= current.length - 1) return;
    const temp = current[index];
    const next = current[index + 1];
    if (temp === undefined || next === undefined) return;
    current[index] = next;
    current[index + 1] = temp;
    this.files.set(current);
  }

  startRename(id: string): void {
    const item = this.files().find(f => f.id === id);
    if (!item) return;
    this.editingItemId.set(id);
    const fullName = item.editName ?? item.file.name;
    if (this.editableExtension()) {
      this.editInputValue.set(fullName);
    } else {
      const lastDot = fullName.lastIndexOf('.');
      this.editInputValue.set(lastDot > 0 ? fullName.slice(0, lastDot) : fullName);
    }
  }

  confirmRename(id: string): void {
    const item = this.files().find(f => f.id === id);
    if (!item) return;

    const newName = this.editInputValue().trim();

    if (!newName) return;

    const currentName = item.editName ?? item.file.name;

    let finalName = newName;
    if (!this.editableExtension()) {
      const lastDot = currentName.lastIndexOf('.');
      if (lastDot > 0) {
        finalName = newName + currentName.slice(lastDot);
      }
    }

    if (finalName === currentName) {
      this.cancelRename();
      return;
    }

    this.files.update(files =>
      files.map(f => f.id === id ? { ...f, editName: finalName } : f),
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
}
