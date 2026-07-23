import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiDialogComponent } from './dialog.component';
import { RuiDialogConfig } from './dialog.types';

const defaultConfig: RuiDialogConfig = {
  header: 'Test Dialog',
};

describe('RuiDialogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiDialogComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  describe('rendering', () => {
    it('creates the component', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      expect(fixture.componentInstance).toBeTruthy();
    });

    it('renders header title from config', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', { header: 'My Dialog' });
      fixture.detectChanges();
      const title = fixture.nativeElement.querySelector('.rui-dialog-header__title');
      expect(title).toBeTruthy();
      expect(title.textContent).toContain('My Dialog');
    });

    it('renders content section', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const content = fixture.nativeElement.querySelector('.rui-dialog__content');
      expect(content).toBeTruthy();
    });

    it('renders footer section', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const footer = fixture.nativeElement.querySelector('.rui-dialog-footer');
      expect(footer).toBeTruthy();
    });
  });

  describe('size classes', () => {
    function createWithSize(size: string): HTMLElement {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', { ...defaultConfig, size } as RuiDialogConfig);
      fixture.detectChanges();
      return fixture.nativeElement.querySelector('.rui-dialog');
    }

    it('applies rui-dialog--sm for size sm', () => {
      expect(createWithSize('sm').classList.contains('rui-dialog--sm')).toBe(true);
    });

    it('applies rui-dialog--md as default', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const dialog = fixture.nativeElement.querySelector('.rui-dialog');
      expect(dialog.classList.contains('rui-dialog--md')).toBe(true);
    });

    it('applies rui-dialog--lg for size lg', () => {
      expect(createWithSize('lg').classList.contains('rui-dialog--lg')).toBe(true);
    });

    it('applies rui-dialog--xl for size xl', () => {
      expect(createWithSize('xl').classList.contains('rui-dialog--xl')).toBe(true);
    });

    it('applies rui-dialog--fullscreen for size fullscreen', () => {
      expect(createWithSize('fullscreen').classList.contains('rui-dialog--fullscreen')).toBe(true);
    });
  });

  describe('close button', () => {
    it('emits dismiss on close button click', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const spy = vi.fn();
      fixture.componentInstance.dismiss.subscribe(spy);

      const closeBtn = fixture.nativeElement.querySelector('.rui-dialog-header__close');
      closeBtn.click();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('does not show close button when disableClose is true', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', { ...defaultConfig, disableClose: true });
      fixture.detectChanges();
      const closeBtn = fixture.nativeElement.querySelector('.rui-dialog-header__close');
      expect(closeBtn).toBeFalsy();
    });
  });

  describe('A11y', () => {
    it('has role="dialog"', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const dialog = fixture.nativeElement.querySelector('.rui-dialog');
      expect(dialog.getAttribute('role')).toBe('dialog');
    });

    it('has aria-modal="true"', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const dialog = fixture.nativeElement.querySelector('.rui-dialog');
      expect(dialog.getAttribute('aria-modal')).toBe('true');
    });

    it('has aria-labelledby linking to the header title id', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const dialog = fixture.nativeElement.querySelector('.rui-dialog');
      const labelledby = dialog.getAttribute('aria-labelledby');
      expect(labelledby).toBeTruthy();

      const header = fixture.nativeElement.querySelector('.rui-dialog-header__title');
      expect(header.getAttribute('id')).toBe(labelledby);
    });

    it('has aria-describedby linking to the content div id', () => {
      const fixture = TestBed.createComponent(RuiDialogComponent);
      fixture.componentRef.setInput('config', defaultConfig);
      fixture.detectChanges();
      const dialog = fixture.nativeElement.querySelector('.rui-dialog');
      const describedby = dialog.getAttribute('aria-describedby');
      expect(describedby).toBeTruthy();

      const content = fixture.nativeElement.querySelector('.rui-dialog__content');
      expect(content.getAttribute('id')).toBe(describedby);
    });
  });
});
