export type RuiCropperDragMode = 'none' | 'move' | 'resize-nw' | 'resize-ne' | 'resize-sw' | 'resize-se';

export class RuiCropperInteraction {
  mode: RuiCropperDragMode = 'none';
  startX = 0;
  startY = 0;
  startCropRect: { x: number; y: number; width: number; height: number } | null = null;
  startZoom = 1;
  startPinchDist = 0;

  beginMove(x: number, y: number, currentRect: { x: number; y: number; width: number; height: number }): void {
    this.mode = 'move';
    this.startX = x;
    this.startY = y;
    this.startCropRect = { ...currentRect };
  }

  beginResize(
    handle: 'nw' | 'ne' | 'sw' | 'se',
    x: number,
    y: number,
    currentRect: { x: number; y: number; width: number; height: number },
  ): void {
    this.mode = `resize-${handle}` as RuiCropperDragMode;
    this.startX = x;
    this.startY = y;
    this.startCropRect = { ...currentRect };
  }

  updateRect(
    x: number,
    y: number,
    _canvasWidth: number,
    _canvasHeight: number,
    aspectRatio: number | null,
  ): { x: number; y: number; width: number; height: number } {
    if (!this.startCropRect) {
      return { x: 0, y: 0, width: 1, height: 1 };
    }

    const dx = x - this.startX;
    const dy = y - this.startY;
    const start = this.startCropRect;

    let rect = { ...start };

    switch (this.mode) {
      case 'move': {
        rect.x = start.x + dx;
        rect.y = start.y + dy;
        break;
      }
      case 'resize-nw': {
        rect.x = start.x + dx;
        rect.y = start.y + dy;
        rect.width = start.width - dx;
        rect.height = start.height - dy;
        break;
      }
      case 'resize-ne': {
        rect.y = start.y + dy;
        rect.width = start.width + dx;
        rect.height = start.height - dy;
        break;
      }
      case 'resize-sw': {
        rect.x = start.x + dx;
        rect.width = start.width - dx;
        rect.height = start.height + dy;
        break;
      }
      case 'resize-se': {
        rect.width = start.width + dx;
        rect.height = start.height + dy;
        break;
      }
    }

    if (aspectRatio !== null) {
      rect = this._applyAspectRatio(rect, aspectRatio, start);
    }

    if (rect.width < 0.005) rect.width = 0.005;
    if (rect.height < 0.005) rect.height = 0.005;
    if (rect.x < 0) rect.x = 0;
    if (rect.y < 0) rect.y = 0;
    if (rect.x + rect.width > 1) rect.x = 1 - rect.width;
    if (rect.y + rect.height > 1) rect.y = 1 - rect.height;

    return rect;
  }

  end(): void {
    this.mode = 'none';
  }

  beginPinch(dist: number, currentZoom: number): void {
    this.startPinchDist = dist;
    this.startZoom = currentZoom;
  }

  updatePinch(dist: number): number {
    if (this.startPinchDist === 0) return this.startZoom;
    return this.startZoom * (dist / this.startPinchDist);
  }

  reset(): void {
    this.mode = 'none';
    this.startX = 0;
    this.startY = 0;
    this.startCropRect = null;
    this.startZoom = 1;
    this.startPinchDist = 0;
  }

  private _applyAspectRatio(
    rect: { x: number; y: number; width: number; height: number },
    ratio: number,
    start: { x: number; y: number; width: number; height: number },
  ): { x: number; y: number; width: number; height: number } {
    const w = Math.max(0.005, rect.width);
    const h = w / ratio;

    switch (this.mode) {
      case 'resize-se':
        return { x: start.x, y: start.y, width: w, height: h };
      case 'resize-nw': {
        const ax = start.x + start.width;
        const ay = start.y + start.height;
        return { x: ax - w, y: ay - h, width: w, height: h };
      }
      case 'resize-ne': {
        const ay = start.y + start.height;
        return { x: start.x, y: ay - h, width: w, height: h };
      }
      case 'resize-sw': {
        const ax = start.x + start.width;
        return { x: ax - w, y: start.y, width: w, height: h };
      }
      default:
        return rect;
    }
  }
}
