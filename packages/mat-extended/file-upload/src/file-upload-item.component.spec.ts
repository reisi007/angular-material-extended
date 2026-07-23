import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { RuiFileUploadItem } from './file-upload-item.component';
import { RuiFileItem } from './file-upload.types';

@Component({
  template: `
    <div cdkDropList (cdkDropListDropped)="onDrop($event)">
      @for (item of items; track item.id) {
        <rui-file-upload-item [item]="item" [sortable]="true" [fileManagement]="false" />
      }
    </div>
  `,
  imports: [RuiFileUploadItem, DragDropModule],
})
class TestHost {
  items: RuiFileItem[] = [
    { id: '1', file: new File([''], 'a.txt', { type: 'text/plain' }), status: 'selected', progress: 0, editName: 'a.txt' },
    { id: '2', file: new File([''], 'b.txt', { type: 'text/plain' }), status: 'selected', progress: 0, editName: 'b.txt' },
    { id: '3', file: new File([''], 'c.txt', { type: 'text/plain' }), status: 'selected', progress: 0, editName: 'c.txt' },
  ];
  onDrop(event: CdkDragDrop<RuiFileItem[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}

describe('RuiFileUploadItem with CdkDropList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(TestHost);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('registers drag items with parent CdkDropList', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    const dropListDebug = fixture.debugElement.query(By.directive(CdkDropList));
    const dropList = dropListDebug.injector.get(CdkDropList);
    expect(dropList.getSortedItems().length).toBe(3);
  });

  it('renders drag handle when sortable', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    const dragHandle = fixture.nativeElement.querySelector('[cdkdraghandle]');
    expect(dragHandle).toBeTruthy();
  });

  it('has custom drag preview template registered', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    const dragDebug = fixture.debugElement.query(By.directive(CdkDrag));
    const drag = dragDebug.injector.get(CdkDrag);
    expect((drag as unknown as { _previewTemplate: unknown })._previewTemplate).toBeTruthy();
  });

  it('has custom drag placeholder template registered', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    const dragDebug = fixture.debugElement.query(By.directive(CdkDrag));
    const drag = dragDebug.injector.get(CdkDrag);
    expect((drag as unknown as { _placeholderTemplate: unknown })._placeholderTemplate).toBeTruthy();
  });

  it('all buttons inside cdkDrag have pointerdown stopPropagation', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
    const cdkDragEl = fixture.nativeElement.querySelector('[cdkdrag]');
    const buttons = cdkDragEl.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
    for (const button of Array.from<Element>(buttons)) {
      const event = new Event('pointerdown', { bubbles: true, cancelable: true });
      const spy = vi.spyOn(event, 'stopPropagation');
      button.dispatchEvent(event);
      expect(spy).toHaveBeenCalled();
    }
  });
});

describe('RuiFileUploadItem standalone', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiFileUploadItem],
    }).compileComponents();
  });

  it('creates the component without a drop list', () => {
    const fixture = TestBed.createComponent(RuiFileUploadItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'a.txt', { type: 'text/plain' }),
      status: 'selected',
      progress: 0,
      editName: 'a.txt',
    });
    fixture.componentRef.setInput('sortable', true);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows sortable controls when sortable is true', () => {
    const fixture = TestBed.createComponent(RuiFileUploadItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'a.txt', { type: 'text/plain' }),
      status: 'selected',
      progress: 0,
      editName: 'a.txt',
    });
    fixture.componentRef.setInput('sortable', true);
    fixture.detectChanges();
    const dragHandle = fixture.nativeElement.querySelector('[cdkdraghandle]');
    expect(dragHandle).toBeTruthy();
  });

  it('hides sortable controls when sortable is false', () => {
    const fixture = TestBed.createComponent(RuiFileUploadItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'a.txt', { type: 'text/plain' }),
      status: 'selected',
      progress: 0,
      editName: 'a.txt',
    });
    fixture.componentRef.setInput('sortable', false);
    fixture.detectChanges();
    const dragHandle = fixture.nativeElement.querySelector('[cdkdraghandle]');
    expect(dragHandle).toBeFalsy();
  });

  it('passes dragStartDelay to cdkDrag', () => {
    const fixture = TestBed.createComponent(RuiFileUploadItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'a.txt', { type: 'text/plain' }),
      status: 'selected',
      progress: 0,
      editName: 'a.txt',
    });
    fixture.componentRef.setInput('sortable', true);
    fixture.componentRef.setInput('dragStartDelay', 200);
    fixture.detectChanges();
    const cdkDragDebug = fixture.debugElement.query(By.directive(CdkDrag));
    const cdkDrag = cdkDragDebug.injector.get(CdkDrag);
    expect(cdkDrag.dragStartDelay).toBe(200);
  });

  it('disables drag when sortable is false', () => {
    const fixture = TestBed.createComponent(RuiFileUploadItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'a.txt', { type: 'text/plain' }),
      status: 'selected',
      progress: 0,
      editName: 'a.txt',
    });
    fixture.componentRef.setInput('sortable', false);
    fixture.detectChanges();
    const cdkDragDebug = fixture.debugElement.query(By.directive(CdkDrag));
    const cdkDrag = cdkDragDebug.injector.get(CdkDrag);
    expect(cdkDrag.disabled).toBe(true);
  });

  it('emits moveUp output', () => {
    const fixture = TestBed.createComponent(RuiFileUploadItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'a.txt', { type: 'text/plain' }),
      status: 'selected',
      progress: 0,
      editName: 'a.txt',
    });
    fixture.componentRef.setInput('sortable', true);
    fixture.detectChanges();
    const moveUpSpy = vi.fn();
    fixture.componentInstance.moveUp.subscribe(moveUpSpy);
    const moveUpBtn = fixture.nativeElement.querySelector('[aria-label="Move up"]');
    moveUpBtn.click();
    expect(moveUpSpy).toHaveBeenCalledTimes(1);
  });

  it('emits moveDown output', () => {
    const fixture = TestBed.createComponent(RuiFileUploadItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'a.txt', { type: 'text/plain' }),
      status: 'selected',
      progress: 0,
      editName: 'a.txt',
    });
    fixture.componentRef.setInput('sortable', true);
    fixture.detectChanges();
    const moveDownSpy = vi.fn();
    fixture.componentInstance.moveDown.subscribe(moveDownSpy);
    const moveDownBtn = fixture.nativeElement.querySelector('[aria-label="Move down"]');
    moveDownBtn.click();
    expect(moveDownSpy).toHaveBeenCalledTimes(1);
  });

  describe('A11y', () => {
    it('has role="listitem" on the row element', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'a.txt', { type: 'text/plain' }),
        status: 'selected',
        progress: 0,
        editName: 'a.txt',
      });
      fixture.detectChanges();
      const row = fixture.nativeElement.querySelector('.rui-file-upload-item__row');
      expect(row.getAttribute('role')).toBe('listitem');
    });

    it('remove button has aria-label with file name', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'test.txt', { type: 'text/plain' }),
        status: 'selected',
        progress: 0,
        editName: 'test.txt',
      });
      fixture.componentRef.setInput('fileManagement', true);
      fixture.detectChanges();
      const removeBtn = fixture.nativeElement.querySelector('[aria-label="Remove test.txt"]');
      expect(removeBtn).toBeTruthy();
      expect(removeBtn.getAttribute('type')).toBe('button');
    });

    it('rename button has aria-label with file name', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'document.pdf', { type: 'application/pdf' }),
        status: 'selected',
        progress: 0,
        editName: 'document.pdf',
      });
      fixture.componentRef.setInput('editable', true);
      fixture.componentRef.setInput('fileManagement', true);
      fixture.detectChanges();
      const renameBtn = fixture.nativeElement.querySelector('[aria-label="Rename document.pdf"]');
      expect(renameBtn).toBeTruthy();
    });

    it('cancel upload button has aria-label with file name when uploading', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'uploading.txt', { type: 'text/plain' }),
        status: 'uploading',
        progress: 50,
        editName: 'uploading.txt',
      });
      fixture.componentRef.setInput('fileManagement', true);
      fixture.detectChanges();
      const cancelBtn = fixture.nativeElement.querySelector('[aria-label="Cancel upload for uploading.txt"]');
      expect(cancelBtn).toBeTruthy();
    });

    it('retry button has aria-label with file name when in error state', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'failed.txt', { type: 'text/plain' }),
        status: 'error',
        progress: 0,
        error: 'Network error',
        editName: 'failed.txt',
      });
      fixture.componentRef.setInput('fileManagement', true);
      fixture.detectChanges();
      const retryBtn = fixture.nativeElement.querySelector('[aria-label="Retry upload for failed.txt"]');
      expect(retryBtn).toBeTruthy();
    });

    it('progress bar has role="progressbar" with proper ARIA attributes', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'progress.txt', { type: 'text/plain' }),
        status: 'uploading',
        progress: 60,
        editName: 'progress.txt',
      });
      fixture.detectChanges();
      const fill = fixture.nativeElement.querySelector('.rui-file-upload-item__progress-fill');
      expect(fill.getAttribute('role')).toBe('progressbar');
      expect(fill.getAttribute('aria-valuenow')).toBe('60');
      expect(fill.getAttribute('aria-valuemin')).toBe('0');
      expect(fill.getAttribute('aria-valuemax')).toBe('100');
    });

    it('progress bar aria-valuenow reflects 0 progress', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'empty.txt', { type: 'text/plain' }),
        status: 'uploading',
        progress: 0,
        editName: 'empty.txt',
      });
      fixture.detectChanges();
      const fill = fixture.nativeElement.querySelector('.rui-file-upload-item__progress-fill');
      expect(fill.getAttribute('aria-valuenow')).toBe('0');
    });

    it('progress bar aria-valuenow reflects 100 progress', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'done.txt', { type: 'text/plain' }),
        status: 'uploading',
        progress: 100,
        editName: 'done.txt',
      });
      fixture.detectChanges();
      const fill = fixture.nativeElement.querySelector('.rui-file-upload-item__progress-fill');
      expect(fill.getAttribute('aria-valuenow')).toBe('100');
    });

    it('move up button is a keyboard-accessible button', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'sort.txt', { type: 'text/plain' }),
        status: 'selected',
        progress: 0,
        editName: 'sort.txt',
      });
      fixture.componentRef.setInput('sortable', true);
      fixture.detectChanges();
      const moveUpBtn = fixture.nativeElement.querySelector('[aria-label="Move up"]');
      expect(moveUpBtn).toBeTruthy();
      expect(moveUpBtn.getAttribute('type')).toBe('button');
    });

    it('move down button is a keyboard-accessible button', () => {
      const fixture = TestBed.createComponent(RuiFileUploadItem);
      fixture.componentRef.setInput('item', {
        id: '1',
        file: new File([''], 'sort.txt', { type: 'text/plain' }),
        status: 'selected',
        progress: 0,
        editName: 'sort.txt',
      });
      fixture.componentRef.setInput('sortable', true);
      fixture.detectChanges();
      const moveDownBtn = fixture.nativeElement.querySelector('[aria-label="Move down"]');
      expect(moveDownBtn).toBeTruthy();
      expect(moveDownBtn.getAttribute('type')).toBe('button');
    });
  });
});
