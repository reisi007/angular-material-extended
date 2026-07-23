import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiFileUploadProgress } from './file-upload-progress.component';

describe('RuiFileUploadProgress', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiFileUploadProgress, NoopAnimationsModule],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('is hidden when isUploading is false', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.detectChanges();
    const bar = fixture.nativeElement.querySelector('.rui-file-upload-progress__bar');
    expect(bar).toBeFalsy();
  });

  it('shows progress bar when isUploading is true', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.detectChanges();
    const bar = fixture.nativeElement.querySelector('.rui-file-upload-progress__bar');
    expect(bar).toBeTruthy();
  });

  it('shows progress percentage label', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.componentRef.setInput('totalProgress', 50);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.rui-file-upload-progress__label');
    expect(label).toBeTruthy();
    expect(label.textContent).toContain('50%');
    expect(label.textContent).toContain('Uploading...');
  });

  it('shows 0% when totalProgress is 0', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.componentRef.setInput('totalProgress', 0);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.rui-file-upload-progress__label');
    expect(label.textContent).toContain('0%');
  });

  it('shows 100% when totalProgress is 100', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.componentRef.setInput('totalProgress', 100);
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.rui-file-upload-progress__label');
    expect(label.textContent).toContain('100%');
  });

  it('progress bar fill width reflects percentage', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.componentRef.setInput('totalProgress', 75);
    fixture.detectChanges();
    const fill = fixture.nativeElement.querySelector('.rui-file-upload-progress__fill');
    expect(fill.style.width).toBe('75%');
  });

  it('has role="region" with aria-label on the bar', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.detectChanges();
    const bar = fixture.nativeElement.querySelector('.rui-file-upload-progress__bar');
    expect(bar.getAttribute('role')).toBe('region');
    expect(bar.getAttribute('aria-label')).toBe('Upload progress');
  });

  it('has role="progressbar" with proper ARIA attributes', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.componentRef.setInput('totalProgress', 60);
    fixture.detectChanges();
    const fill = fixture.nativeElement.querySelector('.rui-file-upload-progress__fill');
    expect(fill.getAttribute('role')).toBe('progressbar');
    expect(fill.getAttribute('aria-valuenow')).toBe('60');
    expect(fill.getAttribute('aria-valuemin')).toBe('0');
    expect(fill.getAttribute('aria-valuemax')).toBe('100');
  });

  it('has aria-valuenow reflecting 0%', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.componentRef.setInput('totalProgress', 0);
    fixture.detectChanges();
    const fill = fixture.nativeElement.querySelector('.rui-file-upload-progress__fill');
    expect(fill.getAttribute('aria-valuenow')).toBe('0');
  });

  it('has aria-valuenow reflecting 100%', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.componentRef.setInput('totalProgress', 100);
    fixture.detectChanges();
    const fill = fixture.nativeElement.querySelector('.rui-file-upload-progress__fill');
    expect(fill.getAttribute('aria-valuenow')).toBe('100');
  });

  it('hides fill when isUploading becomes false', () => {
    const fixture = TestBed.createComponent(RuiFileUploadProgress);
    fixture.componentRef.setInput('isUploading', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.rui-file-upload-progress__bar')).toBeTruthy();

    fixture.componentRef.setInput('isUploading', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.rui-file-upload-progress__bar')).toBeFalsy();
  });
});
