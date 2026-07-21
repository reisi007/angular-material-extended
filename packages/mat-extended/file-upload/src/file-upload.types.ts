export type RuiUploadStatus = 'idle' | 'selected' | 'uploading' | 'done' | 'error';

export interface RuiFileItem {
  file: File;
  id: string;
  preview?: string;
  status: RuiUploadStatus;
  progress: number;
  error?: string;
  editName?: string;
}

export interface RuiValidationError {
  type: 'size' | 'type' | 'count' | 'unknown';
  message: string;
  file?: File;
}

export interface RuiUploadHandler {
  (file: RuiFileItem, abortSignal?: AbortSignal): Promise<void>;
}

export interface RuiFileUploadOptions {
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  uploadHandler?: RuiUploadHandler;
  sortable?: boolean;
  autoUpload?: boolean;
  editable?: boolean;
  fileManagement?: boolean;
}
