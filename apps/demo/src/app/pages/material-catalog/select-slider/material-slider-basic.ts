import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { ShowcaseCode } from '../../../shared/showcase-code';

@Component({
  selector: 'rui-material-slider-basic',
  standalone: true,
  imports: [FormsModule, MatSliderModule, MatIconModule, ShowcaseCode],
  template: `
    <section id="slider-basic" class="mb-8">
      <h2 id="slider-basic" class="font-bold text-[var(--mat-sys-on-surface)] mb-1">Basic Slider</h2>
      <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4">mat-slider with min/max/step and thumb value display.</p>

      <div class="rounded-lg border border-[var(--mat-sys-outline-variant)] bg-[var(--mat-sys-surface)] p-5">
        <div class="max-w-xs">
          <mat-slider min="0" max="100" step="1" [style.width]="'100%'">
            <input matSliderThumb [(value)]="sliderValue" />
          </mat-slider>
          <p class="text-xs text-[var(--mat-sys-on-surface-variant)] mt-2">Value: {{ sliderValue }}</p>
        </div>
      </div>

      <rui-showcase-code
        html="<mat-slider min=&quot;0&quot; max=&quot;100&quot; step=&quot;1&quot;&gt;
  &lt;input matSliderThumb [(value)]=&quot;sliderValue&quot; /&gt;
&lt;/mat-slider&gt;"
        ts="import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

// In component imports:
imports: [FormsModule, MatSliderModule],

export class MyComponent {
  sliderValue = 42;
}"
      />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialSliderBasic {
  sliderValue = 42;
}
