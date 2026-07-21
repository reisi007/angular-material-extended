import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CdkDropList, CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
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
});
