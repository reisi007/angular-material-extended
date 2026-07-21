import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialPaginatorBasic } from './paginator/material-paginator-basic';

@Component({
  selector: 'rui-material-paginator',
  standalone: true,
  imports: [MaterialPaginatorBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Paginator</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-paginator provides pagination navigation for large data sets.</p>
      </div>

      <rui-material-paginator-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialPaginator {}
