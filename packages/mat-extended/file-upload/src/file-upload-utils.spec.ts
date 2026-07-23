import { describe, it, expect } from 'vitest';
import { formatSize } from './file-upload-utils';

describe('formatSize', () => {
  it('returns 0 B for 0 bytes', () => {
    expect(formatSize(0)).toBe('0 B');
  });

  it('returns Unlimited for Infinity', () => {
    expect(formatSize(Infinity)).toBe('Unlimited');
  });

  it('returns Unlimited for NaN', () => {
    expect(formatSize(NaN)).toBe('Unlimited');
  });

  it('formats bytes', () => {
    expect(formatSize(500)).toBe('500 B');
  });

  it('formats 1 KB exactly', () => {
    expect(formatSize(1024)).toBe('1 KB');
  });

  it('formats 1 MB exactly', () => {
    expect(formatSize(1048576)).toBe('1 MB');
  });

  it('formats 1 GB exactly', () => {
    expect(formatSize(1073741824)).toBe('1 GB');
  });

  it('formats 1 TB exactly', () => {
    expect(formatSize(1099511627776)).toBe('1 TB');
  });

  it('formats fractional KB values', () => {
    expect(formatSize(1536)).toBe('1.5 KB');
  });

  it('formats fractional MB values', () => {
    expect(formatSize(1572864)).toBe('1.5 MB');
  });

  it('formats negative bytes', () => {
    expect(formatSize(-1)).toBe('Unlimited');
  });

  it('formats very large numbers', () => {
    const result = formatSize(5 * 1099511627776);
    expect(result).toContain('TB');
  });
});
