import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Dialog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.dialog);
  });

  test('should display the dialog demo', async ({ page }) => {
    await expect(page.getByText('Dialog / Modal')).toBeVisible();
  });

  test('should open md dialog', async ({ page }) => {
    await page.getByText('md').first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByLabel('Close dialog').click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should open all sizes', async ({ page }) => {
    for (const size of ['sm', 'md', 'lg', 'xl']) {
      await page.getByText(size).first().click();
      await expect(page.getByRole('dialog')).toBeVisible();
      await page.getByLabel('Close dialog').click();
      await expect(page.getByRole('dialog')).not.toBeVisible();
    }
  });
});
