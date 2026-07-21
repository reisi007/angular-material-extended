import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

import { RuiFileUpload } from '@all-the.rest/mat-extended/file-upload';
import { RuiFileItem, RuiUploadHandler } from '@all-the.rest/mat-extended/file-upload';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ShowcaseCode } from '../../shared/showcase-code';

@Component({
  selector: 'rui-file-upload-demo',
  standalone: true,
  imports: [
    RuiFileUpload, MatCardModule, MatSlideToggleModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    ReactiveFormsModule, ShowcaseCode,
  ],
  template: `
<div class="max-w-4xl mx-auto space-y-8 p-4">
  <h1 class="font-bold">File Upload Demo</h1>

  <h2 id="basic">Basic Usage</h2>

  <mat-card>
    <mat-card-header><mat-card-title>Configuration</mat-card-title></mat-card-header>
    <mat-card-content class="flex gap-4 items-center flex-wrap">
      <mat-slide-toggle [checked]="multipleFiles()" (change)="multipleFiles.set($event.checked)">
        Multiple files
      </mat-slide-toggle>
      <mat-form-field class="w-48">
        <mat-label>Max file size (bytes)</mat-label>
        <input matInput type="number" [value]="maxFileSize()" (input)="onMaxSizeChange($event)" />
      </mat-form-field>
      <mat-slide-toggle [checked]="autoUploadEnabled()" (change)="autoUploadEnabled.set($event.checked)">
        Auto Upload
      </mat-slide-toggle>
    </mat-card-content>
  </mat-card>

  <rui-file-upload
    [multiple]="multipleFiles()"
    [maxSize]="maxFileSize()"
    [autoUpload]="autoUploadEnabled()"
    [uploadHandler]="uploadHandler"
    (uploadStart)="onUploadStart($event)"
  />

  <rui-showcase-code [html]="basicHtml" [ts]="basicTs" />

  @if (uploadedFiles().length > 0) {
    <mat-card>
      <mat-card-header><mat-card-title>Uploaded Files</mat-card-title></mat-card-header>
      <mat-card-content>
        <ul class="list-disc pl-5">
          @for (f of uploadedFiles(); track f.id) {
            <li>{{ f.file.name }} &mdash; {{ f.status }}</li>
          }
        </ul>
      </mat-card-content>
    </mat-card>
  }

  <h2 id="accept">File Type Filtering</h2>

  <rui-file-upload
    accept="image/*"
    [maxFiles]="5"
    dropzoneText="Drop images here or click to browse"
    uploadButtonText="Upload Images"
    [uploadHandler]="imageUploadHandler"
  />

  <rui-showcase-code [html]="acceptHtml" [ts]="acceptTs" />

  <h2 id="reactive-forms">Reactive Forms Integration</h2>

  <mat-card>
    <mat-card-header><mat-card-title>Form Control</mat-card-title></mat-card-header>
    <mat-card-content class="flex flex-col gap-3">
      <rui-file-upload
        [formControl]="fileControl"
        [uploadHandler]="uploadHandler"
      />
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
        Files in control: {{ fileControl.value?.length ?? 0 }}
      </p>
      <button mat-flat-button (click)="fileControl.disable()" class="self-start">
        {{ fileControl.disabled ? 'Enable' : 'Disable' }} form control
      </button>
    </mat-card-content>
  </mat-card>

  <rui-showcase-code [html]="formsHtml" [ts]="formsTs" />

  <h2 id="sortable-editable">Sortable &amp; Editable</h2>

  <rui-file-upload
    [sortable]="true"
    [editable]="true"
    [dropzoneText]="'Drop files, then reorder and rename'"
    [uploadHandler]="uploadHandler"
  />

  <rui-showcase-code [html]="sortableHtml" [ts]="sortableTs" />
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadDemo {
  multipleFiles = signal(true);
  maxFileSize = signal(5 * 1024 * 1024);
  autoUploadEnabled = signal(false);
  uploadedFiles = signal<RuiFileItem[]>([]);

  fileControl = new FormControl<RuiFileItem[]>([]);

  uploadHandler: RuiUploadHandler = async (file: RuiFileItem) => {
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(r => setTimeout(r, 100));
      file.progress = i;
    }
  };

  imageUploadHandler: RuiUploadHandler = async (file: RuiFileItem) => {
    file.progress = 50;
    await new Promise(r => setTimeout(r, 500));
    file.progress = 100;
  };

  // --- Code snippets ---

  protected basicHtml = `<rui-file-upload
  [multiple]="true"
  [maxSize]="maxFileSize"
  [uploadHandler]="uploadHandler"
/>`;

  protected basicTs = `import { RuiFileUpload } from '@all-the.rest/mat-extended/file-upload';
import type { RuiUploadHandler } from '@all-the.rest/mat-extended/file-upload';

@Component({
  imports: [RuiFileUpload],
})
export class MyComponent {
  uploadHandler: RuiUploadHandler = async (file) => {
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(r => setTimeout(r, 100));
      file.progress = i;
    }
  };
}`;

  protected acceptHtml = `<rui-file-upload
  accept="image/*"
  [maxFiles]="5"
  dropzoneText="Drop images here or click to browse"
  uploadButtonText="Upload Images"
  [uploadHandler]="handler"
/>`;

  protected acceptTs = `// Accept only images, limit to 5 files
<rui-file-upload accept="image/*" [maxFiles]="5" />

// Accept specific extensions
<rui-file-upload accept=".pdf,.doc,.docx" />

// Accept exact MIME types
<rui-file-upload accept="application/pdf,text/csv" />`;

  protected formsHtml = `<rui-file-upload
  [formControl]="fileControl"
  [uploadHandler]="uploadHandler"
/>`;

  protected formsTs = `import { FormControl, ReactiveFormsModule } from '@angular/forms';

fileControl = new FormControl<RuiFileItem[]>([]);

// Read files from control
const files = this.fileControl.value;`;

  protected sortableHtml = `<rui-file-upload
  [sortable]="true"
  [editable]="true"
  [uploadHandler]="handler"
/>`;

  protected sortableTs = `// sortable enables drag & drop reordering with up/down buttons
// editable enables inline rename on double-click (pencil icon)
<rui-file-upload [sortable]="true" [editable]="true" />`;

  onUploadStart(files: RuiFileItem[]): void {
    this.uploadedFiles.update(current => [...current, ...files]);
  }

  onMaxSizeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxFileSize.set(Number(input.value));
  }
}
