# AGENTS.todo.md – Ausgearbeiteter Task-Plan

> Status-Symbole:
> `- [ ]` pending · `- [~]` in progress · `- [x]` done · `- [!]` blocked

---

## Phase 16: Autocomplete (`@all-the.rest/mat-extended/autocomplete`)

- [ ] 16.1 Secondary-Entrypoint `autocomplete` anlegen (`pnpm nx g @nx/angular:library-secondary-entry-point --name=autocomplete --library=packages/mat-extended --skipModule`)
- [ ] 16.2 `autocomplete/src/autocomplete.types.ts`: Types (`RuiAutocompleteOption`, `RuiAutocompleteConfig`)
- [ ] 16.3 `autocomplete/src/autocomplete.component.ts`: Standalone-Component (`<rui-autocomplete>`) wrapping `mat-autocomplete` mit Signals-API
- [ ] 16.4 `autocomplete/src/autocomplete.html`: Template mit Tailwind-Utilities, M3-Tokens
- [ ] 16.5 Tests (≥80% Coverage)
- [ ] 16.6 Demo-Seite + README

---

## Phase: Quality & A11y

### A11y (13.16)

- [ ] `<fieldset>` für Toggle-Gruppen in Demo-App (Material Catalog)
- [ ] `aria-live` auf Dialog-Result (Demo + `RuiDialogService`)
- [ ] `aria-hidden` auf dekorative Icons (Menu Panel, Data Table)

### E2E-Tests

- [!] **E2E blockiert**: `pnpm nx serve demo` kann Projektgraphen in CI nicht auflösen ("The projects in the following directories have no name provided" für cropper/data-table/dialog/file-manager/file-upload/menu/toast). Secondary Entry Points brauchen `project.json` mit `"name"` oder `@nx/angular/plugin`-Konfiguration in `nx.json`.

#### Fehlende E2E-Test-Specs (4 Features komplett ohne E2E)

- [ ] Breadcrumb: Routing-Navigation, Crumb-Klick → URL-Wechsel, Auto-Mode vs. Manual, Dynamische Routes
- [ ] File Manager: Datei-Liste-Rendering, Rename-Workflow (Start → Edit → Confirm), Drag-Drop-Reorder, Clear-All
- [ ] Multi-Select: Panel öffnen, Option selektieren, Multi-Selektion, Filter/Search, Sortable-Mode, Forms-Integration
- [ ] Date Input: Mask-Eingabe (verschiedene Formate), Cursor-Position, MatDatepicker-Integration, Form-Validation

#### Fehlende Szenarien in bestehenden E2E-Specs (51 Tests insgesamt)

**Cropper** (12 Tests — fehlend):
- [ ] Keyboard-Focus-Trap (Tab-Zyklus innerhalb Cropper)
- [ ] Touch-Drag zum Croppen (Mobile-spezifisch, `page.tap()`)
- [ ] Datei-Upload statt URL-Laden (Browse-Button → Datei-Auswahl)
- [ ] Aspect-Ratio-Wechsel nach initialem Crop (Reset-Verhalten)
- [ ] Bild-Lade-Fehler mit echtem 404-URL

**Data Table** (11 Tests — fehlend):
- [ ] Keyboard-Navigation: Sort via Enter/Space, Checkbox via Space
- [ ] Pagination-Interaktion: Next/Prev Page, Page-Size-Change
- [ ] Filter mit 0 Ergebnissen → Empty-State-Anzeige
- [ ] Expandable Row via Keyboard (Enter zum Toggle)
- [ ] `selectionChange` Event-Verifikation

**Dialog** (6 Tests — fehlend):
- [ ] Backdrop-Click zum Dismiss (nur bei `disableClose: false`)
- [ ] Focus-Trap: Tab-Zyklus bleibt innerhalb Dialog
- [ ] `role="dialog"` und `aria-modal` Attribut-Präsenz
- [ ] Body-Scroll-Lock während Dialog offen
- [ ] Dialog mit langem Content → Scroll-Verhalten

**File Upload** (8 Tests — fehlend):
- [ ] Drag-and-Drop-Simulation (tatsächliche Datei-Events)
- [ ] Datei-Type-Validierung → Fehlermeldung-Anzeige
- [ ] Datei-Size-Validierung → Fehlermeldung-Anzeige
- [ ] Upload-Abbruch/Cancel
- [ ] Upload-Fehler (simulierter Netzwerk-Fehler)
- [ ] Einzelne Datei entfernen (nicht nur "Clear All")

**Menu** (6 Tests — fehlend):
- [ ] Keyboard-Navigation: Arrow-Down/Up durch Items, Enter zum Select
- [ ] Disabled-Item wird per Keyboard übersprungen
- [ ] Submenu öffnen/schließen (falls implementiert)
- [ ] Menu-Item-Klick → Aktion verifizieren (Navigation/Handler)

**Toast** (8 Tests — fehlend):
- [ ] Individueller Dismiss via Close-Button pro Toast
- [ ] Mehrere Toasts gleichzeitig → Stacking-Verhalten
- [ ] Verschiedene Positionen testen (top-end, bottom-start, bottom-end, center)
- [ ] Action-Button-Klick → Callback-Verifikation
- [ ] Pause-on-hover (falls implementiert)

#### Cross-Cutting E2E-Lücken

- [ ] **Touch-Gesten**: Kein Spec nutzt `page.tap()` oder Touch-Events — Mobile-Läufe nutzen Click statt Touch
- [ ] **A11y in E2E**: Nur 1 `aria-expanded`-Check in Menu-Spec — keine weiteren ARIA/Keyboard-Tests in E2E
- [ ] **Fragile Timeouts**: Hardcoded `waitForTimeout(500/2000/3000/5000/10000)` — sollten durch `waitForFunction`/`toHaveText`/`toBeVisible` mit Timeout ersetzt werden
- [ ] **Keine Page Object Models**: Jeder Spec ist komplett selbstständig — keine wiederverwendbaren Selektoren/Helfer
- [ ] **Kein Test für Mobile-spezifisches Verhalten**: Viewport-Übergänge, Touch-Keyboard, Orientation-Change

### Fehlende Unit-Tests (Komponenten/Directives/Services — 22 Dateien ohne `.spec.ts`)

> **Library-Kontext**: Als publizierte Library ist hohe Unit-Test-Abdeckung kritisch. Jede öffentliche Komponente, Directive, Service und Utility-Funktion MUSS getestet sein.

#### Core / Common (3 Dateien)

- [ ] `packages/mat-extended/src/common/platform.ts` — SSR-Guard-Tests (`ensureBrowser()`, `isPlatformBrowser`-Pfade, Server- vs. Browser-Umgebung)
- [ ] `packages/mat-extended/src/common/a11y.ts` — A11y-Helper-Tests (FocusTrap-Wrapper, LiveAnnouncer-Integration, Keyboard-Helpers)
- [ ] `packages/mat-extended/src/common/date-input-mask.directive.ts` — Directive-Tests (Mask-Generierung für diverse Formate, Cursor-Position, Trennzeichen-Handling, Sonderzeichen, `writeValue`/`onChange` CVA-Integration)

#### Cropper (3 Dateien)

- [ ] `packages/mat-extended/cropper/src/cropper-interaction.ts` — Pointer-/Touch-Event-Handling, Drag-Resize, Pinch-Zoom, Keyboard-Crop-Verschiebung, Constraint-Clamping
- [ ] `packages/mat-extended/cropper/src/cropper-toolbar.component.ts` — Toolbar-Rendering, Button-States (zoom in/out disabled bei Grenzen), Aspect-Ratio-Select, Rotation-Slider
- [ ] `packages/mat-extended/cropper/src/cropper-grid-overlay.component.ts` — Grid-Rendering, sichtbar/unsichtbar je nach Toggle, CSS-Positionierung

#### Data Table (4 Dateien)

- [ ] `packages/mat-extended/data-table/src/data-table-empty-state.component.ts` — Empty-State-Rendering, `emptyMessage`-Signal, Icon/Text-Anzeige
- [ ] `packages/mat-extended/data-table/src/data-table-filter.component.ts` — Filter-Input-Rendering, Debounce-Verhalten, `filterChange`-Emission, leeres Ergebnis
- [ ] `packages/mat-extended/data-table/src/data-table-loading.component.ts` — Spinner-Rendering, Sichtbarkeit je nach `loading`-State
- [ ] `packages/mat-extended/data-table/src/data-table-paginator.component.ts` — Paginator-Rendering, Page-Size-Wechsel, Next/Prev, Page-Jump, `pageChange`-Emission

#### Dialog (3 Dateien)

- [ ] `packages/mat-extended/dialog/src/dialog.component.ts` — Dialog-Rendering, `role="dialog"`, `aria-modal`, `aria-labelledby`, Content-Projection, Close-Button, Backdrop-Click
- [ ] `packages/mat-extended/dialog/src/dialog-header.component.ts` — Header-Rendering, Titel-Text, Close-Button, `aria-label`
- [ ] `packages/mat-extended/dialog/src/dialog-footer.component.ts` — Footer-Rendering, Action-Buttons, Content-Projection

#### File Upload (3 Dateien)

- [ ] `packages/mat-extended/file-upload/src/file-upload-dropzone.component.ts` — Dropzone-Rendering, Drag-Enter/Leave/Over-States, `drop`-Event-Handling, Text-Anzeige
- [ ] `packages/mat-extended/file-upload/src/file-upload-progress.component.ts` — Progress-Bar-Rendering, Prozent-Text, Status-Indikator (uploading/done/error)
- [ ] `packages/mat-extended/file-upload/src/file-upload-utils.ts` — Utility-Funktionen (File-Validation, Size-Formatting, Unique-ID-Generierung, MIME-Type-Checking)

#### Menu (3 Dateien)

- [ ] `packages/mat-extended/menu/src/menu-button.component.ts` — Button-Rendering, `aria-haspopup`, `aria-expanded`, Icon/Text-Anzeige, Disabled-State
- [ ] `packages/mat-extended/menu/src/menu-panel.component.ts` — Panel-Rendering, `role="menu"`, Items-Liste, Separator, Disabled-Items, Submenu-Positionierung
- [ ] `packages/mat-extended/menu/src/menu-trigger.directive.ts` — Trigger-Verhalten, Overlay-Open/Close, Keyboard-Trigger (Enter/Space), Click-Outside-Close

#### Toast (3 Dateien)

- [ ] `packages/mat-extended/toast/src/toast.component.ts` — Toast-Rendering, `role="alert"`/`role="status"`, `aria-live`, Icon/Text/Action-Button, Auto-Dismiss-Timer
- [ ] `packages/mat-extended/toast/src/toast-action.component.ts` — Action-Button-Rendering, `onClick`-Emission, Keyboard-Activation (Enter/Space)
- [ ] `packages/mat-extended/toast/src/toast-icon.component.ts` — Icon-Rendering, Typ-basierte Icon-Auswahl (success/error/info/warning), Custom-Icon-Support

### Fehlende A11y-Tests in bestehenden Specs

> **Kritisch für Library-Qualität**: A11y-Tests sind in `AGENTS.md` §7 DoD verpflichtend. Derzeit fehlen sie systematisch.

#### Keyboard-Navigation (in allen interaktiven Komponenten fehlend)

- [ ] Cropper: Tab-Zyklus durch Toolbar-Buttons, Enter/Space für Zoom/Rotation, Arrow-Keys für Crop-Verschiebung (bereits Unit, fehlt in E2E)
- [ ] Data Table: Arrow-Keys für Sort-Header, Space/Enter für Checkbox-Auswahl, Tab durch Zeilen
- [ ] Dialog: Focus-Trap innerhalb des Dialogs, Tab-Zyklus, Focus-Return bei Schließung
- [ ] File Upload: Tab zum Dropzone/Browse-Button, Enter/Space für Datei-Auswahl
- [ ] Menu: Arrow-Down/Up für Item-Navigation, Arrow-Right für Submenu, Enter/Space für Selection
- [ ] Multi-Select: Arrow-Down/Up für Option-Navigation, Enter/Space für Toggle, Escape zum Schließen
- [ ] Toast: Escape zum Einzel-Dismiss, Tab zum Action-Button

#### ARIA-Attribute (in fast allen Specs fehlend)

- [ ] Breadcrumb: `aria-label` Override-Test, `aria-current="page"` Dynamik (partiell getestet)
- [ ] Data Table: `aria-sort` auf Sort-Headern, `aria-label` für Checkboxen, `aria-selected` für Zeilen
- [ ] Dialog: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` auf Trigger + Dialog, `aria-describedby`
- [ ] File Upload: `role="region"`, `aria-live` für Validierungsfehler, `aria-label` für Dropzone
- [ ] Menu: `role="menu"`, `role="menuitem"`, `aria-expanded` auf Trigger, `aria-disabled` für disabled Items
- [ ] Multi-Select: `aria-label`/`aria-describedby`, `aria-multiselectable`, `aria-expanded` bei Panel-Open
- [ ] Toast: `role="alert"` (error/warning) vs. `role="status"` (info/success), `aria-live="polite"` vs. `"assertive"`

#### Focus-Management (fast komplett fehlend)

- [ ] Dialog: Auto-Focus auf erstes fokussierbares Element bei Open, Focus-Return zum Trigger bei Close
- [ ] Menu: Focus beim Open auf erstes Item, Focus-Return zum Trigger bei Close
- [ ] Toast: Kein Focus-Wechsel (Screen-Reader via `aria-live`), aber Fokus nicht stehlen
- [ ] Multi-Select: Focus beim Panel-Open auf Search/erstes Option, Focus-Return bei Close
- [ ] Cropper: Focus-Return nach Slider-Interaction zum auslösenden Button

### Fehlende SSR-Guard-Tests

> Komponenten mit Browser-only-APIs (Canvas, Overlay, DragDrop, FileInput) müssen `ensureBrowser()`/`isPlatformBrowser` testen.

- [ ] Cropper (`cropper.ts`): Canvas-Erstellung nur im Browser
- [ ] Cropper Canvas (`cropper-canvas.ts`): Canvas-2D-Context nur im Browser
- [ ] Menu (`menu.service.ts`): Overlay-Open nur im Browser (Teil-Test existiert)
- [ ] File Upload (`file-upload.ts`): FileInput/DragDrop nur im Browser
- [ ] File Manager (`file-manager.ts`): DragDrop nur im Browser
- [ ] Data Table (`data-table.component.ts`): Sort/Filter mit DOM nur im Browser

### Fehlende Error-Handling-Tests

- [ ] Cropper: Ungültige Bild-URL, Canvas-Context-Loss, Blob-Erzeugung-Fehler
- [ ] File Upload: Upload-Handler-Exception, Netzwerk-Fehler, Ungültiger MIME-Type
- [ ] Data Table: Leere Daten, Ungültige Spalten-Konfiguration
- [ ] Dialog: Component-Nicht-gefunden, Overlay-Creation-Fehler
- [ ] Menu: Leere Items-Liste, Ungültige Overlay-Position
- [ ] Multi-Select: Leere Options-Liste, Ungültige `labelKey`-Konfiguration
- [ ] Toast: Max-Toast-Limit erreicht, Ungültige Position
- [ ] I18n Service: Ungültige Locale, Fehlende Translation-Key

### Fehlende Edge-Case/Boundary-Tests

- [ ] Cropper: Zoom-Grenzen (0.1, 10), Rotation wraps (360°→0°), Min-Crop-Width, Sehr große/bildschirmfüllende Bilder
- [ ] Data Table: 0 Zeilen, 1 Zeile, 1000+ Zeilen, 0 Spalten, Sort mit identischen Werten
- [ ] File Upload: 0 Dateien, Max-Dateien erreicht, Doppelte Dateien, Sehr große Dateien (5GB+), Leer-Datei (0 Bytes)
- [ ] Breadcrumb: 1 Crumb (kein Separator), 100+ Crumbs (Truncation), Route mit dynamischen Parametern (`:id`)
- [ ] Menu: 1 Item, 50+ Items (Scrolling), Nur Separators, Disabled-Only Items
- [ ] Toast: 0 bis max toasts, Schnelle aufeinanderfolgende Toast-Ausgaben
- [ ] Multi-Select: 0 Options, 1000+ Options (Performance), Alle selected, Keine selected

### Fehlende Real-DOM-Interaktions-Tests

> Bestehende Specs testen oft Klassen-Logik direkt statt echte DOM-Interaktion. Für eine Library sind beide nötig.

- [ ] Multi-Select: Panel öffnen, Options anklicken, Selektion verifizieren (fehlt komplett)
- [ ] Dialog: Gerendertes Overlay im DOM prüfen (Header, Content, Footer, Close-Button)
- [ ] Toast: Gerendertes Toast-Element prüfen (Message, Icon, Action-Button, Dismiss-Button)
- [ ] Menu: Item-Klick → Handler-Aufruf verifizieren, Submenu-Öffnen
- [ ] File Upload: Drag-Enter/Leave Visuelle States, Upload-Progress-Bar-Update
- [ ] File Manager: Drag-Drop-Interaktion (tatsächliche Pointer-Events)

---

## Phase: Release & Publish (npm)

> **Ziel**: `@all-the.rest/mat-extended` (+ alle Secondary Entry Points) auf npm veröffentlichen.
> **Registry**: npm (nicht GitHub Packages).
> **Voraussetzung**: Alle Tasks in dieser Phase MÜSSEN sequenziell abgearbeitet werden.

### Schritt 1: npm-Org & Account Setup (MANUELL — kein Agent)

> Diese Schritte können NICHT automatisiert werden — müssen vom Repo-Owner gemacht werden.

- [x] **1.1** npm-Account unter https://www.npmjs.com registrieren ✅
- [x] **1.2** npm-Org `@all-the.rest` unter https://www.npmjs.com/org/create erstellen ✅
- [x] **1.3** Two-Factor-Auth (2FA) auf npm-Account aktivieren ✅
- [x] **1.4** Einmaliger Token/`npm login` für ersten Publish ✅
- [x] **1.5** GitHub Secret `NPM_TOKEN` unter Settings → Secrets → Actions hinzufügen ✅

### Schritt 1b: Trusted Publishing (OIDC) — nach erstem Publish

> Nach dem ersten erfolgreichen Publish wird der Token entfernt und durch Trusted Publishing ersetzt.
> **Vorteile**: Kein Token nötig, kein Rotation, kein Leak-Risiko, Provenance Badge auf npm.

- [ ] **1.6** Auf npmjs.com → `@all-the.rest/mat-extended` → **"Settings"** → **"Trusted Publisher"** Sektion
- [ ] **1.7** Trusted Publisher konfigurieren:
  - **Provider**: GitHub Actions
  - **Owner**: `reisi007` (GitHub Username)
  - **Repository**: `angular-material-extended`
  - **Workflow**: `release.yml`
- [ ] **1.8** **npm CLI ≥11.5.1** + **Node ≥22.14** voraussetzen (bereits erfüllt via `package.json` engines)
- [ ] **1.9** `release.yml` um `id-token: write` Permission erweitern (BEREITS ERLEDIGT ✅)
- [ ] **1.10** **Nach erstem Publish**: `NPM_TOKEN` Secret aus GitHub löschen + `NODE_AUTH_TOKEN` Env aus `release.yml` entfernen
- [ ] **1.11** `repository.url` in `packages/mat-extended/package.json` auf HTTPS-Repo-URL setzen (Voraussetzung für Provenance)

### Schritt 2: Package-Metadaten & Konfiguration

- [x] **2.1** `packages/mat-extended/package.json` um Metadaten erweitern ✅
- [x] **2.2** Secondary Entry Point `package.json`-Files geprüft (ng-packagr generiert automatisch) ✅
- [x] **2.3** `publishConfig` hinzugefügt ✅
- [x] **2.4** `.npmignore` erstellt ✅

### Schritt 3: README & Doku

- [ ] **3.1** `packages/mat-extended/README.md` — Haupt-README für npm-Listing:
  - Projektbeschreibung
  - Installationsanleitung (`npm install @all-the.rest/mat-extended`)
  - Secondary Entrypoints Auflistung (wie man `@all-the.rest/mat-extended/cropper` importiert)
  - Peer-Dependencies
  - Mini-Usage-Beispiel pro Feature
  - Link zur Demo-App
  - Link zum GitHub-Repo
  - Unofficial-Disclaimer (gemäß AGENTS.md §2)
- [ ] **3.2** Secondary Entry Point READMEs (`packages/mat-extended/cropper/README.md` etc.):
  - Kurzbeschreibung
  - Import-Beispiel
  - API-Referenz (Inputs/Outputs/Signals)
- [ ] **3.3** `CONTRIBUTING.md` erstellen (Root-Level)
  - Dev-Setup (`pnpm install`)
  - Build (`pnpm nx build mat-extended`)
  - Test (`pnpm nx test mat-extended`)
  - Local Publish Test via Verdaccio

### Schritt 4: Local Publish Test (Verdaccio)

> Bevor der erste echte npm-Publish gemacht wird, MUSS ein lokaler Test mit Verdaccio laufen.

- [ ] **4.1** Verdaccio starten: `npx verdaccio` (Port 4873)
- [ ] **4.2** npm-Registry auf Verdaccio setzen: `npm set registry http://localhost:4873/`
- [ ] **4.3** User anlegen: `npm adduser --registry http://localhost:4873/`
- [ ] **4.4** Build ausführen: `pnpm nx build mat-extended`
- [ ] **4.5** Publish testen: `pnpm nx nx-release-publish mat-extended` (mit angepasster Registry)
- [ ] **4.6** In separatem Test-Projekt installieren: `npm install @all-the.rest/mat-extended --registry http://localhost:4873/`
- [ ] **4.7** Import-Test: Sicherstellen dass `import { RuiCropper } from '@all-the.rest/mat-extended/cropper'` funktioniert
- [ ] **4.8** npm-Registry zurücksetzen: `npm set registry https://registry.npmjs.org/`

### Schritt 5: CI/CD Pipeline finalisieren

> Die `release.yml` existiert bereits — hier geht es um Finalisierung.

- [x] **5.1** `release.yml` geprüft:
  - [x] Build + Test + Lint laufen vor dem Publish
  - [x] `nx-release-publish` nutzt korrekten `packageRoot`
  - [x] `id-token: write` Permission für Trusted Publishing ✅
  - [ ] `NODE_AUTH_TOKEN` wird noch benötigt (bis Trusted Publisher aktiviert)
  - [ ] Verdaccio-Build-Dependencies (libcairo2-dev etc.) sind installiert
- [ ] **5.2** `release.yml` um manuellen Trigger erweitern (`workflow_dispatch` mit Version-Input)
- [ ] **5.3** **ALTERNATIVE**: Nx Release für automatisches Versioning nutzen:
  - `nx release version` → bumped Version in `package.json` + erstellt Git-Tag
  - `nx release publish` → published auf npm
  - Workflow: `nx release 1.0.0 --dry-run` → testen → `nx release 1.0.0`
- [ ] **5.4** Dependabot für npm-Dependencies konfigurieren (`.github/dependabot.yml`)

### Schritt 6: Erstes Release `v0.1.0`

> Erst wenn ALLE vorherigen Steps abgeschlossen sind.

- [x] **6.1** DoD-Compliance geprüft (Build + Lint grün) ✅
- [x] **6.2** Version in `packages/mat-extended/package.json` auf `0.1.0` gesetzt ✅
- [ ] **6.3** Git-Tag erstellen: `git tag v0.1.0`
- [ ] **6.4** Tag pushen: `git push origin v0.1.0`
- [ ] **6.5** GitHub Action `release.yml` beobachten → muss grün durchlaufen
- [x] **6.6** npm-Listing verifizieren: https://www.npmjs.com/package/@all-the.rest/mat-extended ✅
- [ ] **6.7** Install-Test in frischem Projekt

### Schritt 7: Post-Release

- [ ] **7.1** GitHub Release mit Changelog an Tag erstellen
- [ ] **7.2** README Badges hinzufügen (npm version, license, build status)
- [ ] **7.3** Demo-App auf GitHub Pages deployen (via `deploy-demo.yml`)
- [ ] **7.4** `@all-the.rest` npm-Org-Settings: Second Factor Auth für Collaborators erzwingen

### Offene Fragen / Follow-ups

- [ ] Q1: Storybook Integration? (Aktuell: nur Demo-App)
- [ ] Q2: i18n-Strategy (`@ngx-translate/core` vs. Angular Native i18n)?
- [ ] Q4: GitHub Discussions für Q&A aktivieren?
- [ ] Q5: Soll `nx release` für automatisches Versioning + Changelog-Generierung genutzt werden? (Empfohlen)

---

## DoD Compliance Report

### Cross-Cutting Issues

| Issue | Auswirkung | Details |
|-------|-----------|---------|
| **E2E-Tests fehlen komplett** | 4 Features (Breadcrumb, File Manager, Multi-Select, Date Input) — 6 Features haben E2E-Specs aber mit großen Lücken |
| **22 Unit-Test-Dateien fehlen** | Core (3), Cropper (3), Data Table (4), Dialog (3), File Upload (3), Menu (3), Toast (3) |
| **A11y-Tests systematisch fehlend** | Keyboard-Navigation, ARIA-Attribute, Focus-Management in nahezu allen Specs abwesend |
| **SSR-Guard-Tests fehlend** | 6 Komponenten mit Browser-only-APIs haben keine `ensureBrowser()`-Tests |
| **Error-Handling-Tests fehlend** | 8 Features ohne Fehler-/Edge-Case-Tests |
| **Real-DOM-Interaktions-Tests schwach** | Multi-Select, Dialog, Toast testen Service-Logik aber nicht gerenderten DOM |

### Feature Ranking (inkl. Test-Abdeckung)

| Rank | Feature | Unit-Tests | Fehlende Specs | A11y | E2E | SSR | Error | Score |
|------|---------|-----------|----------------|------|-----|-----|-------|-------|
| 1 | Cropper | 63 Tests (2 files) | 3 (interaction, toolbar, grid) | Teilweise | Ja (12) | Nein | Teilweise | 5/8 |
| 2 | File Manager | 47 Tests (2 files) | 0 | Nein | **Nein** | Nein | Nein | 5/8 |
| 3 | Breadcrumb | 33 Tests (2 files) | 0 | Teilweise | **Nein** | Nein | Nein | 5/8 |
| 4 | File Upload | 51 Tests (2 files) | 3 (dropzone, progress, utils) | Nein | Ja (8) | Nein | Teilweise | 4.5/8 |
| 5 | Data Table | 26 Tests (1 file) | 4 (empty-state, filter, loading, paginator) | Nein | Ja (11) | Nein | Nein | 3.5/8 |
| 6 | Multi-Select | 24 Tests (1 file) | 0 | Nein | **Nein** | Nein | Nein | 4/8 |
| 7 | Date Input | 0 Tests | 1 (directive) | Nein | **Nein** | Nein | Nein | 2/8 |
| 8 | Menu | 14 Tests (1 file) | 3 (button, panel, trigger) | Min. | Ja (6) | Nein | Nein | 3/8 |
| 9 | Toast | 18 Tests (1 file) | 3 (component, action, icon) | Nein | Ja (8) | Nein | Nein | 3/8 |
| 10 | Dialog | 16 Tests (1 file) | 3 (component, header, footer) | Nein | Ja (6) | Nein | Nein | 2.5/8 |

> **Gesamt**: 305 Unit-Tests in 16 Spec-Dateien. 22 Source-Dateien komplett ohne Tests. 51 E2E-Tests (6 Spec-Dateien) mit umfangreichen A11y-/Keyboard-/Error-Lücken.
