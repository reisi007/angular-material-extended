import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-expansion-accordion',
  standalone: true,
  imports: [MatExpansionModule, ShowcaseCode],
  template: `
    <section id="expansion-accordion" class="mb-8">
      <h2 id="expansion-accordion" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Accordion</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-accordion with single-panel expansion (default behavior).</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-accordion>
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>Personal Details</mat-panel-title>
              <mat-panel-description>Name, email, phone</mat-panel-description>
            </mat-expansion-panel-header>
            <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Form fields for personal information go here.</p>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>Address</mat-panel-title>
              <mat-panel-description>Street, city, zip code</mat-panel-description>
            </mat-expansion-panel-header>
            <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Address input fields appear here.</p>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>Payment</mat-panel-title>
              <mat-panel-description>Credit card or PayPal</mat-panel-description>
            </mat-expansion-panel-header>
            <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Payment method selection and details.</p>
          </mat-expansion-panel>
        </mat-accordion>
      </div>

      <rui-showcase-code
        html='<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Personal Details</mat-panel-title>
      <mat-panel-description>Name, email, phone</mat-panel-description>
    </mat-expansion-panel-header>
    <p>Form fields for personal information go here.</p>
  </mat-expansion-panel>

  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Address</mat-panel-title>
      <mat-panel-description>Street, city, zip code</mat-panel-description>
    </mat-expansion-panel-header>
    <p>Address input fields appear here.</p>
  </mat-expansion-panel>

  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Payment</mat-panel-title>
      <mat-panel-description>Credit card or PayPal</mat-panel-description>
    </mat-expansion-panel-header>
    <p>Payment method selection and details.</p>
  </mat-expansion-panel>
</mat-accordion>'
        ts="import { MatExpansionModule } from '@angular/material/expansion';

// In component imports:
imports: [MatExpansionModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialExpansionAccordion {}
