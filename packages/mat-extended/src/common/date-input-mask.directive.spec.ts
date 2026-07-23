import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RuiDateInputMask } from './date-input-mask.directive';

@Component({
  standalone: true,
  imports: [RuiDateInputMask],
  template: '<input ruiDateInputMask="YYYY-MM-dd" />',
})
class TestHostComponent {}

@Component({
  standalone: true,
  imports: [RuiDateInputMask],
  template: '<input ruiDateInputMask="dd.MM.YYYY" />',
})
class TestHostDotComponent {}

@Component({
  standalone: true,
  imports: [RuiDateInputMask],
  template: '<input ruiDateInputMask="MM/dd/YYYY" />',
})
class TestHostSlashComponent {}

describe('RuiDateInputMask', () => {
  describe('YYYY-MM-dd format', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let input: HTMLInputElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      fixture.detectChanges();
      input = fixture.nativeElement.querySelector('input');
    });

    it('should format digits with separators', () => {
      input.value = '20261224';
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('2026-12-24');
    });

    it('should handle partial input', () => {
      input.value = '2026';
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('2026');
    });

    it('should strip non-digit characters', () => {
      input.value = '20ab26-12-24';
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('2026-12-24');
    });

    it('should truncate excess digits', () => {
      input.value = '20261224123456';
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('2026-12-24');
    });

    it('should handle empty input', () => {
      input.value = '';
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('');
    });

    it('should preserve cursor position after formatting', () => {
      input.value = '2026';
      input.setSelectionRange(4, 4);
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('2026');
    });
  });

  describe('dd.MM.YYYY format', () => {
    let fixture: ComponentFixture<TestHostDotComponent>;
    let input: HTMLInputElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostDotComponent);
      fixture.detectChanges();
      input = fixture.nativeElement.querySelector('input');
    });

    it('should format digits with dot separators', () => {
      input.value = '24122026';
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('24.12.2026');
    });
  });

  describe('MM/dd/YYYY format', () => {
    let fixture: ComponentFixture<TestHostSlashComponent>;
    let input: HTMLInputElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostSlashComponent);
      fixture.detectChanges();
      input = fixture.nativeElement.querySelector('input');
    });
    it('should format digits with slash separators', () => {
      input.value = '12242026';
      input.dispatchEvent(new Event('input'));
      expect(input.value).toBe('12/24/2026');
    });
  });
});
