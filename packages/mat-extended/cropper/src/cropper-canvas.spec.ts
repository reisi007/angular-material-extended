import { describe, it, expect, vi, afterEach } from 'vitest';
import { RuiCropperCanvas } from './cropper-canvas';

function createMockImage(width: number, height: number): HTMLImageElement {
  const img = document.createElement('img');
  Object.defineProperty(img, 'naturalWidth', { value: width, configurable: true });
  Object.defineProperty(img, 'naturalHeight', { value: height, configurable: true });
  setTimeout(() => {
    if (typeof img.onload === 'function') {
      img.onload(new Event('load'));
    }
  });
  return img;
}

describe('RuiCropperCanvas', () => {
  function createCanvas(): HTMLCanvasElement {
    const c = document.createElement('canvas');
    c.width = 800;
    c.height = 600;
    return c;
  }

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('constructor sets default cropRect to full image', () => {
    const cropper = new RuiCropperCanvas(createCanvas());
    const rect = cropper.getCropRect();
    expect(rect.x).toBe(0);
    expect(rect.y).toBe(0);
    expect(rect.width).toBe(1);
    expect(rect.height).toBe(1);
  });

  it('loadImage resolves and sets image dimensions', async () => {
    vi.stubGlobal('Image', vi.fn().mockImplementation(() => createMockImage(800, 600)));

    const cropper = new RuiCropperCanvas(createCanvas());
    await cropper.loadImage('test.jpg');

    expect(cropper.imageWidth).toBe(800);
    expect(cropper.imageHeight).toBe(600);
    expect(cropper.getZoom()).toBeGreaterThan(0);
    const rect = cropper.getCropRect();
    expect(rect.x).toBe(0);
    expect(rect.y).toBe(0);
    expect(rect.width).toBe(1);
    expect(rect.height).toBe(1);
  });

  it('setZoom/getZoom work correctly', () => {
    const cropper = new RuiCropperCanvas(createCanvas());

    cropper.setZoom(2);
    expect(cropper.getZoom()).toBe(2);

    cropper.setZoom(0.05);
    expect(cropper.getZoom()).toBe(0.1);

    cropper.setZoom(15);
    expect(cropper.getZoom()).toBe(10);

    cropper.setZoom(0.1);
    expect(cropper.getZoom()).toBe(0.1);

    cropper.setZoom(10);
    expect(cropper.getZoom()).toBe(10);
  });

  it('setRotation/getRotation work correctly (normalized)', () => {
    const cropper = new RuiCropperCanvas(createCanvas());

    cropper.setRotation(90);
    expect(cropper.getRotation()).toBe(90);

    cropper.setRotation(450);
    expect(cropper.getRotation()).toBe(90);

    cropper.setRotation(-90);
    expect(cropper.getRotation()).toBe(270);

    cropper.setRotation(0);
    expect(cropper.getRotation()).toBe(0);

    cropper.setRotation(360);
    expect(cropper.getRotation()).toBe(0);
  });

  it('setCropRect/getCropRect work correctly', () => {
    const cropper = new RuiCropperCanvas(createCanvas());
    const rect = { x: 0.1, y: 0.2, width: 0.5, height: 0.6 };

    cropper.setCropRect(rect);
    const result = cropper.getCropRect();

    expect(result.x).toBe(0.1);
    expect(result.y).toBe(0.2);
    expect(result.width).toBe(0.5);
    expect(result.height).toBe(0.6);
    expect(result).not.toBe(rect);
  });

  it('setAspectRatio adjusts cropRect', () => {
    const cropper = new RuiCropperCanvas(createCanvas());
    cropper.setCropRect({ x: 0, y: 0, width: 0.8, height: 0.6 });
    cropper.setAspectRatio(1);

    const rect = cropper.getCropRect();
    expect(rect.width).toBeCloseTo(0.6);
    expect(rect.height).toBeCloseTo(0.6);
    expect(rect.x).toBeCloseTo(0.1);
    expect(rect.y).toBe(0);
    expect(cropper.getAspectRatio()).toBe(1);
  });

  it('render does not throw', () => {
    const cropper = new RuiCropperCanvas(createCanvas());
    expect(() => cropper.render()).not.toThrow();
  });

  it('getOutput returns a data URL string', async () => {
    vi.stubGlobal('Image', vi.fn().mockImplementation(() => createMockImage(100, 100)));

    const cropper = new RuiCropperCanvas(createCanvas());
    await cropper.loadImage('test.jpg');

    const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = vi.fn().mockReturnValue('data:image/png;base64,mockdata');

    const result = cropper.getOutput('image/png', 0.92);
    expect(result).toBe('data:image/png;base64,mockdata');

    HTMLCanvasElement.prototype.toDataURL = originalToDataURL;
  });
});
