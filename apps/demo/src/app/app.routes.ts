import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./overview').then((m) => m.Overview),
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
    path: 'file-upload-item',
    loadComponent: () =>
      import('./pages/file-upload-item-demo/file-upload-item-demo').then(
        (m) => m.FileUploadItemDemo,
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
  {
    path: 'material',
    loadComponent: () =>
      import('./pages/material-catalog/material-catalog').then((m) => m.MaterialCatalog),
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'autocomplete',
        loadComponent: () =>
          import('./pages/material-catalog/material-autocomplete').then((m) => m.MaterialAutocomplete),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./pages/material-catalog/material-badge').then((m) => m.MaterialBadge),
      },
      {
        path: 'bottom-sheet',
        loadComponent: () =>
          import('./pages/material-catalog/material-bottom-sheet').then((m) => m.MaterialBottomSheet),
      },
      {
        path: 'button-toggle',
        loadComponent: () =>
          import('./pages/material-catalog/material-button-toggle').then((m) => m.MaterialButtonToggle),
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./pages/material-catalog/material-buttons').then((m) => m.MaterialButtons),
      },
      {
        path: 'cards',
        loadComponent: () =>
          import('./pages/material-catalog/material-cards-section').then((m) => m.MaterialCardsSection),
      },
      {
        path: 'chips',
        loadComponent: () =>
          import('./pages/material-catalog/material-chips').then((m) => m.MaterialChips),
      },
      {
        path: 'datepicker',
        loadComponent: () =>
          import('./pages/material-catalog/material-datepicker').then((m) => m.MaterialDatepicker),
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./pages/material-catalog/material-dialog').then((m) => m.MaterialDialog),
      },
      {
        path: 'divider',
        loadComponent: () =>
          import('./pages/material-catalog/material-divider').then((m) => m.MaterialDivider),
      },
      {
        path: 'expansion',
        loadComponent: () =>
          import('./pages/material-catalog/material-expansion').then((m) => m.MaterialExpansion),
      },
      {
        path: 'form-fields',
        loadComponent: () =>
          import('./pages/material-catalog/material-form-fields').then((m) => m.MaterialFormFields),
      },
      {
        path: 'grid-list',
        loadComponent: () =>
          import('./pages/material-catalog/material-grid-list').then((m) => m.MaterialGridList),
      },
      {
        path: 'icon',
        loadComponent: () =>
          import('./pages/material-catalog/material-icon').then((m) => m.MaterialIcon),
      },
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/material-catalog/material-list').then((m) => m.MaterialList),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./pages/material-catalog/material-menu').then((m) => m.MaterialMenu),
      },
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/material-catalog/material-overview').then((m) => m.MaterialOverview),
      },
      {
        path: 'paginator',
        loadComponent: () =>
          import('./pages/material-catalog/material-paginator').then((m) => m.MaterialPaginator),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./pages/material-catalog/material-progress').then((m) => m.MaterialProgress),
      },
      {
        path: 'ripples',
        loadComponent: () =>
          import('./pages/material-catalog/material-ripples').then((m) => m.MaterialRipples),
      },
      {
        path: 'selection-controls',
        loadComponent: () =>
          import('./pages/material-catalog/material-selection-controls').then((m) => m.MaterialSelectionControls),
      },
      {
        path: 'select-slider',
        loadComponent: () =>
          import('./pages/material-catalog/material-select-slider').then((m) => m.MaterialSelectSlider),
      },
      {
        path: 'sidenav',
        loadComponent: () =>
          import('./pages/material-catalog/material-sidenav').then((m) => m.MaterialSidenav),
      },
      {
        path: 'snackbar',
        loadComponent: () =>
          import('./pages/material-catalog/material-snackbar').then((m) => m.MaterialSnackbar),
      },
      {
        path: 'sort',
        loadComponent: () =>
          import('./pages/material-catalog/material-sort').then((m) => m.MaterialSort),
      },
      {
        path: 'stepper',
        loadComponent: () =>
          import('./pages/material-catalog/material-stepper').then((m) => m.MaterialStepper),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./pages/material-catalog/material-table').then((m) => m.MaterialTable),
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./pages/material-catalog/material-tabs').then((m) => m.MaterialTabs),
      },
      {
        path: 'timepicker',
        loadComponent: () =>
          import('./pages/material-catalog/material-timepicker').then((m) => m.MaterialTimepicker),
      },
      {
        path: 'toolbar',
        loadComponent: () =>
          import('./pages/material-catalog/material-toolbar').then((m) => m.MaterialToolbar),
      },
      {
        path: 'tooltip',
        loadComponent: () =>
          import('./pages/material-catalog/material-tooltip').then((m) => m.MaterialTooltip),
      },
      {
        path: 'tree',
        loadComponent: () =>
          import('./pages/material-catalog/material-tree').then((m) => m.MaterialTree),
      },
    ],
  },
  {
    path: 'multi-select',
    loadComponent: () =>
      import('./pages/multi-select-demo/multi-select-demo').then((m) => m.MultiSelectDemo),
  },
];
