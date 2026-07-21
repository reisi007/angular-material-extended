import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { RuiFileUpload } from '@all-the.rest/mat-extended/file-upload';
import { RuiFileItem, RuiUploadHandler } from '@all-the.rest/mat-extended/file-upload';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'rui-file-upload-demo',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule, JsonPipe,
    RuiFileUpload, MatCardModule, MatSlideToggleModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
  ],
  template: `
<div class="max-w-4xl mx-auto space-y-8 p-4">
  <h1 class="text-2xl font-bold">File Upload Demo</h1>

  <mat-card>
    <mat-card-header><mat-card-title>Configuration</mat-card-title></mat-card-header>
    <mat-card-content class="flex gap-4 items-center">
      <mat-slide-toggle [checked]="multipleFiles()" (change)="multipleFiles.set($event.checked)">
        Multiple files
      </mat-slide-toggle>
      <mat-form-field class="w-48">
        <mat-label>Max file size (bytes)</mat-label>
        <input matInput type="number" [value]="maxFileSize()" (input)="onMaxSizeChange($event)" />
      </mat-form-field>
    </mat-card-content>
  </mat-card>

  <rui-file-upload
    [multiple]="multipleFiles()"
    [maxSize]="maxFileSize()"
    [uploadHandler]="uploadHandler"
    (uploadStart)="onUploadStart($event)"
  />

  <mat-card>
    <mat-card-header><mat-card-title>Reactive Form Demo</mat-card-title></mat-card-header>
    <mat-card-content>
      <pre class="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-40">{{ formControl.value | json }}</pre>
    </mat-card-content>
  </mat-card>

  @if (uploadedFiles().length > 0) {
    <mat-card>
      <mat-card-header><mat-card-title>Uploaded Files</mat-card-title></mat-card-header>
      <mat-card-content>
        <ul class="list-disc pl-5">
          @for (f of uploadedFiles(); track f.id) {
            <li>{{ f.file.name }} — {{ f.status }}</li>
          }
        </ul>
      </mat-card-content>
    </mat-card>
  }
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadDemo {
  multipleFiles = signal(true);
  maxFileSize = signal(5 * 1024 * 1024);
  uploadedFiles = signal<RuiFileItem[]>([]);

  formControl = new FormControl<RuiFileItem[] | undefined>([]);

  uploadHandler: RuiUploadHandler = async (file: RuiFileItem) => {
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(r => setTimeout(r, 100));
      file.progress = i;
    }
  };

  onUploadStart(files: RuiFileItem[]): void {
    this.uploadedFiles.update(current => [...current, ...files]);
  }

  onMaxSizeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxFileSize.set(Number(input.value));
  }
}
