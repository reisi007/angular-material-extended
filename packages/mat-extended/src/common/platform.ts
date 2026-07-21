import { isPlatformBrowser } from '@angular/common';
import { Injector, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

export function ensureBrowser(injector?: Injector): boolean {
  const platformId = (injector ?? inject(Injector)).get(PLATFORM_ID);
  return isPlatformBrowser(platformId);
}

export function assertBrowser(
  injector?: Injector,
  componentName?: string,
): void {
  if (!ensureBrowser(injector)) {
    throw new Error(
      `${componentName ?? 'Component'} requires a browser environment. Use ensureBrowser() guard before calling this API.`,
    );
  }
}
