import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RuiFileUpload } from './file-upload';
import { RuiFileItem } from './file-upload.types';
import type { CdkDragDrop } from '@angular/cdk/drag-drop';

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

  it('has sortable input defaulting to false', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    expect(fixture.componentInstance.sortable()).toBe(false);
  });

  it('shows drag handle only when sortable is true', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    fixture.detectChanges();

    let handle = fixture.nativeElement.querySelector('[cdkDragHandle]');
    expect(handle).toBeFalsy();

    fixture.componentRef.setInput('sortable', true);
    fixture.detectChanges();
    handle = fixture.nativeElement.querySelector('[cdkDragHandle]');
    expect(handle).toBeTruthy();
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

  it('emits onDelete when removing a file', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const deleteSpy = vi.fn();
    comp.deleteFile.subscribe(deleteSpy);
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    const id = comp.files()[0].id;
    comp.removeFile(id);
    expect(deleteSpy).toHaveBeenCalledTimes(1);
    expect(deleteSpy).toHaveBeenCalledWith(expect.objectContaining({ file }));
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
    const deleteSpy = vi.fn();
    comp.deleteFile.subscribe(deleteSpy);
    comp.removeFile(id);
    expect(comp.files().length).toBe(0);
    expect(deleteSpy).toHaveBeenCalledTimes(1);
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

  it('reorders items via onDropListDropped', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;

    const file1 = createMockFile('a.txt', 100, 'text/plain');
    const file2 = createMockFile('b.txt', 100, 'text/plain');
    comp.processFiles([file1, file2]);

    const items = comp.files();
    const event = {
      previousIndex: 0,
      currentIndex: 1,
      item: {},
      container: { data: items },
      previousContainer: { data: items },
      isPointerOverContainer: true,
      distance: { x: 0, y: 0 },
    } as CdkDragDrop<RuiFileItem[]>;
    comp.onDropListDropped(event);
    expect(comp.files()[0].file.name).toBe('b.txt');
    expect(comp.files()[1].file.name).toBe('a.txt');
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

  it('retries a failed file upload', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;

    const handlerSpy = vi.fn()
      .mockRejectedValueOnce(new Error('Failed'))
      .mockResolvedValueOnce(undefined);
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);

    await comp.startUpload();
    expect(comp.files()[0].status).toBe('error');

    comp.retryFile(comp.files()[0].id);
    expect(comp.files()[0].error).toBeUndefined();

    await new Promise(resolve => setTimeout(resolve, 50));
    expect(comp.files()[0].status).toBe('done');
  });

  it('clears all files', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;

    comp.processFiles([createMockFile('a.txt', 100, 'text/plain')]);
    comp.processFiles([createMockFile('b.txt', 100, 'text/plain')]);
    expect(comp.files().length).toBe(2);

    comp.clearAll();
    expect(comp.files().length).toBe(0);
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

  it('cancels upload aborts the signal', async () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    let capturedSignal: AbortSignal | undefined;

    const handlerSpy = vi.fn().mockImplementation(async (_file: RuiFileItem, signal?: AbortSignal) => {
      capturedSignal = signal;
      await new Promise<void>((_resolve, reject) => {
        if (signal) {
          signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
        }
      });
    });
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    comp.processFiles([createMockFile('test.txt', 100, 'text/plain')]);

    const uploadPromise = comp.startUpload();
    comp.cancelUpload(comp.files()[0].id);

    expect(capturedSignal?.aborted).toBe(true);
    await uploadPromise;
  });

  it('renames a file item', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('editable', true);
    const renameSpy = vi.fn();
    comp.rename.subscribe(renameSpy);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    const id = comp.files()[0].id;

    comp.startRename(id);
    expect(comp.editingItemId()).toBe(id);
    expect(comp.editInputValue()).toBe('test.txt');

    comp.editInputValue.set('renamed.txt');
    comp.confirmRename(id);

    expect(comp.files()[0].editName).toBe('renamed.txt');
    expect(renameSpy).toHaveBeenCalledTimes(1);
    expect(renameSpy).toHaveBeenCalledWith(expect.objectContaining({ editName: 'renamed.txt' }));
  });

  it('cancels rename and restores original name', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('editable', true);

    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    const id = comp.files()[0].id;

    comp.startRename(id);
    comp.editInputValue.set('new-name.txt');
    comp.cancelRename();

    expect(comp.editingItemId()).toBeNull();
    expect(comp.files()[0].editName).toBe('test.txt');
  });

  it('shows edit button only when editable is true', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    const file = createMockFile('test.txt', 100, 'text/plain');
    comp.processFiles([file]);
    fixture.detectChanges();

    let editBtn = fixture.nativeElement.querySelector('button[aria-label^="Rename"]');
    expect(editBtn).toBeFalsy();

    fixture.componentRef.setInput('editable', true);
    fixture.detectChanges();
    editBtn = fixture.nativeElement.querySelector('button[aria-label^="Rename"]');
    expect(editBtn).toBeTruthy();
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

  it('shows clear all button when files exist', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    comp.processFiles([createMockFile('test.txt', 100, 'text/plain')]);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const clearBtn = Array.from(buttons).find(b => b.textContent?.trim() === 'Clear all');
    expect(clearBtn).toBeTruthy();
  });

  it('uses custom upload button text', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('uploadButtonText', 'Hochladen');
    comp.processFiles([createMockFile('test.txt', 100, 'text/plain')]);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const btn = Array.from(buttons).find(b => b.textContent?.includes('Hochladen'));
    expect(btn).toBeTruthy();
    expect(btn?.textContent).toContain('Hochladen');
  });

  it('uses dragOverText when dragging over', () => {
    const fixture = TestBed.createComponent(RuiFileUpload);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('dragOverText', 'Loslassen!');
    comp.isDragOver.set(true);
    fixture.detectChanges();

    const paragraphs = fixture.nativeElement.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
    const text = Array.from(paragraphs).find(p => p.textContent?.includes('Loslassen!'));
    expect(text).toBeTruthy();
    expect(text?.textContent).toContain('Loslassen!');
  });
});
