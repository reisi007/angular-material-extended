import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Cropper', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.cropper);
  });

  test('should display the cropper component', async ({ page }) => {
    await expect(page.locator('rui-cropper')).toBeVisible();
  });

  test('should have zoom controls', async ({ page }) => {
    await expect(page.getByLabel('Zoom in')).toBeVisible();
    await expect(page.getByLabel('Zoom out')).toBeVisible();
  });

  test('should have rotate controls', async ({ page }) => {
    await expect(page.getByLabel('Rotate left')).toBeVisible();
    await expect(page.getByLabel('Rotate right')).toBeVisible();
  });

  test('should have aspect ratio selector', async ({ page }) => {
    await expect(page.getByLabel('Aspect ratio')).toBeVisible();
  });

  test('should display cropped output after crop change', async ({ page }) => {
    await page.waitForSelector('rui-cropper canvas');
    await page.waitForTimeout(2000);
    const croppedImg = page.locator('img[alt="Cropped"]');
    await expect(croppedImg).toBeVisible({ timeout: 5000 });
  });
});
