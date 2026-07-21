import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-tooltip-basic',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, ShowcaseCode],
  template: `
    <section id="tooltip-basic" class="mb-8">
      <h2 id="tooltip-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Tooltips</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">Tooltips via matTooltip with positional variants.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-4 items-center flex-wrap">
        <button mat-raised-button matTooltip="Tooltip above" matTooltipPosition="above">
          Above
        </button>
        <button mat-raised-button matTooltip="Tooltip below" matTooltipPosition="below">
          Below
        </button>
        <button mat-raised-button matTooltip="Tooltip left" matTooltipPosition="left">
          Left
        </button>
        <button mat-raised-button matTooltip="Tooltip right" matTooltipPosition="right">
          Right
        </button>
      </div>

      <rui-showcase-code
        html="<button mat-raised-button
  matTooltip=&quot;Tooltip above&quot;
  matTooltipPosition=&quot;above&quot;>
  Above
</button>

<button mat-raised-button
  matTooltip=&quot;Tooltip below&quot;
  matTooltipPosition=&quot;below&quot;>
  Below
</button>

<button mat-raised-button
  matTooltip=&quot;Tooltip left&quot;
  matTooltipPosition=&quot;left&quot;>
  Left
</button>

<button mat-raised-button
  matTooltip=&quot;Tooltip right&quot;
  matTooltipPosition=&quot;right&quot;>
  Right
</button>"
        ts="import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

// In component imports:
imports: [MatTooltipModule, MatButtonModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTooltipBasic {}
