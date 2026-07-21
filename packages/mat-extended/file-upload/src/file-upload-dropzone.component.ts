import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { formatSize } from './file-upload-utils';

@Component({
  selector: 'rui-file-upload-dropzone',
  standalone: true,
  template: `
    <div
      class="border-2 border-dashed border-[var(--mat-sys-outline)] rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-[border-color,background-color] duration-200 hover:border-[var(--mat-sys-primary)] hover:bg-[var(--mat-sys-primary-container)]"
      [class.opacity-50]="disabled()"
      [class.pointer-events-none]="disabled()"
      [style.border-color]="!disabled() && isDragOver() ? 'var(--mat-sys-primary)' : undefined"
      [style.background-color]="!disabled() && isDragOver() ? 'var(--mat-sys-primary-container)' : undefined"
      tabindex="0"
      role="button"
      [attr.aria-label]="browseText()"
      (click)="onClick()"
      (keydown.enter)="onClick()"
      (keydown.space)="onClick()">
      <div class="text-[var(--mat-sys-primary)] mb-3">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      </div>
      <p class="text-base text-[var(--mat-sys-on-surface)] m-0 mb-2">
        {{ isDragOver() ? dragOverText() : dropzoneText() }}
      </p>
      <p class="text-xs text-[var(--mat-sys-on-surface-variant)] m-0">
        @if (multiple()) {
          @if (isFinite(maxSize())) {
            Accepted: {{ accept() }} · Max {{ maxFiles() }} files · Max {{ formatSize(maxSize()) }} each
          } @else {
            Accepted: {{ accept() }} · Max {{ maxFiles() }} files
          }
        } @else {
          @if (isFinite(maxSize())) {
            Accepted: {{ accept() }} · Max {{ formatSize(maxSize()) }}
          } @else {
            Accepted: {{ accept() }}
          }
        }
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block',
  },
})
export class RuiFileUploadDropzone {
  readonly isDragOver = input(false);
  readonly dropzoneText = input('Drag & drop files here or click to browse');
  readonly dragOverText = input('Drop files here');
  readonly browseText = input('Select files to upload');
  readonly accept = input('*/*');
  readonly maxSize = input(Infinity);
  readonly multiple = input(true);
  readonly maxFiles = input(10);
  readonly disabled = input(false);

  readonly filePickerOpen = output<void>();

  protected formatSize = formatSize;
  protected isFinite = Number.isFinite;

  onClick(): void {
    if (!this.disabled()) {
      this.filePickerOpen.emit();
    }
  }
}
