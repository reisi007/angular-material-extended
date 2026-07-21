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
- [~] 7.8 Erste Demo-Deploy auf GitHub Pages

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
- [ ] 13.17 **Tests**: Cropper-Zoom-E2E, Cropper-Aspect-Ratio-E2E, Menu-Icon-Close-E2E, Dialog-Content-E2E.
- [ ] 13.18 **Verify**: `pnpm nx build demo:production` + `pnpm nx lint` + `pnpm nx test` grün.

---

## Offene Fragen / Follow-ups

- [ ] Q1: Storybook Integration? (Aktuell: nur Demo-App)
- [ ] Q2: i18n-Strategy (`@ngx-translate/core` vs. Angular Native i18n)?
- [ ] Q3: E2E-Tests via Playwright für Demo?
- [!] **E2E blockiert**: `pnpm nx serve demo` kann Projektgraphen in CI nicht auflösen ("The projects in the following directories have no name provided" für cropper/data-table/dialog/file-manager/file-upload/menu/toast). Secondary Entry Points brauchen `project.json` mit `"name"` oder `@nx/angular/plugin`-Konfiguration in `nx.json`.
- [ ] Q4: GitHub Discussions für Q&A aktivieren?
- [ ] Q5: `@all-the.rest` npm-Org erstellen (für Secondary Entrypoint-Publishing)?

---

## Phase 16: Autocomplete (`@all-the.rest/mat-extended/autocomplete`)

- [ ] 16.1 Neue Secondary-Entrypoint `autocomplete` anlegen (`pnpm nx g @nx/angular:library-secondary-entry-point --name=autocomplete --library=packages/mat-extended --skipModule`)
- [ ] 16.2 `autocomplete/src/autocomplete.types.ts`: Types (`RuiAutocompleteOption`, `RuiAutocompleteConfig`)
- [ ] 16.3 `autocomplete/src/autocomplete.component.ts`: Standalone-Component (`<rui-autocomplete>`) wrapping `mat-autocomplete` mit Signals-API
- [ ] 16.4 `autocomplete/src/autocomplete.html`: Template mit Tailwind-Utilities, M3-Tokens
- [ ] 16.5 Tests (≥80% Coverage)
- [ ] 16.6 Demo-Seite + README
