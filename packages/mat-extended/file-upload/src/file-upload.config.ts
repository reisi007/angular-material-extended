import { InjectionToken } from '@angular/core';
import { RuiFileUploadOptions } from './file-upload.types';

export const RUI_FILE_UPLOAD_DEFAULT_OPTIONS = new InjectionToken<RuiFileUploadOptions>(
  'RUI_FILE_UPLOAD_DEFAULT_OPTIONS',
  { providedIn: 'root', factory: () => RUI_FILE_UPLOAD_DEFAULTS },
);

export const RUI_FILE_UPLOAD_DEFAULTS: RuiFileUploadOptions = {
  multiple: true,
  accept: '*/*',
  maxSize: 10 * 1024 * 1024,
  maxFiles: 10,
  sortable: false,
  autoUpload: false,
  editable: false,
};
