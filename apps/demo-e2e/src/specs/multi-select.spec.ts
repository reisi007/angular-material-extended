import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Multi-Select', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.multiSelect);
  });

  test('should display the multi-select demo page', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Multi-Select');
  });

  test('should show signal forms multi-select with pre-selected values', async ({ page }) => {
    const section = page.locator('section:has(#signal-forms)');
    await expect(section).toContainText('Apple');
    await expect(section).toContainText('Banana');
  });

  test('should display selected values JSON in signal forms section', async ({ page }) => {
    const section = page.locator('section:has(#signal-forms)');
    await expect(section).toContainText('"Apple"');
    await expect(section).toContainText('"Banana"');
  });

  test('should show reactive forms multi-select', async ({ page }) => {
    await expect(page.locator('#reactive-forms')).toBeVisible();
  });

  test('should show template-driven forms multi-select with pre-selected values', async ({ page }) => {
    const section = page.locator('section:has(#template-driven-forms)');
    await expect(section).toContainText('Fig');
    await expect(section).toContainText('Grape');
  });

  test('should display all three form sections on the page', async ({ page }) => {
    await expect(page.locator('#signal-forms')).toBeVisible();
    await expect(page.locator('#reactive-forms')).toBeVisible();
    await expect(page.locator('#template-driven-forms')).toBeVisible();
  });

  test('should have correct labels on multi-selects', async ({ page }) => {
    await expect(page.locator('section:has(#signal-forms)')).toContainText('Select fruits');
    await expect(page.locator('section:has(#reactive-forms)')).toContainText('Select fruits');
    await expect(page.locator('section:has(#template-driven-forms)')).toContainText('Select fruits');
  });
});
