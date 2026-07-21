import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { RuiToastConfig } from './toast.types';

const ICONS: Record<string, string> = {
  success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
  warning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
};

@Component({
  selector: 'rui-toast',
  standalone: true,
  templateUrl: './toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block animate-slide-in',
  },
})
export class RuiToastComponent {
  readonly config = input.required<RuiToastConfig>();
  readonly dismiss = output<void>();

  readonly icon = computed(() => ICONS[this.config().kind ?? 'info']);

  readonly borderColor = computed(() => {
    const kind = this.config().kind;
    switch (kind) {
      case 'success': return 'var(--mat-sys-primary)';
      case 'error': return 'var(--mat-sys-error)';
      case 'info': return 'var(--mat-sys-tertiary)';
      case 'warning': return 'var(--mat-sys-error-container)';
      default: return 'var(--mat-sys-primary)';
    }
  });

  onAction(): void {
    this.config().action?.onClick();
  }
}
