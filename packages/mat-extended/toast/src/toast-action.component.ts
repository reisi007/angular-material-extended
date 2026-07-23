import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

export interface RuiToastAction {
  label: string;
  onClick: () => void;
}

@Component({
  selector: 'rui-toast-action',
  standalone: true,
  template: `
    <button class="rui-toast-action" (click)="actionClick.emit()">
      {{ action().label }}
    </button>
  `,
  styleUrl: './toast-action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiToastActionComponent {
  readonly action = input.required<RuiToastAction>();
  readonly actionClick = output<void>();
}
