import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RuiCropper } from './cropper';

vi.mock('./cropper-canvas', () => ({
  RuiCropperCanvas: vi.fn().mockImplementation(() => ({
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
    imageWidth: 800,
    imageHeight: 600,
  })),
}));

describe('RuiCropper', () => {
  beforeEach(async () => {
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

  it('changes aspect ratio via select', () => {
    const fixture = TestBed.createComponent(RuiCropper);
    fixture.detectChanges();
    const comp = fixture.componentInstance;

    const select = fixture.nativeElement.querySelector('select');
    expect(select).toBeTruthy();

    select.value = '16:9';
    select.dispatchEvent(new Event('change'));
    expect(comp.aspectRatio()).toBe('free');
  });
});
