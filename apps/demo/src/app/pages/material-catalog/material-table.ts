import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialTableBasic } from './table/material-table-basic';
import { MaterialTableSortPaginated } from './table/material-table-sort-paginated';

@Component({
  selector: 'rui-material-table',
  standalone: true,
  imports: [MaterialTableBasic, MaterialTableSortPaginated],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Table</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-table is a flexible data table component with sorting and pagination.</p>
      </div>

      <rui-material-table-basic />
      <rui-material-table-sort-paginated />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTable {}
