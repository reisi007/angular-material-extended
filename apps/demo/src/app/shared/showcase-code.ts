import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RuiCodeHighlight } from './code-highlight.directive';

@Component({
  selector: 'rui-showcase-code',
  standalone: true,
  imports: [MatTabsModule, RuiCodeHighlight],
  template: `
    <div class="mt-4 rounded-lg border border-[var(--mat-sys-outline-variant)] overflow-hidden">
      @if (label()) {
        <div class="px-3 py-2 text-xs font-semibold text-[var(--mat-sys-on-surface-variant)] border-b border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface-container-low)]">
          {{ label() }}
        </div>
      }
      <mat-tab-group disableRipple dynamicHeight>
        <mat-tab label="HTML">
          <div class="p-3 bg-[var(--mat-sys-surface-container-low)]">
            @if (html()) {
              <pre ruiCodeHighlight language="html" class="m-0 text-xs leading-relaxed overflow-x-auto"><code>{{ html() }}</code></pre>
            }
          </div>
        </mat-tab>
        <mat-tab label="TS">
          <div class="p-3 bg-[var(--mat-sys-surface-container-low)]">
            @if (ts()) {
              <pre ruiCodeHighlight language="typescript" class="m-0 text-xs leading-relaxed overflow-x-auto"><code>{{ ts() }}</code></pre>
            }
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseCode {
  readonly html = input('');
  readonly ts = input('');
  readonly label = input('');
}
