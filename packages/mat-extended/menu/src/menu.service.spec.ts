import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, Router } from '@angular/router';
import { RuiMenuService } from './menu.service';
import { OverlayModule } from '@angular/cdk/overlay';
import type { RuiMenuItem } from './menu.types';

describe('RuiMenuService', () => {
  let service: RuiMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule, NoopAnimationsModule],
      providers: [provideRouter([])],
    });
    service = TestBed.inject(RuiMenuService);
  });

  it('creates the service', () => {
    expect(service).toBeTruthy();
  });

  function findPanel(): HTMLElement | null {
    return document.querySelector('[role="menu"]') as HTMLElement | null;
  }

  function findMenuItems(): NodeListOf<HTMLButtonElement> {
    return document.querySelectorAll('button[role="menuitem"]');
  }

  it('open creates overlay', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const items: RuiMenuItem[] = [{ label: 'Test' }];
    service.open(items, { position: 'bottom-left' }, origin);
    expect(document.querySelector('.cdk-overlay-container')).toBeTruthy();
    document.body.removeChild(origin);
    service.close();
  });

  it('close destroys overlay', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const items: RuiMenuItem[] = [{ label: 'Test' }];
    service.open(items, { position: 'bottom-left' }, origin);
    service.close();
    const container = document.querySelector('.cdk-overlay-container');
    expect(container?.childNodes.length ?? 0).toBe(0);
    document.body.removeChild(origin);
  });

  it('items are rendered in panel', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const items: RuiMenuItem[] = [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { separator: true } as RuiMenuItem,
      { label: 'Item 3', disabled: true },
    ];
    service.open(items, { position: 'bottom-left' }, origin);
    const panel = findPanel() as HTMLElement;
    expect(panel).toBeTruthy();
    const buttons = panel.querySelectorAll('button');
    expect(buttons.length).toBe(3);
    const separators = panel.querySelectorAll('.rui-menu-separator');
    expect(separators.length).toBe(1);
    document.body.removeChild(origin);
    service.close();
  });

  it('handles keyboard navigation', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const items: RuiMenuItem[] = [
      { label: 'First' },
      { label: 'Second' },
      { label: 'Third' },
    ];
    service.open(items, { position: 'bottom-left' }, origin);
    const panel = findPanel() as HTMLElement;
    expect(panel).toBeTruthy();
    const buttons = panel.querySelectorAll('button');
    expect(buttons.length).toBe(3);

    const pane = document.querySelector('.cdk-overlay-pane');
    expect(pane).toBeTruthy();

    const eventDown = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
    pane?.dispatchEvent(eventDown);

    const eventDown2 = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
    pane?.dispatchEvent(eventDown2);

    const eventEnter = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    pane?.dispatchEvent(eventEnter);

    const eventEscape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    pane?.dispatchEvent(eventEscape);
    expect(document.querySelector('.cdk-overlay-pane')).toBeFalsy();
    document.body.removeChild(origin);
    service.close();
  });

  it('skips separator and disabled items in keyboard nav', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const items: RuiMenuItem[] = [
      { label: 'First' },
      { separator: true } as RuiMenuItem,
      { label: 'Second', disabled: true },
      { label: 'Third' },
    ];
    service.open(items, { position: 'bottom-left' }, origin);
    const buttons = findMenuItems();
    const nonDisabled = Array.from(buttons).filter((b: HTMLButtonElement) => !b.disabled);
    expect(nonDisabled.length).toBe(2);
    document.body.removeChild(origin);
    service.close();
  });

  it('calls handler on select', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const handler = vi.fn();
    const items: RuiMenuItem[] = [{ label: 'Test', handler }];
    service.open(items, { position: 'bottom-left' }, origin);
    const button = findMenuItems()[0];
    button?.click();
    expect(handler).toHaveBeenCalled();
    document.body.removeChild(origin);
    service.close();
  });

  it('does not call handler for disabled item', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const handler = vi.fn();
    const items: RuiMenuItem[] = [{ label: 'Test', disabled: true, handler }];
    service.open(items, { position: 'bottom-left' }, origin);
    const buttons = findMenuItems();
    expect(buttons.length).toBe(1);
    const button = buttons[0];
    expect(button.disabled).toBe(true);
    button?.click();
    expect(handler).not.toHaveBeenCalled();
    document.body.removeChild(origin);
    service.close();
  });

  it('renders icons when provided', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const items: RuiMenuItem[] = [{ label: 'Edit', icon: '✎' }];
    service.open(items, { position: 'bottom-left' }, origin);
    const buttons = findMenuItems();
    expect(buttons[0].textContent).toContain('✎');
    document.body.removeChild(origin);
    service.close();
  });

  it('renders arrow for items with children', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const items: RuiMenuItem[] = [{ label: 'More', children: [{ label: 'Sub' }] }];
    service.open(items, { position: 'bottom-left' }, origin);
    const buttons = findMenuItems();
    expect(buttons[0].textContent).toContain('›');
    document.body.removeChild(origin);
    service.close();
  });

  it('navigates via routerLink when provided', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const router = TestBed.inject(Router);
    const navigateByUrlSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    const items: RuiMenuItem[] = [{ label: 'Home', routerLink: '/home' }];
    service.open(items, { position: 'bottom-left' }, origin);
    const button = findMenuItems()[0];
    button?.click();
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/home');
    navigateByUrlSpy.mockRestore();
    document.body.removeChild(origin);
    service.close();
  });

  it('navigates via routerLink array when provided', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const items: RuiMenuItem[] = [{ label: 'User', routerLink: ['/users', '123'] }];
    service.open(items, { position: 'bottom-left' }, origin);
    const button = findMenuItems()[0];
    button?.click();
    expect(navigateSpy).toHaveBeenCalledWith(['/users', '123']);
    navigateSpy.mockRestore();
    document.body.removeChild(origin);
    service.close();
  });

  it('calls handler when routerLink is not provided', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const handler = vi.fn();
    const items: RuiMenuItem[] = [{ label: 'Test', handler }];
    service.open(items, { position: 'bottom-left' }, origin);
    const button = findMenuItems()[0];
    button?.click();
    expect(handler).toHaveBeenCalled();
    document.body.removeChild(origin);
    service.close();
  });

  it('does not call handler when routerLink is provided', () => {
    const origin = document.createElement('button');
    document.body.appendChild(origin);
    const handler = vi.fn();
    const router = TestBed.inject(Router);
    const navigateByUrlSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    const items: RuiMenuItem[] = [{ label: 'Home', routerLink: '/home', handler }];
    service.open(items, { position: 'bottom-left' }, origin);
    const button = findMenuItems()[0];
    button?.click();
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/home');
    expect(handler).not.toHaveBeenCalled();
    navigateByUrlSpy.mockRestore();
    document.body.removeChild(origin);
    service.close();
  });

  describe('a11y', () => {
    let origin: HTMLButtonElement;

    beforeEach(() => {
      origin = document.createElement('button');
      origin.textContent = 'Trigger';
      document.body.appendChild(origin);
    });

    afterEach(() => {
      document.body.removeChild(origin);
      service.close();
    });

    it('Escape key dismisses menu overlay', () => {
      const items: RuiMenuItem[] = [{ label: 'Test' }];
      service.open(items, { position: 'bottom-left' }, origin);

      const pane = document.querySelector('.cdk-overlay-pane');
      expect(pane).toBeTruthy();

      const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      pane?.dispatchEvent(event);

      expect(document.querySelector('.cdk-overlay-pane')).toBeFalsy();
    });

    it('Enter key selects active item and closes menu', () => {
      const handler = vi.fn();
      const items: RuiMenuItem[] = [{ label: 'Click Me', handler }];
      service.open(items, { position: 'bottom-left' }, origin);

      const pane = document.querySelector('.cdk-overlay-pane');
      const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      pane?.dispatchEvent(event);

      expect(handler).toHaveBeenCalled();
    });

    it('ArrowDown key moves focus to next item', () => {
      const items: RuiMenuItem[] = [
        { label: 'First' },
        { label: 'Second' },
      ];
      service.open(items, { position: 'bottom-left' }, origin);

      const pane = document.querySelector('.cdk-overlay-pane');
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      pane?.dispatchEvent(event);

      const buttons = document.querySelectorAll('button[role="menuitem"]');
      expect(buttons[1].getAttribute('tabindex')).toBe('0');
    });

    it('ArrowUp key moves focus to previous item', () => {
      const items: RuiMenuItem[] = [
        { label: 'First' },
        { label: 'Second' },
        { label: 'Third' },
      ];
      service.open(items, { position: 'bottom-left' }, origin);

      const pane = document.querySelector('.cdk-overlay-pane');
      const down = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      pane?.dispatchEvent(down);
      pane?.dispatchEvent(down);

      const up = new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true });
      pane?.dispatchEvent(up);

      const buttons = document.querySelectorAll('button[role="menuitem"]');
      expect(buttons[1].getAttribute('tabindex')).toBe('0');
    });

    it('backdrop click dismisses menu when closeOnClickOutside is true', () => {
      const items: RuiMenuItem[] = [{ label: 'Test' }];
      service.open(items, { position: 'bottom-left', closeOnClickOutside: true }, origin);

      const backdrop = document.querySelector('.cdk-overlay-backdrop') as HTMLElement;
      expect(backdrop).toBeTruthy();
      backdrop.click();

      expect(document.querySelector('.cdk-overlay-pane')).toBeFalsy();
    });

    it('items have role="menuitem"', () => {
      const items: RuiMenuItem[] = [
        { label: 'A' },
        { label: 'B', disabled: true },
      ];
      service.open(items, { position: 'bottom-left' }, origin);

      const menuItems = findMenuItems();
      expect(menuItems.length).toBe(2);
      menuItems.forEach(item => {
        expect(item.getAttribute('role')).toBe('menuitem');
      });
    });
  });
});
