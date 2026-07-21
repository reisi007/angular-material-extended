import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'rui-data-table-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' },
  template: `
    <mat-paginator
      [pageSize]="pageSize()"
      [pageSizeOptions]="pageSizeOptions()"
      (page)="pageChange.emit($event)"
      showFirstLastButtons
      aria-label="Select page"
    />
  `,
})
export class RuiDataTablePaginator {
  readonly pageSize = input(10);
  readonly pageSizeOptions = input<number[]>([5, 10, 25, 50]);
  readonly pageChange = output<PageEvent>();
}
