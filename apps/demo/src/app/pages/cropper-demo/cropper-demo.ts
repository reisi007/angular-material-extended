import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import { RuiCropper } from '@all-the.rest/mat-extended/cropper';
import { RuiCropperResult, RuiOutputFormat } from '@all-the.rest/mat-extended/cropper';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'rui-cropper-demo',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,
    RuiCropper, MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatSliderModule,
  ],
  template: `
<div class="max-w-4xl mx-auto space-y-8 p-4">
  <h1 class="text-2xl font-bold">Image Cropper</h1>

  <mat-card>
    <mat-card-header><mat-card-title>Image Source</mat-card-title></mat-card-header>
    <mat-card-content>
      <mat-form-field class="w-full">
        <input matInput [ngModel]="imageUrl" (ngModelChange)="imageUrl = $event; loadError.set('')" placeholder="Enter image URL" />
      </mat-form-field>
      <button mat-raised-button color="warn" (click)="imageUrl = 'https://invalid.example/nonexistent.jpg'" class="mt-2">
        Simuliere Lade-Fehler
      </button>
      @if (loadError()) {
        <p class="text-red-500 text-sm mt-2">{{ loadError() }}</p>
      }
    </mat-card-content>
  </mat-card>

  <rui-cropper
    [src]="imageUrl"
    [aspectRatio]="selectedAspect()"
    [outputFormat]="selectedFormat()"
    [outputQuality]="selectedQuality()"
    [outputWidth]="selectedOutputWidth()"
    [outputHeight]="selectedOutputHeight()"
    [(croppedImage)]="croppedValue"
    (cropChange)="onCropChange($event)"
    (loadError)="loadError.set($event)"
  >
    <svg ruiCropperOverlay class="absolute inset-0 w-full h-full pointer-events-none"
      style="left: var(--rui-crop-x, 0%); top: var(--rui-crop-y, 0%); width: var(--rui-crop-w, 100%); height: var(--rui-crop-h, 100%);">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,0,0.5)" stroke-width="1"/>
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,0,0.5)" stroke-width="1"/>
    </svg>
  </rui-cropper>

  <mat-card>
    <mat-card-header><mat-card-title>Controls</mat-card-title></mat-card-header>
    <mat-card-content class="flex flex-wrap gap-4">
      <mat-form-field>
        <mat-label>Aspect Ratio</mat-label>
        <mat-select [value]="selectedAspect()" (valueChange)="selectedAspect.set($event)">
          <mat-option value="free">Free</mat-option>
          <mat-option value="1:1">1:1</mat-option>
          <mat-option value="4:3">4:3</mat-option>
          <mat-option value="16:9">16:9</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Output Format</mat-label>
        <mat-select [value]="selectedFormat()" (valueChange)="selectedFormat.set($event)">
          <mat-option value="image/png">PNG</mat-option>
          <mat-option value="image/jpeg">JPEG</mat-option>
          <mat-option value="image/webp">WebP</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Quality: {{ selectedQuality() }}</mat-label>
        <input matInput type="range" min="0.1" max="1" step="0.01" [value]="selectedQuality()" (input)="onQualityChange($event)" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Output Width: {{ selectedOutputWidth() || 'auto' }}</mat-label>
        <input matInput type="number" min="0" max="4096" step="1" [value]="selectedOutputWidth()" (input)="onOutputWidthChange($event)" />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Output Height: {{ selectedOutputHeight() || 'auto' }}</mat-label>
        <input matInput type="number" min="0" max="4096" step="1" [value]="selectedOutputHeight()" (input)="onOutputHeightChange($event)" />
      </mat-form-field>
    </mat-card-content>
  </mat-card>

  <mat-card>
    <mat-card-header><mat-card-title>Reactive Form Demo</mat-card-title></mat-card-header>
    <mat-card-content>
      <p>cropperControl value (first 100 chars):</p>
      <pre class="bg-gray-100 p-2 rounded text-sm overflow-auto max-h-20">{{ cropperControl.value?.slice(0, 100) }}</pre>
    </mat-card-content>
  </mat-card>

  @if (croppedValue()) {
    <mat-card>
      <mat-card-header><mat-card-title>Cropped Output</mat-card-title></mat-card-header>
      <mat-card-content>
        <img [src]="croppedValue()" class="max-w-xs border rounded" alt="Cropped" />
        <p class="text-sm text-gray-500 mt-2">{{ outputDimensions().width }} × {{ outputDimensions().height }} px</p>
      </mat-card-content>
    </mat-card>
  }
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CropperDemo {
  imageUrl = 'https://picsum.photos/800/600';
  selectedAspect = signal<'free' | '1:1' | '4:3' | '16:9'>('free');
  selectedFormat = signal<RuiOutputFormat>('image/png');
  selectedQuality = signal(0.92);
  selectedOutputWidth = signal(0);
  selectedOutputHeight = signal(0);
  croppedValue = signal<string>('');
  outputDimensions = signal({ width: 0, height: 0 });
  loadError = signal('');

  cropperControl = new FormControl<string | undefined>('');

  onCropChange(result: RuiCropperResult): void {
    this.outputDimensions.set({ width: result.width, height: result.height });
    this.cropperControl.setValue(result.dataUrl);
  }

  onQualityChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedQuality.set(Number(input.value));
  }

  onOutputWidthChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.selectedOutputWidth.set(value);
  }

  onOutputHeightChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.selectedOutputHeight.set(value);
  }
}
