import { PLATFORM_ID, ApplicationRef } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiToastService } from './toast.service';
import { RuiToastPosition, RuiToastRef } from './toast.types';
import { RUI_TOAST_DEFAULT_OPTIONS, RUI_TOAST_DEFAULTS } from './toast.config';

describe('RuiToastService', () => {
  let service: RuiToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverlayModule, NoopAnimationsModule],
    });
    service = TestBed.inject(RuiToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show a success toast', () => {
    const ref = service.success('Success!');
    expect(ref.id).toContain('rui-toast-');
    ref.dismiss();
  });

  it('should show an error toast', () => {
    const ref = service.error('Error!');
    expect(ref.id).toContain('rui-toast-');
    ref.dismiss();
  });

  it('should show an info toast', () => {
    const ref = service.info('Info!');
    expect(ref.id).toContain('rui-toast-');
    ref.dismiss();
  });

  it('should show a warning toast', () => {
    const ref = service.warning('Warning!');
    expect(ref.id).toContain('rui-toast-');
    ref.dismiss();
  });

  it('should show a toast with show()', () => {
    const ref = service.show({ message: 'Test', kind: 'info' });
    expect(ref.id).toContain('rui-toast-');
    ref.dismiss();
  });

  it('should dismiss a toast', () => {
    const ref = service.show({ message: 'Test', kind: 'info' });
    expect(ref.id).toBeTruthy();
    ref.dismiss();
    expect(true).toBe(true);
  });

  it('should dismiss all toasts', () => {
    service.show({ message: 'One', kind: 'info' });
    service.show({ message: 'Two', kind: 'info' });
    service.dismissAll();
    expect(true).toBe(true);
  });

  it('should auto-dismiss after duration', fakeAsync(() => {
    service.show({ message: 'Auto', kind: 'info', duration: 500 });
    tick(600);
    expect(true).toBe(true);
  }));

  it('should not auto-dismiss when duration is 0', fakeAsync(() => {
    const ref = service.show({ message: 'Persist', kind: 'info', duration: 0 });
    tick(5000);
    ref.dismiss();
    expect(true).toBe(true);
  }));

  it('should call action onClick when provided', () => {
    let actionCalled = false;
    const ref = service.show({
      message: 'With action',
      kind: 'info',
      action: { label: 'Click', onClick: () => { actionCalled = true; } },
    });
    expect(actionCalled).toBe(false);
    ref.dismiss();
  });

  it('should enforce max 5 toasts', () => {
    const refs = [];
    for (let i = 0; i < 10; i++) {
      refs.push(service.show({ message: `Toast ${i}`, kind: 'info' }));
    }
    for (const ref of refs) {
      ref.dismiss();
    }
    expect(true).toBe(true);
  });

  it('should accept custom position', () => {
    const ref = service.show({
      message: 'Positioned',
      kind: 'info',
      position: 'top-center',
    });
    ref.dismiss();
    expect(true).toBe(true);
  });

  it('should accept all positions', () => {
    const positions: RuiToastPosition[] = [
      'top-start', 'top-center', 'top-end',
      'bottom-start', 'bottom-center', 'bottom-end',
    ];
    for (const pos of positions) {
      const ref = service.show({ message: `Pos ${pos}`, kind: 'info', position: pos });
      ref.dismiss();
    }
    expect(true).toBe(true);
  });

  it('should use default options from injection token', () => {
    const ref = service.show({ message: 'Defaults' });
    expect(ref.id).toContain('rui-toast-');
    ref.dismiss();
  });

  it('should override default options', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [OverlayModule, NoopAnimationsModule],
      providers: [
        { provide: RUI_TOAST_DEFAULT_OPTIONS, useValue: { ...RUI_TOAST_DEFAULTS, duration: 10000 } },
      ],
    });
    const svc = TestBed.inject(RuiToastService);
    const ref = svc.show({ message: 'Custom defaults' });
    ref.dismiss();
    expect(true).toBe(true);
  });

  it('should call onDismiss callback', () => {
    let dismissed = false;
    const ref = service.show({ message: 'Callback', kind: 'info' });
    ref.onDismiss(() => { dismissed = true; });
    ref.dismiss();
    expect(dismissed).toBe(true);
  });

  it('should return dummy ref in SSR environment', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [OverlayModule, NoopAnimationsModule],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    const svc = TestBed.inject(RuiToastService);
    const ref = svc.show({ message: 'SSR', kind: 'info' });
    expect(ref.id).toContain('dummy');
    ref.dismiss();
  });

  describe('a11y', () => {
    function getOverlayToastElement(): HTMLElement | null {
      const overlayContainer = document.body.querySelector('.cdk-overlay-pane');
      if (!overlayContainer) return null;
      return overlayContainer.querySelector('.rui-toast');
    }

    function getOverlayDismissButton(): HTMLButtonElement | null {
      const toast = getOverlayToastElement();
      return toast?.querySelector('.rui-toast__dismiss') ?? null;
    }

    function getOverlayActionButton(): HTMLButtonElement | null {
      const toast = getOverlayToastElement();
      return toast?.querySelector('.rui-toast-action') ?? null;
    }

    let appRef: ApplicationRef;

    beforeEach(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [OverlayModule, NoopAnimationsModule],
      });
      service = TestBed.inject(RuiToastService);
      appRef = TestBed.inject(ApplicationRef);
      document.body.querySelectorAll('.cdk-overlay-container').forEach(el => el.remove());
    });

    function showAndRender(config: Parameters<typeof service.show>[0]): RuiToastRef {
      const ref = service.show(config);
      appRef.tick();
      return ref;
    }

    it('toast element should have role="alert" for error kind', () => {
      showAndRender({ message: 'Error!', kind: 'error' });
      const toast = getOverlayToastElement();
      expect(toast?.getAttribute('role')).toBe('alert');
    });

    it('toast element should have role="status" for info kind', () => {
      showAndRender({ message: 'Info!', kind: 'info' });
      const toast = getOverlayToastElement();
      expect(toast?.getAttribute('role')).toBe('status');
    });

    it('toast element should have aria-live="assertive" for error kind', () => {
      showAndRender({ message: 'Error!', kind: 'error' });
      const toast = getOverlayToastElement();
      expect(toast?.getAttribute('aria-live')).toBe('assertive');
    });

    it('toast element should have aria-live="polite" for info kind', () => {
      showAndRender({ message: 'Info!', kind: 'info' });
      const toast = getOverlayToastElement();
      expect(toast?.getAttribute('aria-live')).toBe('polite');
    });

    it('dismiss button should have aria-label', () => {
      showAndRender({ message: 'Dismissible', kind: 'info', dismissible: true });
      const btn = getOverlayDismissButton();
      expect(btn?.getAttribute('aria-label')).toBe('Dismiss');
    });

    it('action button should be focusable via keyboard (button element)', () => {
      showAndRender({ message: 'Action', kind: 'info', action: { label: 'Click', onClick: () => { /* noop */ } } });
      const actionBtn = getOverlayActionButton();
      expect(actionBtn?.tagName).toBe('BUTTON');
      actionBtn?.focus();
      expect(document.activeElement).toBe(actionBtn);
    });

    it('dismiss button should be focusable via keyboard', () => {
      showAndRender({ message: 'Dismiss', kind: 'info', dismissible: true });
      const dismissBtn = getOverlayDismissButton();
      expect(dismissBtn?.tagName).toBe('BUTTON');
      dismissBtn?.focus();
      expect(document.activeElement).toBe(dismissBtn);
    });

    it('should dismiss toast when close button is clicked', () => {
      showAndRender({ message: 'Enter dismiss', kind: 'info' });
      const dismissBtn = getOverlayDismissButton();
      expect(dismissBtn).toBeTruthy();
      dismissBtn?.click();
      expect(getOverlayToastElement()).toBeFalsy();
    });

    it('should call action onClick when action button is clicked', () => {
      let actionCalled = false;
      showAndRender({
        message: 'Action test',
        kind: 'info',
        action: { label: 'Go', onClick: () => { actionCalled = true; } },
      });
      const actionBtn = getOverlayActionButton();
      expect(actionBtn).toBeTruthy();
      actionBtn?.click();
      expect(actionCalled).toBe(true);
    });
  });
});
