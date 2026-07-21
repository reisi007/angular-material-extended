import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'rui-data-table-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'block' },
  template: `
    @if (loading()) {
      <div class="flex justify-center py-6">
        <mat-spinner [diameter]="diameter()" />
      </div>
    }
  `,
})
export class RuiDataTableLoading {
  readonly loading = input(false);
  readonly diameter = input(32);
}
