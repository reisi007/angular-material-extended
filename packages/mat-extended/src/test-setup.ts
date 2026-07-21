import '@angular/compiler';
import '@analogjs/vitest-angular/setup-zone';

import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { getTestBed } from '@angular/core/testing';
import { createCanvas, Image } from 'canvas';

globalThis.Image = Image as unknown as typeof globalThis.Image;

const originalCreateElement = document.createElement.bind(document);
document.createElement = (tagName: string, options?: ElementCreationOptions) => {
  const el = originalCreateElement(tagName, options) as unknown as HTMLCanvasElement;
  if (tagName.toLowerCase() === 'canvas') {
    const nodeCanvas = createCanvas(300, 150);
    const origGetContext = el.getContext?.bind(el);
    el.getContext = ((contextId: string) => {
      if (contextId === '2d') {
        return nodeCanvas.getContext('2d') as unknown as CanvasRenderingContext2D | null;
      }
      return origGetContext?.(contextId) ?? null;
    }) as unknown as HTMLCanvasElement['getContext'];
    el.toDataURL = ((type?: string, quality?: number) => {
      return (nodeCanvas as { toDataURL(type?: string, quality?: number): string }).toDataURL(type, quality);
    }) as HTMLCanvasElement['toDataURL'];
  }
  return el;
};

class ResizeObserverMock {
  observe() { return; }
  unobserve() { return; }
  disconnect() { return; }
}
globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof globalThis.ResizeObserver;

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting(),
);
