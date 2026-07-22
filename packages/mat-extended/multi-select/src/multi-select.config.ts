import { InjectionToken } from '@angular/core';
import { RuiMultiSelectConfig } from './multi-select.types';

export const RUI_MULTI_SELECT_DEFAULT_OPTIONS = new InjectionToken<Partial<RuiMultiSelectConfig>>(
  'RUI_MULTI_SELECT_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_MULTI_SELECT_DEFAULTS },
);

export const RUI_MULTI_SELECT_DEFAULTS: Partial<RuiMultiSelectConfig> = {
  placeholder: '',
  labelKey: '',
  sortable: false,
  appearance: 'outline',
};
