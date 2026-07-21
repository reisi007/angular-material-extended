import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-icon-svg',
  standalone: true,
  imports: [MatIconModule, ShowcaseCode],
  template: `
    <section id="icon-svg" class="mb-8">
      <h2 id="icon-svg" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Icon Sizes</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-icon sized via font-size CSS.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-3 items-center flex-wrap text-[var(--mat-sys-on-surface-variant)]">
        <mat-icon style="font-size: 18px">home</mat-icon>
        <mat-icon style="font-size: 24px">favorite</mat-icon>
        <mat-icon style="font-size: 32px" color="primary">star</mat-icon>
        <mat-icon style="font-size: 40px" color="accent">warning</mat-icon>
        <mat-icon style="font-size: 48px" color="warn">settings</mat-icon>
      </div>

      <rui-showcase-code
        html="<mat-icon style=&quot;font-size: 18px&quot;>home</mat-icon>
<mat-icon style=&quot;font-size: 24px&quot;>favorite</mat-icon>
<mat-icon style=&quot;font-size: 32px&quot; color=&quot;primary&quot;>star</mat-icon>
<mat-icon style=&quot;font-size: 40px&quot; color=&quot;accent&quot;>warning</mat-icon>
<mat-icon style=&quot;font-size: 48px&quot; color=&quot;warn&quot;>settings</mat-icon>"
        ts="import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatIconModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialIconSvg {}
