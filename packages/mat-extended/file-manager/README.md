# @all-the.rest/mat-extended/file-manager — File Manager

![MIT License](https://img.shields.io/badge/license-MIT-green) ![Angular v22+](https://img.shields.io/badge/Angular-v22%2B-red) ![Signals](https://img.shields.io/badge/signals-%E2%9C%94-blue)

File list management component for renaming, sorting (drag-and-drop + move up/down buttons), and deleting files. Pairs naturally with `@all-the.rest/mat-extended/file-upload` for the full upload lifecycle. No upload logic — purely manages existing files.

## Installation

```sh
pnpm add @all-the.rest/mat-extended
```

## Imports

```typescript
import { RuiFileManager } from '@all-the.rest/mat-extended/file-manager';

// standalone:
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RuiFileManager],
  // ...
})
export class MyComponent {}
```

## Basic Usage

```html
<rui-file-manager [(files)]="files" [sortable]="true" [editable]="true" />
```

## Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `files` | `model<RuiFileItem[]>` | `[]` | Two-way bound file list |
| `sortable` | `boolean` | `false` | Enable drag-and-drop reordering + move up/down buttons |
| `editable` | `boolean` | `false` | Enable inline rename |
| `editableExtension` | `boolean` | `true` | When `false`, file extension is preserved during rename (only base name editable) |
| `dragStartDelay` | `number` | `0` | Delay in ms before drag starts (prevents accidental drags on touch) |
| `fileManagement` | `boolean` | `true` | Show delete/rename/clear-all controls |

## Outputs

| Name | Type | Description |
|---|---|---|
| `deleteFile` | `output<RuiFileItem>()` | Emits the removed file item |
| `rename` | `output<RuiFileItem>()` | Emits the renamed file item (only when name actually changed) |

## Rename (with/without Extension)

By default (`editableExtension: true`), the full filename including extension is editable in the rename input.

When `editableExtension: false`, only the base name is editable and the file extension is preserved automatically:

```html
<rui-file-manager
  [(files)]="files"
  [editable]="true"
  [editableExtension]="false"
/>
```

## Sorting

Two sorting mechanisms are available:

- **Drag-and-drop**: Files can be reordered by dragging the grid-dot handle. The component uses `cdkDropList`, `cdkDrag`, and `cdkDragHandle` internally. Use `dragStartDelay` (in ms) to prevent accidental drags on touch devices.
- **Move up/down buttons**: Keyboard-accessible buttons appear next to each item when `sortable` is enabled, allowing precise reordering without drag interactions.

## Composition with File Upload

`<rui-file-upload>` and `<rui-file-manager>` share the same `files` model. Use them together to separate concerns:

```html
<rui-file-upload
  [(files)]="files"
  [uploadHandler]="handler"
  [autoUpload]="true"
  [fileManagement]="false"
/>
<rui-file-manager
  [(files)]="files"
  [sortable]="true"
  [editable]="true"
/>
```

File Upload handles dropzone, validation, upload progress, and status. File Manager handles rename, sort, and delete. They share the same `files` model — each component acts on the same array.

## File Item Structure

```typescript
interface RuiFileItem {
  file: File;
  id: string;
  preview?: string;          // Object URL for images
  status: 'idle' | 'selected' | 'uploading' | 'done' | 'error';
  progress: number;          // 0–100
  error?: string;
}
```

Re-exported from `@all-the.rest/mat-extended/file-upload`.

## Accessibility

- ARIA labels on delete, rename, and move up/down buttons
- Rename via Enter to confirm, Escape to cancel
- Keyboard-accessible move up/down buttons for precise reordering
- Visual focus indicators on all interactive elements

## Server-Side Rendering

The component uses only standard Angular APIs. No browser-only APIs are accessed, making it fully compatible with Angular SSR.

## License

MIT — see the root [LICENSE](../../../../LICENSE) file.

## Unofficial Disclaimer

This is an unofficial package and is not affiliated with, endorsed by, or sponsored by Google or the Angular team. All trademarks and registered trademarks are the property of their respective owners.
