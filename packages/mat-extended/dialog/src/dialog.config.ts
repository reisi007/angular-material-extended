import { InjectionToken } from '@angular/core';
import { RuiDialogConfig } from './dialog.types';

export const RUI_DIALOG_DEFAULT_OPTIONS = new InjectionToken<Partial<RuiDialogConfig>>(
  'RUI_DIALOG_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_DIALOG_DEFAULTS },
);

export const RUI_DIALOG_DEFAULTS: Partial<RuiDialogConfig> = {
  size: 'md',
  hasBackdrop: true,
  disableClose: false,
};
