import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RuiCropper } from './cropper';
import type { RuiCropperInteraction } from './cropper-interaction';

interface CropperTestHandle {
  _initCanvas(): void;
  _emitResult(): Promise<void>;
  _onTouchStart(event: { touches: Array<{ clientX: number; clientY: number }>; preventDefault: () => void }): void;
  _onTouchMove(event: { touches: Array<{ clientX: number; clientY: number }>; preventDefault: () => void }): void;
  _onTouchEnd(): void;
  _interaction: RuiCropperInteraction;
}

function asCropper(comp: RuiCropper): CropperTestHandle {
  return comp as unknown as CropperTestHandle;
}

const { mockCanvas } = vi.hoisted(() => {
  const mc = {
    loadImage: vi.fn().mockResolvedValue(undefined),
    setZoom: vi.fn(),
    getZoom: vi.fn().mockReturnValue(1),
    setRotation: vi.fn(),
    getRotation: vi.fn().mockReturnValue(0),
    setCropRect: vi.fn(),
    getCropRect: vi.fn().mockReturnValue({ x: 0, y: 0, width: 1, height: 1 }),
    setAspectRatio: vi.fn(),
    getAspectRatio: vi.fn().mockReturnValue(null),
    render: vi.fn(),
    getOutput: vi.fn().mockReturnValue('data:image/png;base64,test'),
    getOutputBlob: vi.fn().mockResolvedValue(new Blob(['test'], { type: 'image/png' })),
    imageWidth: 800,
    imageHeight: 600,
  };
  return { mockCanvas: mc };
});

vi.mock('./cropper-canvas', () => {
  function RuiCropperCanvas() {
    return mockCanvas;
  }
  return { RuiCropperCanvas };
});

describe('RuiCropper', () => {
  beforeEach(async () => {
    mockCanvas.loadImage.mockReset();
    mockCanvas.loadImage.mockResolvedValue(undefined);
    mockCanvas.getOutputBlob.mockReset();
    mockCanvas.getOutputBlob.mockResolvedValue(new Blob(['test'], { type: 'image/png' }));
    mockCanvas.getCropRect.mockReset();
    mockCanvas.getCropRect.mockReturnValue({ x: 0, y: 0, width: 1, height: 1 });
    await TestBed.configureTestingModule({
      imports: [RuiCropper],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has canvas element in view', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    fixture.detectChanges();
    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });

  it('zooms in and out correctly', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;

    expect(comp.zoomLevel()).toBe(100);

    comp.zoomIn();
    expect(comp.zoomLevel()).toBe(110);

    comp.zoomOut();
    expect(comp.zoomLevel()).toBe(100);

    comp.zoomOut();
    expect(comp.zoomLevel()).toBe(90);
  });

  it('rotates the image', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;

    expect(comp.rotation()).toBe(0);

    comp.rotate(90);
    expect(comp.rotation()).toBe(90);

    comp.rotate(-90);
    expect(comp.rotation()).toBe(0);

    comp.rotate(90);
    comp.rotate(90);
    comp.rotate(90);
    comp.rotate(90);
    expect(comp.rotation()).toBe(0);
  });

  it('changes effective aspect ratio via select', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    fixture.detectChanges();
    const comp = fixture.componentInstance;

    comp.imageLoaded.set(true);
    fixture.detectChanges();

    const select = fixture.nativeElement.querySelector('select');
    expect(select).toBeTruthy();

    select.value = '16:9';
    select.dispatchEvent(new Event('change'));
    expect(comp.effectiveAspectRatio()).toBe('16:9');
  });

  it('emits loadError on image load failure', async () => {
    mockCanvas.loadImage.mockRejectedValue(new Error('load failed'));
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    fixture.detectChanges();

    asCropper(comp)._initCanvas();
    fixture.detectChanges();

    fixture.componentRef.setInput('src', 'bad-url');
    fixture.detectChanges();
    await new Promise(resolve => setTimeout(resolve, 0));
    fixture.detectChanges();

    expect(comp.imageLoaded()).toBe(false);
  });

  it('emits result with blob via _emitResult', async () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    fixture.detectChanges();

    asCropper(comp)._initCanvas();
    fixture.detectChanges();

    const emitSpy = vi.fn();
    comp.cropChange.subscribe(emitSpy);

    await asCropper(comp)._emitResult();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    const result = emitSpy.mock.calls[0][0];
    expect(result.dataUrl).toBe('data:image/png;base64,test');
    expect(result.blob).toBeInstanceOf(Blob);
  });

  it('passes outputWidth/outputHeight to canvas engine', async () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    fixture.detectChanges();

    asCropper(comp)._initCanvas();
    fixture.componentRef.setInput('outputWidth', 400);
    fixture.componentRef.setInput('outputHeight', 300);

    await asCropper(comp)._emitResult();

    expect(mockCanvas.getOutput).toHaveBeenCalledWith('image/png', 0.92, 400, 300);
    expect(mockCanvas.getOutputBlob).toHaveBeenCalledWith('image/png', 0.92, 400, 300);
  });

  it('clamps keyboard move to viewport bounds', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    fixture.detectChanges();

    asCropper(comp)._initCanvas();
    mockCanvas.getCropRect.mockReturnValue({ x: 0, y: 0, width: 0.5, height: 0.5 });

    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    comp.onKeydown(event);

    expect(mockCanvas.setCropRect).toHaveBeenCalledWith(
      expect.objectContaining({ x: 0, y: 0 })
    );
  });

  it('clamps keyboard move to bottom-right bounds', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    fixture.detectChanges();

    asCropper(comp)._initCanvas();
    mockCanvas.getCropRect.mockReturnValue({ x: 0.9, y: 0.9, width: 0.5, height: 0.5 });

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    comp.onKeydown(event);

    expect(mockCanvas.setCropRect).toHaveBeenCalledWith(
      expect.objectContaining({ x: 0.5, y: 0.5 })
    );
  });

  it('handles touch pinch zoom', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    fixture.detectChanges();

    asCropper(comp)._initCanvas();

    const touchStart = { touches: [{ clientX: 100, clientY: 200 }, { clientX: 300, clientY: 200 }], preventDefault: vi.fn() };
    asCropper(comp)._onTouchStart(touchStart);

    const touchMove = { touches: [{ clientX: 50, clientY: 200 }, { clientX: 350, clientY: 200 }], preventDefault: vi.fn() };
    asCropper(comp)._onTouchMove(touchMove);

    expect(comp.zoomLevel()).toBeGreaterThan(100);
  });

  it('resets pinch interaction on touchend', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    fixture.detectChanges();

    asCropper(comp)._initCanvas();

    const touchStart = { touches: [{ clientX: 100, clientY: 200 }, { clientX: 300, clientY: 200 }], preventDefault: vi.fn() };
    asCropper(comp)._onTouchStart(touchStart);

    asCropper(comp)._onTouchEnd();

    const interaction = asCropper(comp)._interaction;
    expect(interaction.mode).toBe('none');
    expect(interaction.startPinchDist).toBe(0);
  });

  it('outputWidth default is 0', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    expect(comp.outputWidth()).toBe(0);
  });

  it('minCropWidth default is 20', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    const comp = fixture.componentInstance;
    expect(comp.minCropWidth()).toBe(20);
  });
});
