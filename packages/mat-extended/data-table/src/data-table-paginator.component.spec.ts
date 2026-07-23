import { describe, it, expect, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RuiDataTablePaginator } from './data-table-paginator.component';
import type { PageEvent } from '@angular/material/paginator';

describe('RuiDataTablePaginator', () => {
  async function setup(pageSize = 10, pageSizeOptions?: number[]) {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatPaginatorModule, RuiDataTablePaginator],
    }).compileComponents();

    const fixture = TestBed.createComponent(RuiDataTablePaginator);
    const component = fixture.componentInstance;
    fixture.componentRef.setInput('pageSize', pageSize);
    if (pageSizeOptions) {
      fixture.componentRef.setInput('pageSizeOptions', pageSizeOptions);
    }
    fixture.detectChanges();
    return { fixture, component };
  }

  it('should create', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it('renders mat-paginator', async () => {
    const { fixture } = await setup();
    const paginator = fixture.nativeElement.querySelector('mat-paginator');
    expect(paginator).toBeTruthy();
  });

  it('emits pageChange event', async () => {
    const { component } = await setup();
    const spy = vi.fn();
    component.pageChange.subscribe(spy);

    const event: PageEvent = { pageIndex: 1, pageSize: 10, length: 30 };
    component.pageChange.emit(event);
    expect(spy).toHaveBeenCalledWith(event);
  });

  it('has aria-label on paginator', async () => {
    const { fixture } = await setup();
    const paginator = fixture.nativeElement.querySelector('mat-paginator');
    expect(paginator.getAttribute('aria-label')).toBe('Select page');
  });

  it('shows showFirstLastButtons', async () => {
    const { fixture } = await setup();
    const paginator = fixture.nativeElement.querySelector('mat-paginator');
    expect(paginator.hasAttribute('showfirstlastbuttons')).toBe(true);
  });
});
