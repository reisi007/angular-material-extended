import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiDialogHeaderComponent } from './dialog-header.component';

describe('RuiDialogHeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiDialogHeaderComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiDialogHeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders header title text', () => {
    const fixture = TestBed.createComponent(RuiDialogHeaderComponent);
    fixture.componentRef.setInput('header', 'My Header');
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.rui-dialog-header__title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('My Header');
  });

  it('renders close button by default (dismissible)', () => {
    const fixture = TestBed.createComponent(RuiDialogHeaderComponent);
    fixture.componentRef.setInput('header', 'Test');
    fixture.detectChanges();
    const closeBtn = fixture.nativeElement.querySelector('.rui-dialog-header__close');
    expect(closeBtn).toBeTruthy();
  });

  it('hides close button when disableClose is true', () => {
    const fixture = TestBed.createComponent(RuiDialogHeaderComponent);
    fixture.componentRef.setInput('header', 'Test');
    fixture.componentRef.setInput('disableClose', true);
    fixture.detectChanges();
    const closeBtn = fixture.nativeElement.querySelector('.rui-dialog-header__close');
    expect(closeBtn).toBeFalsy();
  });

  it('hides entire header when no header text and disableClose is true', () => {
    const fixture = TestBed.createComponent(RuiDialogHeaderComponent);
    fixture.componentRef.setInput('disableClose', true);
    fixture.detectChanges();
    const headerDiv = fixture.nativeElement.querySelector('.rui-dialog-header');
    expect(headerDiv).toBeFalsy();
  });

  it('emits dismiss on close button click', () => {
    const fixture = TestBed.createComponent(RuiDialogHeaderComponent);
    fixture.componentRef.setInput('header', 'Test');
    fixture.detectChanges();
    const spy = vi.fn();
    fixture.componentInstance.dismiss.subscribe(spy);

    const closeBtn = fixture.nativeElement.querySelector('.rui-dialog-header__close');
    closeBtn.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('A11y', () => {
    it('close button has aria-label', () => {
      const fixture = TestBed.createComponent(RuiDialogHeaderComponent);
      fixture.componentRef.setInput('header', 'Test');
      fixture.detectChanges();
      const closeBtn = fixture.nativeElement.querySelector('.rui-dialog-header__close');
      expect(closeBtn.getAttribute('aria-label')).toBe('Close dialog');
    });
  });
});
