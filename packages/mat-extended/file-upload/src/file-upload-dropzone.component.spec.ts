import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiFileUploadDropzone } from './file-upload-dropzone.component';

describe('RuiFileUploadDropzone', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiFileUploadDropzone, NoopAnimationsModule],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the dropzone area with role button and tabindex', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    expect(area).toBeTruthy();
    expect(area.getAttribute('role')).toBe('button');
    expect(area.getAttribute('tabindex')).toBe('0');
  });

  it('has aria-label with browse text on dropzone area', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('browseText', 'Select files');
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    expect(area.getAttribute('aria-label')).toBe('Select files');
  });

  it('shows default dropzone text', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.detectChanges();
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    const text = Array.from(paragraphs as unknown as Element[]).find(p =>
      p.textContent?.includes('Drag & drop files here or click to browse')
    );
    expect(text).toBeTruthy();
  });

  it('shows custom dropzone text when provided', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('dropzoneText', 'Drop files here');
    fixture.detectChanges();
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    const text = Array.from(paragraphs as unknown as Element[]).find(p =>
      p.textContent?.includes('Drop files here')
    );
    expect(text).toBeTruthy();
  });

  it('shows drag over text when isDragOver is true', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('isDragOver', true);
    fixture.detectChanges();
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    const text = Array.from(paragraphs as unknown as Element[]).find(p =>
      p.textContent?.includes('Drop files here')
    );
    expect(text).toBeTruthy();
  });

  it('applies dragover class when isDragOver is true and not disabled', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('isDragOver', true);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    expect(area.classList.contains('rui-file-upload-dropzone--dragover')).toBe(true);
  });

  it('does not apply dragover class when disabled even if isDragOver is true', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('disabled', true);
    fixture.componentRef.setInput('isDragOver', true);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    expect(area.classList.contains('rui-file-upload-dropzone--dragover')).toBe(false);
  });

  it('applies disabled class when disabled is true', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    expect(area.classList.contains('rui-file-upload-dropzone--disabled')).toBe(true);
  });

  it('emits filePickerOpen on click when not disabled', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.filePickerOpen.subscribe(spy);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    area.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not emit filePickerOpen on click when disabled', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('disabled', true);
    const spy = vi.fn();
    comp.filePickerOpen.subscribe(spy);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    area.click();
    expect(spy).not.toHaveBeenCalled();
  });

  it('emits filePickerOpen on keyboard Enter', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.filePickerOpen.subscribe(spy);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    area.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits filePickerOpen on keyboard Space', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.filePickerOpen.subscribe(spy);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    area.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not emit filePickerOpen on Enter or Space when disabled', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('disabled', true);
    const spy = vi.fn();
    comp.filePickerOpen.subscribe(spy);
    fixture.detectChanges();
    const area = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__area');
    area.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    area.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    expect(spy).not.toHaveBeenCalled();
  });

  it('shows hint with accept and max file info for multiple mode with finite maxSize', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('accept', 'image/*');
    fixture.componentRef.setInput('maxSize', 1048576);
    fixture.componentRef.setInput('multiple', true);
    fixture.componentRef.setInput('maxFiles', 5);
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__hint');
    expect(hint.textContent).toContain('image/*');
    expect(hint.textContent).toContain('Max 5 files');
    expect(hint.textContent).toContain('Max 1 MB each');
  });

  it('shows hint without maxSize for multiple mode with infinite maxSize', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('accept', '*');
    fixture.componentRef.setInput('multiple', true);
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__hint');
    expect(hint.textContent).toContain('Accepted: *');
    expect(hint.textContent).toContain('Max 10 files');
    expect(hint.textContent).not.toContain('each');
  });

  it('shows hint without file count for single file mode', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('accept', 'application/pdf');
    fixture.componentRef.setInput('multiple', false);
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__hint');
    expect(hint.textContent).toContain('application/pdf');
    expect(hint.textContent).not.toContain('Max');
    expect(hint.textContent).not.toContain('files');
  });

  it('shows hint with maxSize for single file mode with finite maxSize', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    fixture.componentRef.setInput('accept', 'application/pdf');
    fixture.componentRef.setInput('maxSize', 5242880);
    fixture.componentRef.setInput('multiple', false);
    fixture.detectChanges();
    const hint = fixture.nativeElement.querySelector('.rui-file-upload-dropzone__hint');
    expect(hint.textContent).toContain('application/pdf');
    expect(hint.textContent).toContain('Max 5 MB');
  });

  it('emits filePickerOpen via onClick method when not disabled', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.filePickerOpen.subscribe(spy);
    comp.onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not emit via onClick when disabled', () => {
    const fixture = TestBed.createComponent(RuiFileUploadDropzone);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('disabled', true);
    const spy = vi.fn();
    comp.filePickerOpen.subscribe(spy);
    comp.onClick();
    expect(spy).not.toHaveBeenCalled();
  });
});
