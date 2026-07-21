import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RuiFileUploadItem } from '@all-the.rest/mat-extended/file-upload';
import type { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ShowcaseCode } from '../../shared/showcase-code';

@Component({
  selector: 'rui-file-upload-item-demo',
  standalone: true,
  imports: [
    RuiFileUploadItem, DragDropModule, MatCardModule,
    MatSlideToggleModule, MatButtonModule, ShowcaseCode,
  ],
  template: `
<div class="max-w-4xl mx-auto space-y-8 p-4">
  <h1 class="font-bold">File Management</h1>

  <mat-card>
    <mat-card-header><mat-card-title>Standalone Item States</mat-card-title></mat-card-header>
    <mat-card-content class="flex flex-col gap-2">
      <rui-file-upload-item [item]="selectedItem" />
      <rui-file-upload-item [item]="uploadingItem" />
      <rui-file-upload-item [item]="doneItem" />
      <rui-file-upload-item [item]="errorItem" (retry)="onRetry(errorItem)" />
    </mat-card-content>
  </mat-card>

  <rui-showcase-code [html]="statesHtml" [ts]="statesTs" />

  <h2 id="sortable">Sortable Items</h2>

  <mat-card>
    <mat-card-header><mat-card-title>Drag &amp; Drop Reorder</mat-card-title></mat-card-header>
    <mat-card-content>
      <div class="flex flex-col gap-2" cdkDropList (cdkDropListDropped)="onDrop($event)">
        @for (item of sortableItems(); track item.id; let idx = $index) {
          <rui-file-upload-item
            [item]="item"
            [sortable]="true"
            [dragStartDelay]="200"
            [fileManagement]="false"
            (remove)="removeSortable(item.id)"
            (moveUp)="moveSortableUp(idx)"
            (moveDown)="moveSortableDown(idx)"
          />
        }
      </div>
    </mat-card-content>
  </mat-card>

  <rui-showcase-code [html]="sortableHtml" [ts]="sortableTs" />

  <h2 id="editable">Editable Items (Rename)</h2>

  <mat-card>
    <mat-card-header><mat-card-title>Inline Rename</mat-card-title></mat-card-header>
    <mat-card-content>
      <mat-slide-toggle class="mb-3" [checked]="allowExtEdit()" (change)="allowExtEdit.set($event.checked)">
        Edit extension ({{ allowExtEdit() ? 'on' : 'off — extension preserved' }})
      </mat-slide-toggle>
      <div class="flex flex-col gap-2">
        @for (item of editableItems(); track item.id) {
          <rui-file-upload-item
            [item]="item"
            [editable]="true"
            [editableExtension]="allowExtEdit()"
            [fileManagement]="true"
            [editingItemId]="renameItemId()"
            [editInputValue]="renameValue()"
            (startRename)="onStartRename(item)"
            (confirmRename)="onConfirmRename(item)"
            (cancelRename)="onCancelRename()"
            (editInputChange)="renameValue.set($event)"
            (remove)="removeEditable(item.id)"
          />
        }
      </div>
    </mat-card-content>
  </mat-card>

  <rui-showcase-code [html]="editableHtml" [ts]="editableTs" />

  <h2 id="file-management">File Management (Retry, Cancel, Remove)</h2>

  <mat-card>
    <mat-card-header><mat-card-title>Full File Management</mat-card-title></mat-card-header>
    <mat-card-content>
      <div class="flex items-center gap-4 mb-4">
        <mat-slide-toggle [checked]="showFileMgmt()" (change)="showFileMgmt.set($event.checked)">
          File Management
        </mat-slide-toggle>
        <mat-slide-toggle [checked]="showEditable()" (change)="showEditable.set($event.checked)">
          Editable
        </mat-slide-toggle>
        <mat-slide-toggle [checked]="showSortable()" (change)="showSortable.set($event.checked)">
          Sortable
        </mat-slide-toggle>
      </div>
      <div class="flex flex-col gap-2" cdkDropList [cdkDropListDisabled]="!showSortable()" (cdkDropListDropped)="onMgmtDrop($event)">
        @for (item of managementItems(); track item.id; let idx = $index) {
          <rui-file-upload-item
            [item]="item"
            [sortable]="showSortable()"
            [dragStartDelay]="200"
            [editable]="showEditable()"
            [fileManagement]="showFileMgmt()"
            [editingItemId]="mgmtRenameId()"
            [editInputValue]="mgmtRenameValue()"
            (remove)="removeManagement(item.id)"
            (retry)="onMgmtRetry(item)"
            (cancelUpload)="onMgmtCancel(item.id)"
            (startRename)="onMgmtStartRename(item)"
            (confirmRename)="onMgmtConfirmRename(item)"
            (cancelRename)="onMgmtCancelRename()"
            (editInputChange)="mgmtRenameValue.set($event)"
            (moveUp)="moveManagementUp(idx)"
            (moveDown)="moveManagementDown(idx)"
          />
        }
      </div>
    </mat-card-content>
  </mat-card>

  <rui-showcase-code [html]="managementHtml" [ts]="managementTs" />
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadItemDemo {
  protected selectedItem: RuiFileItem = {
    id: 'demo-selected',
    file: new File([], 'document.pdf', { type: 'application/pdf' }),
    status: 'selected',
    progress: 0,
    editName: 'document.pdf',
  };

  protected uploadingItem: RuiFileItem = {
    id: 'demo-uploading',
    file: new File([], 'photo.jpg', { type: 'image/jpeg' }),
    status: 'uploading',
    progress: 65,
    editName: 'photo.jpg',
    preview: '',
  };

  protected doneItem: RuiFileItem = {
    id: 'demo-done',
    file: new File([], 'archive.zip', { type: 'application/zip' }),
    status: 'done',
    progress: 100,
    editName: 'archive.zip',
  };

  protected errorItem: RuiFileItem = {
    id: 'demo-error',
    file: new File([], 'data.csv', { type: 'text/csv' }),
    status: 'error',
    progress: 0,
    error: 'Network timeout',
    editName: 'data.csv',
  };

  protected onRetry(item: RuiFileItem): void {
    item.status = 'uploading';
    item.progress = 0;
    item.error = undefined;
    setTimeout(() => {
      item.status = 'done';
      item.progress = 100;
    }, 1500);
  }

  // --- Sortable ---

  protected sortableItems = signal<RuiFileItem[]>([
    { id: 's1', file: new File([], '1-alpha.txt'), status: 'selected', progress: 0, editName: '1-alpha.txt' },
    { id: 's2', file: new File([], '2-bravo.txt'), status: 'selected', progress: 0, editName: '2-bravo.txt' },
    { id: 's3', file: new File([], '3-charlie.txt'), status: 'selected', progress: 0, editName: '3-charlie.txt' },
  ]);

  protected onDrop(event: import('@angular/cdk/drag-drop').CdkDragDrop<RuiFileItem[]>): void {
    const items = [...this.sortableItems()];
    const [removed] = items.splice(event.previousIndex, 1);
    items.splice(event.currentIndex, 0, removed!);
    this.sortableItems.set(items);
  }

  protected removeSortable(id: string): void {
    this.sortableItems.update(items => items.filter(i => i.id !== id));
  }

  protected moveSortableUp(index: number): void {
    if (index <= 0) return;
    const items = [...this.sortableItems()];
    [items[index - 1], items[index]] = [items[index]!, items[index - 1]!];
    this.sortableItems.set(items);
  }

  protected moveSortableDown(index: number): void {
    const current = [...this.sortableItems()];
    if (index >= current.length - 1) return;
    [current[index], current[index + 1]] = [current[index + 1]!, current[index]!];
    this.sortableItems.set(current);
  }

  // --- Editable ---

  protected editableItems = signal<RuiFileItem[]>([
    { id: 'e1', file: new File([], 'report-v1.pdf'), status: 'done', progress: 100, editName: 'report-v1.pdf' },
    { id: 'e2', file: new File([], 'invoice-2024.csv'), status: 'done', progress: 100, editName: 'invoice-2024.csv' },
  ]);

  protected renameItemId = signal<string | null>(null);
  protected renameValue = signal('');
  protected allowExtEdit = signal(false);

  protected onStartRename(item: RuiFileItem): void {
    this.renameItemId.set(item.id);
    const fullName = item.editName ?? item.file.name;
    if (!this.allowExtEdit()) {
      const lastDot = fullName.lastIndexOf('.');
      this.renameValue.set(lastDot > 0 ? fullName.slice(0, lastDot) : fullName);
    } else {
      this.renameValue.set(fullName);
    }
  }

  protected onConfirmRename(item: RuiFileItem): void {
    let newName = this.renameValue().trim();
    if (!newName) return;
    if (!this.allowExtEdit()) {
      const fullName = item.editName ?? item.file.name;
      const lastDot = fullName.lastIndexOf('.');
      if (lastDot > 0) {
        newName = newName + fullName.slice(lastDot);
      }
    }
    this.editableItems.update(items =>
      items.map(i => i.id === item.id ? { ...i, editName: newName } : i),
    );
    this.renameItemId.set(null);
    this.renameValue.set('');
  }

  protected onCancelRename(): void {
    this.renameItemId.set(null);
    this.renameValue.set('');
  }

  protected removeEditable(id: string): void {
    this.editableItems.update(items => items.filter(i => i.id !== id));
  }

  // --- File Management ---

  protected showFileMgmt = signal(true);
  protected showEditable = signal(false);
  protected showSortable = signal(false);

  protected managementItems = signal<RuiFileItem[]>([
    { id: 'm1', file: new File([], 'contract.pdf'), status: 'done', progress: 100, editName: 'contract.pdf' },
    { id: 'm2', file: new File([], 'photo.jpg'), status: 'uploading', progress: 45, editName: 'photo.jpg', preview: '' },
    { id: 'm3', file: new File([], 'data.csv'), status: 'error', progress: 0, error: 'Upload failed', editName: 'data.csv' },
  ]);

  protected mgmtRenameId = signal<string | null>(null);
  protected mgmtRenameValue = signal('');

  protected onMgmtDrop(event: import('@angular/cdk/drag-drop').CdkDragDrop<RuiFileItem[]>): void {
    const items = [...this.managementItems()];
    const [removed] = items.splice(event.previousIndex, 1);
    items.splice(event.currentIndex, 0, removed!);
    this.managementItems.set(items);
  }

  protected removeManagement(id: string): void {
    this.managementItems.update(items => items.filter(i => i.id !== id));
  }

  protected onMgmtRetry(item: RuiFileItem): void {
    this.managementItems.update(items =>
      items.map(i => i.id === item.id ? { ...i, status: 'uploading' as const, progress: 0, error: undefined } : i),
    );
    setTimeout(() => {
      this.managementItems.update(items =>
        items.map(i => i.id === item.id ? { ...i, status: 'done' as const, progress: 100 } : i),
      );
    }, 1500);
  }

  protected onMgmtCancel(id: string): void {
    this.managementItems.update(items =>
      items.map(i => i.id === id ? { ...i, status: 'selected' as const, progress: 0 } : i),
    );
  }

  protected onMgmtStartRename(item: RuiFileItem): void {
    this.mgmtRenameId.set(item.id);
    this.mgmtRenameValue.set(item.editName ?? item.file.name);
  }

  protected onMgmtConfirmRename(item: RuiFileItem): void {
    const name = this.mgmtRenameValue().trim();
    if (name) {
      this.managementItems.update(items =>
        items.map(i => i.id === item.id ? { ...i, editName: name } : i),
      );
    }
    this.mgmtRenameId.set(null);
    this.mgmtRenameValue.set('');
  }

  protected onMgmtCancelRename(): void {
    this.mgmtRenameId.set(null);
    this.mgmtRenameValue.set('');
  }

  protected moveManagementUp(index: number): void {
    if (index <= 0) return;
    const items = [...this.managementItems()];
    [items[index - 1], items[index]] = [items[index]!, items[index - 1]!];
    this.managementItems.set(items);
  }

  protected moveManagementDown(index: number): void {
    const items = [...this.managementItems()];
    if (index >= items.length - 1) return;
    [items[index], items[index + 1]] = [items[index + 1]!, items[index]!];
    this.managementItems.set(items);
  }

  // --- Code snippets ---

  protected statesHtml = `<rui-file-upload-item [item]="selectedItem" />
<rui-file-upload-item [item]="uploadingItem" />
<rui-file-upload-item [item]="doneItem" />
<rui-file-upload-item [item]="errorItem" />`;

  protected statesTs = `import { RuiFileUploadItem } from '@all-the.rest/mat-extended/file-upload';
import type { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';

@Component({ imports: [RuiFileUploadItem] })
export class MyComponent {
  selectedItem: RuiFileItem = {
    id: '1', file: new File([], 'doc.pdf'),
    status: 'selected', progress: 0,
  };
  doneItem: RuiFileItem = { ...selectedItem, status: 'done', progress: 100 };
}`;

  protected sortableHtml = `<div cdkDropList (cdkDropListDropped)="onDrop($event)">
  @for (item of items(); track item.id; let idx = $index) {
    <rui-file-upload-item
      [item]="item"
      [sortable]="true"
      [dragStartDelay]="200"
      [fileManagement]="false"
      (remove)="removeItem(item.id)"
      (moveUp)="moveUp(idx)"
      (moveDown)="moveDown(idx)"
    />
  }
</div>`;

  protected sortableTs = `import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { signal } from '@angular/core';

items = signal<RuiFileItem[]>([...]);

onDrop(event: CdkDragDrop<RuiFileItem[]>): void {
  const items = [...this.items()];
  const [removed] = items.splice(event.previousIndex, 1);
  items.splice(event.currentIndex, 0, removed!);
  this.items.set(items);
}

moveUp(index: number): void {
  if (index <= 0) return;
  const items = [...this.items()];
  [items[index - 1], items[index]] = [items[index]!, items[index - 1]!];
  this.items.set(items);
}

moveDown(index: number): void {
  const items = [...this.items()];
  if (index >= items.length - 1) return;
  [items[index], items[index + 1]] = [items[index + 1]!, items[index]!];
  this.items.set(items);
}`;

  protected editableHtml = `<rui-file-upload-item
  [item]="item"
  [editable]="true"
  [fileManagement]="true"
  [editingItemId]="editingId()"
  [editInputValue]="editValue()"
  (startRename)="onStartRename(item)"
  (confirmRename)="onConfirmRename(item)"
  (cancelRename)="onCancelRename()"
  (editInputChange)="editValue.set($event)"
/>`;

  protected editableTs = `editingId = signal<string | null>(null);
editValue = signal('');

onStartRename(item: RuiFileItem): void {
  this.editingId.set(item.id);
  this.editValue.set(item.editName ?? item.file.name);
}

onConfirmRename(item: RuiFileItem): void {
  const name = this.editValue().trim();
  if (name) {
    this.items.update(items =>
      items.map(i => i.id === item.id ? { ...i, editName: name } : i),
    );
  }
  this.editingId.set(null);
  this.editValue.set('');
}`;

  protected managementHtml = `<div class="flex items-center gap-4 mb-4">
  <mat-slide-toggle [checked]="showFileMgmt()" (change)="showFileMgmt.set($event.checked)">
    File Management
  </mat-slide-toggle>
  <mat-slide-toggle [checked]="showSortable()" (change)="showSortable.set($event.checked)">
    Sortable
  </mat-slide-toggle>
  <mat-slide-toggle [checked]="showEditable()" (change)="showEditable.set($event.checked)">
    Editable
  </mat-slide-toggle>
</div>
<div cdkDropList [cdkDropListDisabled]="!showSortable()" (cdkDropListDropped)="onDrop($event)">
  @for (item of items(); track item.id; let idx = $index) {
    <rui-file-upload-item
      [item]="item"
      [sortable]="showSortable()"
      [dragStartDelay]="200"
      [editable]="showEditable()"
      [fileManagement]="showFileMgmt()"
      (remove)="removeItem(item.id)"
      (retry)="retryItem(item)"
      (cancelUpload)="cancelItem(item.id)"
      (moveUp)="moveUp(idx)"
      (moveDown)="moveDown(idx)"
    />
  }
</div>`;

  protected managementTs = `showFileMgmt = signal(true);
showSortable = signal(false);
showEditable = signal(false);
items = signal<RuiFileItem[]>([...]);

onDrop(event: CdkDragDrop<RuiFileItem[]>): void {
  const items = [...this.items()];
  const [removed] = items.splice(event.previousIndex, 1);
  items.splice(event.currentIndex, 0, removed!);
  this.items.set(items);
}

retryItem(item: RuiFileItem): void {
  this.items.update(items =>
    items.map(i => i.id === item.id
      ? { ...i, status: 'uploading', progress: 0, error: undefined }
      : i,
    ),
  );
}

cancelItem(id: string): void {
  this.items.update(items =>
    items.map(i => i.id === id
      ? { ...i, status: 'selected', progress: 0 }
      : i,
    ),
  );
}`;
}
