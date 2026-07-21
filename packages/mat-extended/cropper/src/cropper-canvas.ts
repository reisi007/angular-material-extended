import { RuiCropRect } from './cropper.types';

export class RuiCropperCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private image: HTMLImageElement | null = null;
  private zoom = 1;
  private rotation = 0;
  private cropRect: RuiCropRect;
  private aspectRatio: number | null = null;

  readonly imageWidth: number = 0;
  readonly imageHeight: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2D context');
    this.ctx = ctx;
    this.cropRect = { x: 0, y: 0, width: 1, height: 1 };
  }

  async loadImage(src: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.image = img;
        (this as { imageWidth: number }).imageWidth = img.naturalWidth;
        (this as { imageHeight: number }).imageHeight = img.naturalHeight;
        const scaleX = this.canvas.width / img.naturalWidth;
        const scaleY = this.canvas.height / img.naturalHeight;
        this.zoom = Math.min(scaleX, scaleY);
        this.cropRect = { x: 0, y: 0, width: 1, height: 1 };
        this.render();
        resolve();
      };
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      img.src = src;
    });
  }

  setZoom(zoom: number): void {
    this.zoom = Math.min(10, Math.max(0.1, zoom));
  }

  getZoom(): number {
    return this.zoom;
  }

  setRotation(degrees: number): void {
    this.rotation = ((degrees % 360) + 360) % 360;
  }

  getRotation(): number {
    return this.rotation;
  }

  setCropRect(rect: RuiCropRect): void {
    this.cropRect = { ...rect };
  }

  getCropRect(): RuiCropRect {
    return { ...this.cropRect };
  }

  setAspectRatio(ratio: number | null): void {
    this.aspectRatio = ratio;
    if (ratio === null) return;
    const currentRatio = this.cropRect.width / this.cropRect.height;
    if (Math.abs(currentRatio - ratio) < 0.0001) return;
    if (currentRatio > ratio) {
      const newWidth = this.cropRect.height * ratio;
      const dx = (this.cropRect.width - newWidth) / 2;
      this.cropRect.x += dx;
      this.cropRect.width = newWidth;
    } else {
      const newHeight = this.cropRect.width / ratio;
      const dy = (this.cropRect.height - newHeight) / 2;
      this.cropRect.y += dy;
      this.cropRect.height = newHeight;
    }
  }

  getAspectRatio(): number | null {
    return this.aspectRatio;
  }

  render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (!this.image) return;

    const displayW = this.imageWidth * this.zoom;
    const displayH = this.imageHeight * this.zoom;
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    this.ctx.save();
    this.ctx.translate(cx, cy);
    this.ctx.rotate((this.rotation * Math.PI) / 180);
    this.ctx.translate(-cx, -cy);

    const imgX = cx - displayW / 2;
    const imgY = cy - displayH / 2;
    this.ctx.drawImage(this.image, imgX, imgY, displayW, displayH);
    this.ctx.restore();

    const cropPixels = {
      x: this.cropRect.x * displayW + imgX,
      y: this.cropRect.y * displayH + imgY,
      w: this.cropRect.width * displayW,
      h: this.cropRect.height * displayH,
    };

    this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
    this.ctx.fillRect(0, 0, this.canvas.width, cropPixels.y);
    this.ctx.fillRect(0, cropPixels.y + cropPixels.h, this.canvas.width, this.canvas.height - cropPixels.y - cropPixels.h);
    this.ctx.fillRect(0, cropPixels.y, cropPixels.x, cropPixels.h);
    this.ctx.fillRect(cropPixels.x + cropPixels.w, cropPixels.y, this.canvas.width - cropPixels.x - cropPixels.w, cropPixels.h);

    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([5, 5]);
    this.ctx.strokeRect(cropPixels.x, cropPixels.y, cropPixels.w, cropPixels.h);
    this.ctx.setLineDash([]);

    const handleSize = 8;
    const handles = [
      { x: cropPixels.x, y: cropPixels.y },
      { x: cropPixels.x + cropPixels.w, y: cropPixels.y },
      { x: cropPixels.x, y: cropPixels.y + cropPixels.h },
      { x: cropPixels.x + cropPixels.w, y: cropPixels.y + cropPixels.h },
    ];
    this.ctx.fillStyle = 'white';
    for (const h of handles) {
      this.ctx.fillRect(h.x - handleSize / 2, h.y - handleSize / 2, handleSize, handleSize);
    }
  }

  getOutput(format: string, quality: number): string {
    const pixelWidth = this.cropRect.width * this.imageWidth;
    const pixelHeight = this.cropRect.height * this.imageHeight;
    const offscreen = document.createElement('canvas');
    offscreen.width = pixelWidth;
    offscreen.height = pixelHeight;
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) throw new Error('Could not get offscreen 2D context');

    const cropPixelX = this.cropRect.x * this.imageWidth;
    const cropPixelY = this.cropRect.y * this.imageHeight;

    offCtx.save();
    offCtx.translate(pixelWidth / 2, pixelHeight / 2);
    offCtx.rotate((this.rotation * Math.PI) / 180);
    offCtx.translate(-pixelWidth / 2, -pixelHeight / 2);
    offCtx.drawImage(
      this.image!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
      cropPixelX,
      cropPixelY,
      pixelWidth,
      pixelHeight,
      0,
      0,
      pixelWidth,
      pixelHeight,
    );
    offCtx.restore();

    return offscreen.toDataURL(format, quality);
  }
}
