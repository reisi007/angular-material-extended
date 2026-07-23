import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiCropperToolbar } from './cropper-toolbar.component';

describe('RuiCropperToolbar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiCropperToolbar, NoopAnimationsModule],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders toolbar buttons when imageLoaded is true', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('.rui-cropper-toolbar__btn');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('does not render toolbar when imageLoaded is false', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', false);
    fixture.detectChanges();
    const toolbar = fixture.nativeElement.querySelector('.rui-cropper-toolbar');
    expect(toolbar).toBeFalsy();
  });

  it('emits zoomIn on zoom in button click', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.zoomIn.subscribe(spy);

    const buttons = fixture.nativeElement.querySelectorAll('.rui-cropper-toolbar__btn--primary');
    (buttons[0] as HTMLElement).click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits zoomOut on zoom out button click', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.zoomOut.subscribe(spy);

    const buttons = fixture.nativeElement.querySelectorAll('.rui-cropper-toolbar__btn--primary');
    (buttons[1] as HTMLElement).click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits rotateLeft on rotate left button click', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.rotateLeft.subscribe(spy);

    const buttons = fixture.nativeElement.querySelectorAll('.rui-cropper-toolbar__btn--tertiary');
    (buttons[0] as HTMLElement).click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits rotateRight on rotate right button click', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.rotateRight.subscribe(spy);

    const buttons = fixture.nativeElement.querySelectorAll('.rui-cropper-toolbar__btn--tertiary');
    (buttons[1] as HTMLElement).click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits rotationChange when slider value changes', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.rotationChange.subscribe(spy);

    const slider = fixture.nativeElement.querySelector('.rui-cropper-toolbar__slider') as HTMLInputElement;
    slider.value = '30';
    slider.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith(30);
  });

  it('emits rotationStart on pointerdown on slider', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.rotationStart.subscribe(spy);

    const slider = fixture.nativeElement.querySelector('.rui-cropper-toolbar__slider') as HTMLInputElement;
    slider.dispatchEvent(new Event('pointerdown'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits rotationEnd on change event on slider', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.rotationEnd.subscribe(spy);

    const slider = fixture.nativeElement.querySelector('.rui-cropper-toolbar__slider') as HTMLInputElement;
    slider.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits aspectChange when select changes', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.componentRef.setInput('effectiveAspectRatio', 'free');
    fixture.componentRef.setInput('isAspectRatioFixed', false);
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.aspectChange.subscribe(spy);

    const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
    select.value = '1:1';
    select.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalledWith('1:1');
  });

  it('does not show aspect select when isAspectRatioFixed is true', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.componentRef.setInput('isAspectRatioFixed', true);
    fixture.detectChanges();
    const select = fixture.nativeElement.querySelector('select');
    expect(select).toBeFalsy();
  });

  describe('A11y', () => {
    it('buttons have correct aria-labels', () => {
      const fixture = TestBed.createComponent(RuiCropperToolbar);
      fixture.componentRef.setInput('imageLoaded', true);
      fixture.detectChanges();

      const buttons = fixture.nativeElement.querySelectorAll('.rui-cropper-toolbar__btn');
      const labels = Array.from(buttons).map((b) => (b as HTMLElement).getAttribute('aria-label'));
      expect(labels).toContain('Zoom in');
      expect(labels).toContain('Zoom out');
      expect(labels).toContain('Rotate left 90°');
      expect(labels).toContain('Rotate right 90°');
    });

    it('rotation slider has aria-label and is keyboard accessible', () => {
      const fixture = TestBed.createComponent(RuiCropperToolbar);
      fixture.componentRef.setInput('imageLoaded', true);
      fixture.detectChanges();

      const slider = fixture.nativeElement.querySelector('.rui-cropper-toolbar__slider') as HTMLInputElement;
      expect(slider.getAttribute('aria-label')).toBe('Fine rotation');
      expect(slider.getAttribute('type')).toBe('range');
    });

    it('aspect ratio select has aria-label', () => {
      const fixture = TestBed.createComponent(RuiCropperToolbar);
      fixture.componentRef.setInput('imageLoaded', true);
      fixture.componentRef.setInput('isAspectRatioFixed', false);
      fixture.componentRef.setInput('effectiveAspectRatio', 'free');
      fixture.detectChanges();

      const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
      expect(select.getAttribute('aria-label')).toBe('Aspect ratio');
    });
  });

  it('supports horizontal orientation by default', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.detectChanges();

    const toolbar = fixture.nativeElement.querySelector('.rui-cropper-toolbar');
    expect(toolbar.classList.contains('rui-cropper-toolbar--horizontal')).toBe(true);
  });

  it('supports vertical orientation', () => {
    const fixture = TestBed.createComponent(RuiCropperToolbar);
    fixture.componentRef.setInput('imageLoaded', true);
    fixture.componentRef.setInput('orientation', 'vertical');
    fixture.detectChanges();

    const toolbar = fixture.nativeElement.querySelector('.rui-cropper-toolbar');
    expect(toolbar.classList.contains('rui-cropper-toolbar--vertical')).toBe(true);
  });
});
