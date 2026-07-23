import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rui-dialog-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rui-dialog-footer">
      <ng-content select="[ruiDialogActions]"></ng-content>
    </div>
  `,
  styleUrl: './dialog-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiDialogFooterComponent {}
