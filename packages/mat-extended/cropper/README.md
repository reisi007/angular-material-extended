# @all-the.rest/mat-extended/cropper — Image Cropper

![MIT License](https://img.shields.io/badge/license-MIT-green) ![Angular v22+](https://img.shields.io/badge/Angular-v22%2B-red) ![Signals](https://img.shields.io/badge/signals-%E2%9C%94-blue)

Custom canvas-based image cropper component for Angular. Supports drag selection, resize handles, zoom (wheel + pinch), rotation (90° + free), aspect ratio presets, keyboard navigation, SSR safety, Reactive Forms (CVA), and Signal API.

## Installation

```sh
pnpm add @all-the.rest/mat-extended
```

## Imports

```typescript
import { RuiCropper } from '@all-the.rest/mat-extended/cropper';

// standalone:
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RuiCropper],
  // ...
})
export class MyComponent {}
```

## Basic Usage

```html
<rui-cropper
  src="https://example.com/image.jpg"
  [(croppedImage)]="myCroppedImage"
/>
```

## Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | `''` | Image URL |
| `aspectRatio` | `'free' \| '1:1' \| '4:3' \| '16:9'` | `'free'` | When not `'free'`, the aspect ratio selector is hidden |
| `outputFormat` | `'image/png' \| 'image/jpeg' \| 'image/webp'` | `'image/png'` | Output image format |
| `outputQuality` | `number` | `0.92` | Quality for JPEG/WebP (`0`–`1`) |
| `minCropWidth` | `number` | `20` | Minimum crop width in pixels |
| `minCropHeight` | `number` | `20` | Minimum crop height in pixels |
| `constrainToImage` | `boolean` | `true` | When `true`, the crop selection cannot leave the original image area during move, resize, zoom, or rotation |
| `outputWidth` | `number` | `0` | Fixed output width in pixels (0 = auto) |

| Name | Type | Description |
|---|---|---|
| `croppedImage` | `model<string>()` | Two-way bound base64 data URL |
| `cropChange` | `output<RuiCropperResult>()` | Emits `{ dataUrl, blob, width, height, format }` |

## Reactive Forms (CVA)

The component implements `ControlValueAccessor` for seamless use with Angular forms:

```html
<rui-cropper [formControl]="myControl" src="..." />
```

```typescript
myControl = new FormControl<string>('');
```

## Signal API

```html
<rui-cropper [src]="imageUrl()" [(croppedImage)]="cropped" />
```

## Overlay (SVG / CSS)

Project custom overlay content using the `[ruiCropperOverlay]` directive:

```html
<rui-cropper src="...">
  <svg ruiCropperOverlay class="pointer-events-none absolute inset-0"
    style="left: var(--rui-crop-x); top: var(--rui-crop-y); width: var(--rui-crop-w); height: var(--rui-crop-h);">
    <!-- your SVG overlay here -->
  </svg>
</rui-cropper>
```

Available CSS custom properties on the overlay host:

| Property | Description |
|---|---|
| `--rui-crop-x`, `--rui-crop-y` | Crop area offset in px |
| `--rui-crop-w`, `--rui-crop-h` | Crop area dimensions in px |
| `--rui-rotation` | Current rotation in deg |

## Accessibility

- Keyboard navigation: Tab to focus, arrow keys to move the crop area, `+` / `-` to zoom, `r` to rotate
- ARIA labels on all controls
- Visible focus indicators

## Server-Side Rendering

The component safely no-ops on the server via the `ensureBrowser()` guard, making it compatible with Angular Universal and other SSR frameworks.

## Development

To run the demo app:

```sh
pnpm nx serve demo
```

## API: `RuiCropperResult`

```typescript
interface RuiCropperResult {
  dataUrl: string;   // base64 data URL
  blob: Blob | null; // blob (null if unavailable)
  width: number;     // output width in px
  height: number;    // output height in px
  format: RuiOutputFormat;
}
```

## License

MIT — see the root [LICENSE](../../../../LICENSE) file.

## Unofficial Disclaimer

This is an unofficial package and is not affiliated with, endorsed by, or sponsored by Google or the Angular team. All trademarks and registered trademarks are the property of their respective owners.
