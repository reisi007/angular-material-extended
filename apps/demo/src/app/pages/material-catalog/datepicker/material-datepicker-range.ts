import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-datepicker-range',
  standalone: true,
  imports: [FormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, ShowcaseCode],
  template: `
    <section id="datepicker-range" class="mb-8">
      <h2 id="datepicker-range" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Date Range Picker</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">Select a start and end date with mat-date-range-picker.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-form-field appearance="outline" class="w-full max-w-xs">
          <mat-label>Date range</mat-label>
          <mat-date-range-input [rangePicker]="rangePicker">
            <input matStartDate [(ngModel)]="startDate" placeholder="Start date" />
            <input matEndDate [(ngModel)]="endDate" placeholder="End date" />
          </mat-date-range-input>
          <mat-datepicker-toggle matIconSuffix [for]="rangePicker" />
          <mat-date-range-picker #rangePicker />
        </mat-form-field>
      </div>

      <rui-showcase-code
        html="<mat-form-field appearance=&quot;outline&quot; class=&quot;w-full max-w-xs&quot;>
  <mat-label>Date range</mat-label>
  <mat-date-range-input [rangePicker]=&quot;rangePicker&quot;>
    <input matStartDate [(ngModel)]=&quot;startDate&quot; placeholder=&quot;Start date&quot; />
    <input matEndDate [(ngModel)]=&quot;endDate&quot; placeholder=&quot;End date&quot; />
  </mat-date-range-input>
  <mat-datepicker-toggle matIconSuffix [for]=&quot;rangePicker&quot; />
  <mat-date-range-picker #rangePicker />
</mat-form-field>"
        ts="import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

// In component imports:
imports: [FormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDatepickerRange {
  protected startDate: Date | null = null;
  protected endDate: Date | null = null;
}
