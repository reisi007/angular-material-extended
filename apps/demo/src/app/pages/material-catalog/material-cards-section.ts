import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialCardsBasic } from './cards-section/material-cards-basic';

@Component({
  selector: 'rui-material-cards-section',
  standalone: true,
  imports: [MaterialCardsBasic],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Cards</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-card with header, image, content, actions, and footer sections</p>
      </div>

      <rui-material-cards-basic />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialCardsSection {}
