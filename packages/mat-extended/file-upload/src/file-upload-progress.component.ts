import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rui-file-upload-progress',
  standalone: true,
  styleUrl: './file-upload-progress.component.scss',
  template: `
    @if (isUploading()) {
      <div class="rui-file-upload-progress__bar" role="region" aria-label="Upload progress">
        <div class="rui-file-upload-progress__track">
          <div
            class="rui-file-upload-progress__fill"
            [style.width.%]="totalProgress()"
            role="progressbar"
            [attr.aria-valuenow]="totalProgress()"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span class="rui-file-upload-progress__label">{{ totalProgress() }}% – Uploading...</span>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiFileUploadProgress {
  readonly totalProgress = input(0);
  readonly isUploading = input(false);
}
