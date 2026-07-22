# @all-the.rest/mat-extended/toast — Toast

![MIT License](https://img.shields.io/badge/license-MIT-green) ![Angular v22+](https://img.shields.io/badge/Angular-v22%2B-red) ![Signals](https://img.shields.io/badge/signals-%E2%9C%94-blue)

Toast notification service with configurable positions, kinds (success/error/info/warning), auto-dismiss, action buttons, and stacking. Built on CDK Overlay.

## Installation

```sh
pnpm add @all-the.rest/mat-extended
```

## Imports

```typescript
import { RuiToastService } from '@all-the.rest/mat-extended/toast';
```

## Basic Usage

```typescript
import { RuiToastService } from '@all-the.rest/mat-extended/toast';

@Component({ ... })
export class MyComponent {
  private toast = inject(RuiToastService);

  save(): void {
    this.toast.success('Changes saved successfully');
  }
}
```

## Service API

### `RuiToastService`

| Method | Return | Description |
|---|---|---|
| `success(message, config?)` | `RuiToastRef` | Shows a success toast |
| `error(message, config?)` | `RuiToastRef` | Shows an error toast (dismissible by default) |
| `info(message, config?)` | `RuiToastRef` | Shows an info toast |
| `warning(message, config?)` | `RuiToastRef` | Shows a warning toast |
| `show(config)` | `RuiToastRef` | Shows a toast with full config |
| `dismissAll()` | `void` | Dismisses all active toasts |

### `RuiToastRef`

| Property | Type | Description |
|---|---|---|
| `id` | `string` | Unique toast identifier |
| `dismiss()` | `void` | Dismisses the toast |
| `onDismiss(callback)` | `void` | Registers a dismiss callback |

## Configuration

```typescript
interface RuiToastConfig {
  message: string;
  kind?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;        // ms, default: 5000
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;    // default: true
  position?: RuiToastPosition;
  ariaLive?: 'polite' | 'assertive';
}
```

## Positions

| Position | Description |
|---|---|
| `top-start` | Top-left corner |
| `top-center` | Top center |
| `top-end` | Top-right corner (default) |
| `bottom-start` | Bottom-left corner |
| `bottom-center` | Bottom center |
| `bottom-end` | Bottom-right corner |

## Toast Kinds

| Kind | Border Color | Default Behavior |
|---|---|---|
| `success` | Primary | Auto-dismiss |
| `error` | Error | Dismissible, stays visible |
| `info` | Tertiary | Auto-dismiss |
| `warning` | Error Container | Auto-dismiss |

## Action Buttons

```typescript
this.toast.success('File uploaded', {
  action: {
    label: 'View',
    onClick: () => this.router.navigate(['/files']),
  },
});
```

## Stacking

Multiple toasts stack vertically with automatic repositioning. Maximum 5 visible toasts — oldest dismissed when limit exceeded.

## Global Configuration

Provide defaults via `RUI_TOAST_DEFAULT_OPTIONS`:

```typescript
import { RUI_TOAST_DEFAULT_OPTIONS } from '@all-the.rest/mat-extended/toast';

providers: [
  {
    provide: RUI_TOAST_DEFAULT_OPTIONS,
    useValue: { duration: 3000, position: 'bottom-center', dismissible: true },
  },
]
```

## Accessibility

- `aria-live` region for dynamic toast content updates
- Dismiss button with clear labeling
- Keyboard-accessible action buttons

## Server-Side Rendering

The service uses the `ensureBrowser()` guard and safely returns a dummy ref on the server, making it compatible with Angular Universal and other SSR frameworks.

## License

MIT — see the root [LICENSE](../../../../LICENSE) file.

## Unofficial Disclaimer

This is an unofficial package and is not affiliated with, endorsed by, or sponsored by Google or the Angular team. All trademarks and registered trademarks are the property of their respective owners.
