import { Component, ElementRef, viewChild, input, model, output, signal, computed, effect, afterNextRender, ChangeDetectionStrategy, inject, DestroyRef, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RuiValueAccessor } from '../../src/common/control-value-accessor';
import { ensureBrowser } from '../../src/common/platform';
import { RuiCropperCanvas } from './cropper-canvas';
import { RuiCropperInteraction } from './cropper-interaction';
import {
  RuiCropperResult,
  RuiOutputFormat,
  RuiAspectRatioPreset,
  RuiCropRect,
} from './cropper.types';
import { RUI_CROPPER_DEFAULT_OPTIONS } from './cropper.config';

@Component({
  selector: 'rui-cropper',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cropper.html',
  styleUrl: './cropper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    tabindex: '0',
    '(keydown)': 'onKeydown($event)',
  },
})
export class RuiCropper extends RuiValueAccessor<string> {
  readonly src = input<string>('');
  readonly aspectRatio = input<RuiAspectRatioPreset>('free');
  readonly overlayTemplate = input<string>('');
  readonly outputFormat = input<RuiOutputFormat>('image/png');
  readonly outputQuality = input<number>(0.92);
  readonly minCropWidth = input<number>(20);
  readonly minCropHeight = input<number>(20);

  readonly croppedImage = model<string>('');
  readonly cropChange = output<RuiCropperResult>();

  readonly imageLoaded = signal(false);
  readonly zoomLevel = signal(100);
  readonly rotation = signal(0);
  readonly isAspectRatioFixed = computed(() => this.aspectRatio() !== 'free');
  readonly effectiveAspectRatio = signal<RuiAspectRatioPreset>('free');
  readonly cropRectStyle = computed(() => {
    const rect = this._canvasEngine?.getCropRect();
    if (!rect) return { x: 0, y: 0, width: 100, height: 100 };
    return {
      x: rect.x * 100,
      y: rect.y * 100,
      width: rect.width * 100,
      height: rect.height * 100,
    };
  });

  readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  readonly viewportRef = viewChild<ElementRef<HTMLDivElement>>('viewport');

  private _interaction = new RuiCropperInteraction();
  private _canvasEngine: RuiCropperCanvas | null = null;
  private _destroyRef = inject(DestroyRef);
  private _ngZone = inject(NgZone);
  private _activeSrc = signal<string>('');
  private _defaults = inject(RUI_CROPPER_DEFAULT_OPTIONS);

  constructor() {
    super();

    effect(() => {
      this._activeSrc.set(this.src());
    });

    effect(() => {
      const src = this._activeSrc();
      if (src && this._canvasEngine) {
        this._loadImage(src);
      }
    });

    effect(() => {
      if (this._canvasEngine) {
        this._canvasEngine.setRotation(this.rotation());
        this._canvasEngine.render();
      }
    });

    effect(() => {
      const ratio = this._resolveAspectRatio(this.effectiveAspectRatio());
      this._canvasEngine?.setAspectRatio(ratio);
      this._canvasEngine?.render();
    });

    effect(() => {
      this.effectiveAspectRatio.set(this.aspectRatio());
    });

    effect(() => {
      if (this._canvasEngine) {
        const ratio = this._resolveAspectRatio(this.effectiveAspectRatio());
        this._canvasEngine.setAspectRatio(ratio);
        this._canvasEngine.render();
      }
    });

    afterNextRender({
      write: () => {
        this._initCanvas();
      },
    });
  }

  override writeValue(value: string | undefined): void {
    super.writeValue(value);
    if (value !== undefined) {
      this._activeSrc.set(value);
    }
  }

  zoomIn(): void {
    this.zoomLevel.update(v => Math.min(1000, v + (this._defaults.zoomStep ?? 0.1) * 100));
  }

  zoomOut(): void {
    this.zoomLevel.update(v => Math.max(10, v - (this._defaults.zoomStep ?? 0.1) * 100));
  }

  rotate(degrees: number): void {
    this.rotation.update(v => (v + degrees + 360) % 360);
  }

  onRotateSlider(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.rotation.set(Number(input.value));
  }

  onAspectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.effectiveAspectRatio.set(select.value as RuiAspectRatioPreset);
  }

  onPointerDown(event: PointerEvent): void {
    if (!this._canvasEngine || !this.imageLoaded()) return;
    const viewport = this.viewportRef()?.nativeElement;
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const currentRect = this._canvasEngine.getCropRect();

    const handle = this._getHandle(x, y, currentRect);
    if (handle) {
      this._interaction.beginResize(handle, x, y, currentRect);
    } else if (this._isInsideRect(x, y, currentRect)) {
      this._interaction.beginMove(x, y, currentRect);
    }

    viewport.setPointerCapture(event.pointerId);
  }

  onPointerMove(event: PointerEvent): void {
    if (this._interaction.mode === 'none' || !this._canvasEngine) return;
    const viewport = this.viewportRef()?.nativeElement;
    if (!viewport) return;

    const rect = viewport.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const ratio = this._resolveAspectRatio(this.aspectRatio());

    const newRect = this._interaction.updateRect(x, y, rect.width, rect.height, ratio);
    this._canvasEngine.setCropRect(newRect);
    this._canvasEngine.render();
  }

  onPointerUp(): void {
    if (this._interaction.mode === 'none') return;
    this._interaction.end();
    this._emitResult();
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this._canvasEngine) return;

    const step = 0.05;
    let moved = false;
    let dx = 0;
    let dy = 0;

    switch (event.key) {
      case 'ArrowUp':
        dy = -step;
        moved = true;
        break;
      case 'ArrowDown':
        dy = step;
        moved = true;
        break;
      case 'ArrowLeft':
        dx = -step;
        moved = true;
        break;
      case 'ArrowRight':
        dx = step;
        moved = true;
        break;
      case '+':
      case '=':
        this.zoomIn();
        return;
      case '-':
      case '_':
        this.zoomOut();
        return;
      case 'r':
        this.rotate(-90);
        return;
      case 'R':
        this.rotate(90);
        return;
    }

    if (moved) {
      event.preventDefault();
      const r = this._canvasEngine.getCropRect();
      this._canvasEngine.setCropRect({
        x: r.x + dx,
        y: r.y + dy,
        width: r.width,
        height: r.height,
      });
      this._canvasEngine.render();
      this._emitResult();
    }
  }

  private _initCanvas(): void {
    if (!ensureBrowser()) return;

    const canvasEl = this.canvasRef()?.nativeElement;
    const viewportEl = this.viewportRef()?.nativeElement;
    if (!canvasEl || !viewportEl) return;

    this._canvasEngine = new RuiCropperCanvas(canvasEl);

    const ro = new ResizeObserver(() => {
      this._canvasEngine?.render();
    });
    ro.observe(viewportEl);
    this._destroyRef.onDestroy(() => ro.disconnect());

    viewportEl.addEventListener('wheel', this._onWheel, { passive: false });
    this._destroyRef.onDestroy(() => {
      viewportEl.removeEventListener('wheel', this._onWheel);
    });

    const initialSrc = this._activeSrc();
    if (initialSrc) {
      this._loadImage(initialSrc);
    }
  }

  private async _loadImage(src: string): Promise<void> {
    if (!this._canvasEngine) return;
    try {
      await this._canvasEngine.loadImage(src);
      this.imageLoaded.set(true);
      this._canvasEngine.setZoom(this.zoomLevel() / 100);
      this._canvasEngine.setRotation(this.rotation());
    const ratio = this._resolveAspectRatio(this.effectiveAspectRatio());
      this._canvasEngine.setAspectRatio(ratio);
      this._canvasEngine.render();
    } catch {
      this.imageLoaded.set(false);
    }
  }

  private _onWheel = (event: WheelEvent): void => {
    event.preventDefault();
    this._ngZone.run(() => {
      if (event.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    });
  };

  private _getHandle(
    x: number,
    y: number,
    rect: RuiCropRect,
  ): 'nw' | 'ne' | 'sw' | 'se' | null {
    const threshold = 0.03;
    const corners = [
      { handle: 'nw' as const, cx: rect.x, cy: rect.y },
      { handle: 'ne' as const, cx: rect.x + rect.width, cy: rect.y },
      { handle: 'sw' as const, cx: rect.x, cy: rect.y + rect.height },
      { handle: 'se' as const, cx: rect.x + rect.width, cy: rect.y + rect.height },
    ];
    for (const corner of corners) {
      if (Math.abs(x - corner.cx) < threshold && Math.abs(y - corner.cy) < threshold) {
        return corner.handle;
      }
    }
    return null;
  }

  private _isInsideRect(x: number, y: number, rect: RuiCropRect): boolean {
    return (
      x >= rect.x &&
      x <= rect.x + rect.width &&
      y >= rect.y &&
      y <= rect.y + rect.height
    );
  }

  private _resolveAspectRatio(preset: RuiAspectRatioPreset): number | null {
    switch (preset) {
      case '1:1':
        return 1;
      case '4:3':
        return 4 / 3;
      case '16:9':
        return 16 / 9;
      case 'free':
        return null;
    }
  }

  private _emitResult(): void {
    if (!this._canvasEngine) return;
    const rect = this._canvasEngine.getCropRect();
    const dataUrl = this._canvasEngine.getOutput(this.outputFormat(), this.outputQuality());
    const result: RuiCropperResult = {
      dataUrl,
      blob: null,
      width: Math.round(rect.width * this._canvasEngine.imageWidth),
      height: Math.round(rect.height * this._canvasEngine.imageHeight),
      format: this.outputFormat(),
    };
    this.croppedImage.set(dataUrl);
    this.cropChange.emit(result);
    this.markAsChanged(dataUrl);
  }
}
