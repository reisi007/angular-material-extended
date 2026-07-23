import { describe, it, expect } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RuiDataTableLoading } from './data-table-loading.component';

describe('RuiDataTableLoading', () => {
  async function setup(loading = false) {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RuiDataTableLoading],
    }).compileComponents();

    const fixture = TestBed.createComponent(RuiDataTableLoading);
    const component = fixture.componentInstance;
    fixture.componentRef.setInput('loading', loading);
    fixture.detectChanges();
    return { fixture, component };
  }

  it('should create', async () => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it('shows mat-spinner when loading is true', async () => {
    const { fixture } = await setup(true);
    const spinner = fixture.nativeElement.querySelector('mat-spinner');
    expect(spinner).toBeTruthy();
  });

  it('hides mat-spinner when loading is false', async () => {
    const { fixture } = await setup(false);
    const spinner = fixture.nativeElement.querySelector('mat-spinner');
    expect(spinner).toBeFalsy();
  });

  it('wraps spinner in a container div', async () => {
    const { fixture } = await setup(true);
    const container = fixture.nativeElement.querySelector('.rui-data-table-loading');
    expect(container).toBeTruthy();
    const spinner = container.querySelector('mat-spinner');
    expect(spinner).toBeTruthy();
  });
});
