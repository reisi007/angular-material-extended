# @all-the.rest/mat-extended/menu — Menu

![MIT License](https://img.shields.io/badge/license-MIT-green) ![Angular v22+](https://img.shields.io/badge/Angular-v22%2B-red) ![Signals](https://img.shields.io/badge/signals-%E2%9C%94-blue)

Overlay-based context menu system with keyboard navigation, nested items, router link support, and configurable positioning. Built on CDK Overlay.

## Installation

```sh
pnpm add @all-the.rest/mat-extended
```

## Imports

```typescript
import { RuiMenuService, RuiMenuButton, RuiMenuPanel, RuiMenuTrigger } from '@all-the.rest/mat-extended/menu';

// standalone:
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RuiMenuButton, RuiMenuPanel, RuiMenuTrigger],
  // ...
})
export class MyComponent {}
```

## Basic Usage (Service)

```typescript
import { RuiMenuService, RuiMenuItem } from '@all-the.rest/mat-extended/menu';

@Component({ ... })
export class MyComponent {
  private menuService = inject(RuiMenuService);

  openMenu(event: MouseEvent): void {
    const items: RuiMenuItem[] = [
      { label: 'Edit', icon: 'edit', handler: () => this.edit() },
      { label: 'Delete', icon: 'delete', handler: () => this.delete() },
      { separator: true },
      { label: 'View', routerLink: '/view' },
    ];

    this.menuService.open(items, { position: 'bottom-left' }, event.target as HTMLElement);
  }
}
```

## Menu Items

```typescript
interface RuiMenuItem {
  label?: string;
  icon?: string;
  disabled?: boolean;
  separator?: boolean;
  handler?: () => void;
  routerLink?: string | readonly (string | number)[];
  children?: RuiMenuItem[];
}
```

## Configuration

```typescript
interface RuiMenuConfig {
  items?: RuiMenuItem[];
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  closeOnSelect?: boolean;
  closeOnClickOutside?: boolean;
  onClose?: () => void;
}
```

## Service API

### `RuiMenuService`

| Method | Description |
|---|---|
| `open(items, config, origin)` | Opens a menu connected to the origin element |
| `close()` | Closes the currently open menu |

## Directive-based Usage

```html
<button ruiMenuTrigger [menuItems]="items" [menuConfig]="{ position: 'bottom-left' }">
  Open Menu
</button>
```

## Keyboard Navigation

- **Arrow Down/Up**: Navigate between items
- **Enter/Space**: Select active item
- **Escape**: Close menu
- **Tab**: Move focus out of menu

## Global Configuration

Provide defaults via `RUI_MENU_DEFAULT_OPTIONS`:

```typescript
import { RUI_MENU_DEFAULT_OPTIONS } from '@all-the.rest/mat-extended/menu';

providers: [
  {
    provide: RUI_MENU_DEFAULT_OPTIONS,
    useValue: { position: 'bottom-right', closeOnSelect: true, closeOnClickOutside: true },
  },
]
```

## Accessibility

- `aria-label="Menu"` on the menu button
- Keyboard navigation with arrow keys
- Focus management within the overlay
- Backdrop click dismissal

## Server-Side Rendering

The service uses the `ensureBrowser()` guard and safely no-ops on the server, making it compatible with Angular Universal and other SSR frameworks.

## License

MIT — see the root [LICENSE](../../../../LICENSE) file.

## Unofficial Disclaimer

This is an unofficial package and is not affiliated with, endorsed by, or sponsored by Google or the Angular team. All trademarks and registered trademarks are the property of their respective owners.
