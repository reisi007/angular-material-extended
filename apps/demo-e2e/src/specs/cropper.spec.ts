import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Cropper', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.cropper);
  });

  test('should display the cropper component', async ({ page }) => {
    await expect(page.locator('rui-cropper')).toBeVisible();
  });

  test('should have zoom controls with default zoom level', async ({ page }) => {
    await expect(page.getByLabel('Zoom in')).toBeVisible();
    await expect(page.getByLabel('Zoom out')).toBeVisible();
  });

  test('should have rotate controls', async ({ page }) => {
    await expect(page.getByLabel('Rotate left')).toBeVisible();
    await expect(page.getByLabel('Rotate right')).toBeVisible();
    await expect(page.getByLabel('Free rotation')).toBeVisible();
  });

  test('should have aspect ratio selector', async ({ page }) => {
    await expect(page.getByLabel('Aspect ratio')).toBeVisible();
  });

  test('should display cropped output after image loads', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    const croppedImg = page.locator('img[alt="Cropped"]');
    await expect(croppedImg).toBeVisible({ timeout: 10000 });
    const src = await croppedImg.getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).toContain('data:image');
  });

  test('should show error message on invalid image URL', async ({ page }) => {
    await page.getByText('Simuliere Lade-Fehler').click();
    const errorText = page.locator('text=Failed to load image');
    await expect(errorText).toBeVisible({ timeout: 10000 });
  });

  test('should change zoom level on zoom in click', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    const zoomDisplay = page.locator('text=/\\d+%/');
    const initialText = await zoomDisplay.textContent();
    const initialZoom = parseInt(initialText ?? '100', 10);

    await page.getByLabel('Zoom in').click();
    const afterText = await zoomDisplay.textContent();
    const afterZoom = parseInt(afterText ?? '100', 10);
    expect(afterZoom).toBeGreaterThan(initialZoom);
  });

  test('should change zoom level on zoom out click', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    const zoomDisplay = page.locator('text=/\\d+%/');
    const initialText = await zoomDisplay.textContent();
    const initialZoom = parseInt(initialText ?? '100', 10);

    await page.getByLabel('Zoom out').click();
    const afterText = await zoomDisplay.textContent();
    const afterZoom = parseInt(afterText ?? '100', 10);
    expect(afterZoom).toBeLessThan(initialZoom);
  });

  test('should change rotation on rotate right click', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    const rotationDisplay = page.locator('text=/\\d+°/');
    const initialText = await rotationDisplay.textContent();
    const initialRotation = parseInt(initialText ?? '0', 10);

    await page.getByLabel('Rotate right').click();
    const afterText = await rotationDisplay.textContent();
    const afterRotation = parseInt(afterText ?? '0', 10);
    expect(afterRotation).toBe((initialRotation + 90) % 360);
  });

  test('should change rotation on rotate left click', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    const rotationDisplay = page.locator('text=/\\d+°/');
    const initialText = await rotationDisplay.textContent();
    const initialRotation = parseInt(initialText ?? '0', 10);

    await page.getByLabel('Rotate left').click();
    const afterText = await rotationDisplay.textContent();
    const afterRotation = parseInt(afterText ?? '0', 10);
    expect(afterRotation).toBe((initialRotation - 90 + 360) % 360);
  });

  test('should change aspect ratio via select dropdown', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    const aspectSelect = page.getByLabel('Aspect ratio');
    await aspectSelect.selectOption('16:9');
    await expect(aspectSelect).toHaveValue('16:9');
    await aspectSelect.selectOption('4:3');
    await expect(aspectSelect).toHaveValue('4:3');
    await aspectSelect.selectOption('1:1');
    await expect(aspectSelect).toHaveValue('1:1');
    await aspectSelect.selectOption('free');
    await expect(aspectSelect).toHaveValue('free');
  });

  test('should still show cropped output after aspect ratio change', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    await page.waitForTimeout(500);
    const aspectSelect = page.getByLabel('Aspect ratio');
    await aspectSelect.selectOption('16:9');
    await page.waitForTimeout(500);
    const croppedImg = page.locator('img[alt="Cropped"]');
    await expect(croppedImg).toBeVisible({ timeout: 5000 });
  });

  test('should support keyboard navigation for crop movement', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas', { state: 'visible' });
    await page.locator('rui-cropper').focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowUp');
    const croppedImg = page.locator('img[alt="Cropped"]');
    await expect(croppedImg).toBeVisible({ timeout: 5000 });
  });
});
