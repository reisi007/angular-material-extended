import { Directive, input, signal, inject, ElementRef } from '@angular/core';
import type { RuiMenuItem, RuiMenuConfig } from './menu.types';
import { RuiMenuService } from './menu.service';
import { RUI_MENU_DEFAULT_OPTIONS } from './menu.config';

@Directive({
  selector: '[ruiMenuTrigger]',
  standalone: true,
  host: {
    '(click)': 'toggle()',
    '(keydown.enter)': 'toggle()',
    '(keydown.space)': 'toggle()',
    'aria-haspopup': 'true',
    '[attr.aria-expanded]': 'isOpen()',
  },
})
export class RuiMenuTrigger {
  readonly ruiMenuTrigger = input<RuiMenuItem[]>();
  readonly ruiMenuConfig = input<Partial<RuiMenuConfig>>();

  readonly isOpen = signal(false);
  private _menuService = inject(RuiMenuService);
  private _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private _defaults = inject(RUI_MENU_DEFAULT_OPTIONS);

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    const items = this.ruiMenuTrigger();
    if (!items) return;
    this._menuService.open(items, {
      ...this._defaults,
      ...this.ruiMenuConfig(),
      onClose: () => this.isOpen.set(false),
    }, this._elementRef.nativeElement);
    this.isOpen.set(true);
  }

  close(): void {
    this._menuService.close();
    this.isOpen.set(false);
  }
}
