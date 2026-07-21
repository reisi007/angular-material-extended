import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-badge-basic',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="badge-basic" class="mb-8">
      <h2 id="badge-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Badges</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">matBadge on buttons with color and position attributes.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5 flex gap-4 items-center flex-wrap">
        <button mat-raised-button [matBadge]="4" matBadgePosition="after" matBadgeColor="primary">
          Notifications
        </button>
        <button mat-icon-button [matBadge]="7" matBadgeColor="warn" aria-label="Alerts">
          <mat-icon>notifications</mat-icon>
        </button>
      </div>

      <rui-showcase-code
        html="<button mat-raised-button
  [matBadge]=&quot;4&quot;
  matBadgePosition=&quot;after&quot;
  matBadgeColor=&quot;primary&quot;>
  Notifications
</button>

<button mat-icon-button
  [matBadge]=&quot;7&quot;
  matBadgeColor=&quot;warn&quot;
  aria-label=&quot;Alerts&quot;>
  <mat-icon>notifications</mat-icon>
</button>"
        ts="import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// In component imports:
imports: [MatBadgeModule, MatButtonModule, MatIconModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialBadgeBasic {}
