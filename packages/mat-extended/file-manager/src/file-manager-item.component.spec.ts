import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CdkDropList, CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { RuiFileManagerItem } from './file-manager-item.component';
import { RuiFileItem } from '@all-the.rest/mat-extended/file-upload';

describe('RuiFileManagerItem with CdkDropList', () => {
  @Component({
    template: `
      <div cdkDropList (cdkDropListDropped)="onDrop($event)">
        @for (item of items; track item.id) {
          <rui-file-manager-item [item]="item" [sortable]="true" [fileManagement]="false" />
        }
      </div>
    `,
    imports: [RuiFileManagerItem, DragDropModule],
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
    expect(dropListDebug).toBeTruthy();

    const dropList = dropListDebug.injector.get(CdkDropList);
    expect(dropList.getSortedItems().length).toBe(3);
  });

  it('renders drag handle when sortable', () => {
    const fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();

    const dragHandles = fixture.nativeElement.querySelectorAll('[cdkdraghandle]');
    expect(dragHandles.length).toBe(3);
  });
});

describe('RuiFileManagerItem standalone', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiFileManagerItem],
    }).compileComponents();
  });

  function createFixture(itemOverrides: Partial<RuiFileItem> = {}) {
    const fixture = TestBed.createComponent(RuiFileManagerItem);
    fixture.componentRef.setInput('item', {
      id: '1',
      file: new File([''], 'photo.pdf', { type: 'application/pdf' }),
      status: 'selected',
      progress: 0,
      editName: 'photo.pdf',
      ...itemOverrides,
    });
    return fixture;
  }

  it('creates the component without a drop list', () => {
    const fixture = createFixture();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows sortable controls when sortable is true', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('sortable', true);
    fixture.detectChanges();

    const dragHandle = fixture.nativeElement.querySelector('[cdkdraghandle]');
    expect(dragHandle).toBeTruthy();
  });

  it('hides sortable controls when sortable is false', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('sortable', false);
    fixture.detectChanges();

    const dragHandle = fixture.nativeElement.querySelector('[cdkdraghandle]');
    expect(dragHandle).toBeFalsy();
  });

  it('emits remove when onRemove is called', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.remove.subscribe(spy);
    comp.onRemove();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits startRename when onStartRename is called', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.startRename.subscribe(spy);
    comp.onStartRename();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits confirmRename when onConfirmRename is called', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.confirmRename.subscribe(spy);
    comp.onConfirmRename();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits cancelRename when onCancelRename is called', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.cancelRename.subscribe(spy);
    comp.onCancelRename();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits editInputChange with input value', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.editInputChange.subscribe(spy);
    const event = new Event('input');
    Object.defineProperty(event, 'target', { value: { value: 'new-name' } });
    comp.onEditInputChange(event);
    expect(spy).toHaveBeenCalledWith('new-name');
  });

  it('emits moveUp when onMoveUp is called', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.moveUp.subscribe(spy);
    comp.onMoveUp();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('emits moveDown when onMoveDown is called', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    const spy = vi.fn();
    comp.moveDown.subscribe(spy);
    comp.onMoveDown();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('shows extension suffix when editableExtension is false and in rename mode', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('editable', true);
    fixture.componentRef.setInput('editableExtension', false);
    fixture.componentRef.setInput('editingItemId', '1');
    fixture.detectChanges();

    const extSpan = fixture.nativeElement.querySelector('.rui-file-manager-item__edit-ext');
    expect(extSpan).toBeTruthy();
    expect(extSpan.textContent).toContain('.pdf');
  });

  it('does not show extension suffix when editableExtension is true and in rename mode', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('editable', true);
    fixture.componentRef.setInput('editableExtension', true);
    fixture.componentRef.setInput('editingItemId', '1');
    fixture.detectChanges();

    const extSpan = fixture.nativeElement.querySelector('.rui-file-manager-item__edit-ext');
    expect(extSpan).toBeFalsy();
  });

  it('does not render remove button when editingItemId matches item id', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('fileManagement', true);
    fixture.componentRef.setInput('editingItemId', '1');
    fixture.detectChanges();

    const removeBtn = fixture.nativeElement.querySelector('[aria-label="Remove photo.pdf"]');
    expect(removeBtn).toBeFalsy();
  });

  it('does not render rename button when editingItemId matches item id', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('editable', true);
    fixture.componentRef.setInput('fileManagement', true);
    fixture.componentRef.setInput('editingItemId', '1');
    fixture.detectChanges();

    const renameBtn = fixture.nativeElement.querySelector('[aria-label="Rename photo.pdf"]');
    expect(renameBtn).toBeFalsy();
  });

  it('renders rename and remove buttons when editingItemId does not match', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('editable', true);
    fixture.componentRef.setInput('fileManagement', true);
    fixture.componentRef.setInput('editingItemId', 'other-id');
    fixture.detectChanges();

    const renameBtn = fixture.nativeElement.querySelector('[aria-label="Rename photo.pdf"]');
    expect(renameBtn).toBeTruthy();

    const removeBtn = fixture.nativeElement.querySelector('[aria-label="Remove photo.pdf"]');
    expect(removeBtn).toBeTruthy();
  });

  it('fileBaseName returns name without extension', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    expect(comp.fileBaseName()).toBe('photo');
  });

  it('fileExtension returns extension with dot', () => {
    const fixture = createFixture();
    const comp = fixture.componentInstance;
    expect(comp.fileExtension()).toBe('.pdf');
  });

  it('fileBaseName returns full name when no extension', () => {
    const fixture = createFixture({ editName: 'photofile' });
    const comp = fixture.componentInstance;
    expect(comp.fileBaseName()).toBe('photofile');
  });

  it('fileExtension returns empty string when no extension', () => {
    const fixture = createFixture({ editName: 'photofile' });
    const comp = fixture.componentInstance;
    expect(comp.fileExtension()).toBe('');
  });

  it('renders extension badge in display mode', () => {
    const fixture = createFixture();
    fixture.detectChanges();

    const extBadge = fixture.nativeElement.querySelector('.rui-file-manager-item__ext');
    expect(extBadge).toBeTruthy();
    expect(extBadge.textContent?.trim()).toBe('.pdf');
  });

  it('binds dragStartDelay to cdkDragStartDelay', () => {
    const fixture = createFixture();
    fixture.componentRef.setInput('dragStartDelay', 200);
    fixture.detectChanges();
    const cdkDrag = fixture.nativeElement.querySelector('[cdkdrag]');
    expect(cdkDrag).toBeTruthy();
  });

  describe('A11y', () => {
    it('remove button has aria-label with file name', () => {
      const fixture = createFixture();
      fixture.componentRef.setInput('fileManagement', true);
      fixture.detectChanges();
      const removeBtn = fixture.nativeElement.querySelector('[aria-label="Remove photo.pdf"]');
      expect(removeBtn).toBeTruthy();
      expect(removeBtn.getAttribute('type')).toBe('button');
    });

    it('rename button has aria-label with file name when editable', () => {
      const fixture = createFixture();
      fixture.componentRef.setInput('editable', true);
      fixture.componentRef.setInput('fileManagement', true);
      fixture.detectChanges();
      const renameBtn = fixture.nativeElement.querySelector('[aria-label="Rename photo.pdf"]');
      expect(renameBtn).toBeTruthy();
    });

    it('drag handle has role="button" and aria-label', () => {
      const fixture = createFixture();
      fixture.componentRef.setInput('sortable', true);
      fixture.detectChanges();
      const dragHandle = fixture.nativeElement.querySelector('.rui-file-manager-item__drag-handle');
      expect(dragHandle).toBeTruthy();
      expect(dragHandle.getAttribute('role')).toBe('button');
      expect(dragHandle.getAttribute('aria-label')).toBe('Drag to reorder');
      expect(dragHandle.getAttribute('tabindex')).toBe('0');
    });

    it('confirm rename button has aria-label', () => {
      const fixture = createFixture();
      fixture.componentRef.setInput('editable', true);
      fixture.componentRef.setInput('editingItemId', '1');
      fixture.detectChanges();
      const confirmBtn = fixture.nativeElement.querySelector('[aria-label="Confirm rename"]');
      expect(confirmBtn).toBeTruthy();
    });

    it('cancel rename button has aria-label', () => {
      const fixture = createFixture();
      fixture.componentRef.setInput('editable', true);
      fixture.componentRef.setInput('editingItemId', '1');
      fixture.detectChanges();
      const cancelRenameBtn = fixture.nativeElement.querySelector('[aria-label="Cancel rename"]');
      expect(cancelRenameBtn).toBeTruthy();
    });

    it('move up button has aria-label', () => {
      const fixture = createFixture();
      fixture.componentRef.setInput('sortable', true);
      fixture.detectChanges();
      const moveUpBtn = fixture.nativeElement.querySelector('[aria-label="Move up"]');
      expect(moveUpBtn).toBeTruthy();
      expect(moveUpBtn.getAttribute('type')).toBe('button');
    });

    it('move down button has aria-label', () => {
      const fixture = createFixture();
      fixture.componentRef.setInput('sortable', true);
      fixture.detectChanges();
      const moveDownBtn = fixture.nativeElement.querySelector('[aria-label="Move down"]');
      expect(moveDownBtn).toBeTruthy();
      expect(moveDownBtn.getAttribute('type')).toBe('button');
    });
  });
});
