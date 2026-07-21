export type RuiMenuPosition =
  | 'bottom-left' | 'bottom-right'
  | 'top-left' | 'top-right';

export interface RuiMenuItem {
  label: string;
  icon?: string;
  disabled?: boolean;
  separator?: boolean;
  handler?: () => void;
  children?: RuiMenuItem[];
}

export interface RuiMenuConfig {
  items?: RuiMenuItem[];
  position?: RuiMenuPosition;
  closeOnSelect?: boolean;
  closeOnClickOutside?: boolean;
}
