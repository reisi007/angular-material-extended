import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RuiAspectRatioPreset } from './cropper.types';

@Component({
  selector: 'rui-cropper-toolbar',
  standalone: true,
  imports: [FormsModule, NgClass],
  template: `
    @if (imageLoaded()) {
      <div
        class="flex bg-[var(--mat-sys-surface-container-lowest)] border-[var(--mat-sys-outline-variant)]"
        [ngClass]="orientation() === 'horizontal' ? 'flex-wrap items-center gap-3 p-3 border-t shadow-sm' : 'flex-col gap-2 p-3 border-l shadow-sm'">

        <div class="flex items-center gap-2">
          <button type="button" class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--mat-sys-primary)] text-[var(--mat-sys-on-primary)] cursor-pointer text-sm font-medium leading-none transition-shadow hover:shadow-md" (click)="zoomIn.emit()" aria-label="Zoom in">+</button>
          <button type="button" class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--mat-sys-primary)] text-[var(--mat-sys-on-primary)] cursor-pointer text-sm font-medium leading-none transition-shadow hover:shadow-md" (click)="zoomOut.emit()" aria-label="Zoom out">−</button>
          <span class="min-w-[4ch] text-xs font-medium text-[var(--mat-sys-on-surface-variant)] tabular-nums">{{ zoomLevel() }}%</span>
        </div>

        <div class="flex items-center gap-2">
          <button type="button" class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--mat-sys-tertiary)] text-[var(--mat-sys-on-tertiary)] cursor-pointer text-sm font-medium leading-none transition-shadow hover:shadow-md" (click)="rotateLeft.emit()" aria-label="Rotate left 90°">↺</button>
          <button type="button" class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--mat-sys-tertiary)] text-[var(--mat-sys-on-tertiary)] cursor-pointer text-sm font-medium leading-none transition-shadow hover:shadow-md" (click)="rotateRight.emit()" aria-label="Rotate right 90°">↻</button>
          <input
            type="range"
            class="w-24 accent-[var(--mat-sys-primary)]"
            [min]="rotationMin()"
            [max]="rotationMax()"
            [step]="1"
            [value]="rotationAngle()"
            (pointerdown)="rotationStart.emit()"
            (input)="onRotateSlider($event)"
            (change)="rotationEnd.emit()"
            aria-label="Fine rotation"
          />
          <span class="min-w-[3ch] text-xs font-medium text-[var(--mat-sys-on-surface-variant)] tabular-nums">{{ rotationAngle() }}°</span>
          <span class="text-xs text-[var(--mat-sys-on-surface-variant)]">/ {{ totalRotation() }}°</span>
        </div>

        @if (!isAspectRatioFixed()) {
          <div class="flex items-center gap-1">
            <label class="text-xs font-medium text-[var(--mat-sys-on-surface-variant)]">
              Aspect
              <select class="text-xs border border-[var(--mat-sys-outline)] rounded-md bg-[var(--mat-sys-surface)] text-[var(--mat-sys-on-surface)] px-2 py-1 cursor-pointer hover:border-[var(--mat-sys-on-surface-variant)]" (change)="onAspectChange($event)" aria-label="Aspect ratio">
              <option value="free" [selected]="effectiveAspectRatio() === 'free'">Free</option>
              <option value="1:1" [selected]="effectiveAspectRatio() === '1:1'">1:1</option>
              <option value="4:3" [selected]="effectiveAspectRatio() === '4:3'">4:3</option>
              <option value="16:9" [selected]="effectiveAspectRatio() === '16:9'">16:9</option>
            </select>
            </label>
          </div>
        }
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiCropperToolbar {
  readonly imageLoaded = input(false);
  readonly zoomLevel = input(0);
  readonly rotationAngle = input(0);
  readonly totalRotation = input(0);
  readonly isAspectRatioFixed = input(false);
  readonly effectiveAspectRatio = input<RuiAspectRatioPreset>('free');
  readonly rotationMin = input<number>(-45);
  readonly rotationMax = input<number>(45);
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');

  readonly zoomIn = output<void>();
  readonly zoomOut = output<void>();
  readonly rotateLeft = output<void>();
  readonly rotateRight = output<void>();
  readonly rotationChange = output<number>();
  readonly aspectChange = output<RuiAspectRatioPreset>();
  readonly rotationStart = output<void>();
  readonly rotationEnd = output<void>();

  onRotateSlider(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.rotationChange.emit(Number(input.value));
  }

  onAspectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.aspectChange.emit(select.value as RuiAspectRatioPreset);
  }
}
