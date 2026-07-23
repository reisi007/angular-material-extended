import { describe, it, expect, beforeEach } from 'vitest';
import { RuiCropperInteraction } from './cropper-interaction';

describe('RuiCropperInteraction', () => {
  let interaction: RuiCropperInteraction;

  beforeEach(() => {
    interaction = new RuiCropperInteraction();
  });

  it('starts with mode none', () => {
    expect(interaction.mode).toBe('none');
  });

  describe('beginMove', () => {
    it('sets mode to move and stores starting state', () => {
      interaction.beginMove(0.3, 0.4, { x: 0.1, y: 0.1, width: 0.5, height: 0.5 });
      expect(interaction.mode).toBe('move');
      expect(interaction.startX).toBe(0.3);
      expect(interaction.startY).toBe(0.4);
      expect(interaction.startCropRect).toEqual({ x: 0.1, y: 0.1, width: 0.5, height: 0.5 });
    });
  });

  describe('beginResize', () => {
    it('sets mode to resize-nw', () => {
      interaction.beginResize('nw', 0.3, 0.4, { x: 0.2, y: 0.2, width: 0.6, height: 0.6 });
      expect(interaction.mode).toBe('resize-nw');
    });

    it('sets mode to resize-ne', () => {
      interaction.beginResize('ne', 0.3, 0.4, { x: 0.2, y: 0.2, width: 0.6, height: 0.6 });
      expect(interaction.mode).toBe('resize-ne');
    });

    it('sets mode to resize-sw', () => {
      interaction.beginResize('sw', 0.3, 0.4, { x: 0.2, y: 0.2, width: 0.6, height: 0.6 });
      expect(interaction.mode).toBe('resize-sw');
    });

    it('sets mode to resize-se', () => {
      interaction.beginResize('se', 0.5, 0.5, { x: 0.2, y: 0.2, width: 0.6, height: 0.6 });
      expect(interaction.mode).toBe('resize-se');
    });
  });

  describe('updateRect', () => {
    it('returns fallback rect when startCropRect is null', () => {
      const result = interaction.updateRect(0, 0, 800, 600, null);
      expect(result).toEqual({ x: 0, y: 0, width: 1, height: 1 });
    });

    it('moves crop rect relative to start position', () => {
      interaction.beginMove(0.3, 0.4, { x: 0.2, y: 0.2, width: 0.6, height: 0.6 });
      const result = interaction.updateRect(0.5, 0.6, 800, 600, null);
      expect(result.x).toBeCloseTo(0.4);
      expect(result.y).toBeCloseTo(0.4);
      expect(result.width).toBeCloseTo(0.6);
      expect(result.height).toBeCloseTo(0.6);
    });

    it('resizes from se handle', () => {
      interaction.beginResize('se', 0.5, 0.5, { x: 0.2, y: 0.2, width: 0.3, height: 0.3 });
      const result = interaction.updateRect(0.7, 0.7, 800, 600, null);
      expect(result.width).toBeCloseTo(0.5);
      expect(result.height).toBeCloseTo(0.5);
    });

    it('resizes from nw handle', () => {
      interaction.beginResize('nw', 0.5, 0.5, { x: 0.3, y: 0.3, width: 0.4, height: 0.4 });
      const result = interaction.updateRect(0.3, 0.3, 800, 600, null);
      expect(result.x).toBeCloseTo(0.1);
      expect(result.y).toBeCloseTo(0.1);
      expect(result.width).toBeCloseTo(0.6);
      expect(result.height).toBeCloseTo(0.6);
    });

    it('resizes from ne handle', () => {
      interaction.beginResize('ne', 0.5, 0.5, { x: 0.3, y: 0.3, width: 0.4, height: 0.4 });
      const result = interaction.updateRect(0.7, 0.3, 800, 600, null);
      expect(result.width).toBeCloseTo(0.6);
      expect(result.y).toBeCloseTo(0.1);
      expect(result.height).toBeCloseTo(0.6);
    });

    it('resizes from sw handle', () => {
      interaction.beginResize('sw', 0.5, 0.5, { x: 0.3, y: 0.3, width: 0.4, height: 0.4 });
      const result = interaction.updateRect(0.3, 0.7, 800, 600, null);
      expect(result.x).toBeCloseTo(0.1);
      expect(result.width).toBeCloseTo(0.6);
      expect(result.height).toBeCloseTo(0.6);
    });

    it('clamps x to 0 when moving past left boundary', () => {
      interaction.beginMove(0.1, 0.1, { x: 0.2, y: 0.2, width: 0.6, height: 0.6 });
      const result = interaction.updateRect(-0.2, -0.2, 800, 600, null);
      expect(result.x).toBe(0);
      expect(result.y).toBe(0);
    });

    it('clamps x so rect does not exceed right boundary', () => {
      interaction.beginMove(0.1, 0.1, { x: 0.5, y: 0.5, width: 0.5, height: 0.5 });
      const result = interaction.updateRect(0.8, 0.8, 800, 600, null);
      expect(result.x).toBe(0.5);
      expect(result.y).toBe(0.5);
    });

    it('enforces minimum width and height', () => {
      interaction.beginResize('se', 0.5, 0.5, { x: 0.2, y: 0.2, width: 0.001, height: 0.001 });
      const result = interaction.updateRect(0.49, 0.49, 800, 600, null, 0.005, 0.005);
      expect(result.width).toBe(0.005);
      expect(result.height).toBe(0.005);
    });
  });

  describe('aspect ratio constraints', () => {
    it('applies aspect ratio for se resize', () => {
      interaction.beginResize('se', 0.5, 0.5, { x: 0.2, y: 0.2, width: 0.3, height: 0.3 });
      const result = interaction.updateRect(0.8, 0.8, 800, 600, 1);
      expect(result.width).toBeCloseTo(0.6);
      expect(result.height).toBeCloseTo(0.6);
    });

    it('applies aspect ratio for nw resize', () => {
      interaction.beginResize('nw', 0.7, 0.7, { x: 0.4, y: 0.4, width: 0.3, height: 0.3 });
      const result = interaction.updateRect(0.5, 0.5, 800, 600, 1);
      expect(result.width).toBeCloseTo(0.5);
      expect(result.height).toBeCloseTo(0.5);
      expect(result.x).toBeCloseTo(0.2);
      expect(result.y).toBeCloseTo(0.2);
    });

    it('applies aspect ratio for ne resize', () => {
      interaction.beginResize('ne', 0.7, 0.7, { x: 0.4, y: 0.4, width: 0.3, height: 0.3 });
      const result = interaction.updateRect(0.9, 0.5, 800, 600, 1);
      expect(result.width).toBeCloseTo(0.5);
      expect(result.height).toBeCloseTo(0.5);
      expect(result.y).toBeCloseTo(0.2);
    });

    it('applies aspect ratio for sw resize', () => {
      interaction.beginResize('sw', 0.7, 0.7, { x: 0.4, y: 0.4, width: 0.3, height: 0.3 });
      const result = interaction.updateRect(0.5, 0.9, 800, 600, 1);
      expect(result.width).toBeCloseTo(0.5);
      expect(result.height).toBeCloseTo(0.5);
      expect(result.x).toBeCloseTo(0.2);
    });

    it('does not apply aspect ratio for move mode', () => {
      interaction.beginMove(0.5, 0.5, { x: 0.2, y: 0.2, width: 0.3, height: 0.3 });
      const result = interaction.updateRect(0.6, 0.6, 800, 600, 1.5);
      expect(result.width).toBeCloseTo(0.3);
      expect(result.height).toBeCloseTo(0.3);
    });
  });

  describe('pinch zoom', () => {
    it('beginPinch stores distance and current zoom', () => {
      interaction.beginPinch(100, 2);
      expect(interaction.startPinchDist).toBe(100);
      expect(interaction.startZoom).toBe(2);
    });

    it('updatePinch calculates new zoom from distance ratio', () => {
      interaction.beginPinch(100, 1);
      const result = interaction.updatePinch(150);
      expect(result).toBe(1.5);
    });

    it('updatePinch returns startZoom when startPinchDist is 0', () => {
      const result = interaction.updatePinch(150);
      expect(result).toBe(1);
    });
  });

  describe('end and reset', () => {
    it('end sets mode to none', () => {
      interaction.beginMove(0.3, 0.4, { x: 0.1, y: 0.1, width: 0.5, height: 0.5 });
      interaction.end();
      expect(interaction.mode).toBe('none');
    });

    it('reset clears all state', () => {
      interaction.beginMove(0.3, 0.4, { x: 0.1, y: 0.1, width: 0.5, height: 0.5 });
      interaction.beginPinch(100, 2);
      interaction.reset();
      expect(interaction.mode).toBe('none');
      expect(interaction.startX).toBe(0);
      expect(interaction.startY).toBe(0);
      expect(interaction.startCropRect).toBeNull();
      expect(interaction.startZoom).toBe(1);
      expect(interaction.startPinchDist).toBe(0);
    });
  });
});
