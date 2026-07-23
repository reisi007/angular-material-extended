import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiCropperGridOverlay } from './cropper-grid-overlay.component';

describe('RuiCropperGridOverlay', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiCropperGridOverlay, NoopAnimationsModule],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders SVG element', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg.rui-cropper-grid-overlay');
    expect(svg).toBeTruthy();
  });

  it('renders grid pattern with correct spacing', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    fixture.componentRef.setInput('spacing', 20);
    fixture.detectChanges();

    const pattern = fixture.nativeElement.querySelector('pattern');
    expect(pattern).toBeTruthy();
    expect(pattern.getAttribute('width')).toBe('20');
    expect(pattern.getAttribute('height')).toBe('20');
  });

  it('renders 4 thirds lines when showThirds is true', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    fixture.componentRef.setInput('showThirds', true);
    fixture.detectChanges();

    const lines = fixture.nativeElement.querySelectorAll('line');
    expect(lines.length).toBe(4);
  });

  it('does not render thirds lines when showThirds is false', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    fixture.componentRef.setInput('showThirds', false);
    fixture.detectChanges();

    const lines = fixture.nativeElement.querySelectorAll('line');
    expect(lines.length).toBe(0);
  });

  it('uses custom color for grid stroke', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    fixture.componentRef.setInput('color', 'rgba(0,0,0,0.5)');
    fixture.detectChanges();

    const path = fixture.nativeElement.querySelector('path');
    expect(path.getAttribute('stroke')).toBe('rgba(0,0,0,0.5)');
  });

  it('uses custom color for thirds lines', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    fixture.componentRef.setInput('thirdsColor', 'red');
    fixture.componentRef.setInput('showThirds', true);
    fixture.detectChanges();

    const lines = fixture.nativeElement.querySelectorAll('line');
    for (const line of Array.from(lines) as HTMLElement[]) {
      expect(line.getAttribute('stroke')).toBe('red');
    }
  });

  it('generates unique pattern ID', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    fixture.detectChanges();

    const pattern = fixture.nativeElement.querySelector('pattern');
    const id = pattern.getAttribute('id');
    expect(id).toMatch(/^rui-grid-/);
  });

  it('computes grid path from spacing input', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('spacing', 15);
    fixture.detectChanges();

    expect(comp.gridPath()).toBe('M 15 0 L 0 0 0 15');
  });

  it('computes patternId from uid', () => {
    const fixture = TestBed.createComponent(RuiCropperGridOverlay);
    const comp = fixture.componentInstance;

    expect(comp.patternId()).toMatch(/^rui-grid-/);
  });
});
