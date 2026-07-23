export interface RuiAutocompleteOption<T> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface RuiAutocompleteConfig<T> {
  placeholder: string;
  label: string;
  appearance: 'fill' | 'outline';
  displayWith: (value: T) => string;
  filterFn?: (options: T[], query: string) => T[];
}
