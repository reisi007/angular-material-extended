import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiDialogFooterComponent } from './dialog-footer.component';

describe('RuiDialogFooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuiDialogFooterComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(RuiDialogFooterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders footer container', () => {
    const fixture = TestBed.createComponent(RuiDialogFooterComponent);
    fixture.detectChanges();
    const footer = fixture.nativeElement.querySelector('.rui-dialog-footer');
    expect(footer).toBeTruthy();
  });
});
