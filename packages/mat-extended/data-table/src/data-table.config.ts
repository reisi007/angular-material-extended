import { InjectionToken } from '@angular/core';
import { RuiDataTableConfig } from './data-table.types';

export const RUI_DATA_TABLE_DEFAULT_OPTIONS = new InjectionToken<Partial<RuiDataTableConfig>>(
  'RUI_DATA_TABLE_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_DATA_TABLE_DEFAULTS },
);

export const RUI_DATA_TABLE_DEFAULTS: Partial<RuiDataTableConfig> = {
  pageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
  sortable: true,
  filterable: false,
  selectable: false,
  stickyHeader: true,
};
