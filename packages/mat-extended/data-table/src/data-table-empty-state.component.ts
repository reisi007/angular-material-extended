import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'rui-data-table-empty-state',
  standalone: true,
  imports: [MatIconModule],
  styleUrl: './data-table-empty-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rui-empty-state">
      <mat-icon class="rui-empty-state__icon" aria-hidden="true">inbox</mat-icon>
      <p class="rui-empty-state__message">{{ message() }}</p>
    </div>
  `,
})
export class RuiDataTableEmptyState {
  readonly message = input('No data available');
}
