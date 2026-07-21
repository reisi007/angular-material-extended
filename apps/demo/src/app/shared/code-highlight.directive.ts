import { Directive, ElementRef, AfterViewInit, Input, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import hljs from 'highlight.js';

@Directive({
  selector: '[ruiCodeHighlight]',
  standalone: true,
})
export class RuiCodeHighlight implements AfterViewInit {
  @Input() language = 'html';

  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const code = this.el.nativeElement.querySelector('code');
    if (!code) return;
    code.classList.add(`language-${this.language}`);
    hljs.highlightElement(code as HTMLElement);
  }
}
