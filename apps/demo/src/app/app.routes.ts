import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cropper',
  },
  {
    path: 'cropper',
    loadComponent: () =>
      import('./pages/cropper-demo/cropper-demo').then((m) => m.CropperDemo),
  },
  {
    path: 'file-upload',
    loadComponent: () =>
      import('./pages/file-upload-demo/file-upload-demo').then(
        (m) => m.FileUploadDemo,
      ),
  },
  {
    path: 'toast',
    loadComponent: () =>
      import('./pages/toast-demo/toast-demo').then((m) => m.ToastDemo),
  },
  {
    path: 'data-table',
    loadComponent: () =>
      import('./pages/data-table-demo/data-table-demo').then(
        (m) => m.DataTableDemo,
      ),
  },
  {
    path: 'dialog',
    loadComponent: () =>
      import('./pages/dialog-demo/dialog-demo').then((m) => m.DialogDemo),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/menu-demo/menu-demo').then((m) => m.MenuDemo),
  },
];
