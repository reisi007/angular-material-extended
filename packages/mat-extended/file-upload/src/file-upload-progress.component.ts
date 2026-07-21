import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rui-file-upload-progress',
  standalone: true,
  template: `
    @if (isUploading()) {
      <div class="flex items-center gap-3">
        <div class="flex-1 h-1 bg-[var(--mat-sys-surface-variant)] rounded overflow-hidden">
          <div class="h-full bg-[var(--mat-sys-primary)] rounded transition-[width] duration-300" [style.width.%]="totalProgress()"></div>
        </div>
        <span>{{ totalProgress() }}% – Uploading...</span>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block',
  },
})
export class RuiFileUploadProgress {
  readonly totalProgress = input(0);
  readonly isUploading = input(false);
}
