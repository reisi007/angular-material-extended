import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-datepicker-basic',
  standalone: true,
  imports: [FormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, ShowcaseCode],
  template: `
    <section id="datepicker-basic" class="mb-8">
      <h2 id="datepicker-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Datepicker</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">Single date selection with a toggle button.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-form-field appearance="outline" class="w-full max-w-xs">
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker" [(ngModel)]="selectedDate" />
          <mat-datepicker-toggle matIconSuffix [for]="picker" />
          <mat-datepicker #picker />
        </mat-form-field>
      </div>

      <rui-showcase-code
        html="<mat-form-field appearance=&quot;outline&quot; class=&quot;w-full max-w-xs&quot;>
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]=&quot;picker&quot; [(ngModel)]=&quot;selectedDate&quot; />
  <mat-datepicker-toggle matIconSuffix [for]=&quot;picker&quot; />
  <mat-datepicker #picker />
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
export class MaterialDatepickerBasic {
  protected selectedDate: Date | null = null;
}
