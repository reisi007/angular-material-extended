import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rui-overview',
  standalone: true,
  imports: [RouterModule],
  template: `
<div class="max-w-6xl mx-auto p-8">
  <h1 class="text-3xl font-bold mb-2">Angular Material Extended</h1>
  <p class="text-[var(--mat-sys-on-surface-variant)] mb-8 text-lg">
    Community-Erweiterung für Angular Material v22 – Standalone, Signals, Tailwind, M3
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <a routerLink="/cropper" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] transition-colors no-underline">
      <h2 class="text-xl font-semibold text-[var(--mat-sys-on-surface)] mb-2">🖼️ Cropper</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Bildzuschnitt mit Zoom, Rotation, Aspect-Ratio-Presets und Touch-Unterstützung</p>
    </a>

    <a routerLink="/file-upload" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] transition-colors no-underline">
      <h2 class="text-xl font-semibold text-[var(--mat-sys-on-surface)] mb-2">📁 File Upload</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Drag & Drop mit Validierung, Progress-Bar, Upload-Handler, Sortierung, Inline-Rename</p>
    </a>

    <a routerLink="/toast" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] transition-colors no-underline">
      <h2 class="text-xl font-semibold text-[var(--mat-sys-on-surface)] mb-2">🔔 Toast</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Overlay-Notification mit Success/Error/Info/Warning, Action-Button, Positions</p>
    </a>

    <a routerLink="/data-table" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] transition-colors no-underline">
      <h2 class="text-xl font-semibold text-[var(--mat-sys-on-surface)] mb-2">📊 Data Table</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Wrap von mat-table mit Sort, Paginator, Filter, Selection, Custom-Templates</p>
    </a>

    <a routerLink="/dialog" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] transition-colors no-underline">
      <h2 class="text-xl font-semibold text-[var(--mat-sys-on-surface)] mb-2">🪟 Dialog</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Modal-Dialog mit Overlay, FocusTrap, Größen (sm–fullscreen), Custom-Content</p>
    </a>

    <a routerLink="/menu" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] transition-colors no-underline">
      <h2 class="text-xl font-semibold text-[var(--mat-sys-on-surface)] mb-2">🍔 Menu</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Hamburger-Menü mit Icons, Separator, Disabled-Items, Keyboard-Navigation</p>
    </a>
  </div>

  <footer class="mt-12 text-center text-xs text-[var(--mat-sys-on-surface-variant)]">
    <p>Angular Material Extended – nicht offiziell mit Google oder Angular-Team affiliiert.</p>
  </footer>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Overview {}
