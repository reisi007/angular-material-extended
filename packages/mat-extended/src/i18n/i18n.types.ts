import { InjectionToken } from '@angular/core';

export type RuiLocale = 'de' | 'en-GB' | 'en-US' | string;

export interface RuiCropperTranslations {
  zoomIn: string;
  zoomOut: string;
  rotateLeft: string;
  rotateRight: string;
  freeRotation: string;
  aspectRatio: string;
  free: string;
  cropLabel: string;
}

export interface RuiFileUploadTranslations {
  dropzoneText: string;
  dragOverText: string;
  browseText: string;
  uploadButtonText: string;
  clearAll: string;
  retry: string;
  cancel: string;
  rename: string;
  acceptedLabel: string;
  maxFilesLabel: string;
  maxSizeLabel: string;
  filesLabel: string;
  uploading: string;
  removeLabel: string;
}

export interface RuiToastTranslations {
  dismiss: string;
  success: string;
  error: string;
  info: string;
  warning: string;
}

export interface RuiDataTableTranslations {
  filter: string;
  search: string;
  noData: string;
  selectPage: string;
  selectAll: string;
  deselectAll: string;
  selectRow: string;
  deselectRow: string;
  itemsPerPage: string;
  of: string;
}

export interface RuiDialogTranslations {
  close: string;
}

export interface RuiMenuTranslations {
  menuLabel: string;
}

export interface RuiTranslations {
  cropper?: Partial<RuiCropperTranslations>;
  fileUpload?: Partial<RuiFileUploadTranslations>;
  toast?: Partial<RuiToastTranslations>;
  dataTable?: Partial<RuiDataTableTranslations>;
  dialog?: Partial<RuiDialogTranslations>;
  menu?: Partial<RuiMenuTranslations>;
}

export const RUI_TRANSLATIONS = new InjectionToken<RuiTranslations>('RUI_TRANSLATIONS', {
  factory: () => ({}),
});
