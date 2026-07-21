/* eslint-disable @typescript-eslint/no-explicit-any */
import { TemplateRef } from '@angular/core';

export type RuiDialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

export interface RuiDialogConfig<T = any> {
  header?: string;
  template?: TemplateRef<T>;
  context?: T;
  size?: RuiDialogSize;
  width?: string;
  height?: string;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  data?: T;
}

export interface RuiDialogRef<T = any> {
  id: string;
  close: (result?: T) => void;
  dismiss: () => void;
  afterClosed: Promise<T | undefined>;
  afterDismissed: Promise<void>;
}
