import { Injectable, inject, signal, DestroyRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs';
import { RuiBreadcrumbItem } from './breadcrumb.types';
import { RUI_BREADCRUMB_DEFAULT_OPTIONS, RUI_BREADCRUMB_DEFAULTS } from './breadcrumb.config';

@Injectable({ providedIn: 'root' })
export class RuiBreadcrumbService {
  private _router = inject(Router);
  private _config = inject(RUI_BREADCRUMB_DEFAULT_OPTIONS);
  private _destroyRef = inject(DestroyRef);

  readonly breadcrumbs = signal<RuiBreadcrumbItem[]>([]);

  constructor() {
    this._rebuild();
    const sub = this._router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this._rebuild());
    this._destroyRef.onDestroy(() => sub.unsubscribe());
  }

  private _rebuild(): void {
    const snapshot = this._router.routerState.snapshot;
    this.breadcrumbs.set(this._build(snapshot.root));
  }

  private _build(root: ActivatedRouteSnapshot): RuiBreadcrumbItem[] {
    const rootLabel = this._config.rootLabel ?? RUI_BREADCRUMB_DEFAULTS.rootLabel ?? 'Home';
    const rootUrl = this._config.rootUrl ?? RUI_BREADCRUMB_DEFAULTS.rootUrl ?? '/';
    const rootIcon = this._config.rootIcon ?? RUI_BREADCRUMB_DEFAULTS.rootIcon;

    const routeItems: RuiBreadcrumbItem[] = [];
    let route: ActivatedRouteSnapshot | null = root;
    let url = '';
    while (route) {
      const segment = route.url.map((s) => s.path).join('/');
      if (segment) {
        url += '/' + segment;
      }
      const data = route.data;
      const label: string | undefined = data['breadcrumb'] ?? data['title'];
      if (label) {
        routeItems.push({ label, url: url || '/', icon: data['breadcrumbIcon'] });
      }
      route = route.firstChild;
    }

    const firstRouteItem = routeItems[0];
    if (firstRouteItem?.url === rootUrl) {
      if (rootIcon && !firstRouteItem.icon) {
        firstRouteItem.icon = rootIcon;
      }
      return routeItems;
    }

    return [
      { label: rootLabel, url: rootUrl, icon: rootIcon },
      ...routeItems,
    ];
  }
}
