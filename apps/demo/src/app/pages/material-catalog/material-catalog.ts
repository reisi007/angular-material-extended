import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rui-material-catalog',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex-1 overflow-auto bg-[var(--mat-sys-surface-container-low)]">
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialCatalog {}
