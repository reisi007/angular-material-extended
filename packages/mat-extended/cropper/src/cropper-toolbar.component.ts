import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RuiAspectRatioPreset } from './cropper.types';

@Component({
  selector: 'rui-cropper-toolbar',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './cropper-toolbar.component.scss',
  template: `
    @if (imageLoaded()) {
      <div
        class="rui-cropper-toolbar"
        [class.rui-cropper-toolbar--horizontal]="orientation() === 'horizontal'"
        [class.rui-cropper-toolbar--vertical]="orientation() === 'vertical'">

        <div class="rui-cropper-toolbar__group">
          <button type="button" class="rui-cropper-toolbar__btn rui-cropper-toolbar__btn--primary" (click)="zoomIn.emit()" aria-label="Zoom in">+</button>
          <button type="button" class="rui-cropper-toolbar__btn rui-cropper-toolbar__btn--primary" (click)="zoomOut.emit()" aria-label="Zoom out">−</button>
          <span class="rui-cropper-toolbar__value">{{ zoomLevel() }}%</span>
        </div>

        <div class="rui-cropper-toolbar__group">
          <button type="button" class="rui-cropper-toolbar__btn rui-cropper-toolbar__btn--tertiary" (click)="rotateLeft.emit()" aria-label="Rotate left 90°">↺</button>
          <button type="button" class="rui-cropper-toolbar__btn rui-cropper-toolbar__btn--tertiary" (click)="rotateRight.emit()" aria-label="Rotate right 90°">↻</button>
          <input
            type="range"
            class="rui-cropper-toolbar__slider"
            [min]="rotationMin()"
            [max]="rotationMax()"
            [step]="1"
            [value]="rotationAngle()"
            (pointerdown)="rotationStart.emit()"
            (input)="onRotateSlider($event)"
            (change)="rotationEnd.emit()"
            aria-label="Fine rotation"
          />
          <span class="rui-cropper-toolbar__value rui-cropper-toolbar__value--narrow">{{ rotationAngle() }}°</span>
          <span class="rui-cropper-toolbar__rotation-info">/ {{ totalRotation() }}°</span>
        </div>

        @if (!isAspectRatioFixed()) {
          <div class="rui-cropper-toolbar__group" style="gap: 4px">
            <label class="rui-cropper-toolbar__select-label">
              Aspect
              <select class="rui-cropper-toolbar__select" (change)="onAspectChange($event)" aria-label="Aspect ratio">
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
