import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-paginator-basic',
  standalone: true,
  imports: [MatPaginatorModule, FormsModule, ShowcaseCode],
  template: `
    <section id="paginator-basic" class="mb-8">
      <h2 id="paginator-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Paginator</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-paginator with configurable page size and first/last buttons.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-paginator
          [length]="100"
          [pageSize]="10"
          [pageSizeOptions]="[5, 10, 25, 100]"
          [showFirstLastButtons]="true"
          aria-label="Paginator"
        >
        </mat-paginator>
      </div>

      <rui-showcase-code
        html='<mat-paginator
  [length]="100"
  [pageSize]="10"
  [pageSizeOptions]="[5, 10, 25, 100]"
  [showFirstLastButtons]="true"
  aria-label="Paginator"
>
</mat-paginator>'
        ts="import { MatPaginatorModule } from '@angular/material/paginator';

// In component imports:
imports: [MatPaginatorModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialPaginatorBasic {}
