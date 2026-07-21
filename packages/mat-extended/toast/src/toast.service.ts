import { Injectable, Injector, ApplicationRef, ComponentRef, inject } from '@angular/core';
import { Overlay, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RuiToastConfig, RuiToastRef, RuiToastPosition } from './toast.types';
import { RUI_TOAST_DEFAULT_OPTIONS } from './toast.config';
import { RuiToastComponent } from './toast.component';
import { ensureBrowser } from '@all-the.rest/mat-extended';

const MAX_TOASTS = 5;
const TOAST_GAP = 8;

interface ActiveToast {
  ref: OverlayRef;
  componentRef: ComponentRef<RuiToastComponent>;
}

@Injectable({ providedIn: 'root' })
export class RuiToastService {
  private _overlay = inject(Overlay);
  private _appRef = inject(ApplicationRef);
  private _injector = inject(Injector);
  private _defaults = inject(RUI_TOAST_DEFAULT_OPTIONS);

  private _activeToasts = new Map<string, ActiveToast>();
  private _counter = 0;

  success(message: string, config?: Partial<RuiToastConfig>): RuiToastRef {
    return this.show({ message, kind: 'success', ...config });
  }

  error(message: string, config?: Partial<RuiToastConfig>): RuiToastRef {
    return this.show({ message, kind: 'error', dismissible: true, ...config });
  }

  info(message: string, config?: Partial<RuiToastConfig>): RuiToastRef {
    return this.show({ message, kind: 'info', ...config });
  }

  warning(message: string, config?: Partial<RuiToastConfig>): RuiToastRef {
    return this.show({ message, kind: 'warning', ...config });
  }

  show(config: RuiToastConfig): RuiToastRef {
    if (!ensureBrowser(this._injector)) {
      return this._createDummyRef();
    }

    const merged: RuiToastConfig = { ...this._defaults, ...config };
    return this._createToast(merged);
  }

  dismissAll(): void {
    for (const [id] of this._activeToasts) {
      this._dismiss(id);
    }
  }

  private _createToast(config: RuiToastConfig): RuiToastRef {
    this._enforceMaxToasts();

    const id = `rui-toast-${++this._counter}`;
    const pos = config.position ?? this._defaults.position ?? 'top-end';
    const position = this._buildPosition(pos);

    const overlayRef = this._overlay.create({
      positionStrategy: position,
      hasBackdrop: false,
      scrollStrategy: this._overlay.scrollStrategies.noop(),
    });

    const portal = new ComponentPortal(RuiToastComponent);
    const componentRef = overlayRef.attach(portal);
    componentRef.setInput('config', { ...config, position: pos });

    componentRef.instance.dismiss.subscribe(() => {
      this._dismiss(id);
    });

    const ref: RuiToastRef = {
      id,
      dismiss: () => this._dismiss(id),
      onDismiss: (_callback: () => void) => {
        const orig = ref.dismiss;
        ref.dismiss = () => {
          orig();
          _callback();
        };
      },
    };

    this._activeToasts.set(id, { ref: overlayRef, componentRef });
    this._repositionAll();

    if (config.duration && config.duration > 0) {
      setTimeout(() => this._dismiss(id), config.duration);
    }

    return ref;
  }

  private _dismiss(id: string): void {
    const active = this._activeToasts.get(id);
    if (!active) return;

    active.componentRef.destroy();
    active.ref.dispose();
    this._activeToasts.delete(id);
    this._repositionAll();
  }

  private _buildPosition(position: RuiToastPosition): GlobalPositionStrategy {
    const strategy = this._overlay.position().global();
    const isTop = position.startsWith('top');

    if (position === 'top-start' || position === 'bottom-start') {
      strategy.left('16px');
    } else if (position === 'top-end' || position === 'bottom-end') {
      strategy.right('16px');
    } else {
      strategy.centerHorizontally();
    }

    if (isTop) {
      strategy.top('16px');
    } else {
      strategy.bottom('16px');
    }

    return strategy;
  }

  private _repositionAll(): void {
    const entries = Array.from(this._activeToasts.entries());
    const groups = new Map<string, { index: number; active: ActiveToast }[]>();

    for (const [key, active] of entries) {
      const pos = active.componentRef.instance.config().position ?? this._defaults.position ?? 'top-end';
      const group = groups.get(pos) ?? [];
      group.push({ index: parseInt(key.split('-').pop() ?? '0', 10), active });
      if (!groups.has(pos)) groups.set(pos, group);
    }

    for (const [pos, groupEntries] of groups) {
      const isTop = pos.startsWith('top');
      for (let i = 0; i < groupEntries.length; i++) {
        const { active } = groupEntries[i];
        const strategy = this._buildPosition(pos as RuiToastPosition);
        if (isTop) {
          strategy.top(`${16 + i * (TOAST_GAP + 56)}px`);
        } else {
          strategy.bottom(`${16 + i * (TOAST_GAP + 56)}px`);
        }
        active.ref.updatePositionStrategy(strategy);
        active.ref.updatePosition();
      }
    }
  }

  private _enforceMaxToasts(): void {
    while (this._activeToasts.size >= MAX_TOASTS) {
      const firstKey = this._activeToasts.keys().next().value;
      if (firstKey) {
        this._dismiss(firstKey);
      }
    }
  }

  private _createDummyRef(): RuiToastRef {
    const id = `rui-toast-dummy-${++this._counter}`;
    return { id, dismiss: () => undefined, onDismiss: () => undefined };
  }
}
