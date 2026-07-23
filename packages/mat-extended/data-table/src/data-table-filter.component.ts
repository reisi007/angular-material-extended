import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rui-data-table-filter',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  styleUrl: './data-table-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (filterable()) {
      <mat-form-field class="rui-data-table-filter">
        <mat-label>Filter</mat-label>
        <input matInput (input)="onInput($any($event).target.value)" [value]="filterValue()" placeholder="Search..." />
      </mat-form-field>
    }
  `,
})
export class RuiDataTableFilter {
  readonly filterValue = input<string>('');
  readonly filterable = input(false);
  readonly filterChange = output<string>();

  onInput(value: string): void {
    this.filterChange.emit(value);
  }
}
