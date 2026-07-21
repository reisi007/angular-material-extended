import { InjectionToken } from '@angular/core';
import type { RuiMenuConfig } from './menu.types';

export const RUI_MENU_DEFAULT_OPTIONS = new InjectionToken<Partial<RuiMenuConfig>>(
  'RUI_MENU_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_MENU_DEFAULTS },
);

export const RUI_MENU_DEFAULTS: Partial<RuiMenuConfig> = {
  position: 'bottom-left',
  closeOnSelect: true,
  closeOnClickOutside: true,
};
