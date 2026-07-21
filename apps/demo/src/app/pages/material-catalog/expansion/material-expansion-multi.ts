import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-expansion-multi',
  standalone: true,
  imports: [MatExpansionModule, ShowcaseCode],
  template: `
    <section id="expansion-multi" class="mb-8">
      <h2 id="expansion-multi" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Multi Panel</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-accordion with [multi]="true" allows multiple panels open simultaneously.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-accordion [multi]="true">
          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>Panel One</mat-panel-title>
            </mat-expansion-panel-header>
            <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">This panel stays open when you open another panel.</p>
          </mat-expansion-panel>

          <mat-expansion-panel>
            <mat-expansion-panel-header>
              <mat-panel-title>Panel Two</mat-panel-title>
            </mat-expansion-panel-header>
            <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Both panels can remain expanded at the same time.</p>
          </mat-expansion-panel>
        </mat-accordion>
      </div>

      <rui-showcase-code
        html='<mat-accordion [multi]="true">
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Panel One</mat-panel-title>
    </mat-expansion-panel-header>
    <p>This panel stays open when you open another panel.</p>
  </mat-expansion-panel>

  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>Panel Two</mat-panel-title>
    </mat-expansion-panel-header>
    <p>Both panels can remain expanded at the same time.</p>
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
export class MaterialExpansionMulti {}
