import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-sidenav-basic',
  standalone: true,
  imports: [MatSidenavModule, ShowcaseCode],
  template: `
    <section id="sidenav-basic" class="mb-8">
      <h2 id="sidenav-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Sidenav</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-drawer-container with a side drawer and content area.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <mat-drawer-container class="h-64 rounded border border-[var(--mat-sys-outline-variant)]">
          <mat-drawer mode="side" opened class="w-48 bg-[var(--mat-sys-surface-container-low)] p-3">
            <nav class="flex flex-col gap-1">
              <a class="block rounded px-3 py-2 text-sm text-[var(--mat-sys-on-surface)] hover:bg-[var(--mat-sys-surface-container-hover)] cursor-pointer">Dashboard</a>
              <a class="block rounded px-3 py-2 text-sm text-[var(--mat-sys-on-surface)] hover:bg-[var(--mat-sys-surface-container-hover)] cursor-pointer">Settings</a>
              <a class="block rounded px-3 py-2 text-sm text-[var(--mat-sys-on-surface)] hover:bg-[var(--mat-sys-surface-container-hover)] cursor-pointer">Profile</a>
              <a class="block rounded px-3 py-2 text-sm text-[var(--mat-sys-on-surface)] hover:bg-[var(--mat-sys-surface-container-hover)] cursor-pointer">Help</a>
            </nav>
          </mat-drawer>
          <mat-drawer-content class="flex items-center justify-center p-6">
            <p class="text-sm text-[var(--mat-sys-on-surface-variant)]">Main content area. The drawer stays open on the left.</p>
          </mat-drawer-content>
        </mat-drawer-container>
      </div>

      <rui-showcase-code
        html='<mat-drawer-container>
  <mat-drawer mode="side" opened>
    <nav>
      <a>Dashboard</a>
      <a>Settings</a>
      <a>Profile</a>
      <a>Help</a>
    </nav>
  </mat-drawer>
  <mat-drawer-content>
    <p>Main content area. The drawer stays open on the left.</p>
  </mat-drawer-content>
</mat-drawer-container>'
        ts="import { MatSidenavModule } from '@angular/material/sidenav';

// In component imports:
imports: [MatSidenavModule],"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSidenavBasic {}
