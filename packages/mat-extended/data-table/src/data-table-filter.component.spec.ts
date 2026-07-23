import { describe, it, expect, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiDataTableFilter } from './data-table-filter.component';

describe('RuiDataTableFilter', () => {
  async function setup(filterable = true, filterValue = '') {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RuiDataTableFilter],
    }).compileComponents();

    const fixture = TestBed.createComponent(RuiDataTableFilter);
    const component = fixture.componentInstance;
    fixture.componentRef.setInput('filterable', filterable);
    fixture.componentRef.setInput('filterValue', filterValue);
    fixture.detectChanges();
    return { fixture, component };
  }

  it('should create', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it('renders search input when filterable is true', async () => {
    const { fixture } = await setup(true);
    const input = fixture.nativeElement.querySelector('input');
    expect(input).toBeTruthy();
  });

  it('does not render input when filterable is false', async () => {
    const { fixture } = await setup(false);
    const input = fixture.nativeElement.querySelector('input');
    expect(input).toBeFalsy();
  });

  it('emits filterChange on input', async () => {
    const { fixture, component } = await setup(true);
    const spy = vi.fn();
    component.filterChange.subscribe(spy);

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith('test');
  });

  it('shows placeholder on input', async () => {
    const { fixture } = await setup(true);
    const input = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('placeholder')).toBe('Search...');
  });

  it('displays current filterValue', async () => {
    const { fixture } = await setup(true, 'Alice');
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('Alice');
  });
});
