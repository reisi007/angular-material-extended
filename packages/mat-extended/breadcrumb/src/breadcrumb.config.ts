import { InjectionToken } from '@angular/core';
import { RuiBreadcrumbConfig } from './breadcrumb.types';

export const RUI_BREADCRUMB_DEFAULT_OPTIONS = new InjectionToken<Partial<RuiBreadcrumbConfig>>(
  'RUI_BREADCRUMB_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_BREADCRUMB_DEFAULTS },
);

export const RUI_BREADCRUMB_DEFAULTS: Partial<RuiBreadcrumbConfig> = {
  rootLabel: 'Home',
  rootUrl: '/',
};
