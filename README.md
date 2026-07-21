# Angular Material Extended

> Community-driven extensions for [Angular Material](https://material.angular.dev/).
> **Unofficial** – not affiliated with Google or the Angular team.

[![CI](https://github.com/reisi007/angular-material-extended/actions/workflows/ci.yml/badge.svg)](https://github.com/reisi007/angular-material-extended/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/@all-the.rest/mat-extended.svg)](https://www.npmjs.com/package/@all-the.rest/mat-extended)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-blue.svg)](https://reisi007.github.io/angular-material-extended/)

## Demo

The live demo is hosted on GitHub Pages:

> https://reisi007.github.io/angular-material-extended/

## Status: Construction

This library is currently in active development. The first release (`v0.1.0`) will include the **Image Cropper** component.

## Components (planned)

| Component | Status | Package |
|---|---|---|
| Image Cropper | Phase 3 | `@all-the.rest/mat-extended/cropper` |
| File Upload | Phase 4 | `@all-the.rest/mat-extended/file-upload` |
| Toast / Notification | Phase 5 | `@all-the.rest/mat-extended/toast` |
| Data Table | Phase 6 | `@all-the.rest/mat-extended/data-table` |

See [`AGENTS.todo.md`](./AGENTS.todo.md) for the full roadmap.

## Tech Stack

- **Angular v22** (Standalone Components, Signals, Zoneless)
- **Angular Material v22** + CDK (Material 3 Theming)
- **Vitest** for unit tests
- **Nx** Monorepo
- **pnpm** as package manager
- Full **SSR** support
- **Reactive Forms** + native **Signal-API** per component

## Working in this Repository

If you're an Agent (human or AI) working on this codebase, please read [`AGENTS.md`](./AGENTS.md) first. It contains the binding rules. The detailed task plan lives in [`AGENTS.todo.md`](./AGENTS.todo.md).

## License

MIT (c) [Florian Reisinger](https://github.com/reisi007) – see [LICENSE](LICENSE).

## Disclaimer

"Angular Material Extended" is an independent community project and is **not** affiliated with, endorsed by, or sponsored by Google or the Angular team. "Angular" and "Material" are trademarks of Google LLC. This project respects the MIT License under which Angular Material is distributed.
