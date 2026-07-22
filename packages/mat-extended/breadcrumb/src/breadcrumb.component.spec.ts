import { describe, it, expect, beforeEach } from 'vitest';
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RuiBreadcrumb } from './breadcrumb.component';
import { RuiBreadcrumbItem } from './breadcrumb.types';

@Component({
  standalone: true,
  imports: [RuiBreadcrumb],
  template: `<rui-breadcrumb [items]="items()" [separator]="separator()" />`,
})
class TestHostComponent {
  readonly items = signal<RuiBreadcrumbItem[]>([]);
  readonly separator = signal<string>('chevron_right');
}

@Component({
  standalone: true,
  imports: [RuiBreadcrumb],
  template: `<rui-breadcrumb />`,
})
class AutoBreadcrumbComponent {}

@Component({ standalone: true, template: 'page' })
class DummyComponent {}

describe('RuiBreadcrumb', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RuiBreadcrumb],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiBreadcrumb);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('has nav element with aria-label', () => {
    const fixture = TestBed.createComponent(RuiBreadcrumb);
    fixture.detectChanges();
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav.getAttribute('aria-label')).toBe('Breadcrumb');
  });
});

describe('RuiBreadcrumb - Manual Mode', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RuiBreadcrumb, TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders items from input signal', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([
      { label: 'Home', url: '/' },
      { label: 'Products', url: '/products' },
      { label: 'Detail', url: '/products/detail' },
    ]);
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(2);
    const current = fixture.nativeElement.querySelector('[aria-current="page"]');
    expect(current).toBeTruthy();
    expect(current.textContent).toContain('Detail');
  });

  it('marks last crumb as current page', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([
      { label: 'Home', url: '/' },
      { label: 'Page', url: '/page' },
    ]);
    fixture.detectChanges();
    const currentEl = fixture.nativeElement.querySelector('[aria-current="page"]');
    expect(currentEl).toBeTruthy();
    expect(currentEl.textContent.trim()).toBe('Page');
  });

  it('last crumb is not a link', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([
      { label: 'Home', url: '/' },
      { label: 'Current', url: '/current' },
    ]);
    fixture.detectChanges();
    const spans = fixture.debugElement.queryAll(By.css('nav > span'));
    const lastSpan = spans[spans.length - 1];
    expect(lastSpan).toBeTruthy();
    expect(lastSpan.nativeElement.tagName).toBe('SPAN');
  });

  it('renders separator between links', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([
      { label: 'A', url: '/a' },
      { label: 'B', url: '/b' },
      { label: 'C', url: '/c' },
    ]);
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('nav mat-icon');
    expect(icons.length).toBe(2);
  });
});

describe('RuiBreadcrumb - Manual Mode with Icons', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RuiBreadcrumb, TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders icons when item.icon is present', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([
      { label: 'Home', url: '/', icon: 'home' },
      { label: 'Products', url: '/products', icon: 'category' },
    ]);
    fixture.detectChanges();
    const icons = fixture.nativeElement.querySelectorAll('nav mat-icon');
    expect(icons.length).toBe(3);
  });

  it('uses custom separator icon', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([
      { label: 'A', url: '/a' },
      { label: 'B', url: '/b' },
    ]);
    fixture.componentInstance.separator.set('arrow_forward');
    fixture.detectChanges();
    const sepIcons = fixture.nativeElement.querySelectorAll('nav mat-icon');
    expect(sepIcons.length).toBe(1);
    expect(sepIcons[0].textContent.trim()).toBe('arrow_forward');
  });
});

describe('RuiBreadcrumb - Edge Cases', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RuiBreadcrumb, TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders nothing when items is empty', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([]);
    fixture.detectChanges();
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeTruthy();
    const children = nav.children.length;
    expect(children).toBe(0);
  });

  it('renders single crumb correctly (no separator)', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.items.set([
      { label: 'Only', url: '/only' },
    ]);
    fixture.detectChanges();
    const currentEl = fixture.nativeElement.querySelector('[aria-current="page"]');
    expect(currentEl).toBeTruthy();
    expect(currentEl.textContent.trim()).toBe('Only');
  });
});

describe('RuiBreadcrumb - Auto Mode with Service', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RuiBreadcrumb, AutoBreadcrumbComponent],
      providers: [provideRouter([{ path: '', component: DummyComponent, data: { title: 'Home' } }])],
    }).compileComponents();
  });

  it('renders breadcrumbs from service auto-mode', () => {
    const fixture = TestBed.createComponent(AutoBreadcrumbComponent);
    fixture.detectChanges();
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeTruthy();
  });
});
