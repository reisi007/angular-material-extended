import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RuiFileUpload } from './file-upload';
import { RuiFileItem } from './file-upload.types';

function createMockFile(name: string, size: number, type: string): File {
  return new File([new ArrayBuffer(size)], name, { type });
}

describe('RuiFileUpload', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiFileUpload],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has drop zone with drag-drop text', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    fixture.detectChanges();
    const paragraphs = fixture.nativeElement.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
    const dropZone = Array.from(paragraphs).find(p =>
      p.textContent?.includes('Drag & drop files here or click to browse')
    );
    expect(dropZone).toBeTruthy();
  });

  it('uses custom dropzone text when provided', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    fixture.componentRef.setInput('dropzoneText', 'Custom drop text');
    fixture.detectChanges();
    const paragraphs = fixture.nativeElement.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
    const text = Array.from(paragraphs).find(p =>
      p.textContent?.includes('Custom drop text')
    );
    expect(text).toBeTruthy();
    expect(text?.textContent).toContain('Custom drop text');
  });

  it('accepts files via processFiles', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    expect(comp.files().length).toBe(1);
    expect(comp.files()[0].file.name).toBe('test.txt');
    expect(comp.files()[0].status).toBe('selected');
  });

  it('sets editName when processing files', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    expect(comp.files()[0].editName).toBe('test.txt');
  });

  it('removes a file by id', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    const id = comp.files()[0].id;
    comp.removeFile(id);
    expect(comp.files().length).toBe(0);
  });

  it('removes a file via removeFile method', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    const id = comp.files()[0].id;
    comp.removeFile(id);
    expect(comp.files().length).toBe(0);
  });

  it('removes a file even in done status', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    const id = comp.files()[0].id;
    comp.files.update(files =>
      files.map(f => ({ ...f, status: 'done' as const, progress: 100 }))
    );
    comp.removeFile(id);
    expect(comp.files().length).toBe(0);
  });

  it('starts upload and emits uploadStart', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const uploadSpy = vi.fn().mockResolvedValue(undefined);
    fixture.componentRef.setInput('uploadHandler', uploadSpy);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);

    const emitSpy = vi.fn();
    comp.uploadStart.subscribe(emitSpy);

    await comp.startUpload();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith([expect.objectContaining({ file: file })]);
    expect(uploadSpy).toHaveBeenCalledTimes(1);
  });

  it('validates max file size', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('maxSize', 50);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    expect(comp.files().length).toBe(0);
  });

  it('shows upload button when files present', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    fixture.detectChanges();
    const comp = fixture.componentInstance;

    const buttonsBefore = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const startBtn = Array.from(buttonsBefore).find(b => b.textContent?.includes('Upload starten'));
    expect(startBtn).toBeFalsy();

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    fixture.detectChanges();

    const buttonsAfter = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const btn = Array.from(buttonsAfter).find(b => b.textContent?.includes('Upload starten'));
    expect(btn).toBeTruthy();
    expect(btn?.textContent).toContain('Upload starten');
  });

  it('calls uploadHandler for each file', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const handlerSpy = vi.fn().mockResolvedValue(undefined);
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 100, 'text/plain');
    comp.processFiles([file1, file2]);

    await comp.startUpload();
    expect(handlerSpy).toHaveBeenCalledTimes(2);
  });

  it('validates file type via accept filter with MIME types', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('accept', 'image/*');

    const txtFile = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([txtFile]);
    expect(comp.files().length).toBe(0);

    const imgFile = createMockFile('test.png', 100, 'image/png');
    comp.processFiles([imgFile]);
    expect(comp.files().length).toBe(1);
  });

  it('validates file extension via accept filter', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('accept', '.pdf,.doc');

    const pdfFile = createMockFile('test.pdf', 50, 'application/pdf');
    comp.processFiles([pdfFile]);
    expect(comp.files().length).toBe(1);

    const txtFile = createMockFile('test.txt', 50, 'text/plain');
    comp.processFiles([txtFile]);
    expect(comp.files().length).toBe(1);
  });

  it('validates exact MIME type via accept filter', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('accept', 'application/pdf');

    const pdfFile = createMockFile('doc.pdf', 50, 'application/pdf');
    comp.processFiles([pdfFile]);
    expect(comp.files().length).toBe(1);

    const jsonFile = createMockFile('data.json', 50, 'application/json');
    comp.processFiles([jsonFile]);
    expect(comp.files().length).toBe(1);
  });

  it('validates maxFiles limit', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('maxFiles', 2);

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 100, 'text/plain');
    const file3 = createMockFile('c.txt', 100, 'text/plain');

    comp.processFiles([file1, file2, file3]);
    expect(comp.files().length).toBe(2);
  });

  it('emits validationErrors when files exceed maxSize', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const errorSpy = vi.fn();
    comp.validationErrors.subscribe(errorSpy);
    fixture.componentRef.setInput('maxSize', 50);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    expect(comp.files().length).toBe(0);
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy.mock.calls[0][0][0].type).toBe('size');
  });

  it('emits validationErrors when files exceed maxFiles', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const errorSpy = vi.fn();
    comp.validationErrors.subscribe(errorSpy);
    fixture.componentRef.setInput('maxFiles', 1);

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    comp.processFiles([file1]);
    comp.processFiles([file1]);

    expect(comp.files().length).toBe(1);
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy.mock.calls[0][0][0].type).toBe('count');
  });

  it('emits validationErrors for wrong file types', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const errorSpy = vi.fn();
    comp.validationErrors.subscribe(errorSpy);
    fixture.componentRef.setInput('accept', 'image/*');

    const txtFile = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([txtFile]);
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy.mock.calls[0][0][0].type).toBe('type');
  });

  it('handles upload error and sets status to error', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const handlerSpy = vi.fn().mockRejectedValue(new Error('Network error'));
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);

    await comp.startUpload();

    expect(comp.files()[0].status).toBe('error');
    expect(comp.files()[0].error).toBe('Network error');
    expect(comp.status()).toBe('error');
  });

  it('sets status idle when all uploads succeed', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const handlerSpy = vi.fn().mockResolvedValue(undefined);
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);

    await comp.startUpload();

    expect(comp.files()[0].status).toBe('done');
    expect(comp.status()).toBe('idle');
  });

  it('supports autoUpload', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const handlerSpy = vi.fn().mockResolvedValue(undefined);
    fixture.componentRef.setInput('autoUpload', true);
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);

    expect(handlerSpy).toHaveBeenCalledTimes(1);
  });

  it('hides upload button when autoUpload is true', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('autoUpload', true);

    comp.processFiles([createMockFile('test.txt', 100, 'text/plain')]);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const btn = Array.from(buttons).find(b => b.textContent?.includes('Upload starten'));
    expect(btn).toBeFalsy();
  });

  it('cancels an upload', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const handlerSpy = vi.fn().mockImplementation(async (_file: RuiFileItem, signal?: AbortSignal) => {
      await new Promise<void>((_resolve, reject) => {
        if (signal) {
          signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
        }
      });
    });
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    comp.processFiles([createMockFile('test.txt', 100, 'text/plain')]);

    const uploadPromise = comp.startUpload();
    expect(comp.files()[0].status).toBe('uploading');

    comp.cancelUpload(comp.files()[0].id);
    expect(comp.files()[0].status).toBe('selected');
    expect(comp.files()[0].progress).toBe(0);

    await uploadPromise;
  });

  it('accepts preexisting files via CVA writeValue', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const item: RuiFileItem = {
      id: 'pre-1',
      file: createMockFile('existing.pdf', 500, 'application/pdf'),
      status: 'done',
      progress: 100,
      editName: 'existing.pdf',
    };
    comp.writeValue([item]);
    expect(comp.files().length).toBe(1);
    expect(comp.files()[0].id).toBe('pre-1');
  });

  it('has region role on host element', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const el = fixture.nativeElement;
    expect(el.getAttribute('role')).toBe('region');
  });

  it('sets uploading status only when handler exists', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);

    expect(comp.status()).toBe('selected');

    await comp.startUpload();

    expect(comp.status()).toBe('idle');
  });

  it('processes multiple files from onFilesSelected with a file list', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 200, 'text/plain');

    const mockInput = {
      files: {
        0: file1,
        1: file2,
        length: 2,
        item: (i: number) => [file1, file2][i] ?? null,
      } as unknown as FileList,
      value: '',
    };

    const event = { target: mockInput } as unknown as Event;
    comp.onFilesSelected(event);

    expect(comp.files().length).toBe(2);
    expect(comp.files()[0].file.name).toBe('a.txt');
    expect(comp.files()[1].file.name).toBe('b.txt');
  });

  it('processes multiple files from onDrop with a file list', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 200, 'text/plain');

    const mockFileList = {
      0: file1,
      1: file2,
      length: 2,
      item: (i: number) => [file1, file2][i] ?? null,
    } as unknown as FileList;

    const dragEvent = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      dataTransfer: { files: mockFileList },
    } as unknown as DragEvent;
    comp.onDrop(dragEvent);

    expect(comp.files().length).toBe(2);
    expect(comp.files()[0].file.name).toBe('a.txt');
    expect(comp.files()[1].file.name).toBe('b.txt');
  });

  it('calls uploadHandler for multiple files in autoUpload mode', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const handlerSpy = vi.fn().mockResolvedValue(undefined);
    fixture.componentRef.setInput('autoUpload', true);
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 200, 'text/plain');
    comp.processFiles([file1, file2]);

    await vi.waitFor(() => expect(handlerSpy).toHaveBeenCalledTimes(2));
  });

  it('generates unique IDs for multiple files', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 200, 'text/plain');
    comp.processFiles([file1, file2]);

    expect(comp.files().length).toBe(2);
    expect(comp.files()[0].id).not.toBe(comp.files()[1].id);
  });

  it('has multiple property set on the file input element when multiple is true', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    fixture.detectChanges();

    const inputEl = fixture.nativeElement.querySelector('input[type="file"]') as HTMLInputElement;
    expect(inputEl).toBeTruthy();
    expect(inputEl.multiple).toBe(true);
    expect(inputEl.hasAttribute('multiple')).toBe(true);
  });

  it('adds all files when multiple files are selected via the DOM change event', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    fixture.detectChanges();
    const comp = fixture.componentInstance;

    const inputEl = fixture.nativeElement.querySelector('input[type="file"]') as HTMLInputElement;
    expect(inputEl).toBeTruthy();

    const file1 = new File(['content1'], '1.txt', { type: 'text/plain' });
    const file2 = new File(['content2'], '2.txt', { type: 'text/plain' });

    Object.defineProperty(inputEl, 'files', {
      value: [file1, file2],
      configurable: true,
      writable: false,
    });

    inputEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(comp.files().length).toBe(2);
    expect(comp.files()[0].file.name).toBe('1.txt');
    expect(comp.files()[1].file.name).toBe('2.txt');
  });

  it('accepts files of any size by default (maxSize is Infinity)', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;

    const hugeFile = createMockFile('huge.bin', 1_000_000_000, 'application/octet-stream');
    comp.processFiles([hugeFile]);

    expect(comp.files().length).toBe(1);
    expect(comp.files()[0].file.name).toBe('huge.bin');
  });

  it('shows displayErrors when file exceeds custom maxSize', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('maxSize', 50);
    fixture.detectChanges();

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);

    expect(comp.files().length).toBe(0);
    expect(comp.displayErrors().length).toBeGreaterThan(0);
    expect(comp.displayErrors()[0].type).toBe('size');
  });

  it('shows displayErrors for rejected file types', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('accept', 'image/*');
    fixture.detectChanges();

    const txtFile = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([txtFile]);

    expect(comp.files().length).toBe(0);
    expect(comp.displayErrors().length).toBeGreaterThan(0);
    expect(comp.displayErrors()[0].type).toBe('type');
  });

  it('shows displayErrors when maxFiles limit exceeded', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('maxFiles', 1);
    fixture.detectChanges();

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 100, 'text/plain');
    comp.processFiles([file1]);
    comp.processFiles([file2]);

    expect(comp.files().length).toBe(1);
    expect(comp.displayErrors().length).toBeGreaterThan(0);
    expect(comp.displayErrors()[0].type).toBe('count');
  });

  it('clears displayErrors on successful file addition', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('maxSize', 50);
    fixture.detectChanges();

    const hugeFile = createMockFile('huge.bin', 100, 'application/octet-stream');
    comp.processFiles([hugeFile]);
    expect(comp.displayErrors().length).toBeGreaterThan(0);

    const smallFile = createMockFile('small.txt', 10, 'text/plain');
    comp.processFiles([smallFile]);

    expect(comp.files().length).toBe(1);
    expect(comp.displayErrors().length).toBe(0);
  });
});
