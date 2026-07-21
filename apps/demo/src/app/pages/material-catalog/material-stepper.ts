import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialStepperLinear } from './stepper/material-stepper-linear';
import { MaterialStepperNonLinear } from './stepper/material-stepper-nonlinear';

@Component({
  selector: 'rui-material-stepper',
  standalone: true,
  imports: [MaterialStepperLinear, MaterialStepperNonLinear],
  template: `
    <div class="p-4 md:p-6 space-y-2">
      <div class="mb-6">
        <h1 class="font-bold text-[var(--mat-sys-on-surface)]">Stepper</h1>
        <p class="text-sm text-[var(--mat-sys-on-surface-variant)] mt-1">mat-stepper provides a wizard-like workflow for multi-step forms.</p>
      </div>

      <rui-material-stepper-linear />
      <rui-material-stepper-non-linear />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialStepper {}
