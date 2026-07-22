# @all-the.rest/mat-extended/data-table — Data Table

![MIT License](https://img.shields.io/badge/license-MIT-green) ![Angular v22+](https://img.shields.io/badge/Angular-v22%2B-red) ![Signals](https://img.shields.io/badge/signals-%E2%9C%94-blue)

Full-featured data table component built on Angular Material Table with sorting, pagination, filtering, row selection, expandable rows, sticky headers, and inline actions.

## Installation

```sh
pnpm add @all-the.rest/mat-extended
```

## Imports

```typescript
import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';

// standalone:
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RuiDataTable],
  // ...
})
export class MyComponent {}
```

## Basic Usage

```html
<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ sortable: true, filterable: true }"
  [loading]="isLoading"
/>
```

## Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `data` | `T[]` | `[]` | Row data |
| `columns` | `RuiDataColumn<T>[]` | `[]` | Column definitions |
| `config` | `Partial<RuiDataTableConfig>` | `{}` | Table configuration |
| `loading` | `boolean` | `false` | Show loading spinner |
| `emptyMessage` | `string` | `'No data available'` | Empty state message |
| `actions` | `RuiDataAction<T>[]` | `[]` | Row action buttons |
| `expandedRowTemplate` | `TemplateRef<{ $implicit: T }>` | `undefined` | Template for expandable rows |

## Outputs

| Name | Type | Description |
|---|---|---|
| `sortChange` | `output<RuiDataSortEvent>()` | Emits `{ key, direction }` on sort |
| `selectionChange` | `output<RuiDataSelectionEvent<T>>()` | Emits `{ selected, allSelected }` on selection change |
| `pageChange` | `output<PageEvent>()` | Emits page event on pagination |

## Signal API

```html
<rui-data-table [data]="users()" [columns]="columns" [(selectedItems)]="selectedUsers" />
```

## Column Definitions

```typescript
interface RuiDataColumn<T> {
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
```

## Configuration

```typescript
interface RuiDataTableConfig {
  pageSize?: number;          // default: 10
  pageSizeOptions?: number[]; // default: [5, 10, 25, 50]
  sortable?: boolean;         // default: true
  filterable?: boolean;       // default: false
  selectable?: boolean;       // default: false
  stickyHeader?: boolean;     // default: true
  expandable?: boolean;
  trackBy?: (index: number, item: unknown) => unknown;
}
```

## Row Selection

Enable with `config.selectable: true`. The table renders checkboxes and emits `selectionChange` with the current selection.

```html
<rui-data-table
  [data]="items"
  [columns]="columns"
  [config]="{ selectable: true }"
  [(selectedItems)]="selectedItems"
/>
```

## Expandable Rows

Provide an `expandedRowTemplate` to enable row expansion:

```html
<ng-template #expanded let-row>
  <p>Detailed info for {{ row.name }}</p>
</ng-template>

<rui-data-table
  [data]="items"
  [columns]="columns"
  [expandedRowTemplate]="expanded"
/>
```

## Row Actions

```typescript
const actions: RuiDataAction<MyRow>[] = [
  { label: 'Edit', icon: 'edit', action: (row) => this.edit(row) },
  { label: 'Delete', icon: 'delete', action: (row) => this.delete(row), divider: true },
];
```

## Global Configuration

Provide defaults via `RUI_DATA_TABLE_DEFAULT_OPTIONS`:

```typescript
import { RUI_DATA_TABLE_DEFAULT_OPTIONS } from '@all-the.rest/mat-extended/data-table';

providers: [
  {
    provide: RUI_DATA_TABLE_DEFAULT_OPTIONS,
    useValue: { pageSize: 25, selectable: true, stickyHeader: true },
  },
]
```

## Accessibility

- Keyboard navigation for row selection
- ARIA labels on expand/collapse buttons (`aria-label="Expand row"` / `"Collapse row"`)
- Sort headers with keyboard support
- Paginator with standard ARIA attributes

## Server-Side Rendering

The component uses only standard Angular APIs and is fully compatible with Angular SSR.

## License

MIT — see the root [LICENSE](../../../../LICENSE) file.

## Unofficial Disclaimer

This is an unofficial package and is not affiliated with, endorsed by, or sponsored by Google or the Angular team. All trademarks and registered trademarks are the property of their respective owners.
