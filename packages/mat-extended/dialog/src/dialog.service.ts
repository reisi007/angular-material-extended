import { Injectable, Injector, ApplicationRef, ComponentRef, inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ESCAPE } from '@angular/cdk/keycodes';
import { RuiDialogConfig, RuiDialogRef } from './dialog.types';
import { RUI_DIALOG_DEFAULT_OPTIONS } from './dialog.config';
import { RuiDialogComponent } from './dialog.component';
import { ensureBrowser } from '@all-the.rest/mat-extended';

interface ActiveDialog {
  ref: OverlayRef;
  componentRef: ComponentRef<RuiDialogComponent>;
}

@Injectable({ providedIn: 'root' })
export class RuiDialogService {
  private _overlay = inject(Overlay);
  private _appRef = inject(ApplicationRef);
  private _injector = inject(Injector);
  private _defaults = inject(RUI_DIALOG_DEFAULT_OPTIONS);

  private _activeDialogs = new Map<string, ActiveDialog>();
  private _counter = 0;

  open<T = unknown>(config: RuiDialogConfig<T>): RuiDialogRef<T> {
    if (!ensureBrowser(this._injector)) {
      return this._createDummyRef<T>();
    }

    const merged = { ...this._defaults, ...config } as RuiDialogConfig<T>;
    return this._createDialog<T>(merged);
  }

  dismissAll(): void {
    for (const [id] of this._activeDialogs) {
      this._destroy(id);
    }
  }

  private _createDialog<T = unknown>(config: RuiDialogConfig<T>): RuiDialogRef<T> {
    const id = `rui-dialog-${++this._counter}`;
    const overlayRef = this._createOverlay(config);

    const portal = new ComponentPortal(RuiDialogComponent);
    const componentRef = overlayRef.attach(portal);

    let resolveClosed: ((result?: T) => void) | undefined;
    let resolveDismissed: (() => void) | undefined;
    const afterClosed = new Promise<T | undefined>((resolve) => { resolveClosed = resolve; });
    const afterDismissed = new Promise<void>((resolve) => { resolveDismissed = resolve; });

    const ref: RuiDialogRef<T> = {
      id,
      close: (result?: T) => {
        this._destroy(id);
        if (resolveClosed) resolveClosed(result);
      },
      dismiss: () => {
        if (config.disableClose) return;
        this._destroy(id);
        if (resolveDismissed) resolveDismissed();
        if (resolveClosed) resolveClosed(undefined);
      },
      afterClosed,
      afterDismissed,
    };

    const ctx = { ...(config.context ?? {}), $implicit: ref, dialogRef: ref };
    componentRef.setInput('config', { ...config, context: ctx });

    componentRef.instance.dismiss.subscribe(() => {
      if (config.disableClose) return;
      this._destroy(id);
      if (resolveDismissed) resolveDismissed();
      if (resolveClosed) resolveClosed(undefined);
    });

    if (!config.disableClose) {
      overlayRef.keydownEvents().subscribe((event) => {
        if (event.keyCode === ESCAPE || event.key === 'Escape') {
          event.stopPropagation();
          this._destroy(id);
          if (resolveDismissed) resolveDismissed();
          if (resolveClosed) resolveClosed(undefined);
        }
      });

      overlayRef.backdropClick().subscribe(() => {
        this._destroy(id);
        if (resolveDismissed) resolveDismissed();
        if (resolveClosed) resolveClosed(undefined);
      });
    }

    this._activeDialogs.set(id, {
      ref: overlayRef,
      componentRef,
    });

    return ref;
  }

  private _createOverlay(config: RuiDialogConfig<unknown>): OverlayRef {
    const positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();

    return this._overlay.create({
      positionStrategy,
      hasBackdrop: config.hasBackdrop ?? true,
      backdropClass: config.backdropClass ?? 'cdk-overlay-dark-backdrop',
      scrollStrategy: this._overlay.scrollStrategies.block(),
      panelClass: config.panelClass,
    });
  }

  private _destroy(id: string): void {
    const active = this._activeDialogs.get(id);
    if (!active) return;

    active.componentRef.destroy();
    active.ref.dispose();
    this._activeDialogs.delete(id);
  }

  private _createDummyRef<T = unknown>(): RuiDialogRef<T> {
    const id = `rui-dialog-dummy-${++this._counter}`;
    return {
      id,
      close: () => undefined,
      dismiss: () => undefined,
      afterClosed: Promise.resolve(undefined),
      afterDismissed: Promise.resolve(undefined),
    };
  }
}
