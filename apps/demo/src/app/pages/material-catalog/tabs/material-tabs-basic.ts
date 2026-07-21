import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-tabs-basic',
  standalone: true,
  imports: [MatIconModule, MatTabsModule, ShowcaseCode],
  template: `
    <section id="tabs-basic" class="mb-8">
      <h2 id="tabs-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Tabs</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-tab-group with three tabs, including a disabled tab.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-tab-group>
          <mat-tab label="Tab One">
            <p class="mt-3 text-sm text-[var(--mat-sys-on-surface-variant)]">Content of tab one.</p>
          </mat-tab>
          <mat-tab label="Tab Two">
            <p class="mt-3 text-sm text-[var(--mat-sys-on-surface-variant)]">Content of tab two.</p>
          </mat-tab>
          <mat-tab label="Disabled" disabled>
            <p class="mt-3 text-sm text-[var(--mat-sys-on-surface-variant)]">Disabled tab content.</p>
          </mat-tab>
        </mat-tab-group>
      </div>

      <rui-showcase-code
        html='<mat-tab-group>
  <mat-tab label="Tab One">
    <p>Content of tab one.</p>
  </mat-tab>
  <mat-tab label="Tab Two">
    <p>Content of tab two.</p>
  </mat-tab>
  <mat-tab label="Disabled" disabled>
    <p>Disabled tab content.</p>
  </mat-tab>
</mat-tab-group>'
        ts="import { MatTabsModule } from '@angular/material/tabs';

// In component imports:
imports: [MatTabsModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTabsBasic {}
