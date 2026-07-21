import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

export interface RuiToastAction {
  label: string;
  onClick: () => void;
}

@Component({
  selector: 'rui-toast-action',
  standalone: true,
  template: `
    <button
      class="px-3 py-1 border-none rounded bg-[var(--mat-sys-primary-container)] text-[var(--mat-sys-on-primary-container)] cursor-pointer text-xs font-medium"
      (click)="actionClick.emit()"
    >
      {{ action().label }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiToastActionComponent {
  readonly action = input.required<RuiToastAction>();
  readonly actionClick = output<void>();
}
