# @all-the.rest/mat-extended/file-upload — File Upload

![MIT License](https://img.shields.io/badge/license-MIT-green) ![Angular v22+](https://img.shields.io/badge/Angular-v22%2B-red) ![Signals](https://img.shields.io/badge/signals-%E2%9C%94-blue)

File upload component with drag-and-drop, file validation, progress tracking, preview thumbnails for images, drag-to-reorder via CDK DragDrop, and full Reactive Forms (CVA) support.

## Installation

```sh
pnpm add @all-the.rest/mat-extended
```

## Imports

```typescript
import { RuiFileUpload } from '@all-the.rest/mat-extended/file-upload';

// standalone:
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RuiFileUpload],
  // ...
})
export class MyComponent {}
```

## Basic Usage

```html
<rui-file-upload [uploadHandler]="myHandler" />
```

```typescript
import { RuiFileItem, RuiUploadHandler } from '@all-the.rest/mat-extended/file-upload';

uploadHandler: RuiUploadHandler = async (file: RuiFileItem) => {
  const formData = new FormData();
  formData.append('file', file.file);
  await fetch('/api/upload', { method: 'POST', body: formData });
};
```

## Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `multiple` | `boolean` | `true` | Allow multiple file selection |
| `accept` | `string` | `'*/*'` | Accepted MIME types (e.g. `'image/*'`, `'.pdf'`). Uses the native `accept` attribute |
| `maxSize` | `number` | `10485760` | Maximum file size in bytes (10 MB). Files exceeding this are silently ignored |
| `maxFiles` | `number` | `10` | Maximum number of files allowed in the list |
| `uploadHandler` | `RuiUploadHandler` | — | Async function called per file when upload starts. Receives a `RuiFileItem` and must return a `Promise<void>` |

## Outputs / Models

| Name | Type | Description |
|---|---|---|
| `files` | `model<RuiFileItem[]>()` | Two-way bound file list |
| `uploadStart` | `output<RuiFileItem[]>()` | Emits the selected files when the upload button is clicked |

## Reactive Forms (CVA)

The component implements `ControlValueAccessor` for seamless use with Angular forms:

```html
<rui-file-upload [formControl]="myControl" />
```

```typescript
myControl = new FormControl<RuiFileItem[]>([]);
```

## Signal API

```html
<rui-file-upload [(files)]="myFiles" />
```

## Drag-to-Reorder (CDK DragDrop)

Files can be reordered by dragging the grid-dot handle. The component uses `cdkDropList`, `cdkDrag`, and `cdkDragHandle` internally.

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

## Upload Handler

```typescript
interface RuiUploadHandler {
  (file: RuiFileItem): Promise<void>;
}
```

Implement this to perform the actual upload. The handler receives the file item and should update `file.progress` during upload if desired.

## Validation

- **File size**: Files larger than `maxSize` are rejected silently.
- **File count**: Once `maxFiles` is reached, no more files are accepted.
- **MIME type**: When `accept` is set to a specific type (e.g. `'image/png'`), non-matching files are filtered out.

## Accessibility

- Hidden `<input type="file">` for keyboard and screen reader access
- ARIA labels on remove buttons and progress indicators
- Drag handles are marked `aria-hidden="true"`

## Server-Side Rendering

The component uses standard browser APIs (`File`, `URL.createObjectURL`, `crypto.randomUUID`) that are only called after user interaction, making it compatible with Angular SSR.

## Methods

| Method | Description |
|---|---|
| `openFilePicker()` | Opens the native file picker dialog |
| `removeFile(id)` | Removes a file from the list by its id |
| `startUpload()` | Begins uploading all files with status `'selected'` |
| `onDropListDropped(event)` | Handles CDK drag-drop reorder |

## License

MIT — see the root [LICENSE](../../../../LICENSE) file.

## Unofficial Disclaimer

This is an unofficial package and is not affiliated with, endorsed by, or sponsored by Google or the Angular team. All trademarks and registered trademarks are the property of their respective owners.
