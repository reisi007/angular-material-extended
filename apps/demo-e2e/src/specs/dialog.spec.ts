import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Dialog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.dialog);
  });

  test('should display the dialog demo', async ({ page }) => {
    await expect(page.getByText('Dialog / Modal')).toBeVisible();
  });

  test('should open and close md dialog', async ({ page }) => {
    await page.getByText('md').first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByLabel('Close dialog').click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should open all sizes sequentially', async ({ page }) => {
    for (const size of ['sm', 'md', 'lg', 'xl']) {
      await page.getByText(size).first().click();
      await expect(page.getByRole('dialog')).toBeVisible();
      await page.getByLabel('Close dialog').click();
      await expect(page.getByRole('dialog')).not.toBeVisible();
    }
  });

  test('should open custom dialog with custom title', async ({ page }) => {
    const titleInput = page.getByLabel('Title');
    await titleInput.fill('Custom E2E Title');
    await page.getByText('Open Custom').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Custom E2E Title')).toBeVisible();
    await page.getByLabel('Close dialog').click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should open fullscreen dialog', async ({ page }) => {
    await page.getByText('Fullscreen').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Fullscreen Dialog')).toBeVisible();
    await page.getByLabel('Close dialog').click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should open non-dismissible dialog (cannot close by button)', async ({ page }) => {
    await page.getByText('Non-dismissible').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Important')).toBeVisible();
    const closeBtn = page.getByLabel('Close dialog');
    await expect(closeBtn).not.toBeVisible();
  });

  test('should close dialog on escape key', async ({ page }) => {
    await page.getByText('md').first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });
});
