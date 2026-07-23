import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiMenuButton } from './menu-button.component';
import { RuiMenuService } from './menu.service';
import { RUI_MENU_DEFAULT_OPTIONS } from './menu.config';
import type { RuiMenuItem } from './menu.types';

describe('RuiMenuButton', () => {
  let fixture: ComponentFixture<RuiMenuButton>;
  let component: RuiMenuButton;
  let menuService: { open: ReturnType<typeof vi.fn>; close: ReturnType<typeof vi.fn> };

  const testItems: RuiMenuItem[] = [
    { label: 'Item 1', handler: vi.fn() },
    { label: 'Item 2', handler: vi.fn() },
  ];

  beforeEach(async () => {
    menuService = { open: vi.fn(), close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [
        { provide: RuiMenuService, useValue: menuService },
        { provide: RUI_MENU_DEFAULT_OPTIONS, useValue: { position: 'bottom-left' } },
      ],
    }).compileComponents();

    fixture = TestBed.overrideComponent(RuiMenuButton, {
      set: { providers: [
        { provide: RuiMenuService, useValue: menuService },
        { provide: RUI_MENU_DEFAULT_OPTIONS, useValue: { position: 'bottom-left' } },
      ]},
    }).createComponent(RuiMenuButton);

    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', testItems);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a button with three line spans', () => {
    const button = fixture.nativeElement.querySelector('.rui-menu-button');
    expect(button).toBeTruthy();
    const lines = button.querySelectorAll('.rui-menu-button__line');
    expect(lines.length).toBe(3);
  });

  it('sets aria-haspopup="true" on the button', () => {
    const button = fixture.nativeElement.querySelector('.rui-menu-button');
    expect(button.getAttribute('aria-haspopup')).toBe('true');
  });

  it('binds aria-expanded to isOpen state', () => {
    const button = fixture.nativeElement.querySelector('.rui-menu-button');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    component.isOpen.set(true);
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('toggles open state on click', () => {
    const button = fixture.nativeElement.querySelector('.rui-menu-button');
    button.click();
    expect(component.isOpen()).toBe(true);
    expect(menuService.open).toHaveBeenCalledWith(testItems, expect.any(Object), expect.any(HTMLElement));
  });

  it('applies --open class when isOpen is true', () => {
    // The host binding is on the component host element (the component's wrapper)
    // In Angular TestBed, host bindings apply to the component's host element
    // The component itself IS the host, so we check fixture.nativeElement
    expect(fixture.nativeElement.classList.contains('rui-menu-button--open')).toBe(false);
    component.isOpen.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('rui-menu-button--open')).toBe(true);
  });

  it('does nothing on toggle when items input is empty', () => {
    fixture.componentRef.setInput('items', undefined);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.rui-menu-button');
    button.click();
    expect(menuService.open).not.toHaveBeenCalled();
  });

  it('calls menuService.close when already open', () => {
    component.isOpen.set(true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.rui-menu-button');
    button.click();
    expect(menuService.close).toHaveBeenCalled();
    expect(component.isOpen()).toBe(false);
  });
});
