import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiToastComponent } from './toast.component';
import { RuiToastConfig } from './toast.types';

describe('RuiToastComponent', () => {
  let fixture: ComponentFixture<RuiToastComponent>;
  let component: RuiToastComponent;
  let element: HTMLElement;

  function createComponent(overrides?: Partial<RuiToastConfig>): void {
    const defaults: RuiToastConfig = { message: 'Test message', kind: 'info', dismissible: true };
    fixture.componentRef.setInput('config', { ...defaults, ...overrides });
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('.rui-toast');
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RuiToastComponent, NoopAnimationsModule],
    });
    fixture = TestBed.createComponent(RuiToastComponent);
    component = fixture.componentInstance;
  });

  it('should render message text', () => {
    createComponent();
    const message = element.querySelector('.rui-toast__message');
    expect(message?.textContent?.trim()).toBe('Test message');
  });

  it('should show dismiss button when dismissible is true', () => {
    createComponent({ dismissible: true });
    const dismissBtn = element.querySelector('.rui-toast__dismiss');
    expect(dismissBtn).toBeTruthy();
  });

  it('should hide dismiss button when dismissible is false', () => {
    createComponent({ dismissible: false });
    const dismissBtn = element.querySelector('.rui-toast__dismiss');
    expect(dismissBtn).toBeFalsy();
  });

  it('should show action button when action is provided', () => {
    createComponent({ action: { label: 'Undo', onClick: () => { /* noop */ } } });
    const actionBtn = element.querySelector('rui-toast-action');
    expect(actionBtn).toBeTruthy();
  });

  it('should hide action button when no action is provided', () => {
    createComponent({ action: undefined });
    const actionBtn = element.querySelector('rui-toast-action');
    expect(actionBtn).toBeFalsy();
  });

  it('should emit dismiss when close button is clicked', () => {
    createComponent({ dismissible: true });
    let dismissed = false;
    const sub = component.dismiss.subscribe(() => dismissed = true);
    const dismissBtn = element.querySelector('.rui-toast__dismiss') as HTMLButtonElement;
    dismissBtn.click();
    expect(dismissed).toBe(true);
    sub.unsubscribe();
  });

  describe('a11y', () => {
    it('should have role="alert" for error kind', () => {
      createComponent({ kind: 'error' });
      expect(element.getAttribute('role')).toBe('alert');
    });

    it('should have role="status" for info kind', () => {
      createComponent({ kind: 'info' });
      expect(element.getAttribute('role')).toBe('status');
    });

    it('should have role="status" for success kind', () => {
      createComponent({ kind: 'success' });
      expect(element.getAttribute('role')).toBe('status');
    });

    it('should have role="status" for warning kind', () => {
      createComponent({ kind: 'warning' });
      expect(element.getAttribute('role')).toBe('status');
    });

    it('should have aria-live="assertive" for error kind', () => {
      createComponent({ kind: 'error' });
      expect(element.getAttribute('aria-live')).toBe('assertive');
    });

    it('should have aria-live="polite" for info kind', () => {
      createComponent({ kind: 'info' });
      expect(element.getAttribute('aria-live')).toBe('polite');
    });

    it('should respect custom ariaLive override', () => {
      createComponent({ kind: 'info', ariaLive: 'assertive' });
      expect(element.getAttribute('aria-live')).toBe('assertive');
    });

    it('should have aria-label on dismiss button', () => {
      createComponent({ dismissible: true });
      const dismissBtn = element.querySelector('.rui-toast__dismiss');
      expect(dismissBtn?.getAttribute('aria-label')).toBe('Dismiss');
    });
  });

  describe('borderColor', () => {
    function getBorderColor(overrides?: Partial<RuiToastConfig>): string {
      const defaults: RuiToastConfig = { message: 'Test', kind: 'info', dismissible: true };
      fixture.componentRef.setInput('config', { ...defaults, ...overrides });
      fixture.detectChanges();
      return component.borderColor();
    }

    it('should return primary for success', () => {
      expect(getBorderColor({ kind: 'success' })).toBe('var(--mat-sys-primary)');
    });

    it('should return error for error', () => {
      expect(getBorderColor({ kind: 'error' })).toBe('var(--mat-sys-error)');
    });

    it('should return tertiary for info', () => {
      expect(getBorderColor({ kind: 'info' })).toBe('var(--mat-sys-tertiary)');
    });

    it('should return error-container for warning', () => {
      expect(getBorderColor({ kind: 'warning' })).toBe('var(--mat-sys-error-container)');
    });
  });
});
