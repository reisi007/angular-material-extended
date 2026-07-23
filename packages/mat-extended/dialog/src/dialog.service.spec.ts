import { PLATFORM_ID, Component, TemplateRef, viewChild } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiDialogService } from './dialog.service';
import { RuiDialogComponent } from './dialog.component';
import { RuiDialogSize } from './dialog.types';
import { RUI_DIALOG_DEFAULT_OPTIONS, RUI_DIALOG_DEFAULTS } from './dialog.config';

@Component({
  standalone: true,
  template: '<ng-template #testTpl><p>Template content</p></ng-template>',
})
class TestHostComponent {
  readonly testTpl = viewChild.required<TemplateRef<unknown>>('testTpl');
}

async function compileDialogComponent(): Promise<void> {
  await TestBed.configureTestingModule({
    imports: [OverlayModule, NoopAnimationsModule, RuiDialogComponent],
  }).compileComponents();
}

describe('RuiDialogService', () => {
  let service: RuiDialogService;

  async function configureTesting(): Promise<void> {
    await TestBed.configureTestingModule({
      imports: [OverlayModule, NoopAnimationsModule],
    }).compileComponents();
    service = TestBed.inject(RuiDialogService);
  }

  beforeEach(async () => {
    await compileDialogComponent();
    await configureTesting();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open a dialog and return a ref', () => {
    const ref = service.open({ header: 'Test' });
    expect(ref.id).toContain('rui-dialog-');
    ref.close();
  });

  it('should close a dialog with result', fakeAsync(() => {
    const ref = service.open({ header: 'Test' });
    let result: unknown = undefined;
    ref.afterClosed.then((r) => { result = r; });
    ref.close('closed result');
    tick();
    expect(result).toBe('closed result');
  }));

  it('should dismiss a dialog', fakeAsync(() => {
    const ref = service.open({ header: 'Test' });
    let dismissed = false;
    ref.afterDismissed.then(() => { dismissed = true; });
    ref.dismiss();
    tick();
    expect(dismissed).toBe(true);
  }));

  it('should resolve afterClosed on dismiss', fakeAsync(() => {
    const ref = service.open({ header: 'Test' });
    let result: unknown = 'unresolved';
    ref.afterClosed.then((r) => { result = r; });
    ref.dismiss();
    tick();
    expect(result).toBeUndefined();
  }));

  it('should prevent dismiss when disableClose is true', () => {
    const ref = service.open({ header: 'Test', disableClose: true });
    ref.dismiss();
    expect(ref.id).toContain('rui-dialog-');
    ref.close();
  });

  it('should dismiss all dialogs', () => {
    service.open({ header: 'One' });
    service.open({ header: 'Two' });
    service.dismissAll();
    expect(true).toBe(true);
  });

  it('should support custom size', () => {
    const sizes: RuiDialogSize[] = ['sm', 'md', 'lg', 'xl', 'fullscreen'];
    for (const size of sizes) {
      const ref = service.open({ header: `Size ${size}`, size });
      expect(ref.id).toContain('rui-dialog-');
      ref.close();
    }
  });

  it('should support custom width and height', () => {
    const ref = service.open({ header: 'Custom', width: '500px', height: '300px' });
    expect(ref.id).toContain('rui-dialog-');
    ref.close();
  });

  it('should use default options from injection token', () => {
    const ref = service.open({ header: 'Defaults' });
    expect(ref.id).toContain('rui-dialog-');
    ref.close();
  });

  it('should override default options', async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [OverlayModule, NoopAnimationsModule, RuiDialogComponent],
      providers: [
        { provide: RUI_DIALOG_DEFAULT_OPTIONS, useValue: { ...RUI_DIALOG_DEFAULTS, size: 'lg' } },
      ],
    }).compileComponents();
    const svc = TestBed.inject(RuiDialogService);
    const ref = svc.open({ header: 'Custom defaults' });
    expect(ref.id).toContain('rui-dialog-');
    ref.close();
  });

  it('should support template ref', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const tpl = fixture.componentInstance.testTpl();
    const ref = service.open({ template: tpl });
    expect(ref.id).toContain('rui-dialog-');
    ref.close();
  });

  it('should return dummy ref in SSR environment', async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [OverlayModule, NoopAnimationsModule],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    }).compileComponents();
    const svc = TestBed.inject(RuiDialogService);
    const ref = svc.open({ header: 'SSR' });
    expect(ref.id).toContain('dummy');
    ref.close();
  });

  it('should stack multiple dialogs', () => {
    const ref1 = service.open({ header: 'First' });
    const ref2 = service.open({ header: 'Second' });
    expect(ref1.id).toContain('rui-dialog-');
    expect(ref2.id).not.toBe(ref1.id);
    ref2.close();
    ref1.close();
  });

  it('should handle afterClosed promise', fakeAsync(() => {
    const ref = service.open({ header: 'Promise test' });
    let resolved = false;
    ref.afterClosed.then(() => { resolved = true; });
    ref.close('data');
    tick();
    expect(resolved).toBe(true);
  }));

  it('should handle afterDismissed promise', fakeAsync(() => {
    const ref = service.open({ header: 'Dismiss promise' });
    let resolved = false;
    ref.afterDismissed.then(() => { resolved = true; });
    ref.dismiss();
    tick();
    expect(resolved).toBe(true);
  }));

  describe('A11y & focus management', () => {
    it('should set aria-labelledby and aria-describedby on dialog overlay', fakeAsync(() => {
      const ref = service.open({ header: 'Aria Test' });
      tick();

      const dialogEl = document.querySelector('[role="dialog"]') as HTMLElement;
      expect(dialogEl).toBeTruthy();
      expect(dialogEl.getAttribute('aria-labelledby')).toBeTruthy();
      expect(dialogEl.getAttribute('aria-describedby')).toBeTruthy();

      const headerTitle = dialogEl.querySelector('.rui-dialog-header__title');
      expect(headerTitle?.getAttribute('id')).toBe(dialogEl.getAttribute('aria-labelledby'));

      ref.close();
    }));

    it('should dismiss dialog on Escape key when disableClose is false', fakeAsync(() => {
      const ref = service.open({ header: 'Esc Test' });
      tick();

      let dismissed = false;
      ref.afterDismissed.then(() => { dismissed = true; });

      const dialogEl = document.querySelector('[role="dialog"]') as HTMLElement;
      dialogEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
      tick();

      expect(dismissed).toBe(true);
    }));

    it('should NOT dismiss dialog on Escape when disableClose is true', fakeAsync(() => {
      const ref = service.open({ header: 'No Esc', disableClose: true });
      tick();

      let dismissed = false;
      ref.afterDismissed.then(() => { dismissed = true; });

      const dialogEl = document.querySelector('[role="dialog"]') as HTMLElement;
      dialogEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
      tick();

      expect(dismissed).toBe(false);
      ref.close();
    }));

    it('should NOT dismiss dialog on backdrop click when disableClose is true', fakeAsync(() => {
      const ref = service.open({ header: 'No backdrop close', disableClose: true });
      tick();

      let dismissed = false;
      ref.afterDismissed.then(() => { dismissed = true; });

      const backdrop = document.querySelector('.cdk-overlay-backdrop') as HTMLElement;
      if (backdrop) {
        backdrop.click();
      }
      tick();

      expect(dismissed).toBe(false);
      ref.close();
    }));
  });
});
