import { describe, it, expect } from 'vitest';
import { createKeyboardGridNavigation } from './a11y';

describe('createKeyboardGridNavigation', () => {
  it('should return current index for unknown key', () => {
    const nav = createKeyboardGridNavigation(4, 3);
    expect(nav('Space', 5)).toBe(5);
  });

  describe('ArrowRight', () => {
    it('should increment index', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowRight', 0)).toBe(1);
      expect(nav('ArrowRight', 5)).toBe(6);
    });

    it('should not exceed last index', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowRight', 11)).toBe(11);
    });
  });

  describe('ArrowLeft', () => {
    it('should decrement index', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowLeft', 5)).toBe(4);
      expect(nav('ArrowLeft', 1)).toBe(0);
    });

    it('should not go below 0', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowLeft', 0)).toBe(0);
    });
  });

  describe('ArrowDown', () => {
    it('should increment index by column count', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowDown', 0)).toBe(4);
      expect(nav('ArrowDown', 2)).toBe(6);
    });

    it('should not exceed last index', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowDown', 9)).toBe(11);
      expect(nav('ArrowDown', 10)).toBe(11);
    });
  });

  describe('ArrowUp', () => {
    it('should decrement index by column count', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowUp', 4)).toBe(0);
      expect(nav('ArrowUp', 6)).toBe(2);
    });

    it('should not go below 0', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('ArrowUp', 3)).toBe(0);
      expect(nav('ArrowUp', 2)).toBe(0);
      expect(nav('ArrowUp', 0)).toBe(0);
    });
  });

  describe('Home', () => {
    it('should go to index 0', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('Home', 7)).toBe(0);
      expect(nav('Home', 0)).toBe(0);
    });
  });

  describe('End', () => {
    it('should go to last index', () => {
      const nav = createKeyboardGridNavigation(4, 3);
      expect(nav('End', 0)).toBe(11);
      expect(nav('End', 7)).toBe(11);
    });
  });

  describe('edge cases', () => {
    it('should work with 1-column grid (single row)', () => {
      const nav = createKeyboardGridNavigation(1, 5);
      expect(nav('ArrowRight', 0)).toBe(1);
      expect(nav('ArrowDown', 0)).toBe(1);
      expect(nav('ArrowUp', 1)).toBe(0);
    });

    it('should work with 1-row grid (single column)', () => {
      const nav = createKeyboardGridNavigation(5, 1);
      expect(nav('ArrowRight', 0)).toBe(1);
      expect(nav('ArrowDown', 0)).toBe(4);
      expect(nav('ArrowUp', 3)).toBe(0);
    });

    it('should work with single cell grid', () => {
      const nav = createKeyboardGridNavigation(1, 1);
      expect(nav('ArrowRight', 0)).toBe(0);
      expect(nav('ArrowDown', 0)).toBe(0);
      expect(nav('ArrowUp', 0)).toBe(0);
      expect(nav('ArrowLeft', 0)).toBe(0);
      expect(nav('Home', 0)).toBe(0);
      expect(nav('End', 0)).toBe(0);
    });
  });
});
