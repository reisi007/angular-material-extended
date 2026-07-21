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
- [x] 1.8 CI-Skeleton: `.github/workflows/ci.yml` (lint+test+build, pnpm-cache, canvas deps, e2e)

---

## Phase 2: Theming & Common Infrastructure

- [x] 2.1 `packages/mat-extended/src/theme/_tokens.scss` – Custom CSS-Vars (36 Tokens: Farben, Shapes, States, Typography, Spacing, Transitions)
- [x] 2.2 `packages/mat-extended/src/theme/_theming.scss` – M3-Mixins für Komponenten (`rui-custom-theme`, `rui-component-tokens`)
- [x] 2.3 `packages/mat-extended/src/theme/index.ts` – Public Theming API
- [x] 2.4 `packages/mat-extended/src/common/control-value-accessor.ts` – Basis-Helper für CVA + Signal-Bridge
  - [x] 2.4.1 Unit-Tests für CVA-Helper
  - [x] 2.4.2 Brücke CVA ↔ `model()` testen
- [x] 2.5 `packages/mat-extended/src/common/platform.ts` – SSR-Guard
- [x] 2.6 `packages/mat-extended/src/common/a11y.ts` – Keyboard-Navigation-Helfer
- [x] 2.7 Public API im Primary Entry Point (`src/index.ts`) exportieren

---

## Phase 2.8: i18n Infrastructure

- [x] 2.8.1 `packages/mat-extended/src/i18n/i18n.types.ts` – Types + DI-Token (`RUI_TRANSLATIONS`)
- [x] 2.8.2 `packages/mat-extended/src/i18n/translations.ts` – Built-in Locales (de, en-GB, en-US)
- [x] 2.8.3 `packages/mat-extended/src/i18n/i18n.service.ts` – `RuiI18nService` (Locale-Switching, Deep-Merge, Component-Translations)
- [x] 2.8.4 `packages/mat-extended/src/i18n/index.ts` – Public API exports
- [x] 2.8.5 `packages/mat-extended/src/index.ts` aktualisiert (i18n re-export)
- [x] 2.8.6 `packages/mat-extended/tsconfig.lib.json` aktualisiert (includes i18n)
- [x] 2.8.7 `packages/mat-extended/src/i18n/i18n.service.spec.ts` – Unit-Tests (Locale, Override, Custom-Locale, Deep-Merge)

---

## Phase 3: Image Cropper (`@all-the.rest/mat-extended/cropper`)

### 3.1 Design & Types
- [x] 3.1.1 `cropper/src/cropper.types.ts`: Types (RuiCropperOptions, RuiCropperResult, RuiCropRect, RuiOutputFormat, RuiAspectRatioPreset)
- [x] 3.1.2 `cropper/src/cropper.config.ts`: Config + DI-Token
- [x] 3.1.3 `overlayTemplate` input für SVG/CSS-Overlays

### 3.2 Canvas Engine (`cropper/src/cropper-canvas.ts`)
- [x] 3.2.1 Bild-Laden + Canvas-Setup (SSR-safe)
- [x] 3.2.2 Transformationsmatrix (translate, scale, rotate)
- [x] 3.2.3 Render mit Crop-Overlay + Handles
- [x] 3.2.4 Output-Generation (Base64 in `outputFormat` + `outputQuality`)
  - [x] 3.2.4.1 Tests: PNG/JPEG/WEBP Output korrekt
  - [x] 3.2.4.2 Tests: Quality, Zoom, Rotation, Aspect Ratio

### 3.3 Component (`cropper/src/cropper.ts` + `cropper.html` + `cropper.scss`)
- [x] 3.3.1 Standalone-Component (`<rui-cropper>`)
- [x] 3.3.2 Inputs (Signals): `src`, `aspectRatio`, `outputFormat`, `outputQuality`
- [x] 3.3.3 Outputs/Models: `croppedImage = model<string>()`, `cropChange = output<RuiCropperResult>()`
- [x] 3.3.4 CVA-Implementation via RuiValueAccessor
- [x] 3.3.5 Externe `.scss` mit M3-Tokens
- [x] 3.3.6 Overlay-Slot über `<ng-content select="[ruiCropperOverlay]">`
- [x] 3.3.7 Aspect-Ratio-Selector nur bei `'free'` sichtbar
- [x] 3.3.8 outputWidth / outputHeight Inputs für skalierte Ausgabe (optional)
- [x] 3.3.9 minCropWidth / minCropHeight in Resize + Keyboard enforcen

### 3.4 Interaktion
- [x] 3.4.1 Drag via Pointer Events
- [x] 3.4.2 Resize-Handles an 4 Ecken
- [x] 3.4.3 Zoom via Mausrad
- [x] 3.4.4 Zoom via Pinch-Geste (Code in cropper-interaction.ts, aber nie an Component angebunden)
- [x] 3.4.5 Rotate 90°-Buttons
- [x] 3.4.6 Rotate Freihand-Slider (0-360°)
- [x] 3.4.7 Aspect-Ratio-Presets (Canvas + Component)
- [x] 3.4.8 Touch/Pinch-Zoom an Component anbinden (Touch-Event-Handler)

### 3.5 Accessibility
- [x] 3.5.1 Pfeiltasten: Crop-Rechteck verschieben
- [x] 3.5.2 `+`/`-`: Zoom
- [x] 3.5.3 `r`/`R`: 90° rotate
- [x] 3.5.4 Tabindex + Focus-Indikatoren
- [x] 3.5.5 ARIA-Labels

### 3.6 Tests, Demo & Bugfixes
- [x] 3.6.1 Component-Tests (CVA, Inputs, Outputs, Zoom, Rotate)
- [x] 3.6.2 Canvas-Engine-Tests (Render, Output, Aspect-Ratio)
- [x] 3.6.3 Lint: 0 Warnings erreicht + maxWarnings: 0 in config
- [ ] 3.6.4 E2E-Tests in Demo App (Playwright, später)
- [x] 3.6.5 Demo-Seite: `apps/demo/src/app/pages/cropper-demo.ts`
- [x] 3.6.6 README: `packages/mat-extended/cropper/README.md`
- [x] 3.6.7 **Bugfix cropRectStyle**: Template setzt `.px`-CSS-Vars, aber Werte sind Prozent (rect.x * 100%). Overlay funktioniert nicht korrekt
- [x] 3.6.8 **Bugfix blob: null**: `_emitResult()` setzt `blob: null`. `canvas.toBlob()` muss aufgerufen werden
- [x] 3.6.9 Test für Bild-Lade-Fehler (catch-Branch in _loadImage)

---

## Phase 4: File Upload (`@all-the.rest/mat-extended/file-upload`)

### 4.1 Design & Types
- [x] 4.1.1 `file-upload/src/file-upload.types.ts`: `RuiFileItem`, `RuiUploadStatus`, `RuiUploadHandler`
- [x] 4.1.2 `file-upload/src/file-upload.config.ts`: Default-Options + DI-Token `RUI_FILE_UPLOAD_DEFAULT_OPTIONS`
- [x] 4.1.3 `RuiFileItem` um `editName` (editierbarer Anzeigename, default = file.name) ergänzen
- [x] 4.1.4 `RuiFileUploadOptions` um `sortable`, `autoUpload`, `editable` (für Rename) ergänzen

### 4.2 Component (`file-upload/src/file-upload.ts` + `.html` + `.scss`)
- [x] 4.2.1 Standalone-Component (`<rui-file-upload>`)
- [x] 4.2.2 Drag & Drop Zone + Click-to-Select
- [x] 4.2.3 Multiselect-Support (`[multiple]`)
- [x] 4.2.4 Dateiliste mit Thumbnails via `URL.createObjectURL`
- [x] 4.2.5 Remove-Button pro Datei
- [x] 4.2.6 Validierung (Size, Type, Count)
- [x] 4.2.7 **"Upload starten"**-Button (manueller Trigger)
- [x] 4.2.8 Upload-Handler-Service-Hook mit Progress
- [x] 4.2.9 Progress-Bar pro Datei + Gesamtfortschritt
- [x] 4.2.10 CVA: `value` = `RuiFileItem[]`; Signal-API: `files = model()`
- [x] 4.2.11 CDK DragDrop-Reorder (Drag-Handle + Drop-List)
- [x] 4.2.12 **sortable-Option**: default `false`. Keine Drag-Handles + kein Reorder wenn false
- [x] 4.2.13 **Validation-Feedback**: Output/Event bei rejected files (wrong type, size, count) – aktuell stumm
- [x] 4.2.14 **i18n/Custom-Text-Inputs**: `dropzoneText`, `browseText`, `dragOverText`, `uploadButtonText` als Inputs
- [x] 4.2.15 **Cancel-Upload** (AbortController) + **Retry** einzelner Failed-Files + **Clear-All** Button
- [x] 4.2.16 **autoUpload-Option**: Upload startet automatisch nach File-Selection
- [x] 4.2.17 **File-Management – Inline-Rename**: Jeder File-Item hat Edit-Button → klicken macht den Dateinamen zu einem Input-Feld (editierbar). Enter/Blur bestätigt, Escape bricht ab. `onRename = output<RuiFileItem>()` feuert bei Bestätigung
- [x] 4.2.18 **File-Management – Preexisting Files**: `initialFiles = input<RuiFileItem[]>()` zum Vorbelegen mit bereits hochgeladenen Dateien (Server-Daten). `onDelete = output<RuiFileItem>()` feuert wenn ein File (preexisting ODER neu) entfernt wird. Delete-Button auch im `done`-Status sichtbar
- [x] 4.2.19 **sortable in RuiFileUploadOptions** ergänzen
- [x] 4.2.20 **Dead-Code**: `_reorderFiles` private Methode entfernen
- [x] 4.2.21 **Cleanup**: `startUpload()` setzt `status = 'idle'` auch wenn einzelne Uploads fehlschlugen
- [x] 4.2.22 **fileManagement-Input**: `fileManagement` boolean Input (default true). Wenn false, werden erweiterte Features (Rename, Retry, Cancel, Clear-All, Delete bei done) ausgeblendet – einfacher Upload-Modus

### 4.3 A11y & Tests
- [x] 4.3.1 Tastatur-Zugang (Space/Enter für File-Picker)
- [x] 4.3.2 ARIA-Labels (Dropzone-Region, File-Liste, Progress)
- [x] 4.3.3 Component-Tests (Creation, Dropzone, ProcessFiles, Remove, Upload, Validation, Reorder, Button, Handler)
- [x] 4.3.4 SSR-safe (Dropzone nur im Browser aktiv)
- [x] 4.3.5 Demo-Seite + README
- [x] 4.3.6 Tests für sortable (Drag-Handle sichtbar/versteckt, cdkDropList disabled/enabled)
- [x] 4.3.7 **Fehlende Tests**: accept-Filter, maxFiles-Limit, Upload-Error-Handling, sortable-Integration, Rename, Delete, Preexisting-Files
- [x] 4.3.8 **ARIA-Rolle fix**: Dropzone hat `role="button"`, sollte `role="region"` sein
- [x] 4.3.9 **Focus-Management**: Nach removeFile() Focus auf Dropzone setzen; nach Rename-Bestätigung Focus auf neuen Edit-Button

---

## Phase 5: Toast / Notification (`@all-the.rest/mat-extended/toast`)

- [x] 5.1 `toast/src/toast.types.ts`: `RuiToastConfig`, `RuiToastKind`, `RuiToastRef`
- [x] 5.2 `toast/src/toast.component.ts` (+ `.html` + `.scss`): Darstellung (Icon, Message, Action, Close)
- [x] 5.3 `toast/src/toast.service.ts`: Imperative API (`success`, `error`, `info`, `warning`, `dismissAll`)
- [x] 5.4 CDK Overlay + ComponentPortal (SSR-safe via `ensureBrowser()`)
- [x] 5.5 Position (top/bottom, start/center/end), Duration, Stacking-Queue
- [x] 5.6 Custom-Template-Support
- [x] 5.7 `aria-live="polite"` für dynamische Toasts, `role="alert"` für Errors
- [x] 5.8 Tests (Service, Overlay-Trigger, A11y)
- [x] 5.9 Demo-Seite + README

---

## Phase 6: Data Table (`@all-the.rest/mat-extended/data-table`)

- [x] 6.1 `data-table/src/data-table.types.ts`: `RuiDataColumn<T>`, `RuiDataTableConfig`, `RuiDataSortingStrategy`
- [x] 6.2 Component (`<rui-data-table>`) wrapping `mat-table`
- [x] 6.3 Integrierte `mat-sort`-Integration
- [x] 6.4 Integrierte `mat-paginator`-Integration
- [x] 6.5 Filter-Row (optional, via `[filterable]` pro Column)
- [x] 6.6 Selection (Multiselect via `mat-checkbox` + header-toggle)
- [x] 6.7 Custom-Cell-Templates (`ngTemplateContextGateway` für cell-, header-, footer-Templates)
- [x] 6.8 CVA optional für Selection-State (via `[selectable]="true"`)
- [x] 6.9 Sticky-Header + Sticky-First-Column (optional)
- [x] 6.10 Tests
- [x] 6.11 Demo-Seite + README

---

## Phase 7: Release & Deploy

- [x] 7.1 `.github/workflows/release.yml`: semver-Tag → `pnpm nx build mat-extended` → `npm publish` (alle dist-packages)
- [x] 7.2 `.github/workflows/deploy-demo.yml`: auf `main` → `pnpm nx build demo --base-href="/angular-material-extended/"` → push nach `gh-pages` Branch (via `peaceiris/actions-gh-pages`)
- [x] 7.3 **Build-Fix**: `pnpm nx build mat-extended:production` scheitert für cropper EP (TypeScript 6.0 internal bug `Cannot destructure property 'pos' of 'file.referencedFiles[index]'`)
- [x] 7.4 `pnpm nx build mat-extended` smoke-test (alle Entrypoints bauen) – **blocked by 7.3**
- [ ] 7.5 Top-Level README mit Badges (CI, npm version, license, demo-link)
- [ ] 7.6 `CONTRIBUTING.md`
- [ ] 7.7 Erste Release `v0.1.0` (Cropper + FileUpload)
- [ ] 7.8 Erste Demo-Deploy auf GitHub Pages

---

## Phase 8: Infrastructure & Cleanup

- [x] 8.1 **package.json in allen 6 Secondary Entry Points** anlegen – ng-packagr benötigt `{ "ngPackage": {} }` für Publishing (`cropper/`, `file-upload/`, `toast/`, `data-table/`, `dialog/`, `menu/`)
- [x] 8.2 **Duplizierte common/Helper im Cropper entfernen**: `cropper/src/common/control-value-accessor.ts` + `platform.ts` sind 1:1-Kopien von `src/common/`. Imports in cropper.ts auf `../../src/common/` umstellen, Duplikate löschen
- [x] 8.3 **Primary Entry Point `src/index.ts`**: sinnvolle Re-Exports (theme, common, i18n)
- [x] 8.4 **CI: canvas system dependencies** – node-canvas braucht libcairo etc. unter Linux. `apt-get` in CI-yml ergänzt
- [ ] 8.5 **Dependabot Triage** – 22 open vulnerabilities analysieren und fixen

---

## Phase 9: Dialog / Modal (`@all-the.rest/mat-extended/dialog`)

- [x] 9.1 `dialog/src/dialog.types.ts`: `RuiDialogConfig`, `RuiDialogRef`, `RuiDialogSize`
- [x] 9.2 `dialog/src/dialog.config.ts`: DI-Token + Defaults
- [x] 9.3 `dialog/src/dialog.component.ts` (+ `.html` + `.scss`): Overlay-basierter Dialog mit Header, Content, Actions
- [x] 9.4 `dialog/src/dialog.service.ts`: Imperative API (`open`, `close`, `dismissAll`)
- [x] 9.5 CDK Overlay + ComponentPortal (SSR-safe via `ensureBrowser()`)
- [x] 9.6 Config: width, height, disableClose, hasBackdrop, position
- [x] 9.7 A11y: FocusTrap, `role="dialog"`, `aria-modal`, Escape schließt
- [x] 9.8 Custom-Template-Support via `ngTemplateOutlet`
- [x] 9.9 Tests (Service, Overlay, A11y)
- [x] 9.10 Demo-Seite + README

---

## Phase 10: Menu / Hamburger (`@all-the.rest/mat-extended/menu`)

- [x] 10.1 `menu/src/menu.types.ts`: `RuiMenuItem`, `RuiMenuConfig`, `RuiMenuPosition`
- [x] 10.2 `menu/src/menu.config.ts`: DI-Token + Defaults
- [x] 10.3 `menu/src/menu-trigger.directive.ts`: Trigger-Directive für Button/Element
- [x] 10.4 `menu/src/menu-panel.component.ts` (+ `.html` + `.scss`): Overlay-Panel mit Items
- [x] 10.5 CDK Overlay + FlexibleConnectedPositionStrategy
- [x] 10.6 Items: Icons, Text, Separator, Disabled, Nested Menu
- [x] 10.7 Keyboard-Navigation (Arrow up/down, Enter, Escape)
- [x] 10.8 Hamburger-Icon (3 Lines) via Input/Slot
- [x] 10.9 Tests (Trigger, Navigation, A11y)
- [x] 10.10 Demo-Seite + README

---

## Phase 11: E2E Tests (Playwright)

- [x] 11.1 E2E-Projekt-Struktur: `apps/demo-e2e/` mit `project.json`, `playwright.config.ts`, `eslint.config.mjs`
- [x] 11.2 Cropper E2E Tests (Display, Zoom, Rotate, Aspect Ratio, Output)
- [x] 11.3 File Upload E2E Tests (Display, Dropzone, Multiple Toggle, File Selection)
- [x] 11.4 Toast E2E Tests (Display, Success/Error/Info/Warning, Dismiss All)
- [x] 11.5 Data Table E2E Tests (Display, Config Toggles, Columns, Filter)
- [x] 11.6 Dialog E2E Tests (Display, Open/Close md, All Sizes)
- [x] 11.7 Menu E2E Tests (Display, Hamburger Toggle, Menu Items, Icon Items)
- [x] 11.8 Playwright devDependency aktualisiert auf ^1.52.0

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
- `v1.2` – Undokumentierte TODOs ergänzt: Cropper-Bugfixes (px, blob, pinch), File-Upload-Lücken (validation, i18n, cancel, autoUpload, fileManagement), Infrastructure (package.json, duplicates, exports), Test-Lücken.
- `v1.3` – AGENTS.md §17 präzisiert: Implementierung + Validierung laufen im selben Sub-Agent, Mapping-Tabelle aktualisiert (pro Feature-Gruppe ein Sub-Agent inkl. Tests + Demo).
- `v1.4` – Cropper-Bugfixes (px, blob, pinch, error, outputWidth/Height) + Toast (Phase 5) + Data Table (Phase 6) implementiert. File-Upload: `fileManagement`-Input für Simple Mode + Validation-Output. Neue Phasen: Dialog (Phase 9), Menu (Phase 10).
- `v1.5` – Alle SCSS-Dateien aus Library-Komponenten entfernt, Tailwind-only. AGENTS.md: Styling-Regeln (Tailwind only), eslint-disable-Verbot, neue Definition of Done (E2E + Pipeline). i18n-Infrastruktur (de, en-GB, en-US) mit `RuiI18nService` + `RUI_TRANSLATIONS`-Token. Test-Timeouts auf 2s für fast-fail.
- `v1.6` – CI/CD Pipelines (ci.yml, release.yml, deploy-demo.yml) erstellt. Phase 8 Infrastructure: package.json für 6 EPs, Cropper-Duplikate entfernt, Primary-Exports. Build-Fix (compilationMode: partial). Playwright E2E-Tests für alle 6 Komponenten (Desktop + Mobile Chrome).
