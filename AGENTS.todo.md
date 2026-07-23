# AGENTS.todo.md – Ausgearbeiteter Task-Plan

> Status-Symbole:
> `- [ ]` pending · `- [~]` in progress · `- [x]` done · `- [!]` blocked

---

## Phase 3 – Cropper

- [x] Canvas-Engine + Component + Interaction
- [x] Unit-Tests (cropper.spec.ts, cropper-canvas.spec.ts, cropper-interaction.spec.ts, cropper-grid-overlay.component.spec.ts, cropper-toolbar.component.spec.ts)
- [x] SCSS Migration (cropper.component.scss, cropper-grid-overlay.component.scss, cropper-toolbar.component.scss)
- [x] Demo-Seite
- [x] E2E-Tests (cropper.spec.ts)

## Phase 4 – File Upload

- [x] Component + Drag/Drop + Validation + Upload
- [x] Unit-Tests (file-upload.spec.ts, file-upload-item.component.spec.ts, file-upload-dropzone.component.spec.ts, file-upload-progress.component.spec.ts, file-upload-utils.spec.ts)
- [x] SCSS Migration (file-upload-dropzone.component.scss, file-upload-item.component.scss, file-upload-progress.component.scss, file-upload.component.scss)
- [x] Demo-Seite
- [x] E2E-Tests (file-upload.spec.ts)

## Phase 5 – Toast

- [x] Service + Overlay
- [x] Unit-Tests (toast.service.spec.ts, toast.component.spec.ts, toast-action.component.spec.ts, toast-icon.component.spec.ts)
- [x] SCSS Migration (toast.component.scss, toast-action.component.scss, toast-icon.component.scss)
- [x] Demo-Seite
- [x] E2E-Tests (toast.spec.ts)

## Phase 6 – Data Table

- [x] Component + Sort + Paginator + Filter + Selection
- [x] Unit-Tests (data-table.spec.ts, data-table-empty-state.component.spec.ts, data-table-filter.component.spec.ts, data-table-loading.component.spec.ts, data-table-paginator.component.spec.ts)
- [x] SCSS Migration (data-table.component.scss, data-table-empty-state.component.scss, data-table-filter.component.scss, data-table-loading.component.scss, data-table-paginator.component.scss)
- [x] Demo-Seite
- [x] E2E-Tests (data-table.spec.ts)

## Phase 7 – Autocomplete (NEU)

- [x] Component (signal API, reactive forms, template-driven forms)
- [x] Secondary Entry Point (`packages/mat-extended/autocomplete/`)
- [x] tsconfig.base.json Path-Eintrag ergänzt
- [x] Unit-Tests (autocomplete.spec.ts)
- [x] SCSS (autocomplete.component.scss)
- [x] Demo-Seite (apps/demo/src/app/pages/autocomplete-demo/)
- [x] E2E-Tests (apps/demo-e2e/src/specs/autocomplete.spec.ts)

## Bug-Fixes (diese Session)

- [x] `aria-expanded` hardcoded auf `true` → dynamisch via `panelOpen` Signal
- [x] `aria-controls` statische ID → unique pro Instanz via `DestroyRef` + Counter
- [x] `mat-autocomplete` Panel öffnet sich nicht → `[matAutocomplete]` Binding + `#autocompletePanel` Template-Ref ergänzt
- [x] `filterFn` in `RuiAutocompleteConfig` required → optional gemacht
- [x] `formatSize` Utility gibt "Unlimited" für 0-Byte-Dateien → "0 B" (Dropzone handled maxSize=0 separat)
- [x] `formatSize` in `file-upload.ts` dupliziert → durch Import aus `file-upload-utils.ts` ersetzt

## E2E-Test-Stabilisierung (diese Session)

- [x] autocomplete: `toContainText` auf mat-option-Collection → `getByRole('option')` (strict mode mobile fix)
- [x] data-table: `tr[cursor-pointer]` existiert nicht → `tr.rui-data-table__row--expandable`
- [x] cropper: zoom test flaky → `waitForTimeout(300)` nach Button-Click
- [x] file-upload: `getByText('Multiple files')` matcht Code-Snippet → `mat-slide-toggle` mit `hasText`
- [x] menu: `nth(3)` fragiles Indexing → Section-basierte Locators (`#menu-icons`, `#menu-divider`)

## CI/Infra

- [x] `.gitignore` um `.opencode`, `.agents`, `.codex`, `.claude` erweitert
- [x] AI-Tool-Ordner aus Git-Tracking entfernt (`git rm --cached`)
- [x] `dependabot.yml` gelöscht
- [x] AGENTS.md: E2E-Vor-Commit-Regel + AI-Tool-Ordner-Regel ergänzt

## Offene Punkte

- [ ] CI-Check: 208/208 E2E grün auf GitHub Actions verifizieren (letzter Push: `4453807`)
- [ ] Budget-Warnings im Demo-Build beheben (bundle initial 558.80 kB > 500 kB, file-upload-item.component.scss 4.77 kB > 4 kB, file-manager-item.component.scss 4.16 kB > 4 kB)
