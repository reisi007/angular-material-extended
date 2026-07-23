import { InjectionToken } from '@angular/core';
import { RuiAutocompleteConfig } from './autocomplete.types';

export const RUI_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken<Partial<RuiAutocompleteConfig<unknown>>>(
  'RUI_AUTOCOMPLETE_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_AUTOCOMPLETE_DEFAULTS },
);

export const RUI_AUTOCOMPLETE_DEFAULTS: Partial<RuiAutocompleteConfig<unknown>> = {
  placeholder: '',
  label: '',
  appearance: 'outline',
};
