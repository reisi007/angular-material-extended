import { describe, it, expect, vi, afterEach } from 'vitest';
import { RuiCropperCanvas } from './cropper-canvas';
import { createCanvas } from 'canvas';

function generateTestImageDataUrl(width: number, height: number): string {
  const c = createCanvas(width, height);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(0, 0, width / 2, height / 2);
  ctx.fillStyle = '#00ff00';
  ctx.fillRect(width / 2, 0, width / 2, height / 2);
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(0, height / 2, width / 2, height / 2);
  ctx.fillStyle = '#ffff00';
  ctx.fillRect(width / 2, height / 2, width / 2, height / 2);
  return c.toDataURL('image/png');
}

describe('RuiCropperCanvas', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  function createCanvasEl(w = 800, h = 600): HTMLCanvasElement {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }

  it('constructor sets centered default cropRect', () => {
    const cropper = new RuiCropperCanvas(createCanvasEl());
    const rect = cropper.getCropRect();
    expect(rect.x).toBe(0.25);
    expect(rect.y).toBe(0.25);
    expect(rect.width).toBe(0.5);
    expect(rect.height).toBe(0.5);
  });

  it('loadImage resolves and sets image dimensions', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl());
    await cropper.loadImage(generateTestImageDataUrl(800, 600));

    expect(cropper.imageWidth).toBe(800);
    expect(cropper.imageHeight).toBe(600);
    expect(cropper.getZoom()).toBeGreaterThan(0);
    const rect = cropper.getCropRect();
    expect(rect.x).toBe(0.25);
    expect(rect.y).toBe(0.25);
    expect(rect.width).toBe(0.5);
    expect(rect.height).toBe(0.5);
  });

  it('setZoom/getZoom work correctly', () => {
    const cropper = new RuiCropperCanvas(createCanvasEl());

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
    const cropper = new RuiCropperCanvas(createCanvasEl());

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
    const cropper = new RuiCropperCanvas(createCanvasEl());
    const rect = { x: 0.1, y: 0.2, width: 0.5, height: 0.6 };

    cropper.setCropRect(rect);
    const result = cropper.getCropRect();

    expect(result.x).toBe(0.1);
    expect(result.y).toBe(0.2);
    expect(result.width).toBe(0.5);
    expect(result.height).toBe(0.6);
    expect(result).not.toBe(rect);
  });

  it('setAspectRatio adjusts cropRect accounting for viewport', () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    cropper.setCropRect({ x: 0, y: 0, width: 0.8, height: 0.6 });
    cropper.setAspectRatio(1);

    const rect = cropper.getCropRect();
    expect(rect.width).toBeCloseTo(0.45);
    expect(rect.height).toBeCloseTo(0.6);
    expect(rect.x).toBeCloseTo(0.175);
    expect(rect.y).toBe(0);
    expect(cropper.getAspectRatio()).toBe(1);
  });

  it('render does not throw with image', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl());
    await cropper.loadImage(generateTestImageDataUrl(100, 100));
    expect(() => cropper.render()).not.toThrow();
  });

  it('getOutput returns a data URL string', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    await cropper.loadImage(generateTestImageDataUrl(100, 100));
    const result = cropper.getOutput('image/png', 0.92);
    expect(result).toContain('data:image/png;base64,');
  });

  it('getCropPixelSize returns correct pixel dimensions', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    await cropper.loadImage(generateTestImageDataUrl(200, 150));
    cropper.setCropRect({ x: 0.25, y: 0.25, width: 0.5, height: 0.5 });

    const size = cropper.getCropPixelSize();
    expect(size.width).toBeGreaterThan(0);
    expect(size.height).toBeGreaterThan(0);
  });

  it('getDisplayWidth/Height return viewport dimensions', () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    expect(cropper.getDisplayWidth()).toBe(800);
    expect(cropper.getDisplayHeight()).toBe(600);
  });

  it('getImageBoundsInView returns full viewport when no image', () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;

    const bounds = cropper.getImageBoundsInView();
    expect(bounds.left).toBe(0);
    expect(bounds.top).toBe(0);
    expect(bounds.right).toBe(800);
    expect(bounds.bottom).toBe(600);
  });

  it('getImageBoundsInView returns viewport-sized bounds at fit zoom with rotation 0', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    await cropper.loadImage(generateTestImageDataUrl(800, 600));

    cropper.setZoom(1);
    cropper.setRotation(0);

    const bounds = cropper.getImageBoundsInView();
    expect(bounds.left).toBe(0);
    expect(bounds.top).toBe(0);
    expect(bounds.right).toBe(800);
    expect(bounds.bottom).toBe(600);
  });

  it('getImageBoundsInView returns centered bounds when image is smaller than viewport', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    await cropper.loadImage(generateTestImageDataUrl(400, 300));

    cropper.setZoom(1);
    cropper.setRotation(0);

    const bounds = cropper.getImageBoundsInView();

    expect(bounds.left).toBeGreaterThan(0);
    expect(bounds.left).toBeLessThan(400);
    expect(bounds.top).toBeGreaterThan(0);
    expect(bounds.top).toBeLessThan(300);
    expect(bounds.right).toBeLessThan(800);
    expect(bounds.right).toBeGreaterThan(400);
    expect(bounds.bottom).toBeLessThan(600);
    expect(bounds.bottom).toBeGreaterThan(300);

    const imw = bounds.right - bounds.left;
    const imh = bounds.bottom - bounds.top;
    expect(imw).toBeCloseTo(400, -1);
    expect(imh).toBeCloseTo(300, -1);
  });

  it('getImageBoundsInView returns tighter inscribed bounds at 45° rotation (no empty corners)', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    await cropper.loadImage(generateTestImageDataUrl(800, 600));

    cropper.setZoom(1);
    cropper.setRotation(45);

    const fitScale = cropper.getRotationFitScale();
    expect(fitScale).toBeGreaterThan(1);

    const bounds = cropper.getImageBoundsInView();

    expect(bounds.left).toBe(0);
    expect(bounds.top).toBe(0);
    expect(bounds.right).toBe(800);
    expect(bounds.bottom).toBe(600);
  });

  it('getImageBoundsInView clamps to viewport when inscribed bounds exceed it', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    await cropper.loadImage(generateTestImageDataUrl(800, 600));

    cropper.setZoom(3);
    cropper.setRotation(30);

    const bounds = cropper.getImageBoundsInView();

    expect(bounds.left).toBe(0);
    expect(bounds.top).toBe(0);
    expect(bounds.right).toBe(800);
    expect(bounds.bottom).toBe(600);
  });

  it('getImageBoundsInView returns correct inscribed bounds at 10°', async () => {
    const cropper = new RuiCropperCanvas(createCanvasEl(800, 600));
    cropper.displayWidth = 800;
    cropper.displayHeight = 600;
    await cropper.loadImage(generateTestImageDataUrl(800, 600));

    cropper.setZoom(1);
    cropper.setRotation(10);

    const bounds = cropper.getImageBoundsInView();
    const insw = bounds.right - bounds.left;
    const insh = bounds.bottom - bounds.top;

    expect(insw).toBeGreaterThanOrEqual(750);
    expect(insh).toBeGreaterThanOrEqual(550);
    expect(insw).toBeLessThanOrEqual(800);
    expect(insh).toBeLessThanOrEqual(600);
  });
});
