import { Injectable, Injector, inject, ComponentRef, DestroyRef } from '@angular/core';
import { Overlay, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RuiMenuPanel } from './menu-panel.component';
import type { RuiMenuItem, RuiMenuConfig, RuiMenuPosition } from './menu.types';
import { ensureBrowser } from '@all-the.rest/mat-extended';
import { RUI_MENU_DEFAULT_OPTIONS } from './menu.config';

@Injectable({ providedIn: 'root' })
export class RuiMenuService {
  private _overlay = inject(Overlay);
  private _injector = inject(Injector);
  private _defaults = inject(RUI_MENU_DEFAULT_OPTIONS);
  private _destroyRef = inject(DestroyRef);

  private _activeOverlay: OverlayRef | null = null;
  private _activeComponentRef: ComponentRef<RuiMenuPanel> | null = null;

  open(items: RuiMenuItem[], config: RuiMenuConfig, origin: HTMLElement): void {
    this.close();

    if (!ensureBrowser(this._injector)) return;

    const position = config.position ?? this._defaults.position ?? 'bottom-left';
    const closeOnClickOutside = config.closeOnClickOutside ?? this._defaults.closeOnClickOutside ?? true;

    const positionStrategy = this._overlay.position()
      .flexibleConnectedTo(origin)
      .withPositions(this._getPositions(position))
      .withPush(false);

    const overlayRef = this._overlay.create({
      positionStrategy,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      hasBackdrop: closeOnClickOutside,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });

    const portal = new ComponentPortal(RuiMenuPanel);
    const componentRef = overlayRef.attach(portal);
    componentRef.setInput('items', items);
    componentRef.changeDetectorRef.detectChanges();

    const sub = componentRef.instance.selectedItem.subscribe((item) => {
      if (config.closeOnSelect ?? this._defaults.closeOnSelect ?? true) {
        this.close();
      }
      item.handler?.();
    });

    const closeSub = componentRef.instance.closePanel.subscribe(() => {
      this.close();
    });

    if (closeOnClickOutside) {
      overlayRef.backdropClick().subscribe(() => this.close());
    }

    const keydownSub = overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') {
        this.close();
      } else if (event.key === 'ArrowDown') {
        componentRef.instance.onArrowDown();
        componentRef.changeDetectorRef.detectChanges();
        event.preventDefault();
      } else if (event.key === 'ArrowUp') {
        componentRef.instance.onArrowUp();
        componentRef.changeDetectorRef.detectChanges();
        event.preventDefault();
      } else if (event.key === 'Enter' || event.key === ' ') {
        componentRef.instance.onSelect(
          componentRef.instance.items()[componentRef.instance.activeIndex()]
        );
        event.preventDefault();
      }
    });

    overlayRef.detachments().subscribe(() => {
      sub.unsubscribe();
      closeSub.unsubscribe();
      keydownSub.unsubscribe();
      this._activeOverlay = null;
      this._activeComponentRef = null;
    });

    this._activeOverlay = overlayRef;
    this._activeComponentRef = componentRef;

    this._destroyRef.onDestroy(() => this.close());
  }

  close(): void {
    const overlay = this._activeOverlay;
    if (overlay) {
      this._activeOverlay = null;
      this._activeComponentRef = null;
      overlay.detach();
      overlay.dispose();
    }
  }

  private _getPositions(position: RuiMenuPosition): ConnectedPosition[] {
    switch (position) {
      case 'bottom-left':
        return [{ originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' } as ConnectedPosition];
      case 'bottom-right':
        return [{ originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' } as ConnectedPosition];
      case 'top-left':
        return [{ originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' } as ConnectedPosition];
      case 'top-right':
        return [{ originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' } as ConnectedPosition];
    }
  }
}
