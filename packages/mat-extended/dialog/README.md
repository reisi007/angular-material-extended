# @all-the.rest/mat-extended/dialog — Dialog

![MIT License](https://img.shields.io/badge/license-MIT-green) ![Angular v22+](https://img.shields.io/badge/Angular-v22%2B-red) ![Signals](https://img.shields.io/badge/signals-%E2%9C%94-blue)

Programmatic dialog service built on CDK Overlay. Supports configurable sizes (sm/md/lg/xl/fullscreen), backdrop click dismissal, ESC key handling, focus trapping, header/footer templates, and context passing via template refs.

## Installation

```sh
pnpm add @all-the.rest/mat-extended
```

## Imports

```typescript
import { RuiDialogService } from '@all-the.rest/mat-extended/dialog';
```

## Basic Usage

```typescript
import { RuiDialogService } from '@all-the.rest/mat-extended/dialog';

@Component({ ... })
export class MyComponent {
  private dialog = inject(RuiDialogService);

  openDialog(): void {
    const ref = this.dialog.open({
      header: 'Confirm Action',
      size: 'md',
      context: { message: 'Are you sure?' },
    });

    ref.afterClosed.then((result) => {
      if (result) {
        // user confirmed
      }
    });
  }
}
```

## Service API

### `RuiDialogService`

| Method | Return | Description |
|---|---|---|
| `open<T>(config: RuiDialogConfig<T>)` | `RuiDialogRef<T>` | Opens a dialog and returns a ref |
| `dismissAll()` | `void` | Closes all open dialogs |

### `RuiDialogRef<T>`

| Property | Type | Description |
|---|---|---|
| `id` | `string` | Unique dialog identifier |
| `close(result?: T)` | `void` | Closes the dialog with an optional result |
| `dismiss()` | `void` | Dismisses the dialog (no result) |
| `afterClosed` | `Promise<T \| undefined>` | Resolves when dialog is closed |
| `afterDismissed` | `Promise<void>` | Resolves when dialog is dismissed |

## Configuration

```typescript
interface RuiDialogConfig<T = unknown> {
  header?: string;
  headerTemplate?: TemplateRef<T>;
  template?: TemplateRef<T>;
  contentTemplate?: TemplateRef<T>;
  footerTemplate?: TemplateRef<T>;
  context?: Record<string, unknown>;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  width?: string;
  height?: string;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  data?: T;
}
```

## Sizes

| Size | Width |
|---|---|
| `sm` | 320px |
| `md` | 384px |
| `lg` | 640px |
| `xl` | 800px |
| `fullscreen` | 100vw × 100vh |

## Context & Templates

Pass data to templates via `context`:

```typescript
const ref = this.dialog.open({
  headerTemplate: myHeaderTpl,
  contentTemplate: myContentTpl,
  footerTemplate: myFooterTpl,
  context: { title: 'Hello', items: this.items },
});
```

In the template, the dialog ref is available as `$implicit`:

```html
<ng-template #myContent let-ref>
  <p>Dialog ID: {{ ref.id }}</p>
  <button (click)="ref.close('done')">Close</button>
</ng-template>
```

## Global Configuration

Provide defaults via `RUI_DIALOG_DEFAULT_OPTIONS`:

```typescript
import { RUI_DIALOG_DEFAULT_OPTIONS } from '@all-the.rest/mat-extended/dialog';

providers: [
  {
    provide: RUI_DIALOG_DEFAULT_OPTIONS,
    useValue: { size: 'lg', hasBackdrop: true, disableClose: false },
  },
]
```

## Accessibility

- Focus trap via CDK `FocusTrapFactory` — tab cycle stays within the dialog
- ESC key closes the dialog (unless `disableClose: true`)
- Backdrop click dismissal (configurable)
- Header close button with `aria-label="Close dialog"`

## Server-Side Rendering

The service uses the `ensureBrowser()` guard and safely returns a dummy ref on the server, making it compatible with Angular Universal and other SSR frameworks.

## License

MIT — see the root [LICENSE](../../../../LICENSE) file.

## Unofficial Disclaimer

This is an unofficial package and is not affiliated with, endorsed by, or sponsored by Google or the Angular team. All trademarks and registered trademarks are the property of their respective owners.
