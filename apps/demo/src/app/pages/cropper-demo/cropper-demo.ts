import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RuiCropper, RuiCropperGridOverlay } from '@all-the.rest/mat-extended/cropper';
import { RuiCropperResult, RuiOutputFormat, RuiAspectRatioPreset } from '@all-the.rest/mat-extended/cropper';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { ShowcaseCode } from '../../shared/showcase-code';

const VALID_IMAGE = 'https://picsum.photos/800/600';
const INVALID_IMAGE = 'https://invalid.example/nonexistent.jpg';

@Component({
  selector: 'rui-cropper-demo',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,
    RuiCropper, RuiCropperGridOverlay, MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatSliderModule, ShowcaseCode,
  ],
  template: `
<div class="max-w-5xl mx-auto p-4 md:p-6 space-y-8">
  <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Image Cropper</h1>
  <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
    Crop, zoom, and rotate images. Supports Reactive Forms and Signal API.
  </p>

  <!-- Basic Cropper -->
  <section>
    <h2 id="basic-cropper" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Cropper (16:9)</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Default 16:9 aspect ratio. Drag to crop, zoom with +/-, rotate with the slider.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <div class="max-w-[800px]">
          <rui-cropper
            [src]="basicSrc"
            [rotationMin]="-10"
            [rotationMax]="10"
            [(croppedImage)]="basicOutput"
            (cropChange)="onBasicCrop($event)"
            (loadError)="basicError.set($event)"
          >
            <rui-cropper-grid-overlay />
          </rui-cropper>
        </div>
          <div class="mt-4">
            <p class="text-sm font-medium mb-1 text-[var(--mat-sys-on-surface)]">Cropped Result</p>
            <img [src]="basicOutput()" class="max-w-sm rounded border border-[var(--mat-sys-outline-variant)]" alt="Cropped preview" />
            <p class="text-xs text-[var(--mat-sys-on-surface-variant)] mt-1">{{ basicDimensions().width }} × {{ basicDimensions().height }} px</p>
          </div>
        @if (basicError()) {
          <p class="text-[var(--mat-sys-error)] text-sm mt-2">{{ basicError() }}</p>
        }
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="basicHtml" [ts]="basicTs" />
  </section>

  <!-- Square Fixed Aspect -->
  <section>
    <h2 id="square-fixed" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Square 1:1 (Fixed Aspect)</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Fixed 1:1 aspect ratio in a 320px square container. No aspect dropdown shown.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <div class="w-80 h-80">
          <rui-cropper
            [src]="basicSrc"
            [aspectRatio]="'1:1'"
            [rotationMin]="-10"
            [rotationMax]="10"
            [(croppedImage)]="squareOutput"
            (cropChange)="onSquareCrop($event)"
          />
        </div>
        @if (squareResult()) {
          <p class="text-xs text-[var(--mat-sys-on-surface-variant)] mt-2">{{ squareResult()!.width }} × {{ squareResult()!.height }} px</p>
        }
        @if (squareOutput()) {
          <img [src]="squareOutput()" class="max-w-xs mt-2 rounded border border-[var(--mat-sys-outline-variant)]" alt="Square crop output" />
        }
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="squareHtml" ts="Check the basic example for the TypeScript setup." />
  </section>

  <!-- Free Aspect -->
  <section>
    <h2 id="free-aspect" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Free Aspect Ratio</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Container has 4:3 aspect ratio. Aspect ratio selector is visible.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <div class="max-w-[640px]">
          <div class="aspect-[4/3] max-w-2xl">
            <rui-cropper
              [src]="basicSrc"
              [aspectRatio]="'free'"
              [rotationMin]="-10"
              [rotationMax]="10"
              [(croppedImage)]="freeOutput"
              (cropChange)="onFreeCrop($event)"
            >
              <rui-cropper-grid-overlay />
            </rui-cropper>
          </div>
        </div>
        @if (freeResult()) {
          <p class="text-xs text-[var(--mat-sys-on-surface-variant)] mt-2">{{ freeResult()!.width }} × {{ freeResult()!.height }} px</p>
        }
        @if (freeOutput()) {
          <img [src]="freeOutput()" class="max-w-xs mt-2 rounded border border-[var(--mat-sys-outline-variant)]" alt="Free crop output" />
        }
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="freeHtml" ts="Check the basic example for the TypeScript setup." />
  </section>

  <!-- Fixed Width -->
  <section>
    <h2 id="fixed-width" class="font-bold text-[var(--mat-sys-on-surface)] mb-2">Fixed Width with Sidebar</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Set a fixed width like <code>[width]="600"</code> so the cropper size stays constant regardless of sibling layout changes.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-cropper
          [src]="basicSrc"
          [width]="600"
          [aspectRatio]="'16:9'"
          [rotationMin]="-10"
          [rotationMax]="10"
          (cropChange)="onFixedCrop($event)"
        />
        @if (fixedResult()) {
          <p class="text-xs text-[var(--mat-sys-on-surface-variant)] mt-2">{{ fixedResult()!.width }} × {{ fixedResult()!.height }} px</p>
        }
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="fixedWidthHtml" ts="Check the basic example for the TypeScript setup." />
  </section>

  <!-- Error State -->
  <section>
    <h2 id="error-state" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Error Handling</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">When the image fails to load, a <code>loadError</code> event is emitted.</p>
    <mat-card>
      <mat-card-content class="pt-4 space-y-3">
        <rui-cropper
          [src]="errorSrc()"
          (loadError)="errorMsg.set($event)"
          [rotationMin]="-10"
          [rotationMax]="10"
        />
        <div class="flex gap-2">
          <button mat-stroked-button (click)="errorSrc.set(INVALID_IMAGE)">Invalid Image</button>
          <button mat-stroked-button color="primary" (click)="errorSrc.set(VALID_IMAGE)">Restore Valid</button>
        </div>
        @if (errorMsg()) {
          <p class="text-[var(--mat-sys-error)] text-sm">{{ errorMsg() }}</p>
        }
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="errorHtml" ts="Check the basic example for the TypeScript setup." />
  </section>

  <!-- Dynamic Configuration -->
  <section>
    <h2 id="dynamic-config" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Dynamic Configuration</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Change aspect ratio, format, quality, and output size on the fly.</p>
    <mat-card>
      <mat-card-content class="pt-4 space-y-3">
        <rui-cropper
          [src]="basicSrc"
          [aspectRatio]="dynAspect()"
          [outputFormat]="dynFormat()"
          [outputQuality]="dynQuality()"
          [outputWidth]="dynWidth()"
          [outputHeight]="dynHeight()"
          [rotationMin]="-10"
          [rotationMax]="10"
          [(croppedImage)]="dynOutput"
          (cropChange)="onDynCrop($event)"
        >
          <rui-cropper-grid-overlay />
        </rui-cropper>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <mat-form-field>
            <mat-label>Aspect</mat-label>
            <mat-select [value]="dynAspect()" (valueChange)="dynAspect.set($event)">
              <mat-option value="free">Free</mat-option>
              <mat-option value="1:1">1:1</mat-option>
              <mat-option value="4:3">4:3</mat-option>
              <mat-option value="16:9">16:9</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Format</mat-label>
            <mat-select [value]="dynFormat()" (valueChange)="dynFormat.set($event)">
              <mat-option value="image/png">PNG</mat-option>
              <mat-option value="image/jpeg">JPEG</mat-option>
              <mat-option value="image/webp">WebP</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Quality</mat-label>
            <mat-select [value]="dynQuality()" (valueChange)="dynQuality.set($event)">
              <mat-option [value]="0.1">0.1</mat-option>
              <mat-option [value]="0.5">0.5</mat-option>
              <mat-option [value]="0.75">0.75</mat-option>
              <mat-option [value]="0.92">0.92</mat-option>
              <mat-option [value]="1">1</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Width</mat-label>
            <input matInput type="number" min="0" max="2048" [ngModel]="dynWidth()" (ngModelChange)="dynWidth.set($event)" />
          </mat-form-field>

          <mat-form-field>
            <mat-label>Height</mat-label>
            <input matInput type="number" min="0" max="2048" [ngModel]="dynHeight()" (ngModelChange)="dynHeight.set($event)" />
          </mat-form-field>
        </div>

        @if (dynOutput()) {
          <div>
            <p class="text-sm font-medium mb-1 text-[var(--mat-sys-on-surface)]">Output</p>
            <img [src]="dynOutput()" class="max-w-xs rounded border border-[var(--mat-sys-outline-variant)]" alt="Dynamic cropper output" />
            <p class="text-xs text-[var(--mat-sys-on-surface-variant)] mt-1">{{ dynDimensions().width }} × {{ dynDimensions().height }} px</p>
          </div>
        }
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="dynHtml" ts="Check the basic example for the TypeScript setup." />
  </section>

  <!-- Toolbar Positions -->
  <section>
    <h2 id="toolbar-positions" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Toolbar Positions</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">The toolbar can be placed at top, bottom (default), left, or right.</p>
    <mat-card>
      <mat-card-content class="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1">
          <p class="text-xs font-medium">Bottom (default)</p>
          <rui-cropper [src]="basicSrc" toolbarPosition="bottom" [rotationMin]="-10" [rotationMax]="10" />
        </div>
        <div class="space-y-1">
          <p class="text-xs font-medium">Top</p>
          <rui-cropper [src]="basicSrc" toolbarPosition="top" [rotationMin]="-10" [rotationMax]="10" />
        </div>
        <div class="space-y-1">
          <p class="text-xs font-medium">Left</p>
          <rui-cropper [src]="basicSrc" toolbarPosition="left" [rotationMin]="-10" [rotationMax]="10" />
        </div>
        <div class="space-y-1">
          <p class="text-xs font-medium">Right</p>
          <rui-cropper [src]="basicSrc" toolbarPosition="right" [rotationMin]="-10" [rotationMax]="10" />
        </div>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="positionHtml" ts="Check the basic example for the TypeScript setup." />
  </section>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CropperDemo {
  protected readonly VALID_IMAGE = VALID_IMAGE;
  protected readonly INVALID_IMAGE = INVALID_IMAGE;

  readonly basicSrc = VALID_IMAGE;
  readonly basicOutput = signal('');
  readonly basicDimensions = signal({ width: 0, height: 0 });
  readonly basicError = signal('');

  readonly squareResult = signal<RuiCropperResult | null>(null);
  readonly squareOutput = signal<string>('');
  readonly freeResult = signal<RuiCropperResult | null>(null);
  readonly freeOutput = signal<string>('');

  readonly errorSrc = signal(VALID_IMAGE);
  readonly errorMsg = signal('');

  readonly dynAspect = signal<RuiAspectRatioPreset>('16:9');
  readonly dynFormat = signal<RuiOutputFormat>('image/png');
  readonly dynQuality = signal(0.92);
  readonly dynWidth = signal(0);
  readonly dynHeight = signal(0);
  readonly dynOutput = signal('');
  readonly dynDimensions = signal({ width: 0, height: 0 });

  readonly basicHtml = `<rui-cropper
  [src]="'https://picsum.photos/800/600'"
  [rotationMin]="-10"
  [rotationMax]="10"
  [(croppedImage)]="cropped"
/>`;

  readonly basicTs = `import { RuiCropper, RuiCropperResult } from '@all-the.rest/mat-extended/cropper';
import { signal } from '@angular/core';

@Component({ imports: [RuiCropper], /* ... */ })
export class MyComponent {
  cropped = signal('');

  onCrop(result: RuiCropperResult) {
    console.log(result.width, result.height);
  }
}`;

  readonly squareHtml = `<div class="w-80 h-80">
  <rui-cropper
    [src]="'...'"
    [aspectRatio]="'1:1'"
  />
</div>`;

  readonly freeHtml = `<div class="aspect-[4/3] max-w-2xl">
  <rui-cropper
    [src]="'...'"
    [aspectRatio]="'free'"
  />
</div>`;

  readonly errorHtml = `<rui-cropper
  [src]="imageUrl"
  (loadError)="handleError($event)"
/>`;

  readonly dynHtml = `<rui-cropper
  [src]="'...'"
  [aspectRatio]="aspect()"
  [outputFormat]="'image/png'"
  [outputQuality]="0.92"
  [(croppedImage)]="cropped"
/>`;

  readonly positionHtml = `<rui-cropper toolbarPosition="top" />

<rui-cropper toolbarPosition="bottom" />

<rui-cropper toolbarPosition="left" />

<rui-cropper toolbarPosition="right" />`;

  onBasicCrop(result: RuiCropperResult): void {
    this.basicDimensions.set({ width: result.width, height: result.height });
  }

  onSquareCrop(result: RuiCropperResult): void {
    this.squareResult.set(result);
  }

  onFreeCrop(result: RuiCropperResult): void {
    this.freeResult.set(result);
  }

  onDynCrop(result: RuiCropperResult): void {
    this.dynDimensions.set({ width: result.width, height: result.height });
  }

  readonly fixedResult = signal<RuiCropperResult | null>(null);

  readonly fixedWidthHtml = `<rui-cropper
  [src]="'...'"
  [width]="600"
  [aspectRatio]="'16:9'"
/>`;

  onFixedCrop(result: RuiCropperResult): void {
    this.fixedResult.set(result);
  }
}
