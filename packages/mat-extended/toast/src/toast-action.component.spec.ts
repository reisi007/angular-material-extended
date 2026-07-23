import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RuiToastActionComponent, RuiToastAction } from './toast-action.component';

@Component({
  standalone: true,
  imports: [RuiToastActionComponent],
  template: '<rui-toast-action [action]="action" (actionClick)="onActionClick()" />',
})
class TestHostComponent {
  action: RuiToastAction = { label: 'Undo', onClick: () => { /* noop */ } };
  onActionClick() { /* noop */ }
}

describe('RuiToastActionComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let button: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RuiToastActionComponent, TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('.rui-toast-action');
  });

  it('should render action label text', () => {
    expect(button.textContent?.trim()).toBe('Undo');
  });

  it('should emit actionClick on button click', () => {
    const clickSpy = vi.spyOn(host, 'onActionClick');
    button.click();
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should be a button element', () => {
    expect(button.tagName).toBe('BUTTON');
  });

  it('should have the action CSS class', () => {
    expect(button.classList.contains('rui-toast-action')).toBe(true);
  });
});
