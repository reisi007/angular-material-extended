import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'rui-data-table-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  styleUrl: './data-table-loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (loading()) {
      <div class="rui-data-table-loading">
        <mat-spinner [diameter]="diameter()" />
      </div>
    }
  `,
})
export class RuiDataTableLoading {
  readonly loading = input(false);
  readonly diameter = input(32);
}
