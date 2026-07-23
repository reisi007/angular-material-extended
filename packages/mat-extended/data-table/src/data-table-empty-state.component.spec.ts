import { describe, it, expect } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiDataTableEmptyState } from './data-table-empty-state.component';

describe('RuiDataTableEmptyState', () => {
  async function setup(message?: string) {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RuiDataTableEmptyState],
    }).compileComponents();

    const fixture = TestBed.createComponent(RuiDataTableEmptyState);
    const component = fixture.componentInstance;
    if (message !== undefined) {
      fixture.componentRef.setInput('message', message);
    }
    fixture.detectChanges();
    return { fixture, component };
  }

  it('should create', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it('renders default message', async () => {
    const { fixture } = await setup();
    const messageEl = fixture.nativeElement.querySelector('.rui-empty-state__message');
    expect(messageEl).toBeTruthy();
    expect(messageEl.textContent).toContain('No data available');
  });

  it('renders icon with aria-hidden="true"', async () => {
    const { fixture } = await setup();
    const icon = fixture.nativeElement.querySelector('.rui-empty-state__icon');
    expect(icon).toBeTruthy();
    expect(icon.getAttribute('aria-hidden')).toBe('true');
  });

  it('shows custom message when provided via input', async () => {
    const { fixture } = await setup('Custom empty message');
    const messageEl = fixture.nativeElement.querySelector('.rui-empty-state__message');
    expect(messageEl.textContent).toContain('Custom empty message');
  });

  it('container has implicit role presentation via div', async () => {
    const { fixture } = await setup();
    const container = fixture.nativeElement.querySelector('.rui-empty-state');
    expect(container).toBeTruthy();
    expect(container.tagName).toBe('DIV');
  });
});
