import { InjectionToken } from '@angular/core';
import { RuiCropperOptions } from './cropper.types';

export const RUI_CROPPER_DEFAULT_OPTIONS = new InjectionToken<RuiCropperOptions>(
  'RUI_CROPPER_DEFAULT_OPTIONS',
  {
    providedIn: 'root',
    factory: () => RUI_CROPPER_DEFAULTS,
  },
);

export const RUI_CROPPER_DEFAULTS: RuiCropperOptions = {
  aspectRatio: 'free',
  outputFormat: 'image/png',
  outputQuality: 0.92,
  maintainAspectRatio: true,
  minCropWidth: 20,
  minCropHeight: 20,
  outputWidth: 0,
  outputHeight: 0,
  zoomStep: 0.1,
  rotateStep: 90,
};
