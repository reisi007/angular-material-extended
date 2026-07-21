import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RuiFileManager } from './file-manager';
import { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';
import type { CdkDragDrop } from '@angular/cdk/drag-drop';

function createMockFile(name: string, size: number, type: string): File {
  return new File([new ArrayBuffer(size)], name, { type });
}

function createMockItem(id: string, name: string, status: RuiFileItem['status'] = 'selected'): RuiFileItem {
  return {
    id,
    file: createMockFile(name, 100, 'text/plain'),
    status,
    progress: status === 'done' ? 100 : 0,
    editName: name,
  };
}

describe('RuiFileManager', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiFileManager],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('accepts files via model', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    const items = [createMockItem('1', 'a.txt'), createMockItem('2', 'b.txt')];
    comp.files.set(items);
    fixture.detectChanges();
    expect(comp.files().length).toBe(2);
    expect(comp.files()[0].file.name).toBe('a.txt');
  });

  it('removes a file by id', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    comp.files.set([createMockItem('1', 'a.txt'), createMockItem('2', 'b.txt')]);
    comp.removeFile('1');
    expect(comp.files().length).toBe(1);
    expect(comp.files()[0].id).toBe('2');
  });

  it('emits deleteFile on remove', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    const deleteSpy = vi.fn();
    comp.deleteFile.subscribe(deleteSpy);
    const item = createMockItem('1', 'a.txt');
    comp.files.set([item]);
    comp.removeFile('1');
    expect(deleteSpy).toHaveBeenCalledTimes(1);
    expect(deleteSpy).toHaveBeenCalledWith(expect.objectContaining({ id: '1' }));
  });

  it('clears all files', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    comp.files.set([createMockItem('1', 'a.txt'), createMockItem('2', 'b.txt')]);
    comp.clearAll();
    expect(comp.files().length).toBe(0);
  });

  it('renames a file item', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    const renameSpy = vi.fn();
    comp.rename.subscribe(renameSpy);
    comp.files.set([createMockItem('1', 'old.txt')]);
    comp.startRename('1');
    expect(comp.editingItemId()).toBe('1');
    expect(comp.editInputValue()).toBe('old.txt');
    comp.editInputValue.set('renamed.txt');
    comp.confirmRename('1');
    expect(comp.files()[0].editName).toBe('renamed.txt');
    expect(renameSpy).toHaveBeenCalledTimes(1);
    expect(renameSpy).toHaveBeenCalledWith(expect.objectContaining({ editName: 'renamed.txt' }));
  });

  it('cancels rename', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    comp.files.set([createMockItem('1', 'test.txt')]);
    comp.startRename('1');
    expect(comp.editingItemId()).toBe('1');
    comp.cancelRename();
    expect(comp.editingItemId()).toBeNull();
    expect(comp.editInputValue()).toBe('');
  });

  it('reorders items via onDropListDropped', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    const item1 = createMockItem('1', 'a.txt');
    const item2 = createMockItem('2', 'b.txt');
    comp.files.set([item1, item2]);

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
    expect(comp.files()[0].id).toBe('2');
    expect(comp.files()[1].id).toBe('1');
  });

  it('retries a failed upload', async () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    const handlerSpy = vi.fn().mockResolvedValue(undefined);
    fixture.componentRef.setInput('uploadHandler', handlerSpy);

    const item = createMockItem('1', 'test.txt', 'error');
    item.error = 'Failed';
    comp.files.set([item]);

    await comp.retryFile('1');
    expect(comp.files()[0].status).toBe('done');
  });

  it('shows clear-all button when fileManagement is true', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    comp.files.set([createMockItem('1', 'test.txt', 'done')]);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const clearBtn = Array.from(buttons).find(b => b.textContent?.trim() === 'Clear all');
    expect(clearBtn).toBeTruthy();
  });

  it('hides clear-all button when fileManagement is false', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const comp = fixture.componentInstance;
    fixture.componentRef.setInput('fileManagement', false);
    comp.files.set([createMockItem('1', 'test.txt', 'done')]);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const clearBtn = Array.from(buttons).find(b => b.textContent?.trim() === 'Clear all');
    expect(clearBtn).toBeFalsy();
  });

  it('has correct host class', () => {
    const fixture = TestBed.createComponent(RuiFileManager);
    const el = fixture.nativeElement as HTMLElement;
    expect(el.classList.contains('block')).toBe(true);
  });
});
