export type RuiToastKind = 'success' | 'error' | 'info' | 'warning';

export interface RuiToastConfig {
  message: string;
  kind?: RuiToastKind;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
  position?: RuiToastPosition;
  ariaLive?: 'polite' | 'assertive';
}

export interface RuiToastRef {
  id: string;
  dismiss: () => void;
  onDismiss: (callback: () => void) => void;
}

export type RuiToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
