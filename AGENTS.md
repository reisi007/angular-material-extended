# AGENTS.md – Regeln für "Angular Material Extended"

> Verbindliches Regelwerk für ALLE Agents (KI & Humans), die an diesem Repository arbeiten. MUSS vor jeder Arbeit gelesen werden.

## 0. TL;DR

- Plan in [`AGENTS.todo.md`](./AGENTS.todo.md) FÜHREN – nichts ohne Task-Eintrag bauen.
- Angular v22, **Standalone + Signals + Zoneless**.
- **pnpm** ist der einzige Package Manager.
- **KEIN Inline-CSS** – immer externe `.scss` via `styleUrl`.
- Selector-Prefix: **`rui-`** (für immer).
- Keine Commits/Pushes ohne explizite Anweisung.

---

## 1. Plan-Pflicht

- BEVOR eine neue Phase, Komponente oder Teilaufgabe begonnen wird, MUSS der entsprechende Task in [`AGENTS.todo.md`](./AGENTS.todo.md) als Checkbox (`- [ ]`) existieren.
- Vor Beginn: auf `- [~]` (in progress) setzen.
- Nach Fertigstellung: auf `- [x]` (done) setzen.
- Blockiert: `- [!]` mit Begründung.
- Neue Erkenntnisse/Follow-ups werden als Sub-Tasks ergänzt, nicht "im Kopf" behalten.

## 2. Projekt-Identität

| | |
|---|---|
| Display-Name | Angular Material Extended |
| npm-Package | `@all-the.rest/mat-extended` (+ Secondary Entrypoints) |
| Selector-Prefix | `rui-` (z.B. `<rui-cropper>`) |
| GitHub Repo | `reisi007/angular-material-extended` |
| Lizenz | MIT |
| Package Manager | **pnpm** (ausschließlich) |

> **Unofficial-Disclaimer**: Dieses Projekt ist eine Community-Erweiterung und NICHT offiziell mit Google oder dem Angular-Team affiliiert. Die Disclaim-Formulierung MUSS in jeder README (Top-Level + Secondary Entrypoints) erhalten bleiben. "Angular" und "Material" sind Marken von Google LLC.

## 3. Tooling & Versions

| | |
|---|---|
| Node | `>=22` (lokal v26) |
| Package Manager | **pnpm** (`engines.pnpm` in `package.json` setzen) |
| Angular | v22 (oder neuestes stable) |
| Angular Material + CDK | v22 (M3 Theming) |
| Monorepo | Nx |
| Test-Runner | Vitest (`vitest-angular` executor) |

- **KEINE** `npm install` / `yarn`-Befehle – IMMER `pnpm install` / `pnpm add`.
- Lockfile `pnpm-lock.yaml` MUSS committed werden.
- Beim Initialisieren des Nx-Workspaces: `--pnpm` Flag setzen.

## 4. Code-Style (Angular v22)

- **STANDALONE COMPONENTS ONLY** – keine NgModules für Komponenten/Directives/Pipes.
- **Signals first**: `input()`, `output()`, `model()`, `computed()`, `signal()`, `effect()`.
- **KEINE** Decorator-Inputs (`@Input()` / `@Output()`).
- **KEINE** `EventEmitter` für neue APIs – `output()` nutzen.
- **Control Flow**: `@if`, `@for`, `@switch` im Template – KEINE structural directives.
- **Zoneless**: KEINE `setTimeout`/`zone.run`-Hacks für Change Detection. Signales handles everything.
- **strict TS**: `strict: true`, `noUncheckedIndexedAccess` bevorzugt, keine `any` ohne Kommentar-Begründung.
- **Change Detection**: Default-Strategie (v22 optimiert per-Component via Signals).

## 5. Styling-Regeln (NEU)

- **KEIN Inline-CSS**: Weder `styles: [...]` Strings noch inline `<style>` in Templates.
- **IMMER** externe Stylesheets: `styleUrl: './foo.scss'` (Singluar, modern) oder `styleUrls: [...]`.
- **Dateiformat**: `.scss` (Sass).
- **Tailwind** ist für **Layout-Utilities** im Workspace/Demo erlaubt:
  - Setup in Phase 1 (workspace-weites Tailwind-Config).
  - Tailwind-Klassen in Templates sind OK für Layout (flex, grid, spacing, sizing).
  - **NICHT** für Branding/Farben nutzen – das macht das M3-Theming.
- **Komponenten-spezifisches Styling** (Visuelle Identität) gehört in die `.scss`-Datei via M3-Tokens.
- **Library-Build**: Tailwind wird **NICHT** als runtime dependency der publishten Library gebündelt. Es ist reine Workspace-DevDependency.

## 6. Forms-Integration

Jede form-fähige Komponente MUSS beides unterstützen:

1. **Reactive Forms** via `ControlValueAccessor` (Basis-Helper in `libs/mat-extended/src/lib/common/control-value-accessor.ts`).
2. **Signal-API** via `model()` parallel.

Beispiel-Pattern:
```ts
export class RuiCropper extends RuiValueAccessor<string> implements ControlValueAccessor {
  readonly croppedImage = model<string>(); // parallele Signal-API
}
```

## 7. Theming

- **NIEMALS** hardcoded Farben im TS oder Template.
- Alle Farben über M3-Tokens (`--mat-sys-*`) oder eigene Custom-Tokens aus `libs/mat-extended/src/lib/theme/_tokens.scss`.
- Custom-Farb-Erweiterungen erfolgen über den Token-Layer, NICHT durch Override von Material-Internals.
- Pro Komponente: Sass-Partial `_theming.scss` für komponentenspezifische Mixins.

## 8. SSR (Server-Side Rendering)

- Voll supported – Demo-App und Library müssen SSR-kompatibel sein.
- Browser-APIs (`canvas`, `window`, `document`, `localStorage`, `ResizeObserver`, `IntersectionObserver` etc.) NUR via Guard aus `libs/mat-extended/src/lib/common/platform.ts` (`ensureBrowser()` / `isPlatformBrowser`).
- Overlay/DOM-Manipulation erst nach SSR-Check.

## 9. Tests

- **Test-Runner**: Vitest (`vitest-angular` executor via `@angular/build:unit-test`).
- JEDE öffentliche Komponente/Methode MUSS Unit-Tests haben (`.spec.ts` neben Source-Datei).
- A11y-Tests (Keyboard-Navigation, ARIA, Focus-Management) sind **verpflichtend** für interaktive Komponenten.
- Mindestziel: 80% Coverage für neue Dateien.
- VOR jedem Commit: `pnpm nx test <project>` MUSS grün sein.

## 10. Accessibility (A11y)

- Alle interaktiven Elemente müssen per Tastatur bedienbar sein.
- ARIA-Rollen und -Labels wo semantisch sinnvoll (nicht blind drauflos).
- Focus-Management bei Overlays/Dialogs (CDK `FocusTrap` / `LiveAnnouncer`).
- Kontrast: mindestens WCAG AA.
- Bei Dialogen/Toasts: `aria-live` für dynamische Content-Updates.

## 11. Commits & Branches

- **Conventional Commits** verpflichtend:
  - `feat:` neue Funktion – Scoped: `feat(cropper): add rotation slider`
  - `fix:` Bugfix
  - `docs:` Doku (inkl. `AGENTS.md` / `AGENTS.todo.md` Updates)
  - `refactor:` Refactoring ohne Verhaltensänderung
  - `test:` Tests
  - `chore:` Build/CI/Tooling
  - `perf:` Performance
  - `BREAKING CHANGE:` im Footer bei Major-Breaking.
- Branch-Naming: `feat/<topic>`, `fix/<topic>`, `chore/<topic>`, `docs/<topic>`.
- **KEINE** Merge-Commits ohne Begründung – Rebase bevorzugt.

## 12. Selector & Naming

- **Selector-Prefix**: `rui-` (z.B. `<rui-cropper>`, `<rui-file-upload>`).
- Dateinamen: `kebab-case.ts` (z.B. `cropper-canvas.ts`).
- Klassennamen: `PascalCase` mit Library-Prefix `Rui` (z.B. `RuiCropper`, `RuiToastService`).
- Public APIs in `index.ts` pro Secondary Entry Point.
- Interfaces/Types: `Rui*` Prefix (z.B. `RuiCropperOptions`).

## 13. Publikation & Library-Struktur

- Jede Komponente = eigener Secondary Entry Point (`ng-package.json` + `package.json`).
- `peerDependencies`: `@angular/core`, `@angular/common`, `@angular/forms`, `@angular/material`, `@angular/cdk` – NIEMALS als runtime-dep gebündelt.
- Vor `pnpm publish`: `pnpm nx build mat-extended` MUSS grün sein.
- Versioning: SemVer. Bei `v0.x.x` sind Breaking Changes in Minor-Versionen erlaubt.

## 14. Demo-App

- JEDE Komponente MUSS eine Demo-Seite in `apps/demo/src/app/pages/` haben.
- JEDE Demo-Seite zeigt die wichtigsten Use-Cases: Forms-Integration, Custom-Theming, A11y, Edge-Cases.
- Demo wird automatisch auf GitHub Pages deployt (auf `main`).

## 15. CI/CD

- `ci.yml`: Läuft auf PRs und `main` – lint, test, build.
- `release.yml`: Bei semver-Tag → npm publish.
- `deploy-demo.yml`: Auf `main` → build demo → push nach `gh-pages` Branch.

## 16. Agent-Verhalten

- **KEINE** Commits/Pushes ohne explizite Anweisung.
- **KEINE** `pnpm add` von Packages, die nicht im Plan stehen, ohne Rückfrage.
- Bei Unsicherheit: nachfragen statt raten.
- VOR jedem Commit: `pnpm nx lint` + `pnpm nx test` laufen lassen.
- Bei Fehlern: IMMER den vollen Output lesen und analysieren, nicht einfach retry.
- Tasks in `AGENTS.todo.md` sofort aktualisieren, nicht erst am Ende.
- Tab-Größe: 2 Spaces (in TS/SCSS/HTML/MD).
