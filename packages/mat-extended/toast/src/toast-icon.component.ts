import { Component, ChangeDetectionStrategy, input, inject, computed } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RuiToastKind } from './toast.types';

const ICONS: Record<RuiToastKind, string> = {
  success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
  warning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
};

@Component({
  selector: 'rui-toast-icon',
  standalone: true,
  template: `<span class="rui-toast-icon" aria-hidden="true" [innerHTML]="safeSvg()"></span>`,
  styleUrl: './toast-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiToastIconComponent {
  readonly kind = input<RuiToastKind>('info');

  private readonly _sanitizer = inject(DomSanitizer);

  readonly safeSvg = computed<SafeHtml>(() => {
    const icon = ICONS[this.kind()];
    return this._sanitizer.bypassSecurityTrustHtml(icon);
  });
}
