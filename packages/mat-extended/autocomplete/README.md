# @all-the.rest/mat-extended/autocomplete

> **Unofficial** – This project is a community extension and is NOT officially affiliated with Google or the Angular team. "Angular" and "Material" are trademarks of Google LLC.

Standalone autocomplete component for Angular Material with Signal-based API, CVA integration, and built-in filtering.

## Installation

```bash
npm install @all-the.rest/mat-extended
```

## Usage

```ts
import { RuiAutocomplete } from '@all-the.rest/mat-extended/autocomplete';

@Component({
  standalone: true,
  imports: [RuiAutocomplete],
  template: `
    <rui-autocomplete
      label="Fruit"
      [options]="fruits"
      [(selectedOption)]="selected"
    />
  `,
})
export class Example {
  fruits = ['Apple', 'Banana', 'Cherry'];
  selected: string | null = null;
}
```

## API

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `options` | `T[]` | `[]` | Available options |
| `label` | `string` | `''` | Form field label |
| `placeholder` | `string` | `''` | Input placeholder |
| `appearance` | `'fill' \| 'outline'` | `'outline'` | Form field appearance |
| `displayWith` | `(value: T) => string` | `String(v)` | Custom display function |
| `filterFn` | `((options: T[], query: string) => T[]) \| null` | case-insensitive includes | Custom filter function |
| `compareWith` | `((a: T, b: T) => boolean) \| null` | `a === b` | Custom comparison function |

| Output | Type | Description |
|--------|------|-------------|
| `optionSelected` | `T` | Emitted when an option is selected |

| Model | Type | Description |
|-------|------|-------------|
| `selectedOption` | `T \| null` | Two-way bindable selected value |

## License

MIT
