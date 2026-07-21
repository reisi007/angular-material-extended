# Manual Test Plan – Angular Material Extended

> **Last updated**: 2026-07-21
> **Project**: [@all-the.rest/mat-extended](https://github.com/reisi007/angular-material-extended)

## Prerequisites

- Demo app running: `pnpm nx serve demo`
- Browser: Chrome (latest) – both Desktop and Mobile (DevTools device emulation)
- Network: active (external image from picsum.photos is loaded by default)

---

## Table of Contents

1. [Cropper](#1-cropper)
2. [File Upload](#2-file-upload)
3. [Toast / Notification](#3-toast--notification)
4. [Data Table](#4-data-table)
5. [Dialog / Modal](#5-dialog--modal)
6. [Menu / Hamburger](#6-menu--hamburger)
7. [Cross-Cutting Tests](#7-cross-cutting-tests)

---

## 1. Cropper

**Navigation**: Click "Cropper" in the sidebar or navigate to `/cropper`

### TC-C-01: Image load
| Step | Action | Expected |
|------|--------|----------|
| 1 | Navigate to cropper page | rui-cropper component is visible |
| 2 | Wait for image to load | Canvas element appears inside cropper |
| 3 | Observe cropped output card | "Cropped Output" card shows a preview image with a `data:image` source |
| 4 | Observe output dimensions | Dimensions (e.g. "800 × 600 px") are displayed below the preview |

### TC-C-02: Zoom in / out
| Step | Action | Expected |
|------|--------|----------|
| 1 | Wait for image to load | Canvas visible |
| 2 | Click **Zoom in** (`+`) button | Zoom percentage increases |
| 3 | Click **Zoom out** (`-`) button | Zoom percentage decreases |
| 4 | Repeat zoom in multiple times | Zoom caps at 1000% |
| 5 | Repeat zoom out multiple times | Zoom bottom at 10% |

### TC-C-03: Mouse wheel zoom
| Step | Action | Expected |
|------|--------|----------|
| 1 | Hover over the cropper viewport | — |
| 2 | Scroll up (wheel) | Zoom level increases |
| 3 | Scroll down (wheel) | Zoom level decreases |

### TC-C-04: Pinch zoom (mobile/touch)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open Chrome DevTools → toggle device emulation | Touch input enabled |
| 2 | Place two fingers on the cropper viewport | — |
| 3 | Pinch outward | Zoom level increases |
| 4 | Pinch inward | Zoom level decreases |

### TC-C-05: Rotate buttons
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Rotate right** (`↻`) | Rotation display shows +90° |
| 2 | Click **Rotate left** (`↺`) | Rotation display shows 0° again |
| 3 | Click Rotate right 4 times | Rotation cycles: 0° → 90° → 180° → 270° → 0° |

### TC-C-06: Free rotation slider
| Step | Action | Expected |
|------|--------|----------|
| 1 | Drag the rotation slider to 45° | Rotation display shows 45° |
| 2 | Drag to 180° | Rotation display shows 180° |
| 3 | Drag to 0° | Rotation snaps back to 0° |

### TC-C-07: Aspect ratio presets
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open the **Aspect Ratio** dropdown | Options: Free, 1:1, 4:3, 16:9 |
| 2 | Select **1:1** | Crop rectangle snaps to square |
| 3 | Select **4:3** | Crop rectangle adjusts to 4:3 ratio |
| 4 | Select **16:9** | Crop rectangle adjusts to 16:9 |
| 5 | Select **Free** | Crop rectangle becomes freely resizable |

### TC-C-08: Crop rectangle resize (mouse)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Hover over bottom-right corner of crop rect | Cursor changes to resize indicator |
| 2 | Click and drag the corner | Crop rectangle resizes proportionally (if aspect ratio fixed) |
| 3 | Release mouse | Cropped output updates with new dimensions |

### TC-C-09: Crop rectangle move (mouse)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click inside the crop rectangle | — |
| 2 | Drag to a new position | Crop rectangle moves |
| 3 | Release mouse | Cropped output updates |

### TC-C-10: Keyboard navigation
| Step | Action | Expected |
|------|--------|----------|
| 1 | Focus the rui-cropper element (Tab) | Focus indicator visible |
| 2 | Press **Arrow Right** | Crop rect moves right |
| 3 | Press **Arrow Down** | Crop rect moves down |
| 4 | Press **Arrow Left** | Crop rect moves left |
| 5 | Press **Arrow Up** | Crop rect moves up |
| 6 | Press **+** or **=** | Zoom in |
| 7 | Press **-** or **\_** | Zoom out |
| 8 | Press **R** (shift+r) | Rotate right 90° |
| 9 | Press **r** | Rotate left 90° |

### TC-C-11: Output format / quality
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open the **Output Format** dropdown | Options: PNG, JPEG, WebP |
| 2 | Select **JPEG** | Cropped output format changes (mime type in dataUrl) |
| 3 | Select **WebP** | Cropped output format changes |
| 4 | Select **PNG** | Back to PNG |
| 5 | Drag the **Quality** slider to 0.5 | Output quality changes (smaller file size) |
| 6 | Drag back to 1.0 | Output quality restored |

### TC-C-12: Error handling (invalid URL)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Simuliere Lade-Fehler** | Input URL changes to `https://invalid.example/nonexistent.jpg` |
| 2 | Wait | Error message "Failed to load image" appears in red |
| 3 | Type a valid URL (e.g. `https://picsum.photos/800/600`) | Image loads again, error disappears |

### TC-C-13: Output width / height override
| Step | Action | Expected |
|------|--------|----------|
| 1 | Type `100` in the **Output Width** field | Cropped output width changes to 100px |
| 2 | Type `100` in the **Output Height** field | Cropped output height changes to 100px |
| 3 | Clear both fields (set to 0) | Output reverts to natural crop dimensions |

### TC-C-14: Responsive layout
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open DevTools → set viewport to 375×812 (iPhone X) | Cropper scales to fit width |
| 2 | Verify all controls (zoom, rotate, aspect ratio) are accessible | Controls wrap or remain visible |
| 3 | Set viewport to 1024×768 (iPad) | Cropper uses available space |

---

## 2. File Upload

**Navigation**: Click "File Upload" in the sidebar or navigate to `/file-upload`

### TC-FU-01: Drop zone display
| Step | Action | Expected |
|------|--------|----------|
| 1 | Navigate to file-upload page | Component visible with dashed drop zone |
| 2 | Read drop zone text | Shows "Drag & drop files here or click to browse" |
| 3 | Inspect accepted file info | Shows "Accepted: \*/\* · Max 10 files · Max 10 MB each" |

### TC-FU-02: File selection via click
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click the drop zone | File picker dialog opens |
| 2 | Select a `.ts` file | File appears in the list with name, size, and action buttons |
| 3 | Select an image file (`.png` / `.jpg`) | File appears with a thumbnail preview |

### TC-FU-03: Multiple file selection
| Step | Action | Expected |
|------|--------|----------|
| 1 | Ensure **Multiple files** toggle is ON | — |
| 2 | Click the drop zone and select 3 files | All 3 files appear in the list |

### TC-FU-04: Drag & drop
| Step | Action | Expected |
|------|--------|----------|
| 1 | Drag a file from the OS file manager over the drop zone | Drop zone highlights (border + background color change) |
| 2 | Drop the file | File appears in the list |
| 3 | Drag multiple files | All files are added |

### TC-FU-05: Paste from clipboard
| Step | Action | Expected |
|------|--------|----------|
| 1 | Copy an image (e.g. screenshot) to clipboard | — |
| 2 | Focus the drop zone (click it once) | — |
| 3 | Press Ctrl+V / Cmd+V | File appears in the list as a pasted image |

### TC-FU-06: URL input
| Step | Action | Expected |
|------|--------|----------|
| 1 | Type a valid image URL in the URL input field | Input shows the URL |
| 2 | Click **Fetch** | File is downloaded and appears in the list |
| 3 | Type an invalid URL | Clicking **Fetch** shows error message below the input |

### TC-FU-07: Upload progress
| Step | Action | Expected |
|------|--------|----------|
| 1 | Select a file | File appears with status "selected" |
| 2 | Click **Upload starten** | Progress bar animates from 0% to 100% |
| 3 | Wait for upload to complete | Status changes to checkmark (✓) |

### TC-FU-08: Cancel upload
| Step | Action | Expected |
|------|--------|----------|
| 1 | Select a file and start upload | Progress bar visible |
| 2 | Click **Cancel** (✕) button | Upload stops, file resets to "selected" status |

### TC-FU-09: Retry failed upload
| Step | Action | Expected |
|------|--------|----------|
| 1 | Upload would need to fail (this requires injecting an error handler) | — |
| 2 | If an error occurs, a **Retry** button appears for that file | Clicking Retry restarts the upload |

### TC-FU-10: Clear all files
| Step | Action | Expected |
|------|--------|----------|
| 1 | Add 2+ files to the list | Files visible in list |
| 2 | Click **Clear all** | All files removed, drop zone returns to empty state |

### TC-FU-11: Validation – file size
| Step | Action | Expected |
|------|--------|----------|
| 1 | Set **Max file size** to 1 (1 byte) | — |
| 2 | Select any file | File is rejected (no file appears) |

### TC-FU-12: Validation – file count
| Step | Action | Expected |
|------|--------|----------|
| 1 | Set **Multiple files** toggle OFF | — |
| 2 | Select a file | File is added |
| 3 | Select another file | First file may be replaced or rejected depending on implementation |

### TC-FU-13: Single file mode (multiple off)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Toggle **Multiple files** OFF | — |
| 2 | Click the drop zone and select a file | One file appears |
| 3 | Click drop zone again and select a different file | File list updates |

### TC-FU-14: Keyboard accessibility
| Step | Action | Expected |
|------|--------|----------|
| 1 | Tab to the drop zone | Focus indicator visible |
| 2 | Press Enter or Space | File picker opens |
| 3 | After adding files, press Tab | Focus moves through action buttons |

### TC-FU-15: File management – rename
| Step | Action | Expected |
|------|--------|----------|
| 1 | Note: Rename requires `editable` set to true on the component | — |
| 2 | Hover over a file item | Rename (✎) button appears |
| 3 | Click Rename | File name becomes an input field |
| 4 | Type a new name and press Enter | File name updated |
| 5 | Click Rename again, type new name, press Escape | Rename cancelled, original name restored |

### TC-FU-16: Remove individual file
| Step | Action | Expected |
|------|--------|----------|
| 1 | Add 2+ files | Files visible |
| 2 | Click the remove (✕) button on one file | Only that file is removed; others remain |
| 3 | Remove all files | Drop zone returns to idle state |

### TC-FU-17: Responsive layout
| Step | Action | Expected |
|------|--------|----------|
| 1 | Set viewport to 375×812 (mobile) | Layout stacks vertically, all controls accessible |
| 2 | Set viewport to 1440×900 (desktop) | Layout adapts to wide screen |

---

## 3. Toast / Notification

**Navigation**: Click "Toast" in the sidebar or navigate to `/toast`

### TC-T-01: Success toast
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Success** | A green-bordered toast appears: "Operation completed successfully!" with "Undo" action button |
| 2 | Wait for auto-dismiss (default duration) | Toast disappears automatically |

### TC-T-02: Error toast
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Error** | A red-bordered toast appears: "Something went wrong. Please try again." with `role="alert"` |
| 2 | Wait | Toast auto-dismisses |

### TC-T-03: Info toast
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Info** | A blue-bordered toast appears: "You have 3 new messages." |

### TC-T-04: Warning toast
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Warning** | A yellow-bordered toast appears: "Your session will expire in 5 minutes." |

### TC-T-05: Dismiss all
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Success**, then **Error** | Two toasts visible |
| 2 | Click **Dismiss All** | All toasts disappear immediately |

### TC-T-06: Custom toast
| Step | Action | Expected |
|------|--------|----------|
| 1 | Type a custom message in the **Message** field | — |
| 2 | Type a custom duration (e.g. 5000) in **Duration (ms)** | — |
| 3 | Click **Show Custom** | Toast appears with the custom message |
| 4 | Wait for the specified duration | Toast auto-dismisses after the set time |

### TC-T-07: Toast positions
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click each position button (`top-start`, `top-center`, `top-end`, `bottom-start`, `bottom-center`, `bottom-end`) | Toast appears at the specified position |

### TC-T-08: Stacking multiple toasts
| Step | Action | Expected |
|------|--------|----------|
| 1 | Quickly click **Success**, **Error**, **Info**, **Warning** | Multiple toasts stack vertically |
| 2 | Observe stacking order | Newest toast appears on top (or bottom depending on position) |

### TC-T-09: Action button interaction
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Success** | Toast shows "Undo" button |
| 2 | Click **Undo** | Button click triggers (check browser console for "undo" log) |

### TC-T-10: Accessibility
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Error** | Error toast has `role="alert"` and `aria-live="assertive"` |
| 2 | Click **Info** | Info toast has `aria-live="polite"` |
| 3 | Tab through toast action buttons (if any) | Action buttons are focusable and operable |

---

## 4. Data Table

**Navigation**: Click "Data Table" in the sidebar or navigate to `/data-table`

### TC-DT-01: Data display
| Step | Action | Expected |
|------|--------|----------|
| 1 | Navigate to data-table page | Table is visible with 12 rows of data |
| 2 | Verify columns: ID, Name, Email, Role, Active | All 5 column headers visible |
| 3 | Verify data rows: Alice, Bob, Charlie, etc. | All 12 users displayed |

### TC-DT-02: Sorting
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Name** column header | Rows sort alphabetically A→Z |
| 2 | Click **Name** column header again | Rows sort Z→A |
| 3 | Click **Role** column header | Rows sort by role |
| 4 | Click **ID** column header | Rows sort by ID |

### TC-DT-03: Toggle sortable off
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Sortable** toggle to turn it OFF | Column headers lose sort indicators |
| 2 | Click a column header | Sorting does not occur |

### TC-DT-04: Filter / search
| Step | Action | Expected |
|------|--------|----------|
| 1 | Type "Alice" in the **Search** field | Table filters to only show Alice's row |
| 2 | Type "@example.com" | All matching rows displayed |
| 3 | Clear the search field | All 12 rows shown again |
| 4 | Type "zzz_nonexistent" | "No data available" message shown |

### TC-DT-05: Toggle filter off
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Filter** toggle to turn it OFF | Search input disappears |
| 2 | Click **Filter** toggle to turn it ON | Search input reappears |

### TC-DT-06: Row selection
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click a checkbox next to a row | Row is selected; selection panel shows selected item |
| 2 | Click another row checkbox | Second row added to selection |
| 3 | Click the header checkbox | All rows selected |
| 4 | Click the header checkbox again | All rows deselected |

### TC-DT-07: Toggle selection off
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Select** toggle to turn it OFF | Checkboxes disappear |
| 2 | Click **Select** toggle to turn it ON | Checkboxes reappear |

### TC-DT-08: Pagination
| Step | Action | Expected |
|------|--------|----------|
| 1 | Locate the paginator below the table | Shows page info: "1 – 12 of 12" (since page size defaults to cover all rows) |
| 2 | Change page size to 5 (if available) | Only 5 rows shown, paginator shows page 1 of 3 |
| 3 | Click "Next page" | Rows 6–10 displayed |
| 4 | Click "Last page" | Rows 11–12 displayed |

### TC-DT-09: Custom cell rendering (Active column)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Observe Active column | Shows "✓" for active users, "✕" for inactive |

### TC-DT-10: Responsive layout
| Step | Action | Expected |
|------|--------|----------|
| 1 | Set viewport to 375×812 (mobile) | Table becomes horizontally scrollable |
| 2 | Scroll horizontally | All columns accessible |

---

## 5. Dialog / Modal

**Navigation**: Click "Dialog" in the sidebar or navigate to `/dialog`

### TC-D-01: Open and close dialog (md)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **md** button | Dialog opens with header and close button |
| 2 | Click **Close dialog** button (✕) | Dialog closes |

### TC-D-02: All dialog sizes
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **sm** | Small dialog opens (280px width) |
| 2 | Close and click **md** | Medium dialog (384px) |
| 3 | Close and click **lg** | Large dialog (640px) |
| 4 | Close and click **xl** | Extra large dialog (800px) |

### TC-D-03: Fullscreen dialog
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Fullscreen** | Dialog fills entire viewport (no rounded corners) |
| 2 | Click close button | Dialog closes |

### TC-D-04: Non-dismissible dialog
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click **Non-dismissible** | Dialog opens with header "Important" |
| 2 | Verify no close button | Close button is absent |
| 3 | Press Escape | Dialog does NOT close (disableClose = true) |
| 4 | Click backdrop (outside dialog) | Dialog remains open |
| 5 | Wait 3 seconds | Dialog auto-closes (auto-close timeout) |

### TC-D-05: Custom dialog
| Step | Action | Expected |
|------|--------|----------|
| 1 | Edit the **Title** field (e.g. "My Custom Title") | — |
| 2 | Edit the **Message** field | — |
| 3 | Click **Open Custom** | Dialog opens with custom title |

### TC-D-06: Escape key closes
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open any dismissible dialog | Dialog visible |
| 2 | Press **Escape** | Dialog closes |

### TC-D-07: Backdrop click closes
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open any dismissible dialog | Dialog visible |
| 2 | Click outside the dialog (on the backdrop overlay) | Dialog closes |

### TC-D-08: Focus trap
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open any dialog | Focus is trapped inside the dialog |
| 2 | Press Tab repeatedly | Focus cycles through interactive elements inside the dialog, does NOT leave the dialog |
| 3 | Press Shift+Tab | Focus cycles backwards |

### TC-D-09: Multiple dialog instances
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open a dialog | — |
| 2 | Close it | — |
| 3 | Open another dialog | Works correctly, no ghost overlays |

---

## 6. Menu / Hamburger

**Navigation**: Click "Menu" in the sidebar or navigate to `/menu`

### TC-M-01: Hamburger menu toggle
| Step | Action | Expected |
|------|--------|----------|
| 1 | Click the first hamburger icon (3 lines) | Menu opens with items |
| 2 | Click the hamburger icon again | Menu closes |
| 3 | Click the hamburger icon again | Menu opens again |

### TC-M-02: Menu items display
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open first menu | Shows: Profile, Settings, separator, Help, Logout |
| 2 | Open second menu | Shows: Edit, Copy, Delete (with icons) |
| 3 | Open third menu | Shows: New File, Open, separator, Save, Save As... (disabled), separator, Export, Print |

### TC-M-03: Disabled item
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open third menu | "Save As..." is visually dimmed (opacity 40%) |
| 2 | Click "Save As..." | Click handler does NOT fire |
| 3 | Check cursor | Cursor is `not-allowed` |

### TC-M-04: Menu item click
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open first menu | Menu items visible |
| 2 | Click **Profile** | An alert or action is triggered |

### TC-M-05: Keyboard navigation
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open first menu | Menu items visible |
| 2 | Press **Arrow Down** | Highlight moves to next item |
| 3 | Press **Arrow Up** | Highlight moves to previous item |
| 4 | Press **Enter** | Currently highlighted item is activated |
| 5 | Press **Escape** | Menu closes |

### TC-M-06: Close on outside click
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open a menu | Menu visible |
| 2 | Click anywhere outside the menu | Menu closes |

### TC-M-07: Separator rendering
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open first menu | A horizontal separator line is visible between Settings and Help |
| 2 | Open third menu | Separator lines visible between Open/Save, Save As.../Export, and Export/Print |

### TC-M-08: Nested menu indicator
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open third menu | "Export" item shows a right-pointing arrow (›) indicating nested children |

### TC-M-09: Responsive layout
| Step | Action | Expected |
|------|--------|----------|
| 1 | Set viewport to 375×812 (mobile) | Hamburger icons visible and tappable |
| 2 | Open a menu | Menu panel fits within viewport |

---

## 7. Cross-Cutting Tests

### TC-X-01: SSR compatibility
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open the demo URL with JavaScript disabled (e.g. using `?no-js` or DevTools) | Page renders basic shell without JS errors |
| 2 | Enable JavaScript | App hydrates correctly, no SSR mismatch warnings in console |

### TC-X-02: Dark mode
| Step | Action | Expected |
|------|--------|----------|
| 1 | Toggle system/OS theme to dark mode (or use DevTools → Rendering → Emulate CSS media feature prefers-color-scheme: dark) | All components use dark theme tokens |
| 2 | Verify cropper controls are readable | Text/buttons use correct dark mode colors |
| 3 | Verify toast/dialog overlays are dark-themed | Consistent dark mode appearance |
| 4 | Toggle back to light mode | All components switch back to light theme |

### TC-X-03: Responsive breakpoints
| Step | Action | Expected |
|------|--------|----------|
| 1 | Test on viewport 1440×900 (desktop) | All components use full width |
| 2 | Test on viewport 768×1024 (tablet) | Components adapt to medium width |
| 3 | Test on viewport 375×812 (mobile) | Components are fully usable, no horizontal overflow |
| 4 | Switch between portrait and landscape on mobile | Layout adapts correctly |

### TC-X-04: Browser console errors
| Step | Action | Expected |
|------|--------|----------|
| 1 | Navigate to each component page | No console errors or warnings |
| 2 | Interact with all features (open/close, zoom, upload, etc.) | No console errors |
| 3 | Test error states (invalid URL, etc.) | Errors are handled gracefully, no uncaught exceptions |

### TC-X-05: Keyboard navigation (app-wide)
| Step | Action | Expected |
|------|--------|----------|
| 1 | Press Tab starting from the page top | Focus moves through all interactive elements in logical order |
| 2 | Verify skip-to-content / skip navigation links if present | — |
| 3 | Verify all interactive elements show a visible focus indicator | — |
| 4 | Test sidebar navigation via keyboard | All sidebar links are reachable and operable |

### TC-X-06: Performance – initial load
| Step | Action | Expected |
|------|--------|----------|
| 1 | Open DevTools → Network tab | — |
| 2 | Reload the cropper page | Page loads within reasonable time (< 5s on fast connection) |
| 3 | Verify no render-blocking resources | — |

---

## Test Environment

| Variable | Value |
|----------|-------|
| Node.js | >= 22 |
| Package manager | pnpm |
| Angular | v22 |
| Demo server | `http://localhost:4200` |
| E2E runner | Playwright (config: `apps/demo-e2e/playwright.config.ts`) |
| CI | GitHub Actions (`.github/workflows/ci.yml`) |

---

## Reporting Issues

If a test case fails:

1. Note the exact steps that led to the failure
2. Capture a screenshot of the browser state
3. Check the browser console for errors
4. Check the demo server logs (if running locally)
5. For E2E test failures, check the Playwright HTML report in `apps/demo-e2e/playwright-report/`
6. File an issue at https://github.com/reisi007/angular-material-extended/issues
