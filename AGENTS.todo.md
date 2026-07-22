# AGENTS.todo.md – Ausgearbeiteter Task-Plan

> Status-Symbole:
> `- [ ]` pending · `- [~]` in progress · `- [x]` done · `- [!]` blocked

---

## Phase 3: Image Cropper (`@all-the.rest/mat-extended/cropper`)

### 3.6 Tests, Demo & Bugfixes
- [ ] 3.6.4 E2E-Tests in Demo App (Playwright, später)

---

## Phase 7: Release & Deploy

- [x] 7.5 Top-Level README mit Badges (CI, npm version, license, demo-link)
- [ ] 7.6 `CONTRIBUTING.md`
- [ ] 7.7 Erste Release `v0.1.0` (Cropper + FileUpload)
- [x] 7.8 Erste Demo-Deploy auf GitHub Pages

---

## Phase 8: Infrastructure & Cleanup

- [ ] 8.5 **Dependabot Triage** – 22 open vulnerabilities analysieren und fixen

---

## Phase 13: Bugfixes & UX Polish

### 13.9–13.17: Finalisierung (aktuell)

- [~] 13.9 **Fonts npm**: `pnpm add @fontsource/roboto material-symbols`, Google-Fonts-URLs aus `index.html` entfernen, `tailwind.config.js` fontFamily anpassen, `styles.scss` imports.
- [ ] 13.10 **Cropper Bugs (kritisch)**: B1 Zoom-Effect fehlt → `effect(() => { engine.setZoom(zoomLevel()/100); engine.render() })`, B2 Aspect-Ratio verloren nach Drag → `onPointerMove` liest `effectiveAspectRatio()` statt `aspectRatio()`, B3 Overlay-CSS-Vars frozen → `_cropRectVersion`-Signal.
- [ ] 13.11 **Dialog UX**: Fullscreen Body `flex-1 overflow-auto`, Header/Body/Footer-Layout mit flex, Footer-Close-Button, Variante mit Title + Success/Abort-Buttons.
- [ ] 13.12 **Data-Table Expandable**: `_expandedDetail`-Content rendert nicht, `isRowExpanded` Predicate prüfen.
- [ ] 13.15 **Menü-Sektionen**: Sidebar-Nav gruppiert: "Components" (unsere 6) + "Angular Material" (Catalog).
- [ ] 13.16 **A11y**: `aria-label` auf Menu-Buttons, `<fieldset>` für Toggle-Gruppen, `aria-live` auf Dialog-Result, `aria-hidden` auf dekorative Icons.
- [x] 13.28 **Cropper: constrainToImage Feature**: Input `constrainToImage` (default `true`), rotation-aware AABB bounds via `getImageBoundsInView()`, wired in zoom/rotation effects + initial load. Demo toggle section. Tests: 47/47 component spec passing, canvas spec 7/15 (4 pre-existing jsdom failures, 4 new loadImage-dependent — same root cause).
- [x] 13.18 **Verify**: `pnpm nx build demo:production` ✅ | `pnpm nx lint mat-extended` ✅ | `pnpm nx test mat-extended` ✅ (75 Tests) | `pnpm nx lint demo` ⚠️ (10 pre-existing A11y errors in material-catalog)

### 13.19–13.27: File Manager – Drag & Drop + Bugfixes

- [x] 13.19 **Kein `dragStartDelay`**: `RuiFileManagerItem` hat kein `[cdkDragStartDelay]` → versehentliche Drags auf Touch/Mobile. Input `dragStartDelay` analog zu `RuiFileUploadItem` hinzufügen.
- [x] 13.20 **Keine Move-Up/Down-Buttons**: `RuiFileUploadItem` hat Pfeil-Buttons, `RuiFileManagerItem` nicht → A11y-Lücke (Keyboard-only Nutzer können nicht sortieren). Buttons analog zu `RuiFileUploadItem` (`moveUp`/`moveDown`) hinzufügen.
- [x] 13.21 **Remove-Button während Rename sichtbar**: `RuiFileManagerItem` versteckt Remove-Button NICHT während Inline-Rename → Klick auf Remove während Editieren orphand `editingItemId`/`editInputValue`. Guard analog zu `RuiFileUploadItem` (`editingItemId() !== item().id`).
- [x] 13.22 **`confirmRename` emittet auf Blur ohne Änderung**: `(blur)` triggert immer Rename, auch wenn User nichts getippt hat. Prüfung auf tatsächliche Änderung vor Emit.
- [x] 13.23 **`confirmRename` fällt stillschweigend auf alten Namen zurück**: Leeres Input → kein Feedback an User. Validierung + Error-State im Input.
- [x] 13.24 **Kein `editableExtension`-Input**: `RuiFileManager`/`RuiFileManagerItem` haben kein `editableExtension` (anders als `RuiFileUpload`). Input hinzufügen + Extension-Handling im Rename.
- [x] 13.25 **`cancelUpload` nutzt eigene `AbortController`-Map nicht**: `RuiFileManager.cancelUpload()` emittet nur Output, ruft aber nicht `abortControllers.get(id)?.abort()` auf → Upload läuft im Hintergrund weiter.
- [x] 13.26 **`retryFile` ohne Guard gegen Doppel-Retry**: Kein Check ob Item schon `uploading` ist → parallele Uploads möglich.
- [x] 13.27 **Drop-Event ohne No-Op-Guard**: `onDropListDropped()` prüft nicht `previousIndex === currentIndex` → unnötiges Signal-Update/Re-Render (in `RuiFileUpload` vorhanden, in `RuiFileManager` fehlend).

### 13.28: File Manager – Featureset-Umbau (Upload-Logik entfernt)

- [x] 13.28.1 **Upload-Logik aus RuiFileManager entfernt**: `uploadHandler`, `retryFile()`, `cancelUpload`, `abortControllers` komplett gelöscht. Komponente ist jetzt rein auf Rename/Sort/Delete fokussiert.
- [x] 13.28.2 **Upload-UI aus RuiFileManagerItem entfernt**: Progress-Bar, Retry-Button, Cancel-Upload-Button, Done-Checkmark, Error-Anzeige, Status-abhängige Action-Blöcke komplett gelöscht.
- [x] 13.28.3 **RuiFileManagerItem erweitert**: `dragStartDelay`, `editableExtension`, `moveUp`/`moveDown` Outputs + Buttons, Extension-Badge (`fileBaseName`/`fileExtension` computed).
- [x] 13.28.4 **Rename-Validierung**: Leeres Input → kein Commit (bleibt im Edit-Modus mit rotem Border). Unveränderter Name → kein Emit.
- [x] 13.28.5 **Extension-Handling im Rename**: `editableExtension=false` → nur Basis-Name editierbar, Extension wird als Badge angezeigt und beim Commit wieder angehängt.
- [x] 13.28.6 **index.ts**: `RuiFileManagerItem` wird nun exportiert.
- [x] 13.28.7 **Demo-Seite**: `/file-upload-item` → `/file-manager` (Route + Sidebar). 4 Sektionen: Basic, Rename (mit/ohne Ext), Sortierung (D&D + Buttons), Composition mit File Upload.
- [x] 13.28.8 **README**: `packages/mat-extended/file-manager/README.md` erstellt (Inputs/Outputs, Rename, Sort, Composition, A11y, SSR, Disclaimer).
- [x] 13.28.9 **Tests aktualisiert**: 47 Tests (23 Manager + 24 Item) – Upload-Tests entfernt, neue Tests für moveUp/moveDown, editableExtension, Rename-Validierung, Extension-Appending.

- [x] 13.29 **Pre-existing Build-Blocker gelöst**: `RuiArrayValueAccessor` wird jetzt von `RuiMultiSelect` verwendet. `multi-select/` Secondary Entry Point existiert mit allen Dateien. Build & Tests pass.

---

## Phase 17: Multi-Select (`@all-the.rest/mat-extended/multi-select`)

- [x] 17.1 `RuiArrayValueAccessor<T>` Base Class in `common/array-value-accessor.ts` (extends `RuiValueAccessor<T[]>` + `values = model<T[]>([])` + Array-Helper: toggle/add/remove/reorder/contains/clear)
- [x] 17.2 Secondary Entry Point `multi-select/` scaffolden (package.json, ng-package.json, index.ts)
- [x] 17.3 `multi-select.types.ts` + `multi-select.config.ts` (RuiMultiSelectConfig, DI-Token)
- [x] 17.4 `multi-select.ts` + `multi-select.html` — `<rui-multi-select>` standalone component wrapping `mat-select multiple` + chip trigger + drag-reorder + selection-order tracking
- [x] 17.5 `MatFormFieldControl` integration via embedded `<mat-form-field>` (label/placeholder Inputs)
- [x] 17.6 Forms-Kompatibilität: Reactive (`[formControl]`), Signal (`[(values)]`), Template-driven (`[(ngModel)]`)
- [x] 17.7 Tests: `multi-select.spec.ts` (24 Tests) — coverage ≥80%, vgl. CVA-Tests in `array-value-accessor.spec.ts` (72 Tests)
- [x] 17.8 Demo-Seite aktualisiert: 3 Beispiele mit `<rui-multi-select>` statt nativem `<mat-select multiple>`
- [x] 17.9 Verify: `pnpm nx lint mat-extended` ✅ | `pnpm nx test mat-extended` ✅ (nur pre-existing Failures) | `pnpm nx build demo` ✅

### Hinweise
- `RuiArrayValueAccessor` in `common/` wird jetzt aktiv von `RuiMultiSelect` verwendet (keine Build-Blocker mehr)
- tsconfig Erweiterungen für multi-select wurden in `tsconfig.spec.json` + `tsconfig.base.json` ergänzt

---

## Phase 17: Breadcrumb (`@all-the.rest/mat-extended/breadcrumb`)

- [x] 17.1 Secondary Entry Point scaffolden (package.json, ng-package.json, dirs)
- [x] 17.2 breadcrumb.types.ts + breadcrumb.config.ts
- [x] 17.3 breadcrumb.service.ts + breadcrumb.service.spec.ts
- [x] 17.4 breadcrumb.component.ts + breadcrumb.html + breadcrumb.component.spec.ts
- [x] 17.5 src/index.ts + README.md + vite/tsconfig updates
- [x] 17.6 Demo: app.routes.ts annotieren + Header ersetzen
- [x] 17.7 breadcrumb-demo Seite + Nav-Eintrag
- [x] 17.8 Verify: `pnpm nx lint mat-extended` + `pnpm nx test mat-extended` + `pnpm nx build demo` gruen

---

## Offene Fragen / Follow-ups

- [ ] Q1: Storybook Integration? (Aktuell: nur Demo-App)
- [ ] Q2: i18n-Strategy (`@ngx-translate/core` vs. Angular Native i18n)?
- [ ] Q3: E2E-Tests via Playwright für Demo?
- [!] **E2E blockiert**: `pnpm nx serve demo` kann Projektgraphen in CI nicht auflösen ("The projects in the following directories have no name provided" für cropper/data-table/dialog/file-manager/file-upload/menu/toast). Secondary Entry Points brauchen `project.json` mit `"name"` oder `@nx/angular/plugin`-Konfiguration in `nx.json`.
- [ ] Q4: GitHub Discussions für Q&A aktivieren?
- [ ] Q5: `@all-the.rest` npm-Org erstellen (für Secondary Entrypoint-Publishing)?

---

## DoD Compliance Report (2026-07-22)

### Cross-Cutting Issues
| Issue | Affected Features |
|-------|-------------------|
| **No E2E / Playwright tests** | ALL features (blocked: Nx project graph resolution, see E2E blockiert) |
| **eslint-disable violations** | Data Table (2: `no-explicit-any`), Dialog (1 file-level: `no-explicit-any`) |
| **Missing or insufficient README** | Multi-Select (none), Dialog (none), Menu (none), Data Table (3 lines), Toast (3 lines) |
| **Missing component-level tests** | Dialog (no dialog.component.spec), Menu (no menu-button/panel.spec), Toast (no toast/icon/action.spec) |
| **Known bugs** | Cropper zoom+aspect ratio (13.10), Dialog UX (13.11), Data Table expandable (13.12) |

### Feature Ranking
1. **Cropper** – 6/8 Kriterien ✅ (E2E + CI fehlen)
2. **Breadcrumb** – 6/8 ✅ (E2E + CI)
3. **File Upload** – 6/8 ✅ (E2E + CI)
4. **File Manager** – 5.5/8 ✅ (E2E + CI + partial A11y)
5. **Multi-Select** – 5/8 ✅ (E2E + README + CI + partial A11y)
6. **Toast** – 4.5/8 ✅ (E2E + README + CI + component tests)
7. **Menu** – 4.5/8 ✅ (E2E + README + CI + component tests)
8. **Data Table** – 4/8 ✅ (E2E + eslint-disable + README + CI + known bugs)
9. **Dialog** – 3.5/8 ✅ (E2E + eslint-disable + README + CI + component tests + known bugs)

### Required Fixes Before v0.1.0 Release
- [ ] Fix eslint-disable in `data-table.component.ts:31` and `data-table.types.ts:31`
- [ ] Fix eslint-disable in `dialog.service.ts:1`
- [ ] Add README for Multi-Select, Dialog, Menu
- [ ] Expand README for Data Table and Toast
- [ ] Write component-level tests for Dialog, Menu, Toast
- [ ] Resolve E2E blockiert (Nx project graph for Secondary Entry Points)

---

## Phase 16: Autocomplete (`@all-the.rest/mat-extended/autocomplete`)

- [ ] 16.1 Neue Secondary-Entrypoint `autocomplete` anlegen (`pnpm nx g @nx/angular:library-secondary-entry-point --name=autocomplete --library=packages/mat-extended --skipModule`)
- [ ] 16.2 `autocomplete/src/autocomplete.types.ts`: Types (`RuiAutocompleteOption`, `RuiAutocompleteConfig`)
- [ ] 16.3 `autocomplete/src/autocomplete.component.ts`: Standalone-Component (`<rui-autocomplete>`) wrapping `mat-autocomplete` mit Signals-API
- [ ] 16.4 `autocomplete/src/autocomplete.html`: Template mit Tailwind-Utilities, M3-Tokens
- [ ] 16.5 Tests (≥80% Coverage)
- [ ] 16.6 Demo-Seite + README
