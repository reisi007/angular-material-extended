import { Component, input, model, output, signal, computed, ChangeDetectionStrategy, ViewChild, effect, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { RuiDataColumn, RuiDataSortDirection, RuiDataSortEvent, RuiDataSelectionEvent, RuiDataTableConfig } from './data-table.types';
import { RUI_DATA_TABLE_DEFAULT_OPTIONS, RUI_DATA_TABLE_DEFAULTS } from './data-table.config';

@Component({
  selector: 'rui-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatSortModule, MatPaginatorModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],
  templateUrl: './data-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class RuiDataTable<T extends { [key: string]: any }> implements AfterViewInit {
  readonly data = input<T[]>([]);
  readonly columns = input<RuiDataColumn<T>[]>([]);
  readonly config = input<Partial<RuiDataTableConfig>>({});
  readonly loading = input(false);
  readonly emptyMessage = input('No data available');

  readonly sortChange = output<RuiDataSortEvent>();
  readonly selectionChange = output<RuiDataSelectionEvent<T>>();
  readonly pageChange = output<PageEvent>();

  readonly selectedItems = model<T[]>([]);

  readonly dataSource = new MatTableDataSource<T>([]);
  readonly displayedColumns = signal<string[]>([]);
  readonly filterValue = signal('');

  @ViewChild(MatSort) matSort!: MatSort;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  private _defaults = inject(RUI_DATA_TABLE_DEFAULT_OPTIONS, { optional: true });

  readonly mergedConfig = computed(() => {
    const defaults = this._defaults ?? {};
    return { ...RUI_DATA_TABLE_DEFAULTS, ...defaults, ...this.config() } as Required<RuiDataTableConfig>;
  });

  constructor() {
    effect(() => {
      this.dataSource.data = this.data();
    });

    effect(() => {
      const cols = this.columns();
      const sel = this.mergedConfig().selectable;
      const colsToShow = cols.map(c => c.key);
      this.displayedColumns.set(sel ? ['_select', ...colsToShow] : colsToShow);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
  }

  onSortChange(sort: Sort): void {
    this.sortChange.emit({ key: sort.active, direction: sort.direction as RuiDataSortDirection });
  }

  onFilterInput(value: string): void {
    this.filterValue.set(value);
    this.dataSource.filter = value.trim().toLowerCase();
  }

  isAllSelected(): boolean {
    const currentData = this.dataSource.data;
    return currentData.length > 0 && currentData.every(item => this.selectedItems().includes(item));
  }

  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selectedItems.set([]);
    } else {
      this.selectedItems.set([...this.dataSource.data]);
    }
    this.emitSelection();
  }

  toggleRow(row: T): void {
    const current = [...this.selectedItems()];
    const index = current.indexOf(row);
    if (index >= 0) {
      current.splice(index, 1);
    } else {
      current.push(row);
    }
    this.selectedItems.set(current);
    this.emitSelection();
  }

  checkboxLabel(row?: T): string {
    if (!row) return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    return `${this.selectedItems().includes(row) ? 'deselect' : 'select'} row`;
  }

  private emitSelection(): void {
    this.selectionChange.emit({
      selected: this.selectedItems(),
      allSelected: this.isAllSelected(),
    });
  }
}
