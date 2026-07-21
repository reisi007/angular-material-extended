import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RuiDataTable } from '@all-the.rest/mat-extended/data-table';
import { RuiDataColumn, RuiDataSortEvent, RuiDataSelectionEvent } from '@all-the.rest/mat-extended/data-table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

@Component({
  selector: 'rui-data-table-demo',
  standalone: true,
  imports: [JsonPipe, MatCardModule, MatSlideToggleModule, RuiDataTable],
  template: `
    <div class="max-w-6xl mx-auto space-y-8 p-4">
      <h1 class="text-2xl font-bold">Data Table</h1>

      <mat-card>
        <mat-card-header><mat-card-title>Configuration</mat-card-title></mat-card-header>
        <mat-card-content class="flex gap-4 items-center">
          <mat-slide-toggle [checked]="sortable()" (change)="sortable.set($event.checked)">Sortable</mat-slide-toggle>
          <mat-slide-toggle [checked]="filterable()" (change)="filterable.set($event.checked)">Filter</mat-slide-toggle>
          <mat-slide-toggle [checked]="selectable()" (change)="selectable.set($event.checked)">Select</mat-slide-toggle>
        </mat-card-content>
      </mat-card>

      <rui-data-table
        [data]="users()"
        [columns]="columns"
        [config]="{ sortable: sortable(), filterable: filterable(), selectable: selectable() }"
        (sortChange)="onSortChange($event)"
        (selectionChange)="onSelectionChange($event)"
        [(selectedItems)]="selectedItems"
      />

      <mat-card>
        <mat-card-header><mat-card-title>Selection</mat-card-title></mat-card-header>
        <mat-card-content>
          <pre class="bg-gray-100 p-2 rounded text-sm">{{ selectedItems() | json }}</pre>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableDemo {
  sortable = signal(true);
  filterable = signal(true);
  selectable = signal(true);
  selectedItems = signal<User[]>([]);

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

  columns: RuiDataColumn<User>[] = [
    { key: 'id', header: 'ID', sortable: true, width: '60px' },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'role', header: 'Role', sortable: true, filterable: true },
    { key: 'active', header: 'Active', sortable: true, cell: (row) => row.active ? '✓' : '✕' },
  ];

  onSortChange(_event: RuiDataSortEvent): void {
    // handled by table
  }

  onSelectionChange(_event: RuiDataSelectionEvent<User>): void {
    // handled by selectedItems model
  }
}
