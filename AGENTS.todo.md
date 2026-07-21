# AGENTS.todo.md – Ausgearbeiteter Task-Plan

> Status-Symbole:
> `- [ ]` pending · `- [~]` in progress · `- [x]` done · `- [!]` blocked

---

## Phase 0: Bootstrap

- [x] 0.1 Root-Verzeichnis: `angular-material-extended` (User benennt ggf. selbst um)
- [x] 0.2 Plan-Dokumente (`AGENTS.md`, `AGENTS.todo.md`, `README.md`, `LICENSE`, `.gitignore`)
- [x] 0.3 GitHub Repo erstellen (`reisi007/angular-material-extended`, public, MIT, Topics gesetzt)
- [x] 0.4 `git init` + Initial-Commit (`d8503b7`)
- [x] 0.5 Push nach `origin/main` (https://github.com/reisi007/angular-material-extended)

---

## Phase 1: Workspace Foundation

- [x] 1.1 Nx Workspace initialisieren (`create-nx-workspace@latest /tmp/nx-ws --preset=angular`, dann rsync in Projektordner)
  - [x] 1.1.1 `engines`: `node >=22`, `pnpm >=9` in root `package.json`
  - [x] 1.1.2 `packageManager: pnpm@11.10.0` in root `package.json`
- [x] 1.2 Library generieren (`pnpm nx g @nx/angular:library packages/mat-extended ...`)
  - Befehl: `pnpm nx g @nx/angular:library packages/mat-extended --publishable --importPath=@all-the.rest/mat-extended --prefix=rui --unitTestRunner=vitest-angular --standalone --strict --style=scss`
- [x] 1.3 Angular Material v22 + CDK installieren (`pnpm nx add @angular/material`)
  - [x] 1.3.1 M3 Theme in Demo-App eingerichtet
  - [x] 1.3.2 Animation-Provider (`provideAnimationsAsync`) registriert
- [x] 1.4 Secondary Entry Points erstellt (je `pnpm nx g ...library-secondary-entry-point --skipModule`):
  - [x] 1.4.1 `cropper`
  - [x] 1.4.2 `file-upload`
  - [x] 1.4.3 `toast`
  - [x] 1.4.4 `data-table`
- [x] 1.5 Demo-App: aus `apps/shop` → `apps/demo` umbenannt (`pnpm nx g @nx/workspace:move --project shop --destination apps/demo`)
  - [x] SCSS statt CSS (styles.scss + app.scss)
  - [x] Zoneless (provideZoneChangeDetection entfernt)
  - [x] Selector `rui-root` statt `app-root`
  - [x] Lazy-Routen + Placeholder-Pages für alle 4 Komponenten
  - [x] SSR-konfiguriert (aus Vorlage übernommen)
- [x] 1.6 Tailwind eingerichtet
  - [x] 1.6.1 `pnpm add -D -w tailwindcss @tailwindcss/postcss postcss`
  - [x] 1.6.2 `@import "tailwindcss"` in `styles.scss`
  - [x] 1.6.3 `postcss.config.js` im Demo-App-Root
- [x] 1.7 ESLint + Prettier-Regeln verschärft
  - [x] 1.7.1 Prefix `rui-` in Demo-App ESLint-Config (statt `app-`)
  - [x] 1.7.2 Lint-Errors gefixt (empty functions, unused vars)
- [x] 1.8 CI-Skeleton: `.github/workflows/ci.yml` (lint+test+build, pnpm-cache, nur mat-extended test)

---

## Phase 2: Theming & Common Infrastructure

- [ ] 2.1 `libs/mat-extended/src/lib/theme/_tokens.scss` – Custom CSS-Vars (für künftige Custom-Farben)
- [ ] 2.2 `libs/mat-extended/src/lib/theme/_theming.scss` – M3-Mixins für Komponenten
- [ ] 2.3 `libs/mat-extended/src/lib/theme/index.ts` – Public Theming API
- [ ] 2.4 `libs/mat-extended/src/lib/common/control-value-accessor.ts` – Basis-Helper für CVA + Signal-Bridge
  - [ ] 2.4.1 Unit-Tests für CVA-Helper (writeValue, registerOnChange, registerOnTouched, setDisabledState)
  - [ ] 2.4.2 Brücke CVA ↔ `model()` testen
- [ ] 2.5 `libs/mat-extended/src/lib/common/platform.ts` – SSR-Guard (`isPlatformBrowser`, `ensureBrowser(injector)`)
- [ ] 2.6 `libs/mat-extended/src/lib/common/a11y.ts` – Keyboard-Navigation-Helfer, Focus-Management
- [ ] 2.7 Public API im Primary Entry Point (`src/index.ts`) exportieren

---

## Phase 3: Image Cropper (`@all-the.rest/mat-extended/cropper`)

### 3.1 Design & Types
- [ ] 3.1.1 `cropper/src/cropper.types.ts`: `RuiCropperOptions`, `RuiCropperResult`, `RuiAspectRatio`, `RuiOutputFormat` (`'image/png' | 'image/jpeg' | 'image/webp'`)
- [ ] 3.1.2 `cropper/src/cropper.config.ts`: Default-Options + DI-Token `RUI_CROPPER_DEFAULT_OPTIONS`

### 3.2 Canvas Engine (`cropper/src/cropper-canvas.ts`)
- [ ] 3.2.1 Bild-Laden + Canvas-Setup (SSR-safe)
- [ ] 3.2.2 Transformationsmatrix (translate, scale, rotate)
- [ ] 3.2.3 Render-Loop (requestAnimationFrame, zoneless-safe via `afterNextRender`)
- [ ] 3.2.4 Output-Generation (Base64 in `outputFormat` + `outputQuality`)
  - [ ] 3.2.4.1 Tests: PNG/JPEG/WEBP Output korrekt
  - [ ] 3.2.4.2 Tests: Quality-Parameter greift bei JPEG/WEBP

### 3.3 Component (`cropper/src/cropper.ts` + `cropper.html` + `cropper.scss`)
- [ ] 3.3.1 Standalone-Component Skeleton (`<rui-cropper>`)
- [ ] 3.3.2 Inputs (Signals): `src`, `aspectRatio`, `outputFormat`, `outputQuality`, `maintainAspectRatio`, `rotateStep`
- [ ] 3.3.3 Outputs/Models: `croppedImage = model<string>()`, `croppedBlob = output<Blob>()`, `cropChange = output<RuiCropperResult>()`
- [ ] 3.3.4 CVA-Implementation via Basis-Helper
- [ ] 3.3.5 Externe `.scss` mit M3-Tokens (KEIN Inline-CSS!)

### 3.4 Interaktion
- [ ] 3.4.1 Drag (Pointer Events, Mouse + Touch via CDK)
- [ ] 3.4.2 Resize-Handles an 4 Ecken
- [ ] 3.4.3 Zoom via Mausrad (wheel)
- [ ] 3.4.4 Zoom via Pinch-Geste (2-Finger Pointer)
- [ ] 3.4.5 Rotate 90°-Buttons (links/rechts)
- [ ] 3.4.6 Rotate Freihand-Slider (0-360°, Material Slider)
- [ ] 3.4.7 Aspect-Ratio-Presets (1:1, 4:3, 16:9, free)

### 3.5 Accessibility
- [ ] 3.5.1 Pfeiltasten: Crop-Rechteck verschieben
- [ ] 3.5.2 `+`/`-`: Zoom
- [ ] 3.5.3 `r`/`Shift+R`: 90° rotate
- [ ] 3.5.4 Tab-Reihenfolge, sichtbare Focus-Indikatoren
- [ ] 3.5.5 ARIA-Rollen/Labels (`role="slider"` für Zoom/Rotate, `aria-label` für Crop-Region)

### 3.6 Tests & Demo
- [ ] 3.6.1 Component-Tests (CVA, Inputs, Outputs)
- [ ] 3.6.2 Interaktions-Tests (Drag, Zoom, Rotate)
- [ ] 3.6.3 A11y-Tests (Keyboard-Navigation)
- [ ] 3.6.4 Demo-Seite: `apps/demo/src/app/pages/cropper-demo.ts` (inkl. Reactive-Form + Signal-API Beispiel)
- [ ] 3.6.5 README: `libs/mat-extended/cropper/README.md`

---

## Phase 4: File Upload (`@all-the.rest/mat-extended/file-upload`)

### 4.1 Design & Types
- [ ] 4.1.1 `file-upload/src/file-upload.types.ts`: `RuiFileItem`, `RuiUploadStatus`, `RuiUploadHandler`, `RuiFileValidators`
- [ ] 4.1.2 `file-upload/src/file-upload.config.ts`: Default-Options + DI-Token `RUI_FILE_UPLOAD_DEFAULT_OPTIONS`

### 4.2 Component (`file-upload/src/file-upload.ts` + `.html` + `.scss`)
- [ ] 4.2.1 Standalone-Component Skeleton (`<rui-file-upload>`)
- [ ] 4.2.2 Drag & Drop Zone (dragenter/over/leave/drop, visuelles Feedback)
- [ ] 4.2.3 Click-to-Select (File-Input hidden + label)
- [ ] 4.2.4 Multiselect-Support (`[multiple]`)
- [ ] 4.2.5 Dateiliste mit Thumbnails (Bild-Preview via `URL.createObjectURL`)
- [ ] 4.2.6 Remove-Button pro Datei
- [ ] 4.2.7 Validierung (Size, Type, Count) → Material-Error-Messages
- [ ] 4.2.8 **"Upload starten"**-Button (manueller Trigger, disabled wenn leer)
- [ ] 4.2.9 Optionaler Upload-Handler-Service-Hook mit Progress
- [ ] 4.2.10 Progress-Bar pro Datei (Material `mat-progress-bar`)
- [ ] 4.2.11 CVA: `value` = `File[]`; Signal-API: `files = model()`, `status = signal<'idle'|'uploading'|'done'|'error'>()`

### 4.3 A11y & Tests
- [ ] 4.3.1 Tastatur-Zugang (Space/Enter für File-Picker)
- [ ] 4.3.2 ARIA-Labels (Dropzone-Region, File-Liste, Progress)
- [ ] 4.3.3 Component-Tests (Drag-Events, Validation, CVA, Upload-Trigger)
- [ ] 4.3.4 SSR-safe (Dropzone nur im Browser aktiv)
- [ ] 4.3.5 Demo-Seite + README

---

## Phase 5: Toast / Notification (`@all-the.rest/mat-extended/toast`)

- [ ] 5.1 `toast/src/toast.types.ts`: `RuiToastConfig`, `RuiToastKind`, `RuiToastRef`
- [ ] 5.2 `toast/src/toast.component.ts` (+ `.html` + `.scss`): Darstellung (Icon, Message, Action, Close)
- [ ] 5.3 `toast/src/toast.service.ts`: Imperative API (`success`, `error`, `info`, `warning`, `dismissAll`)
- [ ] 5.4 CDK Overlay + ComponentPortal (SSR-safe via `ensureBrowser()`)
- [ ] 5.5 Position (top/bottom, start/center/end), Duration, Stacking-Queue
- [ ] 5.6 Custom-Template-Support
- [ ] 5.7 `aria-live="polite"` für dynamische Toasts, `role="alert"` für Errors
- [ ] 5.8 Tests (Service, Overlay-Trigger, A11y)
- [ ] 5.9 Demo-Seite + README

---

## Phase 6: Data Table (`@all-the.rest/mat-extended/data-table`)

- [ ] 6.1 `data-table/src/data-table.types.ts`: `RuiDataColumn<T>`, `RuiDataTableConfig`, `RuiDataSortingStrategy`
- [ ] 6.2 Component (`<rui-data-table>`) wrapping `mat-table`
- [ ] 6.3 Integrierte `mat-sort`-Integration
- [ ] 6.4 Integrierte `mat-paginator`-Integration
- [ ] 6.5 Filter-Row (optional, via `[filterable]` pro Column)
- [ ] 6.6 Selection (Multiselect via `mat-checkbox` + header-toggle)
- [ ] 6.7 Custom-Cell-Templates (`ngTemplateContextGateway` für cell-, header-, footer-Templates)
- [ ] 6.8 CVA optional für Selection-State (via `[selectable]="true"`)
- [ ] 6.9 Sticky-Header + Sticky-First-Column (optional)
- [ ] 6.10 Tests
- [ ] 6.11 Demo-Seite + README

---

## Phase 7: Release & Deploy

- [ ] 7.1 `.github/workflows/release.yml`: semver-Tag → `pnpm nx build mat-extended` → `npm publish` (alle dist-packages)
- [ ] 7.2 `.github/workflows/deploy-demo.yml`: auf `main` → `pnpm nx build demo --base-href="/angular-material-extended/"` → push nach `gh-pages` Branch (via `peaceiris/actions-gh-pages`)
- [ ] 7.3 `pnpm nx build mat-extended` smoke-test (alle Entrypoints bauen)
- [ ] 7.4 Top-Level README mit Badges (CI, npm version, license, demo-link)
- [ ] 7.5 `CONTRIBUTING.md`
- [ ] 7.6 Erste Release `v0.1.0` (Cropper only)
- [ ] 7.7 Erste Demo-Deploy auf GitHub Pages

---

## Offene Fragen / Follow-ups

- [ ] Q1: Storybook Integration? (Aktuell: nur Demo-App)
- [ ] Q2: i18n-Strategy (`@ngx-translate/core` vs. Angular Native i18n)?
- [ ] Q3: E2E-Tests via Playwright für Demo?
- [ ] Q4: GitHub Discussions für Q&A aktivieren?
- [ ] Q5: `@all-the.rest` npm-Org erstellen (für Secondary Entrypoint-Publishing)?

---

## Change-Log (Plan-Versionen)

- `v1.0` – Initiale Plan-Erstellung (2026-07-21): Workspace, Theming, 4 Komponenten (Cropper/File-Upload/Toast/Data-Table), Demo-App, CI/CD.
- `v1.1` – Ergänzungen: pnpm statt npm, kein Inline-CSS, Tailwind für Layout-Utilities zulässig, Demo-Link in README.
