import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'rui-overview',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  template: `
<div class="max-w-6xl mx-auto p-8">
  <div class="text-center mb-12">
    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--mat-sys-primary-container)] mb-4">
      <span class="text-2xl font-bold text-[var(--mat-sys-primary)]">AE</span>
    </div>
    <h1 class="text-4xl font-bold mb-3">Angular Material Extended</h1>
    <p class="text-lg text-[var(--mat-sys-on-surface-variant)] max-w-2xl mx-auto leading-relaxed">
      Community-Erweiterung f&uuml;r Angular Material v22. Standalone-Komponenten,
      Signals-API, zoneless, M3 Theming &mdash; entwickelt f&uuml;r moderne Angular-Apps.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <a routerLink="/cropper" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">crop</mat-icon>
        <h2 id="cropper" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Cropper</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Bildzuschnitt mit Zoom, Rotation, Aspect-Ratio-Presets und Touch-Unterst&uuml;tzung</p>
    </a>

    <a routerLink="/file-upload" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">upload_file</mat-icon>
        <h2 id="file-upload" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">File Upload</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Drag &amp; Drop mit Validierung, Progress-Bar, Upload-Handler, Sortierung, Inline-Rename</p>
    </a>

    <a routerLink="/toast" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">notifications</mat-icon>
        <h2 id="toast" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Toast</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Overlay-Notification mit Success/Error/Info/Warning, Action-Button, konfigurierbaren Positionen</p>
    </a>

    <a routerLink="/data-table" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">table_chart</mat-icon>
        <h2 id="data-table" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Data Table</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Wrap von mat-table mit Sort, Paginator, Filter, Selection und benutzerdefinierten Templates</p>
    </a>

    <a routerLink="/dialog" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">open_in_new</mat-icon>
        <h2 id="dialog" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Dialog</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Modal-Dialog mit Overlay, FocusTrap, Gr&ouml;&szlig;en (sm&ndash;fullscreen), benutzerdefiniertem Content</p>
    </a>

    <a routerLink="/menu" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">menu</mat-icon>
        <h2 id="menu" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Menu</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Kontextmen&uuml; mit Icons, Separator, Disabled-Items, Keyboard-Navigation und Submen&uuml;s</p>
    </a>

    <a routerLink="/breadcrumb" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">arrow_right_alt</mat-icon>
        <h2 id="breadcrumb" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Breadcrumb</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Auto-Breadcrumb aus Route-Data, manueller Modus, benutzerdefinierte Trennzeichen und Icons</p>
    </a>

    <a routerLink="/multi-select" class="block p-6 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <div class="flex items-center gap-3 mb-2">
        <mat-icon class="text-2xl group-hover:text-[var(--mat-sys-primary)] transition-colors">playlist_add_check</mat-icon>
        <h2 id="multi-select" class="text-xl font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Multi-Select</h2>
      </div>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] leading-relaxed">Dropdown mit Mehrfachauswahl, Filterung, Select-All, Checkboxen und konfigurierbaren Optionen</p>
    </a>
  </div>

  <div class="mt-12 flex flex-col items-center gap-4">
    <a routerLink="/material/overview" class="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] hover:bg-[var(--mat-sys-surface-container-low)] hover:border-[var(--mat-sys-primary)] transition-all no-underline group">
      <span class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--mat-sys-primary-container)]">
        <span class="text-lg font-bold text-[var(--mat-sys-primary)]">M</span>
      </span>
      <div class="text-left">
        <div class="text-sm font-semibold text-[var(--mat-sys-on-surface)] group-hover:text-[var(--mat-sys-primary)] transition-colors">Angular Material Catalog</div>
        <div class="text-xs text-[var(--mat-sys-on-surface-variant)]">Alle 31 Material-Komponenten mit Live-Demos &amp; Code</div>
      </div>
    </a>
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--mat-sys-surface-container-high)] text-xs text-[var(--mat-sys-on-surface-variant)]">
      <span class="w-2 h-2 rounded-full bg-[var(--mat-sys-tertiary)]"></span>
      Active Development &middot; v0.1.0
    </div>
  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Overview {}
