import { describe, it, expect, beforeEach } from 'vitest';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, Routes } from '@angular/router';
import { RuiBreadcrumbService } from './breadcrumb.service';
import { RuiBreadcrumbItem } from './breadcrumb.types';
import { RUI_BREADCRUMB_DEFAULT_OPTIONS } from './breadcrumb.config';

@Component({ standalone: true, template: 'child' })
class ChildComponent {}

@Component({ standalone: true, template: 'grandchild' })
class GrandchildComponent {}

const testRoutes: Routes = [
  { path: '', component: ChildComponent },
  { path: 'products', data: { title: 'Products' }, component: ChildComponent },
  {
    path: 'products',
    data: { title: 'Products' },
    children: [
      { path: 'detail', data: { title: 'Product Detail' }, component: GrandchildComponent },
    ],
  },
  { path: 'no-title', component: ChildComponent },
  {
    path: 'with-breadcrumb',
    data: { breadcrumb: 'Custom Breadcrumb', title: 'Page Title' },
    component: ChildComponent,
  },
  { path: 'with-icon', data: { title: 'Icon Page', breadcrumbIcon: 'home' }, component: ChildComponent },
  {
    path: 'catalog',
    data: { title: 'Catalog' },
    children: [
      { path: '', component: ChildComponent },
      {
        path: 'item',
        data: { title: 'Catalog Item' },
        children: [
          { path: 'detail', data: { title: 'Item Detail' }, component: GrandchildComponent },
        ],
      },
    ],
  },
];

const testRoutesWithRootTitle: Routes = [
  { path: '', data: { title: 'Dashboard' }, component: ChildComponent },
  { path: 'settings', data: { title: 'Settings' }, component: ChildComponent },
];

describe('RuiBreadcrumbService', () => {
  let service: RuiBreadcrumbService;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(testRoutes)],
    });
    service = TestBed.inject(RuiBreadcrumbService);
    router = TestBed.inject(Router);
    await router.navigate(['/']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have breadcrumbs signal', () => {
    const crumbs = service.breadcrumbs();
    expect(Array.isArray(crumbs)).toBe(true);
  });

  it('should show only config root on root route without data.title', async () => {
    await router.navigate(['/']);
    const crumbs = service.breadcrumbs();
    expect(crumbs.length).toBe(1);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[0]?.url).toBe('/');
  });

  it('should build breadcrumbs for simple route', async () => {
    await router.navigate(['/products']);
    const crumbs = service.breadcrumbs();
    expect(crumbs.length).toBe(2);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[0]?.url).toBe('/');
    expect(crumbs[1]?.label).toBe('Products');
  });

  it('should build breadcrumbs for nested route', async () => {
    await router.navigate(['/products', 'detail']);
    const crumbs = service.breadcrumbs();
    expect(crumbs.length).toBe(3);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[0]?.url).toBe('/');
    expect(crumbs[1]?.label).toBe('Products');
    expect(crumbs[2]?.label).toBe('Product Detail');
  });

  it('should skip routes without title or breadcrumb data', async () => {
    await router.navigate(['/no-title']);
    const crumbs = service.breadcrumbs();
    expect(crumbs.length).toBe(1);
    expect(crumbs[0]?.label).toBe('Home');
  });

  it('should use data.breadcrumb over data.title when both are set', async () => {
    await router.navigate(['/with-breadcrumb']);
    const crumbs = service.breadcrumbs();
    const customCrumb = crumbs.find((c: RuiBreadcrumbItem) => c.label === 'Custom Breadcrumb');
    const titleCrumb = crumbs.find((c: RuiBreadcrumbItem) => c.label === 'Page Title');
    expect(customCrumb).toBeTruthy();
    expect(titleCrumb).toBeUndefined();
  });

  it('should use breadcrumbIcon from route data', async () => {
    await router.navigate(['/with-icon']);
    const crumbs = service.breadcrumbs();
    const iconCrumb = crumbs.find((c: RuiBreadcrumbItem) => c.icon === 'home');
    expect(iconCrumb).toBeTruthy();
  });

  it('should include root element with default values', () => {
    const crumbs = service.breadcrumbs();
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[0]?.url).toBe('/');
    expect(crumbs[0]?.icon).toBeUndefined();
  });

  it('should use custom rootLabel from config', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideRouter(testRoutes),
        { provide: RUI_BREADCRUMB_DEFAULT_OPTIONS, useValue: { rootLabel: 'Start', rootUrl: '/' } },
      ],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs.length).toBe(1);
    expect(crumbs[0]?.label).toBe('Start');
  });

  it('should use custom rootIcon from config', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideRouter(testRoutes),
        { provide: RUI_BREADCRUMB_DEFAULT_OPTIONS, useValue: { rootLabel: 'Home', rootUrl: '/', rootIcon: 'house' } },
      ],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs[0]?.icon).toBe('house');
  });

  it('should handle deeply nested routes (3+ levels)', async () => {
    await router.navigate(['/catalog', 'item', 'detail']);
    const crumbs = service.breadcrumbs();
    expect(crumbs.length).toBe(4);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[1]?.label).toBe('Catalog');
    expect(crumbs[2]?.label).toBe('Catalog Item');
    expect(crumbs[3]?.label).toBe('Item Detail');
  });

  it('should build correct URLs for nested routes', async () => {
    await router.navigate(['/catalog', 'item', 'detail']);
    const crumbs = service.breadcrumbs();
    expect(crumbs[1]?.url).toBe('/catalog');
    expect(crumbs[2]?.url).toBe('/catalog/item');
    expect(crumbs[3]?.url).toBe('/catalog/item/detail');
  });

  it('should set empty URL for root element when rootUrl is empty', async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideRouter(testRoutes),
        { provide: RUI_BREADCRUMB_DEFAULT_OPTIONS, useValue: { rootLabel: 'Home', rootUrl: '' } },
      ],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs[0]?.url).toBe('');
  });
});

describe('RuiBreadcrumbService - root route with data.title', () => {
  it('should not duplicate root element when root route has data.title at rootUrl', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(testRoutesWithRootTitle)],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs.length).toBe(1);
    expect(crumbs[0]?.label).toBe('Dashboard');
    expect(crumbs[0]?.url).toBe('/');
  });

  it('should use config root when navigating to child of root route with data.title', async () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(testRoutesWithRootTitle)],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/settings']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs.length).toBe(2);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[0]?.url).toBe('/');
    expect(crumbs[1]?.label).toBe('Settings');
    expect(crumbs[1]?.url).toBe('/settings');
  });

  it('should apply rootIcon from config to route root element', async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(testRoutesWithRootTitle),
        { provide: RUI_BREADCRUMB_DEFAULT_OPTIONS, useValue: { rootLabel: 'Home', rootUrl: '/', rootIcon: 'home' } },
      ],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs[0]?.icon).toBe('home');
  });

  it('should keep route icon when root route has its own icon', async () => {
    const routes: Routes = [
      { path: '', data: { title: 'Home', breadcrumbIcon: 'house' }, component: ChildComponent },
    ];
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        { provide: RUI_BREADCRUMB_DEFAULT_OPTIONS, useValue: { rootLabel: 'Home', rootUrl: '/', rootIcon: 'home' } },
      ],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs[0]?.icon).toBe('house');
  });
});

describe('RuiBreadcrumbService - lazy-loaded routes', () => {
  it('should build breadcrumbs from lazy-loaded route with data.title', async () => {
    const lazyRoutes: Routes = [
      {
        path: 'lazy',
        data: { title: 'Lazy Page' },
        loadComponent: () => Promise.resolve(ChildComponent),
      },
    ];
    TestBed.configureTestingModule({
      providers: [provideRouter(lazyRoutes)],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/lazy']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs.length).toBe(2);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[1]?.label).toBe('Lazy Page');
    expect(crumbs[1]?.url).toBe('/lazy');
  });

  it('should build nested breadcrumbs with lazy parent and lazy child', async () => {
    const lazyNestedRoutes: Routes = [
      {
        path: 'shop',
        data: { title: 'Shop' },
        loadComponent: () => Promise.resolve(ChildComponent),
        children: [
          {
            path: 'product',
            data: { title: 'Product' },
            loadComponent: () => Promise.resolve(GrandchildComponent),
          },
        ],
      },
    ];
    TestBed.configureTestingModule({
      providers: [provideRouter(lazyNestedRoutes)],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/shop', 'product']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs.length).toBe(3);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[1]?.label).toBe('Shop');
    expect(crumbs[1]?.url).toBe('/shop');
    expect(crumbs[2]?.label).toBe('Product');
    expect(crumbs[2]?.url).toBe('/shop/product');
  });

  it('should build breadcrumbs with lazy loadChildren route config', async () => {
    const lazyChildren: Routes = [
      { path: '', component: ChildComponent },
      { path: 'list', data: { title: 'List View' }, component: GrandchildComponent },
    ];
    const lazyLoadChildrenRoutes: Routes = [
      {
        path: 'admin',
        data: { title: 'Admin' },
        loadChildren: () => Promise.resolve(lazyChildren),
      },
    ];
    TestBed.configureTestingModule({
      providers: [provideRouter(lazyLoadChildrenRoutes)],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/admin', 'list']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs.length).toBe(3);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[1]?.label).toBe('Admin');
    expect(crumbs[2]?.label).toBe('List View');
  });

  it('should handle 3-level deep lazy-loaded hierarchy', async () => {
    const deepLazyRoutes: Routes = [
      {
        path: 'a',
        data: { title: 'Level A' },
        loadComponent: () => Promise.resolve(ChildComponent),
        children: [
          {
            path: 'b',
            data: { title: 'Level B' },
            loadComponent: () => Promise.resolve(ChildComponent),
            children: [
              {
                path: 'c',
                data: { title: 'Level C' },
                loadComponent: () => Promise.resolve(GrandchildComponent),
              },
            ],
          },
        ],
      },
    ];
    TestBed.configureTestingModule({
      providers: [provideRouter(deepLazyRoutes)],
    });
    const svc = TestBed.inject(RuiBreadcrumbService);
    const r = TestBed.inject(Router);
    await r.navigate(['/a', 'b', 'c']);
    const crumbs = svc.breadcrumbs();
    expect(crumbs.length).toBe(4);
    expect(crumbs[0]?.label).toBe('Home');
    expect(crumbs[1]?.label).toBe('Level A');
    expect(crumbs[2]?.label).toBe('Level B');
    expect(crumbs[3]?.label).toBe('Level C');
    expect(crumbs[3]?.url).toBe('/a/b/c');
  });
});
