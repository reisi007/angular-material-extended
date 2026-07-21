import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rui-cropper-grid-overlay',
  standalone: true,
  host: {
    'ruiCropperOverlay': '',
  },
  template: `
    <svg class="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <pattern [id]="patternId()" [attr.width]="spacing()" [attr.height]="spacing()" patternUnits="userSpaceOnUse">
          <path [attr.d]="gridPath()" fill="none" [attr.stroke]="color()" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" [attr.fill]="'url(#' + patternId() + ')'"/>
      @if (showThirds()) {
        <line x1="33.33%" y1="0" x2="33.33%" y2="100%" [attr.stroke]="thirdsColor()" stroke-width="1"/>
        <line x1="66.66%" y1="0" x2="66.66%" y2="100%" [attr.stroke]="thirdsColor()" stroke-width="1"/>
        <line x1="0" y1="33.33%" x2="100%" y2="33.33%" [attr.stroke]="thirdsColor()" stroke-width="1"/>
        <line x1="0" y1="66.66%" x2="100%" y2="66.66%" [attr.stroke]="thirdsColor()" stroke-width="1"/>
      }
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuiCropperGridOverlay {
  readonly spacing = input<number>(10);
  readonly color = input<string>('rgba(255,255,255,0.3)');
  readonly showThirds = input<boolean>(true);
  readonly thirdsColor = input<string>('rgba(255,255,255,0.5)');

  private readonly _uid = 'rui-grid-' + Math.random().toString(36).slice(2, 9);
  readonly patternId = computed(() => this._uid);
  readonly gridPath = computed(() => `M ${this.spacing()} 0 L 0 0 0 ${this.spacing()}`);
}
