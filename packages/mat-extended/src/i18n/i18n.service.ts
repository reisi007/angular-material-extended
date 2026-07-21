import { Injectable, inject } from '@angular/core';
import { RuiLocale, RuiTranslations, RUI_TRANSLATIONS } from './i18n.types';
import { TRANSLATIONS_DE, TRANSLATIONS_EN_GB, TRANSLATIONS_EN_US } from './translations';

const BUILTIN_LOCALES: Record<string, RuiTranslations> = {
  de: TRANSLATIONS_DE,
  'en-GB': TRANSLATIONS_EN_GB,
  'en-US': TRANSLATIONS_EN_US,
};

@Injectable({ providedIn: 'root' })
export class RuiI18nService {
  private _locale: RuiLocale = 'en-GB';
  private _overrides = inject(RUI_TRANSLATIONS, { optional: true }) ?? {};

  setLocale(locale: RuiLocale): void {
    this._locale = locale;
  }

  getLocale(): RuiLocale {
    return this._locale;
  }

  getTranslations(): RuiTranslations {
    const builtin = BUILTIN_LOCALES[this._locale] ?? TRANSLATIONS_EN_GB;
    return this._deepMerge(builtin, this._overrides);
  }

  getComponentTranslations<T extends keyof RuiTranslations>(
    component: T,
  ): Required<NonNullable<RuiTranslations[T]>> {
    const all = this.getTranslations();
    const componentDefaults = (all[component] ?? {}) as RuiTranslations[T];
    const overrides = (this._overrides[component] ?? {}) as Partial<RuiTranslations[T]>;
    return { ...componentDefaults, ...overrides } as Required<NonNullable<RuiTranslations[T]>>;
  }

  private _deepMerge<T>(base: T, override: Partial<T>): T {
    const result = { ...base };
    for (const key of Object.keys(override)) {
      const k = key as keyof T;
      if (
        override[k] !== null &&
        typeof override[k] === 'object' &&
        !Array.isArray(override[k])
      ) {
        result[k] = this._deepMerge(
          (base[k] ?? {}) as Record<string, unknown>,
          override[k] as Partial<Record<string, unknown>>,
        ) as T[keyof T];
      } else if (override[k] !== undefined) {
        result[k] = override[k] as T[keyof T];
      }
    }
    return result;
  }
}
