import {
  Component,
  input,
  model,
  output,
  signal,
  computed,
  ChangeDetectionStrategy,
  DestroyRef,
  inject,
  afterNextRender,
  viewChild,
  ElementRef,
  booleanAttribute,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { RuiValueAccessor, ensureBrowser } from '@all-the.rest/mat-extended';
import { RuiFileItem, RuiUploadStatus, RuiUploadHandler, RuiValidationError } from './file-upload.types';
import { RUI_FILE_UPLOAD_DEFAULT_OPTIONS } from './file-upload.config';

@Component({
  selector: 'rui-file-upload',
  standalone: true,
  imports: [FormsModule, DragDropModule],
  templateUrl: './file-upload.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(dragover)': 'onDragOver($event)',
    '(dragleave)': 'onDragLeave($event)',
    '(drop)': 'onDrop($event)',
    '(keydown.enter)': 'openFilePicker()',
    '(keydown.space)': 'openFilePicker()',
    'tabindex': '0',
    'role': 'region',
    'aria-label': 'File upload drop zone',
  },
})
export class RuiFileUpload extends RuiValueAccessor<RuiFileItem[]> {
  readonly multiple = input<boolean>(true);
  readonly accept = input<string>('*/*');
  readonly maxSize = input<number>(10 * 1024 * 1024);
  readonly maxFiles = input<number>(10);
  readonly uploadHandler = input<RuiUploadHandler | undefined>(undefined);
  readonly sortable = input<boolean, boolean>(false, { transform: booleanAttribute });
  readonly autoUpload = input<boolean, boolean>(false, { transform: booleanAttribute });
  readonly editable = input<boolean, boolean>(false, { transform: booleanAttribute });
  readonly fileManagement = input<boolean, boolean>(true, { transform: booleanAttribute });
  readonly initialFiles = input<RuiFileItem[]>([]);

  readonly dropzoneText = input('Drag & drop files here or click to browse');
  readonly browseText = input('Select files to upload');
  readonly dragOverText = input('Drop files here');
  readonly uploadButtonText = input('Upload starten');

  readonly files = model<RuiFileItem[]>([]);
  readonly uploadStart = output<RuiFileItem[]>();
  readonly validationErrors = output<RuiValidationError[]>();
  readonly rename = output<RuiFileItem>();
  readonly deleteFile = output<RuiFileItem>();

  readonly status = signal<RuiUploadStatus>('idle');
  readonly isDragOver = signal(false);
  readonly totalProgress = computed(() => {
    const fileList = this.files();
    if (fileList.length === 0) return 0;
    const total = fileList.reduce((sum, f) => sum + f.progress, 0);
    return Math.round(total / fileList.length);
  });
  readonly hasFiles = computed(() => this.files().length > 0);
  readonly isUploading = computed(() => this.status() === 'uploading');

  readonly editingItemId = signal<string | null>(null);
  readonly editInputValue = signal('');

  protected Math = Math;

  private readonly defaults = inject(RUI_FILE_UPLOAD_DEFAULT_OPTIONS, { optional: true });
  private readonly destroyRef = inject(DestroyRef);
  private abortControllers = new Map<string, AbortController>();

  readonly dropzoneRef = viewChild<ElementRef<HTMLElement>>('dropzone');
  readonly renameInputRef = viewChild<ElementRef<HTMLInputElement>>('renameInput');

  constructor() {
    super();

    afterNextRender(() => {
      const initial = this.initialFiles();
      if (initial.length > 0) {
        this.updateFiles(initial);
        this.status.set('selected');
      }
    });

    this.destroyRef.onDestroy(() => {
      for (const item of this.files()) {
        if (item.preview) URL.revokeObjectURL(item.preview);
      }
    });
  }

  openFilePicker(): void {
    if (!ensureBrowser()) return;
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = this.multiple();
    input.accept = this.accept();
    input.addEventListener('change', (event: Event) => this.onFilesSelected(event));
    input.click();
  }

  onFilesSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.processFiles(target.files);
    }
    target.value = '';
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.disabled()) {
      this.isDragOver.set(true);
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver.set(false);
    if (this.disabled()) return;
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      this.processFiles(event.dataTransfer.files);
    }
  }

  processFiles(fileList: FileList | File[]): void {
    const currentFiles = this.files();
    const maxFiles = this.maxFiles();
    const maxSize = this.maxSize();
    const remaining = maxFiles - currentFiles.length;
    const validationErrors: RuiValidationError[] = [];

    if (remaining <= 0) {
      validationErrors.push({ type: 'count', message: `Maximum ${maxFiles} files allowed` });
      this.validationErrors.emit(validationErrors);
      return;
    }

    const newItems: RuiFileItem[] = [];
    const filesToProcess = Math.min(fileList.length, remaining);

    for (let i = 0; i < filesToProcess; i++) {
      const file = fileList[i];

      if (file.size > maxSize) {
        validationErrors.push({
          type: 'size',
          message: `File "${file.name}" exceeds the maximum size of ${this.formatSize(maxSize)}`,
          file,
        });
        continue;
      }
      if (!this.isFileAccepted(file)) {
        validationErrors.push({
          type: 'type',
          message: `File type "${file.type || 'unknown'}" for "${file.name}" is not accepted`,
          file,
        });
        continue;
      }

      let preview: string | undefined;
      if (file.type.startsWith('image/')) {
        preview = URL.createObjectURL(file);
      }

      newItems.push({
        id: this.generateId(),
        file,
        preview,
        status: 'selected',
        progress: 0,
        editName: file.name,
      });
    }

    if (validationErrors.length > 0) {
      this.validationErrors.emit(validationErrors);
    }

    if (newItems.length > 0) {
      this.status.set('selected');
      this.updateFiles([...currentFiles, ...newItems]);

      if (this.autoUpload()) {
        this.startUpload();
      }
    }
  }

  private isFileAccepted(file: File): boolean {
    const accept = this.accept();
    if (!accept || accept === '*/*') return true;

    const acceptedTypes = accept.split(',').map(t => t.trim());
    return acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      }
      if (type.endsWith('/*')) {
        const category = type.slice(0, -1);
        return file.type.startsWith(category);
      }
      return file.type === type;
    });
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
  }

  removeFile(id: string): void {
    const currentFiles = this.files();
    const item = currentFiles.find(f => f.id === id);
    if (item?.preview) URL.revokeObjectURL(item.preview);

    const updated = currentFiles.filter(f => f.id !== id);
    this.updateFiles(updated);
    if (item) this.deleteFile.emit(item);

    if (updated.length === 0) {
      this.status.set('idle');
    }

    this.dropzoneRef()?.nativeElement.focus();
  }

  async startUpload(): Promise<void> {
    const handler = this.uploadHandler();
    const currentFiles = this.files();

    if (currentFiles.length === 0) return;

    if (handler) {
      this.status.set('uploading');
    }
    this.uploadStart.emit(currentFiles);

    let hasError = false;

    if (handler) {
      for (const item of currentFiles) {
        const controller = new AbortController();
        this.abortControllers.set(item.id, controller);

        this.files.update(files =>
          files.map(f => f.id === item.id ? { ...f, status: 'uploading' as const } : f),
        );

        try {
          await handler(item, controller.signal);
          if (!controller.signal.aborted) {
            this.files.update(files =>
              files.map(f => f.id === item.id ? { ...f, status: 'done' as const, progress: 100 } : f),
            );
          }
        } catch (e: unknown) {
          if (!controller.signal.aborted) {
            hasError = true;
            this.files.update(files =>
              files.map(f =>
                f.id === item.id
                  ? { ...f, status: 'error' as const, error: e instanceof Error ? e.message : 'Upload failed' }
                  : f,
              ),
            );
          }
        } finally {
          this.abortControllers.delete(item.id);
        }
      }
    }

    this.status.set(hasError ? 'error' : 'idle');
  }

  cancelUpload(id: string): void {
    const controller = this.abortControllers.get(id);
    if (controller) {
      controller.abort();
      this.abortControllers.delete(id);
    }
    this.files.update(files =>
      files.map(f =>
        f.id === id
          ? { ...f, status: 'selected' as const, progress: 0 }
          : f,
      ),
    );
  }

  retryFile(id: string): void {
    this.files.update(files =>
      files.map(f =>
        f.id === id
          ? { ...f, status: 'selected' as const, progress: 0, error: undefined }
          : f,
      ),
    );
    this.startUpload();
  }

  clearAll(): void {
    for (const item of this.files()) {
      if (item.preview) URL.revokeObjectURL(item.preview);
    }
    this.updateFiles([]);
    this.status.set('idle');
  }

  startRename(id: string): void {
    const item = this.files().find(f => f.id === id);
    if (item) {
      this.editingItemId.set(id);
      this.editInputValue.set(item.editName ?? item.file.name);
      requestAnimationFrame(() => {
        const inputEl = this.renameInputRef()?.nativeElement;
        inputEl?.focus();
        inputEl?.select();
      });
    }
  }

  confirmRename(id: string): void {
    const newName = this.editInputValue().trim() || this.files().find(f => f.id === id)?.file.name || '';
    this.files.update(files =>
      files.map(f =>
        f.id === id
          ? { ...f, editName: newName }
          : f,
      ),
    );
    const updated = this.files().find(f => f.id === id);
    if (updated) {
      this.rename.emit(updated);
    }
    this.editingItemId.set(null);
    this.editInputValue.set('');
  }

  cancelRename(): void {
    this.editingItemId.set(null);
    this.editInputValue.set('');
  }

  onDropListDropped(event: CdkDragDrop<RuiFileItem[]>): void {
    const current = [...this.files()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.updateFiles(current);
  }

  formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = parseFloat((bytes / Math.pow(k, i)).toFixed(1));
    return `${size} ${units[i]}`;
  }

  override writeValue(value: RuiFileItem[] | undefined): void {
    this.files.set(value ?? []);
  }

  private updateFiles(newFiles: RuiFileItem[]): void {
    this.files.set(newFiles);
    this.markAsChanged(newFiles);
  }
}
