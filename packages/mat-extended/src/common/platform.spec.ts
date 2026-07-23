import { PLATFORM_ID, Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ensureBrowser, assertBrowser } from './platform';

describe('ensureBrowser', () => {
  it('should return true in browser environment', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });
    const injector = TestBed.inject(Injector);
    expect(ensureBrowser(injector)).toBe(true);
  });

  it('should return false in server environment', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    const injector = TestBed.inject(Injector);
    expect(ensureBrowser(injector)).toBe(false);
  });

  it('should work without explicit injector in browser', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });
    TestBed.runInInjectionContext(() => {
      expect(ensureBrowser()).toBe(true);
    });
  });
});

describe('assertBrowser', () => {
  it('should not throw in browser environment', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });
    const injector = TestBed.inject(Injector);
    expect(() => assertBrowser(injector, 'TestComponent')).not.toThrow();
  });

  it('should throw in server environment', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    const injector = TestBed.inject(Injector);
    expect(() => assertBrowser(injector, 'TestComponent')).toThrow(
      'TestComponent requires a browser environment',
    );
  });

  it('should use default component name when not provided', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    const injector = TestBed.inject(Injector);
    expect(() => assertBrowser(injector)).toThrow(
      'Component requires a browser environment',
    );
  });
});
