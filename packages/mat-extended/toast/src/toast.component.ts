import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { RuiToastConfig } from './toast.types';
import { RuiToastIconComponent } from './toast-icon.component';
import { RuiToastActionComponent } from './toast-action.component';

@Component({
  selector: 'rui-toast',
  standalone: true,
  imports: [RuiToastIconComponent, RuiToastActionComponent],
  templateUrl: './toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'block animate-slide-in',
  },
})
export class RuiToastComponent {
  readonly config = input.required<RuiToastConfig>();
  readonly dismiss = output<void>();

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
}
