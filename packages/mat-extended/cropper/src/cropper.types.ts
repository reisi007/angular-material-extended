export type RuiOutputFormat = 'image/png' | 'image/jpeg' | 'image/webp';

export type RuiAspectRatioPreset = '1:1' | '4:3' | '16:9' | 'free';

export interface RuiCropperOptions {
  aspectRatio?: RuiAspectRatioPreset;
  outputFormat?: RuiOutputFormat;
  outputQuality?: number;
  maintainAspectRatio?: boolean;
  minCropWidth?: number;
  minCropHeight?: number;
  outputWidth?: number;
  outputHeight?: number;
  zoomStep?: number;
  rotateStep?: number;
  rotationMin?: number;
  rotationMax?: number;
  constrainToImage?: boolean;
}

export interface RuiCropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface RuiCropperResult {
  dataUrl: string;
  blob: Blob | null;
  width: number;
  height: number;
  format: RuiOutputFormat;
}
