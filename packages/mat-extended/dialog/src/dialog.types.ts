import { TemplateRef } from '@angular/core';

export type RuiDialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

export interface RuiDialogConfig<T = unknown> {
  header?: string;
  headerTemplate?: TemplateRef<T>;
  template?: TemplateRef<T>;
  contentTemplate?: TemplateRef<T>;
  footerTemplate?: TemplateRef<T>;
  context?: Record<string, unknown>;
  size?: RuiDialogSize;
  width?: string;
  height?: string;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  data?: T;
}

export interface RuiDialogRef<T = unknown> {
  id: string;
  close: (result?: T) => void;
  dismiss: () => void;
  afterClosed: Promise<T | undefined>;
  afterDismissed: Promise<void>;
}
