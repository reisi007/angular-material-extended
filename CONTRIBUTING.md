# Contributing to Angular Material Extended

## Project Setup

- **Node.js**: >= 22 required.
- **Package manager**: `pnpm` only (see `engines.pnpm` in `package.json`).
- **Getting started**:
  1. Clone the repository.
  2. Run `pnpm install` to install dependencies.
  3. Run `pnpm dev` to start the demo dev server.

## Development Workflow

- **Branch naming**: Prefix branches with `feat/`, `fix/`, `chore/`, or `docs/` (e.g., `feat/cropper-rotation`, `fix/file-upload-validation`).
- **Commit messages**: Must follow [Conventional Commits](https://www.conventionalcommits.org/). Examples:
  - `feat(cropper): add rotation slider`
  - `fix(toast): correct aria-live region`
  - `chore(deps): update angular to v22`
- **Before every commit**:
  ```bash
  pnpm nx run-many -t lint
  pnpm nx run-many -t test
  ```
  Both must pass. No `eslint-disable` or `ts-expect-error` comments are allowed.

## Code Conventions

Refer to [`AGENTS.md`](./AGENTS.md) for detailed rules. Key requirements:

- **Standalone Components** only — no NgModules for components, directives, or pipes.
- **Signals first** — use `input()`, `output()`, `model()`, `computed()`, `signal()`; no `@Input()` / `@Output()` decorators or `EventEmitter`.
- **Zoneless** — no `setTimeout`/`zone.run` hacks for change detection.
- **Strict TypeScript**: `strict: true`, no `any` without justification.
- **Selector prefix**: `rui-` (e.g., `<rui-cropper>`).

## Styling

- **Library components**: Component-scoped SCSS via `styleUrl`. No Tailwind utilities in library templates. Use M3 tokens (`var(--mat-sys-*)`). No hardcoded colors.
- **Demo application**: Tailwind CSS v4 is allowed. Demo styles scan `apps/demo/src/` only — the library is not scanned and ships its own CSS.

## PR Process

- **Squash merge** is preferred. The squashed commit message should be a clear Conventional Commit describing the entire change.
- **PR description**: Reference the relevant task(s) in [`AGENTS.todo.md`](./AGENTS.todo.md) so reviewers can track progress against the plan.
- Ensure CI (lint, test, build) is green before requesting review.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
