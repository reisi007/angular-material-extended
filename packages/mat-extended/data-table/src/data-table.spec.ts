import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture } from '@angular/core/testing';
import { RuiDataTable } from './data-table.component';
import { RuiDataColumn } from './data-table.types';

interface TestItem {
  id: number;
  name: string;
}

const testData: TestItem[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const testColumns: RuiDataColumn<TestItem>[] = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true },
];

describe('RuiDataTable', () => {
  let component: RuiDataTable<TestItem>;
  let fixture: ComponentFixture<RuiDataTable<TestItem>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RuiDataTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RuiDataTable<TestItem>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dataSource data from input', () => {
    fixture.componentRef.setInput('data', testData);
    fixture.detectChanges();
    expect(component.dataSource.data).toEqual(testData);
  });

  it('should set displayedColumns from columns input without selection', () => {
    fixture.componentRef.setInput('columns', testColumns);
    fixture.detectChanges();
    expect(component.displayedColumns()).toEqual(['id', 'name']);
  });

  it('should add _select column when selectable is true', () => {
    fixture.componentRef.setInput('columns', testColumns);
    fixture.componentRef.setInput('config', { selectable: true });
    fixture.detectChanges();
    expect(component.displayedColumns()).toEqual(['_select', 'id', 'name']);
  });

  it('should emit sortChange on sort', () => {
    const spy = vi.fn();
    component.sortChange.subscribe(spy);
    component.onSortChange({ active: 'name', direction: 'asc' });
    expect(spy).toHaveBeenCalledWith({ key: 'name', direction: 'asc' });
  });

  describe('selection', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.detectChanges();
    });

    it('should toggle a single row', () => {
      component.toggleRow(testData[0]);
      expect(component.selectedItems()).toEqual([testData[0]]);
    });

    it('should deselect a single row', () => {
      component.toggleRow(testData[0]);
      component.toggleRow(testData[0]);
      expect(component.selectedItems()).toEqual([]);
    });

    it('should select all rows', () => {
      component.toggleAllRows();
      expect(component.selectedItems()).toEqual(testData);
    });

    it('should deselect all rows', () => {
      component.toggleAllRows();
      component.toggleAllRows();
      expect(component.selectedItems()).toEqual([]);
    });

    it('should report allSelected correctly', () => {
      expect(component.isAllSelected()).toBe(false);
      component.toggleAllRows();
      expect(component.isAllSelected()).toBe(true);
    });

    it('should emit selectionChange on toggle row', () => {
      const spy = vi.fn();
      component.selectionChange.subscribe(spy);
      component.toggleRow(testData[0]);
      expect(spy).toHaveBeenCalledWith({ selected: [testData[0]], allSelected: false });
    });

    it('should emit selectionChange on toggle all', () => {
      const spy = vi.fn();
      component.selectionChange.subscribe(spy);
      component.toggleAllRows();
      expect(spy).toHaveBeenCalledWith({ selected: testData, allSelected: true });
    });
  });

  describe('filter', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('columns', testColumns);
      fixture.detectChanges();
    });

    it('should update filterValue on input', () => {
      component.onFilterInput('Ali');
      expect(component.filterValue()).toBe('Ali');
    });

    it('should filter dataSource', () => {
      component.onFilterInput('Bob');
      fixture.detectChanges();
      expect(component.dataSource.filter).toBe('bob');
    });
  });

  describe('loading state', () => {
    it('should show loading indicator', () => {
      fixture.componentRef.setInput('loading', true);
      fixture.detectChanges();
      const matSpinner = fixture.nativeElement.querySelector('mat-spinner');
      expect(matSpinner).toBeTruthy();
    });

    it('should not show loading indicator when not loading', () => {
      fixture.componentRef.setInput('loading', false);
      fixture.detectChanges();
      const matSpinner = fixture.nativeElement.querySelector('mat-spinner');
      expect(matSpinner).toBeFalsy();
    });
  });

  describe('empty state', () => {
    it('should display empty message', () => {
      fixture.componentRef.setInput('data', []);
      fixture.componentRef.setInput('columns', testColumns);
      fixture.detectChanges();
      const message = component.emptyMessage();
      expect(message).toBe('No data available');
    });
  });

  describe('checkbox label', () => {
    it('should return select all label', () => {
      expect(component.checkboxLabel()).toBe('select all');
    });

    it('should return deselect all label when all selected', () => {
      fixture.componentRef.setInput('data', testData);
      fixture.detectChanges();
      component.toggleAllRows();
      expect(component.checkboxLabel()).toBe('deselect all');
    });

    it('should return select row label', () => {
      expect(component.checkboxLabel(testData[0])).toBe('select row');
    });

    it('should return deselect row label when row selected', () => {
      fixture.componentRef.setInput('data', testData);
      component.toggleRow(testData[0]);
      expect(component.checkboxLabel(testData[0])).toBe('deselect row');
    });
  });

  describe('expandable rows', () => {
    it('should toggle row expansion', () => {
      component.toggleRowExpansion(testData[0]);
      expect(component.isRowExpanded(testData[0])).toBe(true);

      component.toggleRowExpansion(testData[0]);
      expect(component.isRowExpanded(testData[0])).toBe(false);
    });

    it('should start with no rows expanded', () => {
      expect(component.isRowExpanded(testData[0])).toBe(false);
      expect(component.isRowExpanded(testData[1])).toBe(false);
    });

    it('should support multiple expanded rows independently', () => {
      component.toggleRowExpansion(testData[0]);
      component.toggleRowExpansion(testData[1]);

      expect(component.isRowExpanded(testData[0])).toBe(true);
      expect(component.isRowExpanded(testData[1])).toBe(true);

      component.toggleRowExpansion(testData[0]);

      expect(component.isRowExpanded(testData[0])).toBe(false);
      expect(component.isRowExpanded(testData[1])).toBe(true);
    });

    it('should use Set for expandedRows tracking', () => {
      expect(component.expandedRows()).toBeInstanceOf(Set);
      expect(component.expandedRows().size).toBe(0);

      component.toggleRowExpansion(testData[0]);

      expect(component.expandedRows().size).toBe(1);
    });
  });
});
