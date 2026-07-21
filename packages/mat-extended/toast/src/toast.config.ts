import { InjectionToken } from '@angular/core';
import { RuiToastConfig } from './toast.types';

export const RUI_TOAST_DEFAULT_OPTIONS = new InjectionToken<Partial<RuiToastConfig>>(
  'RUI_TOAST_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_TOAST_DEFAULTS },
);

export const RUI_TOAST_DEFAULTS: Partial<RuiToastConfig> = {
  kind: 'info',
  duration: 5000,
  dismissible: true,
  position: 'bottom-center',
};
