import { Component, ChangeDetectionStrategy, input, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RuiBreadcrumbItem } from './breadcrumb.types';
import { RuiBreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'rui-breadcrumb',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './breadcrumb.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiBreadcrumb {
  private _service = inject(RuiBreadcrumbService, { optional: true });

  readonly items = input<RuiBreadcrumbItem[] | null>(null);

  readonly separator = input<string>('chevron_right');

  readonly breadcrumbs = computed<RuiBreadcrumbItem[]>(() => {
    const manual = this.items();
    if (manual) return manual;
    return this._service?.breadcrumbs() ?? [];
  });
}
