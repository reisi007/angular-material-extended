import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-selection-controls-checkbox',
  standalone: true,
  imports: [MatCheckboxModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="selection-controls-checkbox" class="mb-8">
      <h2 id="selection-controls-checkbox" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Checkbox</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-checkbox with unchecked, checked, indeterminate, and disabled states.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-4 flex-wrap items-center">
        <mat-checkbox>Unchecked</mat-checkbox>
        <mat-checkbox checked>Checked</mat-checkbox>
        <mat-checkbox indeterminate>Indeterminate</mat-checkbox>
        <mat-checkbox disabled>Disabled</mat-checkbox>
      </div>

      <rui-showcase-code
        html="<mat-checkbox>Unchecked</mat-checkbox>
<mat-checkbox checked>Checked</mat-checkbox>
<mat-checkbox indeterminate>Indeterminate</mat-checkbox>
<mat-checkbox disabled>Disabled</mat-checkbox>"
        ts="import { MatCheckboxModule } from '@angular/material/checkbox';

// In component imports:
imports: [MatCheckboxModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSelectionControlsCheckbox {}
