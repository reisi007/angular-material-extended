import { Component, input, signal, ChangeDetectionStrategy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RuiCodeHighlight } from './code-highlight.directive';

@Component({
  selector: 'rui-showcase-code',
  standalone: true,
  imports: [MatTabsModule, RuiCodeHighlight],
  template: `
    <div class="mt-4 rounded-xl border border-[var(--mat-sys-outline-variant)] overflow-hidden">
      <div class="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--mat-sys-on-surface-variant)] border-b border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface-container-low)]">
        <span>{{ label() || 'Code' }}</span>
        <button
          (click)="copyCode()"
          class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium hover:bg-[var(--mat-sys-surface-container-high)] transition-colors"
          [class.text-[var(--mat-sys-primary)]]="!copied()"
          [class.text-[var(--mat-sys-tertiary)]]="copied()"
        >
          @if (copied()) {
            <span>Copied!</span>
          } @else {
            <span>Copy</span>
          }
        </button>
      </div>
      <mat-tab-group disableRipple>
        <mat-tab label="Template">
          <div class="p-3 bg-[var(--mat-sys-surface-container-low)] max-h-96 overflow-y-auto">
            @if (html()) {
              <pre ruiCodeHighlight language="html" class="m-0 text-xs leading-relaxed overflow-x-auto"><code>{{ html() }}</code></pre>
            }
          </div>
        </mat-tab>
        <mat-tab label="TypeScript">
          <div class="p-3 bg-[var(--mat-sys-surface-container-low)] max-h-96 overflow-y-auto">
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

  protected copied = signal(false);

  private platformId = inject(PLATFORM_ID);

  protected copyCode(): void {
    const text = this.html() || this.ts();
    if (!text || !isPlatformBrowser(this.platformId)) return;
    navigator.clipboard.writeText(text).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
