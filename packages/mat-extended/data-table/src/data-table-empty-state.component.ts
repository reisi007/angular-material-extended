import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'rui-data-table-empty-state',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' },
  template: `
    <div class="flex flex-col items-center justify-center py-8">
      <mat-icon class="text-[var(--mat-sys-on-surface-variant)] !text-5xl mb-4">inbox</mat-icon>
      <p class="text-[var(--mat-sys-on-surface-variant)] m-0">{{ message() }}</p>
    </div>
  `,
})
export class RuiDataTableEmptyState {
  readonly message = input('No data available');
}
