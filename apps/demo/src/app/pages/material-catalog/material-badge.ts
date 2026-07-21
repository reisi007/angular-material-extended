import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialBadgeBasic } from './badge/material-badge-basic';
import { MaterialBadgeOverlap } from './badge/material-badge-overlap';

@Component({
  selector: 'rui-material-badge',
  standalone: true,
  imports: [MaterialBadgeBasic, MaterialBadgeOverlap],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Badge</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">matBadge for notifications, counts, and status indicators on icons and buttons.</p>
      </div>

      <rui-material-badge-basic />
      <rui-material-badge-overlap />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialBadge {}
