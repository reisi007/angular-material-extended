import { TemplateRef } from '@angular/core';

export interface RuiDataColumn<T> {
  key: string;
  header: string;
  cell?: (row: T) => string;
  sortable?: boolean;
  filterable?: boolean;
  sticky?: boolean;
  width?: string;
  cellTemplate?: TemplateRef<{ $implicit: T }>;
  headerTemplate?: TemplateRef<void>;
}

export interface RuiDataTableConfig {
  pageSize?: number;
  pageSizeOptions?: number[];
  sortable?: boolean;
  filterable?: boolean;
  selectable?: boolean;
  stickyHeader?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trackBy?: (index: number, item: any) => any;
}

export type RuiDataSortDirection = 'asc' | 'desc' | '';

export interface RuiDataSortEvent {
  key: string;
  direction: RuiDataSortDirection;
}

export interface RuiDataSelectionEvent<T> {
  selected: T[];
  allSelected: boolean;
}
