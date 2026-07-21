import { Component, input, signal, inject, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { RuiMenuService } from './menu.service';
import { RUI_MENU_DEFAULT_OPTIONS } from './menu.config';
import type { RuiMenuItem, RuiMenuConfig } from './menu.types';

@Component({
  selector: 'rui-menu-button',
  standalone: true,
  templateUrl: './menu-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-open]': 'isOpen()',
  },
})
export class RuiMenuButton {
  readonly items = input<RuiMenuItem[]>();
  readonly config = input<Partial<RuiMenuConfig>>();
  readonly isOpen = signal(false);
  private _menuService = inject(RuiMenuService);
  private _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private _defaults = inject(RUI_MENU_DEFAULT_OPTIONS);

  toggle(): void {
    const menuItems = this.items();
    if (!menuItems) return;

    if (this.isOpen()) {
      this._menuService.close();
      this.isOpen.set(false);
    } else {
      this._menuService.open(menuItems, { ...this._defaults, ...this.config() }, this._elementRef.nativeElement);
      this.isOpen.set(true);
    }
  }
}
