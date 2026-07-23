import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-selection-controls-radio',
  standalone: true,
  imports: [MatRadioModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="selection-controls-radio" class="mb-8">
      <h2 id="selection-controls-radio" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Radio Buttons</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-radio-group with mat-radio-button items and a disabled state.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-4 flex-wrap items-center">
        <fieldset>
          <legend class="sr-only">Radio buttons</legend>
          <mat-radio-group class="flex gap-4">
            <mat-radio-button value="1">Option 1</mat-radio-button>
            <mat-radio-button value="2">Option 2</mat-radio-button>
            <mat-radio-button value="3" disabled>Disabled</mat-radio-button>
          </mat-radio-group>
        </fieldset>
      </div>

      <rui-showcase-code
        html="<mat-radio-group>
  <mat-radio-button value=&quot;1&quot;>Option 1</mat-radio-button>
  <mat-radio-button value=&quot;2&quot;>Option 2</mat-radio-button>
  <mat-radio-button value=&quot;3&quot; disabled>Disabled</mat-radio-button>
</mat-radio-group>"
        ts="import { MatRadioModule } from '@angular/material/radio';

// In component imports:
imports: [MatRadioModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSelectionControlsRadio {}
