import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataAction, RuiDataSortEvent, RuiDataSelectionEvent } from '@all-the.rest/mat-extended/data-table';
import { ShowcaseCode } from '../../shared/showcase-code';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
  department?: string;
  joined?: string;
  phone?: string;
}

@Component({
  selector: 'rui-data-table-demo',
  standalone: true,
  imports: [JsonPipe, FormsModule, ReactiveFormsModule, MatCardModule, MatIconModule, MatButtonModule, RuiDataTable, ShowcaseCode],
  template: `
<div class="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
  <h1 class="font-bold">Data Table</h1>
  <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">
    Feature-rich data table with sorting, pagination, filtering, row selection, and custom actions.
  </p>

  <section>
    <h2 id="data-table-select-no-sort" class="!text-xl !font-semibold mb-1">Multi-select without sorting</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-data-table
          [data]="users()"
          [columns]="columns"
          [config]="{ selectable: true, sortable: false }"
          (selectionChange)="onSelectionChange($event)"
          [(selectedItems)]="selectedItemsNoSort"
        />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="selectNoSortCode" [ts]="selectNoSortTs" />
  </section>

  <section>
    <h2 id="data-table-select-sort" class="!text-xl !font-semibold mb-1">Multi-select with sorting</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-data-table
          [data]="users()"
          [columns]="columns"
          [config]="{ selectable: true, sortable: true }"
          (selectionChange)="onSelectionChangeSort($event)"
          (sortChange)="onSortChange($event)"
          [(selectedItems)]="selectedItemsWithSort"
        />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="selectSortCode" [ts]="selectSortTs" />
  </section>

  <section>
    <h2 id="data-table-filter" class="!text-xl !font-semibold mb-1">Filter</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-data-table
          [data]="users()"
          [columns]="columns"
          [config]="{ filterable: true }"
        />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="filterCode" [ts]="filterTs" />
  </section>

  <section>
    <h2 id="data-table-selection" class="!text-xl !font-semibold mb-1">Selection output</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <div>
          <p class="text-sm font-medium text-[var(--mat-sys-on-surface)]">No sorting table:</p>
          <pre class="bg-[var(--mat-sys-surface-container-high)] p-3 rounded text-xs overflow-auto max-h-40">{{ selectedItemsNoSort() | json }}</pre>
        </div>
        <div>
          <p class="text-sm font-medium text-[var(--mat-sys-on-surface)]">With sorting table:</p>
          <pre class="bg-[var(--mat-sys-surface-container-high)] p-3 rounded text-xs overflow-auto max-h-40">{{ selectedItemsWithSort() | json }}</pre>
        </div>
      </mat-card-content>
    </mat-card>
  </section>

  <section>
    <h2 id="data-table-actions" class="!text-xl !font-semibold mb-1">Row Actions Menu</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-data-table
          [data]="users()"
          [columns]="columns"
          [actions]="rowActions()"
          [config]="{ sortable: true }"
        />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="actionsCode" [ts]="actionsTs" />
  </section>

  <section>
    <h2 id="data-table-expandable" class="!text-xl !font-semibold mb-1">Expandable Rows</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <ng-template #expandedRow let-user>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div><span class="font-medium text-[var(--mat-sys-on-surface)]">Department:</span> <span class="text-[var(--mat-sys-on-surface-variant)]">{{ user.department }}</span></div>
            <div><span class="font-medium text-[var(--mat-sys-on-surface)]">Joined:</span> <span class="text-[var(--mat-sys-on-surface-variant)]">{{ user.joined }}</span></div>
            <div><span class="font-medium text-[var(--mat-sys-on-surface)]">Phone:</span> <span class="text-[var(--mat-sys-on-surface-variant)]">{{ user.phone }}</span></div>
            <div><span class="font-medium text-[var(--mat-sys-on-surface)]">Email:</span> <span class="text-[var(--mat-sys-on-surface-variant)]">{{ user.email }}</span></div>
            <div><span class="font-medium text-[var(--mat-sys-on-surface)]">Role:</span> <span class="text-[var(--mat-sys-on-surface-variant)]">{{ user.role }}</span></div>
            <div><span class="font-medium text-[var(--mat-sys-on-surface)]">Active:</span> <span class="text-[var(--mat-sys-on-surface-variant)]">{{ user.active ? 'Yes' : 'No' }}</span></div>
          </div>
        </ng-template>

        <rui-data-table
          [data]="usersWithDetails()"
          [columns]="columns"
          [expandedRowTemplate]="expandedRow"
          [config]="{ sortable: true }"
        />
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="expandableCode" [ts]="expandableTs" />
  </section>

  <section>
    <h2 id="data-table-usage" class="!text-xl !font-semibold mb-1">Usage</h2>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-showcase-code label="Usage" [html]="htmlCode" [ts]="tsCode" />
      </mat-card-content>
    </mat-card>
  </section>

  <section>
    <h2 id="template-driven" class="!text-xl !font-semibold mb-1">Template-driven Form</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Using ngModel with the data table. The model value is the array of selected items. Note: data-table does not implement ControlValueAccessor, so ngModel binding is one-way.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-data-table
          [data]="users()"
          [columns]="columns"
          [config]="{ selectable: true }"
          [(selectedItems)]="tdSelectedItems"
        />
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-2">{{ tdSelectedItems().length }} item(s) selected</p>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="templateHtml" [ts]="templateTs" />
  </section>

  <section>
    <h2 id="reactive-form" class="!text-xl !font-semibold mb-1">Reactive Form</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Using formControl with the data table. Note: the data table uses its own model for selection; formControl shows one-way value sync.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-data-table
          [data]="users()"
          [columns]="columns"
          [config]="{ selectable: true }"
          [(selectedItems)]="reactiveSelectedItems"
        />
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-2">{{ reactiveSelectedItems().length }} item(s) selected</p>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="reactiveHtml" [ts]="reactiveTs" />
  </section>

  <section>
    <h2 id="signal-form" class="!text-xl !font-semibold mb-1">Signal Form</h2>
    <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-3">Using model() signal directly — no FormsModule or ReactiveFormsModule needed. This is the native API for the data table selection.</p>
    <mat-card>
      <mat-card-content class="pt-4">
        <rui-data-table
          [data]="users()"
          [columns]="columns"
          [config]="{ selectable: true }"
          [(selectedItems)]="signalSelectedItems"
        />
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-2">{{ signalSelectedItems().length }} item(s) selected</p>
      </mat-card-content>
    </mat-card>
    <rui-showcase-code [html]="signalHtml" [ts]="signalTs" />
  </section>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableDemo {
  selectedItemsNoSort = signal<User[]>([]);
  selectedItemsWithSort = signal<User[]>([]);
  protected tdSelectedItems = signal<User[]>([]);
  protected reactiveSelectedItems = signal<User[]>([]);
  protected signalSelectedItems = signal<User[]>([]);

  protected templateHtml = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ selectable: true }"
  [(selectedItems)]="selectedItems"
/>`;

  protected templateTs = `import { Component, signal } from '@angular/core';
import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name' },
  ];
  selectedItems = signal<User[]>([]);
}`;

  protected reactiveHtml = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ selectable: true }"
  [(selectedItems)]="selectedItems"
/>`;

  protected reactiveTs = `import { Component, signal } from '@angular/core';
import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name' },
  ];
  selectedItems = signal<User[]>([]);
}`;

  protected signalHtml = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ selectable: true }"
  [(selectedItems)]="selectedItems"
/>`;

  protected signalTs = `import { Component, signal } from '@angular/core';
import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name' },
  ];
  selectedItems = signal<User[]>([]);
}`;

  users = signal<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', active: true },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User', active: true },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Editor', active: false },
    { id: 4, name: 'Diana', email: 'diana@example.com', role: 'User', active: true },
    { id: 5, name: 'Eve', email: 'eve@example.com', role: 'Viewer', active: false },
    { id: 6, name: 'Frank', email: 'frank@example.com', role: 'Admin', active: true },
    { id: 7, name: 'Grace', email: 'grace@example.com', role: 'Editor', active: true },
    { id: 8, name: 'Heidi', email: 'heidi@example.com', role: 'User', active: false },
    { id: 9, name: 'Ivan', email: 'ivan@example.com', role: 'Viewer', active: true },
    { id: 10, name: 'Judy', email: 'judy@example.com', role: 'Admin', active: true },
    { id: 11, name: 'Karl', email: 'karl@example.com', role: 'User', active: true },
    { id: 12, name: 'Linda', email: 'linda@example.com', role: 'Editor', active: false },
  ]);

  usersWithDetails = signal<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', active: true, department: 'Engineering', joined: '2023-01-15', phone: '+1-555-0101' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User', active: true, department: 'Marketing', joined: '2023-03-22', phone: '+1-555-0102' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Editor', active: false, department: 'Design', joined: '2022-11-08', phone: '+1-555-0103' },
    { id: 4, name: 'Diana', email: 'diana@example.com', role: 'User', active: true, department: 'Engineering', joined: '2024-02-01', phone: '+1-555-0104' },
    { id: 5, name: 'Eve', email: 'eve@example.com', role: 'Viewer', active: false, department: 'HR', joined: '2023-06-14', phone: '+1-555-0105' },
    { id: 6, name: 'Frank', email: 'frank@example.com', role: 'Admin', active: true, department: 'Engineering', joined: '2022-09-30', phone: '+1-555-0106' },
  ]);

  columns: RuiDataColumn<User>[] = [
    { key: 'id', header: 'ID', sortable: true, width: '60px' },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'role', header: 'Role', sortable: true, filterable: true },
    { key: 'active', header: 'Active', sortable: true, cell: (row) => row.active ? 'Yes' : 'No' },
  ];

  rowActions = signal<RuiDataAction<User>[]>([
    { label: 'Edit', icon: 'edit', action: (row) => alert(`Edit user ${row.name}`) },
    { label: 'Delete', icon: 'delete', action: (row) => alert(`Delete user ${row.name}`), disabled: (row) => row.role === 'Admin' },
    { divider: true, label: '', action: () => void 0 },
    { label: 'Duplicate', icon: 'content_copy', action: (row) => alert(`Duplicate user ${row.name}`) },
  ]);

  protected selectNoSortCode = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ selectable: true, sortable: false }"
  [(selectedItems)]="selectedItems"
/>`;

  protected selectNoSortTs = `import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
  ];
  selectedItems = signal<User[]>([]);
}`;

  protected selectSortCode = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ selectable: true, sortable: true }"
  (sortChange)="onSortChange($event)"
  [(selectedItems)]="selectedItems"
/>`;

  protected selectSortTs = `import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataSortEvent } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
  ];
  selectedItems = signal<User[]>([]);

  onSortChange(event: RuiDataSortEvent): void {
    console.log('Sort changed:', event);
  }
}`;

  protected filterCode = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [config]="{ filterable: true }"
/>`;

  protected filterTs = `import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', filterable: true },
  ];
}`;

  protected actionsCode = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [actions]="rowActions"
  [config]="{ sortable: true }"
/>`;

  protected actionsTs = `import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataAction } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
  ];
  rowActions = signal<RuiDataAction<User>[]>([
    { label: 'Edit', icon: 'edit', action: (row) => console.log(row) },
  ]);
}`;

  protected expandableCode = `<ng-template #expandedRow let-user>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
    <div>Department: {{ user.department }}</div>
    ...
  </div>
</ng-template>

<rui-data-table
  [data]="usersWithDetails"
  [columns]="columns"
  [expandedRowTemplate]="expandedRow"
  [config]="{ sortable: true }"
/>`;

  protected expandableTs = `import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  usersWithDetails = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
  ];
}`;

  protected htmlCode = `<rui-data-table
  [data]="users"
  [columns]="columns"
  [actions]="rowActions"
  [expandedRowTemplate]="expandedRow"
  [config]="{ sortable: true, selectable: true, filterable: true }"
  (sortChange)="onSortChange($event)"
  (selectionChange)="onSelectionChange($event)"
  [(selectedItems)]="selectedItems"
/>`;

  protected tsCode = `import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataAction, RuiDataSortEvent, RuiDataSelectionEvent } from '@all-the.rest/mat-extended/data-table';

@Component({
  imports: [RuiDataTable],
})
export class MyComponent {
  users = signal<User[]>([]);
  columns: RuiDataColumn<User>[] = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role', filterable: true },
  ];
  rowActions = signal<RuiDataAction<User>[]>([
    { label: 'Edit', icon: 'edit', action: (row) => console.log(row) },
  ]);
  selectedItems = signal<User[]>([]);

  onSortChange(_event: RuiDataSortEvent): void {}
  onSelectionChange(_event: RuiDataSelectionEvent<User>): void {}
}`;

  onSortChange(_sortEvent: RuiDataSortEvent): void {
    void _sortEvent;
  }
  onSelectionChange(_selEvent: RuiDataSelectionEvent<User>): void {
    void _selEvent;
  }
  onSelectionChangeSort(_selEvent: RuiDataSelectionEvent<User>): void {
    void _selEvent;
  }
}
