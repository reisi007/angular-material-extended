import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-divider-basic',
  standalone: true,
  imports: [MatDividerModule, ShowcaseCode],
  template: `
    <section id="divider-basic" class="mb-8">
      <h2 id="divider-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Divider</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-divider with inset option to create visual separation.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <p class="text-sm text-[var(--mat-sys-on-surface)]">Section one — some content above the divider.</p>
        <mat-divider class="my-3"></mat-divider>
        <p class="text-sm text-[var(--mat-sys-on-surface)]">Section two — content between standard and inset dividers.</p>
        <mat-divider class="my-3" [inset]="true"></mat-divider>
        <p class="text-sm text-[var(--mat-sys-on-surface)]">Section three — after the inset divider.</p>
      </div>

      <rui-showcase-code
        html='<p>Section one — some content above the divider.</p>
<mat-divider class="my-3"></mat-divider>
<p>Section two — content between standard and inset dividers.</p>
<mat-divider class="my-3" [inset]="true"></mat-divider>
<p>Section three — after the inset divider.</p>'
        ts="import { MatDividerModule } from '@angular/material/divider';

// In component imports:
imports: [MatDividerModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialDividerBasic {}
