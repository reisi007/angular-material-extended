import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-form-fields-basic',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="form-fields-basic" class="mb-8">
      <h2 id="form-fields-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Form Fields</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-form-field with outline and fill appearances, prefix/suffix icons.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex flex-col gap-3">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Text Input</mat-label>
          <input matInput placeholder="Enter text" />
        </mat-form-field>
        <mat-form-field appearance="fill" class="w-full">
          <mat-label>Filled Input</mat-label>
          <input matInput placeholder="Filled style" />
          <mat-icon matIconSuffix>search</mat-icon>
        </mat-form-field>
      </div>

      <rui-showcase-code
        html="<mat-form-field appearance=&quot;outline&quot;>
  <mat-label>Text Input</mat-label>
  <input matInput placeholder=&quot;Enter text&quot; />
</mat-form-field>
<mat-form-field appearance=&quot;fill&quot;>
  <mat-label>Filled Input</mat-label>
  <input matInput placeholder=&quot;Filled style&quot; />
  <mat-icon matIconSuffix>search</mat-icon>
</mat-form-field>"
        ts="import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatFormFieldModule, MatInputModule, MatIconModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialFormFieldsBasic {}
