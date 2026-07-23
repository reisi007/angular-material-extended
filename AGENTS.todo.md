# AGENTS.todo.md – Ausgearbeiteter Task-Plan

> Status-Symbole:
> `- [ ]` pending · `- [~]` in progress · `- [x]` done · `- [!]` blocked

---

## Phase 16: Autocomplete (`@all-the.rest/mat-extended/autocomplete`)

- [ ] 16.1 Secondary-Entrypoint `autocomplete` anlegen
- [ ] 16.2 Types (`RuiAutocompleteOption`, `RuiAutocompleteConfig`)
- [ ] 16.3 Standalone-Component `<rui-autocomplete>` mit Signals-API
- [ ] 16.4 Template mit Tailwind-Utilities, M3-Tokens
- [ ] 16.5 Tests (≥80% Coverage)
- [ ] 16.6 Demo-Seite

---

## Phase: Quality & Testing

### A11y-Implementierungslücken

- [ ] `<fieldset>` für Toggle-Gruppen in Demo-App (Material Catalog)
- [ ] `aria-live` auf Dialog-Result in Demo-App
- [ ] `aria-hidden` auf dekorative Icons (Menu Panel, Data Table)

### Fehlende Unit-Tests (22 Dateien ohne `.spec.ts`)

#### Core / Common
- [ ] `packages/mat-extended/src/common/platform.ts`
- [ ] `packages/mat-extended/src/common/a11y.ts`
- [ ] `packages/mat-extended/src/common/date-input-mask.directive.ts`

#### Cropper
- [ ] `packages/mat-extended/cropper/src/cropper-interaction.ts`
- [ ] `packages/mat-extended/cropper/src/cropper-toolbar.component.ts`
- [ ] `packages/mat-extended/cropper/src/cropper-grid-overlay.component.ts`

#### Data Table
- [ ] `packages/mat-extended/data-table/src/data-table-empty-state.component.ts`
- [ ] `packages/mat-extended/data-table/src/data-table-filter.component.ts`
- [ ] `packages/mat-extended/data-table/src/data-table-loading.component.ts`
- [ ] `packages/mat-extended/data-table/src/data-table-paginator.component.ts`

#### Dialog
- [ ] `packages/mat-extended/dialog/src/dialog.component.ts`
- [ ] `packages/mat-extended/dialog/src/dialog-header.component.ts`
- [ ] `packages/mat-extended/dialog/src/dialog-footer.component.ts`

#### File Upload
- [ ] `packages/mat-extended/file-upload/src/file-upload-dropzone.component.ts`
- [ ] `packages/mat-extended/file-upload/src/file-upload-progress.component.ts`
- [ ] `packages/mat-extended/file-upload/src/file-upload-utils.ts`

#### Menu
- [ ] `packages/mat-extended/menu/src/menu-button.component.ts`
- [ ] `packages/mat-extended/menu/src/menu-panel.component.ts`
- [ ] `packages/mat-extended/menu/src/menu-trigger.directive.ts`

#### Toast
- [ ] `packages/mat-extended/toast/src/toast.component.ts`
- [ ] `packages/mat-extended/toast/src/toast-action.component.ts`
- [ ] `packages/mat-extended/toast/src/toast-icon.component.ts`

### Fehlende A11y-Tests in bestehenden Specs

#### Keyboard-Navigation
- [ ] Cropper: Tab-Zyklus Toolbar, Enter/Space Zoom/Rotation, Arrow Crop-Verschiebung
- [ ] Data Table: Arrow-Keys Sort-Header, Space/Enter Checkbox, Tab durch Zeilen
- [ ] Dialog: Focus-Trap, Tab-Zyklus, Focus-Return bei Close
- [ ] File Upload: Tab Dropzone/Browse, Enter/Space Datei-Auswahl
- [ ] Menu: Arrow-Down/Up Item-Navigation, Arrow-Right Submenu, Enter/Space Select
- [ ] Multi-Select: Arrow-Down/Up Option-Navigation, Enter/Space Toggle, Escape Close
- [ ] Toast: Escape Einzel-Dismiss, Tab Action-Button

#### ARIA-Attribute
- [ ] Breadcrumb: `aria-label` Override, `aria-current="page"` Dynamik
- [ ] Data Table: `aria-sort` Sort-Header, `aria-label` Checkboxen, `aria-selected` Zeilen
- [ ] Dialog: `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`
- [ ] File Upload: `role="region"`, `aria-live` Fehler, `aria-label` Dropzone
- [ ] Menu: `role="menu"`, `role="menuitem"`, `aria-expanded`, `aria-disabled`
- [ ] Multi-Select: `aria-multiselectable`, `aria-expanded` Panel-Open
- [ ] Toast: `role="alert"` vs `role="status"`, `aria-live="polite"` vs `"assertive"`

#### Focus-Management
- [ ] Dialog: Auto-Focus erstes Element bei Open, Focus-Return zum Trigger bei Close
- [ ] Menu: Focus erstes Item bei Open, Focus-Return zum Trigger bei Close
- [ ] Toast: Screen-Reader via `aria-live`, Fokus nicht stehlen
- [ ] Multi-Select: Focus Search/erstes Option bei Open, Focus-Return bei Close
- [ ] Cropper: Focus-Return nach Slider zum auslösenden Button

### SSR-Guard-Tests fehlend

- [ ] Cropper: Canvas-Erstellung nur im Browser
- [ ] Cropper Canvas: Canvas-2D-Context nur im Browser
- [ ] Menu: Overlay-Open nur im Browser
- [ ] File Upload: FileInput/DragDrop nur im Browser
- [ ] File Manager: DragDrop nur im Browser
- [ ] Data Table: Sort/Filter mit DOM nur im Browser

### Fehlende Error-Handling-Tests

- [ ] Cropper: Ungültige Bild-URL, Canvas-Context-Loss, Blob-Fehler
- [ ] File Upload: Upload-Handler-Exception, Netzwerk-Fehler, Ungültiger MIME-Type
- [ ] Data Table: Leere Daten, Ungültige Spalten-Konfiguration
- [ ] Dialog: Component nicht gefunden, Overlay-Creation-Fehler
- [ ] Menu: Leere Items-Liste, Ungültige Overlay-Position
- [ ] Multi-Select: Leere Options-Liste, Ungültige `labelKey`-Konfiguration
- [ ] Toast: Max-Toast-Limit, Ungültige Position
- [ ] I18n: Ungültige Locale, Fehlende Translation-Key

### Fehlende Edge-Case/Boundary-Tests

- [ ] Cropper: Zoom-Grenzen (0.1, 10), Rotation 360°→0°, Min-Crop-Width, riesige Bilder
- [ ] Data Table: 0/1/1000+ Zeilen, 0 Spalten, Sort mit identischen Werten
- [ ] File Upload: 0 Dateien, Max erreicht, Doppelte, 5GB+, 0-Byte-Datei
- [ ] Breadcrumb: 1 Crumb, 100+ Crumbs, Route mit `:id`
- [ ] Menu: 1 Item, 50+ Items, Nur Separators, Nur Disabled-Items
- [ ] Toast: 0 bis max, Schnelle Folge
- [ ] Multi-Select: 0/1000+ Options, Alle/Keine selected

### Fehlende Real-DOM-Interaktions-Tests

- [ ] Multi-Select: Panel öffnen, Options anklicken, Selektion verifizieren
- [ ] Dialog: Gerendertes Overlay im DOM prüfen (Header, Content, Footer, Close)
- [ ] Toast: Gerendertes Toast-Element prüfen (Message, Icon, Action, Dismiss)
- [ ] Menu: Item-Klick → Handler, Submenu-Öffnen
- [ ] File Upload: Drag-Enter/Leave States, Upload-Progress-Bar
- [ ] File Manager: Drag-Drop via Pointer-Events

---

## Phase: Release & Publish

### README & Doku

- [x] 3.1 Haupt-README (`packages/mat-extended/README.md`) — existiert, 96 Zeilen
- [x] 3.2 Secondary Entry Point READMEs — alle 9 vorhanden (cropper, data-table, dialog, file-upload, file-manager, menu, toast, multi-select, breadcrumb)
- [ ] 3.3 `CONTRIBUTING.md` erstellen (Root-Level)

### CI/CD Pipeline

- [ ] Dependabot konfigurieren (`.github/dependabot.yml`)

### Post-Release

- [ ] 7.1 GitHub Release mit Changelog an Tag `v0.1.0` erstellen
- [ ] 7.4 `@all-the.rest` npm-Org 2FA für Collaborators erzwingen
---

## DoD Compliance: Offene Punkte

### Critical
- [ ] **22 Unit-Test-Dateien fehlen** — Core (3), Cropper (3), Data Table (4), Dialog (3), File Upload (3), Menu (3), Toast (3)
- [ ] **A11y-Tests systematisch fehlend** — Keyboard-Navigation, ARIA, Focus-Management in nahezu allen Specs
- [ ] **SSR-Guard-Tests fehlend** — 6 Komponenten mit Browser-only-APIs

### High
- [ ] **Error-Handling-Tests fehlend** — 8 Features ohne Fehler-/Edge-Case-Tests
- [ ] **Real-DOM-Interaktions-Tests schwach** — 6 Features testen nur Service-Logik
- [ ] **E2E-Cross-Cutting-Lücken** — Touch-Gesten, A11y-Checks, Fragile Timeouts, Keine Page Objects, Mobile-Tests

### Medium
- [ ] **A11y-Implementierungslücken** — `<fieldset>`, `aria-live` Dialog-Result, `aria-hidden` Icons
- [ ] **CONTRIBUTING.md** fehlt
- [ ] **Dependabot** nicht konfiguriert
- [ ] **GitHub Release** mit Changelog fehlt

### Offene Fragen
- [ ] Q1: Storybook Integration?
- [ ] Q4: GitHub Discussions für Q&A aktivieren?

### Aktuelle Test-Abdeckung (Stand: Juli 2026)

| Feature | Unit-Tests | E2E-Tests | A11y | SSR | Error |
|---------|-----------|-----------|------|-----|-------|
| Cropper | 63 (2 files) | 13 | Teilweise | Nein | Teilweise |
| File Manager | 47 (2 files) | 10 | Nein | Nein | Nein |
| Breadcrumb | 33 (2 files) | 9 | Teilweise | Nein | Nein |
| File Upload | 51 (2 files) | 9 | Nein | Nein | Teilweise |
| Data Table | 26 (1 file) | 12 | Nein | Nein | Nein |
| Multi-Select | 24 (1 file) | 7 | Nein | Nein | Nein |
| Date Input | 0 | 10 | Nein | Nein | Nein |
| Menu | 14 (1 file) | 7 | Minimal | Nein | Nein |
| Toast | 18 (1 file) | 9 | Nein | Nein | Nein |
| Dialog | 16 (1 file) | 7 | Nein | Nein | Nein |

> **Gesamt**: 383 Unit-Tests in 17 Spec-Dateien, 22 Source-Dateien ohne Tests, 93 E2E-Tests in 10 Spec-Dateien (alle 10 Features abgedeckt).

---

## Phase: CI/CD Workflows optimiert

- [x] `ci.yml`: E2E-Tests aktiviert (Playwright startet Demo-Server selbst via `webServer`)
- [x] `release.yml`: E2E-Tests + Unit-Tests + Lint laufen vor npm publish, Demo-Deploy als separater Job (nur nach erfolgreichem Publish)
- [x] `deploy-demo.yml` gelöscht (ersetzt durch `release.yml` deploy-demo Job)
- [ ] Commit & Push & GitHub Actions via `gh` beobachten
