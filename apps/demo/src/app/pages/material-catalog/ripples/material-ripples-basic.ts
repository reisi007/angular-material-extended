import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-ripples-basic',
  standalone: true,
  imports: [MatRippleModule, MatButtonModule, ShowcaseCode],
  template: `
    <section id="ripples-basic" class="mb-8">
      <h2 id="ripples-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Ripples</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">matRipple directive on a div container and on a button.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex flex-wrap gap-4 items-center">
        <div
          matRipple
          class="w-48 h-24 flex items-center justify-center border border-[var(--mat-sys-outline)] rounded cursor-pointer select-none text-sm text-[var(--mat-sys-on-surface)] bg-[var(--mat-sys-surface-container-low)]"
        >
          Click me for ripple effect
        </div>

        <button mat-raised-button color="primary" matRipple>
          Button with Ripple
        </button>
      </div>

      <rui-showcase-code
        html='<div matRipple class="w-48 h-24 flex items-center justify-center border rounded cursor-pointer select-none">
  Click me for ripple effect
</div>

<button mat-raised-button color="primary" matRipple>
  Button with Ripple
</button>'
        ts="import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

// In component imports:
imports: [MatRippleModule, MatButtonModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialRipplesBasic {}
