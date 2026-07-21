import { describe, it, expect } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { RuiI18nService } from './i18n.service';
import { RUI_TRANSLATIONS } from './i18n.types';

describe('RuiI18nService', () => {
  it('creates the service', () => {
    const service = TestBed.inject(RuiI18nService);
    expect(service).toBeTruthy();
  });

  it('defaults to en-GB locale', () => {
    const service = TestBed.inject(RuiI18nService);
    expect(service.getLocale()).toBe('en-GB');
  });

  it('setLocale changes the locale', () => {
    const service = TestBed.inject(RuiI18nService);
    service.setLocale('de');
    expect(service.getLocale()).toBe('de');
  });

  it('returns German translations for de locale', () => {
    const service = TestBed.inject(RuiI18nService);
    service.setLocale('de');
    const t = service.getComponentTranslations('fileUpload');
    expect(t.dropzoneText).toBe('Dateien hier ablegen oder klicken zum Durchsuchen');
  });

  it('returns English translations for en-GB locale', () => {
    const service = TestBed.inject(RuiI18nService);
    service.setLocale('en-GB');
    const t = service.getComponentTranslations('fileUpload');
    expect(t.dropzoneText).toBe('Drop files here or click to browse');
  });

  it('allows overriding translations via DI token', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RUI_TRANSLATIONS,
          useValue: {
            fileUpload: {
              dropzoneText: 'Custom drop text',
            },
          },
        },
      ],
    });
    const service = TestBed.inject(RuiI18nService);
    service.setLocale('en-GB');
    const t = service.getComponentTranslations('fileUpload');
    expect(t.dropzoneText).toBe('Custom drop text');
    expect(t.uploadButtonText).toBe('Upload');
  });

  it('supports adding new locales via RUI_TRANSLATIONS', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RUI_TRANSLATIONS,
          useValue: {
            fileUpload: {
              dropzoneText: 'Fichiers ici',
              uploadButtonText: 'Télécharger',
            },
          },
        },
      ],
    });
    const service = TestBed.inject(RuiI18nService);
    service.setLocale('fr');
    const t = service.getComponentTranslations('fileUpload');
    expect(t.dropzoneText).toBe('Fichiers ici');
    expect(t.uploadButtonText).toBe('Télécharger');
  });

  it('returns all component translations', () => {
    const service = TestBed.inject(RuiI18nService);
    const all = service.getTranslations();
    expect(all.cropper).toBeTruthy();
    expect(all.fileUpload).toBeTruthy();
    expect(all.toast).toBeTruthy();
    expect(all.dataTable).toBeTruthy();
    expect(all.dialog).toBeTruthy();
    expect(all.menu).toBeTruthy();
  });
});
