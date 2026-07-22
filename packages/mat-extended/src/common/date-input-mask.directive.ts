import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { createDateFormats } from './date-adapter';

interface Segment {
  type: 'literal' | 'year' | 'month' | 'day';
  value: string;
}

function parseFormat(format: string): Segment[] {
  const segments: Segment[] = [];
  let i = 0;
  while (i < format.length) {
    const ch = format[i];
    if (!ch) break;
    if (ch === 'Y' || ch === 'M' || ch === 'd') {
      const type = ch === 'Y' ? 'year' : ch === 'M' ? 'month' : 'day';
      let value = '';
      while (i < format.length) {
        const c = format[i];
        if (c === ch) { value += c; i++; } else break;
      }
      segments.push({ type, value });
    } else {
      let value = '';
      while (i < format.length) {
        const c = format[i];
        if (c && c !== 'Y' && c !== 'M' && c !== 'd') { value += c; i++; } else break;
      }
      segments.push({ type: 'literal', value });
    }
  }
  return segments;
}

function applyMask(digits: string, format: string): string {
  const segments = parseFormat(format);
  const separators = segments.filter(s => s.type === 'literal').map(s => s.value);
  let result = '';
  let digitIdx = 0;
  let sepIdx = 0;
  for (const seg of segments) {
    if (seg.type !== 'literal') {
      const count = seg.value.length;
      result += digits.slice(digitIdx, digitIdx + count);
      digitIdx += count;
    } else {
      const sep = separators[sepIdx];
      if (sep !== undefined && digitIdx > 0 && digitIdx < digits.length) {
        result += sep;
      }
      sepIdx++;
    }
  }
  return result;
}

@Directive({
  selector: 'input[ruiDateInputMask]',
  standalone: true,
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useFactory: (elRef: ElementRef<HTMLInputElement>) => {
        const format = elRef.nativeElement.getAttribute('ruiDateInputMask') || 'YYYY-MM-dd';
        return createDateFormats(format);
      },
      deps: [ElementRef],
    },
  ],
})
export class RuiDateInputMask {
  readonly ruiDateInputMask = input<string>('YYYY-MM-dd');

  private readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef);

  @HostListener('input')
  protected onInput(): void {
    const input = this.el.nativeElement;
    const cursorPos = input.selectionStart ?? 0;
    const valueBefore = input.value.slice(0, cursorPos);
    const digitCountBefore = valueBefore.replace(/\D/g, '').length;

    const format = this.ruiDateInputMask();
    const totalDigits = parseFormat(format)
      .filter(s => s.type !== 'literal')
      .reduce((sum, s) => sum + s.value.length, 0);

    const allDigits = input.value.replace(/\D/g, '').slice(0, totalDigits);
    const formatted = applyMask(allDigits, format);

    if (input.value !== formatted) {
      input.value = formatted;

      let newPos = 0;
      let seen = 0;
      while (newPos < formatted.length && seen < digitCountBefore) {
        if (/\d/.test(formatted[newPos])) seen++;
        newPos++;
      }
      input.setSelectionRange(newPos, newPos);
    }
  }
}
