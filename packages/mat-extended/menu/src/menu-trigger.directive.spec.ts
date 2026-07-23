import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiMenuTrigger } from './menu-trigger.directive';
import { RuiMenuService } from './menu.service';
import { RUI_MENU_DEFAULT_OPTIONS } from './menu.config';
import type { RuiMenuItem } from './menu.types';

@Component({
  standalone: true,
  imports: [RuiMenuTrigger],
  template: `<button [ruiMenuTrigger]="items" [ruiMenuConfig]="config">Menu</button>`,
})
class TestHost {
  items: RuiMenuItem[] | undefined = [{ label: 'Item 1' }];
  config = { position: 'bottom-left' as const };
}

describe('RuiMenuTrigger', () => {
  let fixture: ComponentFixture<TestHost>;
  let trigger: RuiMenuTrigger;
  let menuService: { open: ReturnType<typeof vi.fn>; close: ReturnType<typeof vi.fn> };
  let button: HTMLButtonElement;

  beforeEach(async () => {
    menuService = { open: vi.fn(), close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, TestHost],
      providers: [
        { provide: RuiMenuService, useValue: menuService },
        { provide: RUI_MENU_DEFAULT_OPTIONS, useValue: { position: 'bottom-left' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();

    button = fixture.nativeElement.querySelector('button');
    trigger = fixture.debugElement.children[0].injector.get(RuiMenuTrigger);
  });

  it('should create the directive', () => {
    expect(trigger).toBeTruthy();
  });

  it('host has aria-haspopup="true"', () => {
    expect(button.getAttribute('aria-haspopup')).toBe('true');
  });

  it('host has aria-expanded bound to isOpen', () => {
    expect(button.getAttribute('aria-expanded')).toBe('false');
    trigger.isOpen.set(true);
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('click triggers toggle and opens menu', () => {
    button.click();
    expect(trigger.isOpen()).toBe(true);
    expect(menuService.open).toHaveBeenCalledWith(
      [{ label: 'Item 1' }],
      expect.objectContaining({ position: 'bottom-left' }),
      button,
    );
  });

  it('second click closes menu', () => {
    button.click();
    expect(trigger.isOpen()).toBe(true);

    button.click();
    expect(trigger.isOpen()).toBe(false);
    expect(menuService.close).toHaveBeenCalled();
  });

  it('Enter key toggles menu', () => {
    button.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(trigger.isOpen()).toBe(true);
    expect(menuService.open).toHaveBeenCalled();
  });

  it('Space key toggles menu', () => {
    button.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    expect(trigger.isOpen()).toBe(true);
    expect(menuService.open).toHaveBeenCalled();
  });

  it('open does nothing when no items provided', () => {
    // Create a fresh component with no items
    @Component({
      standalone: true,
      imports: [RuiMenuTrigger],
      template: `<button [ruiMenuTrigger]="undefined" [ruiMenuConfig]="config">Menu</button>`,
    })
    class EmptyHost {
      config = { position: 'bottom-left' as const };
    }

    const emptyFixture = TestBed.createComponent(EmptyHost);
    emptyFixture.detectChanges();
    const mockService = TestBed.inject(RuiMenuService) as unknown as typeof menuService;
    mockService.open.mockClear();

    const btn = emptyFixture.nativeElement.querySelector('button');
    btn.click();
    expect(mockService.open).not.toHaveBeenCalled();
  });

  it('close method sets isOpen to false', () => {
    trigger.isOpen.set(true);
    trigger.close();
    expect(trigger.isOpen()).toBe(false);
    expect(menuService.close).toHaveBeenCalled();
  });

  it('open method calls menuService.open with items, config, and origin', () => {
    trigger.open();
    expect(menuService.open).toHaveBeenCalledWith(
      [{ label: 'Item 1' }],
      expect.objectContaining({ position: 'bottom-left' }),
      button,
    );
  });
});
