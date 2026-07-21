import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Toast', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.toast);
  });

  test('should display the toast demo', async ({ page }) => {
    await expect(page.getByText('Toast / Notification')).toBeVisible();
  });

  test('should show success toast on button click', async ({ page }) => {
    await page.getByText('Success').click();
    await expect(page.getByText('Operation completed successfully!')).toBeVisible();
    await expect(page.getByText('Undo')).toBeVisible();
  });

  test('should show error toast', async ({ page }) => {
    await page.getByText('Error').click();
    await expect(page.getByText('Something went wrong')).toBeVisible();
  });

  test('should show info toast', async ({ page }) => {
    await page.getByText('Info').click();
    await expect(page.getByText('new messages')).toBeVisible();
  });

  test('should show warning toast', async ({ page }) => {
    await page.getByText('Warning').click();
    await expect(page.getByText('session will expire')).toBeVisible();
  });

  test('should dismiss all toasts', async ({ page }) => {
    await page.getByText('Success').click();
    await page.getByText('Error').click();
    await page.getByText('Dismiss All').click();
    await expect(page.getByText('Operation completed successfully!')).not.toBeVisible();
    await expect(page.getByText('Something went wrong')).not.toBeVisible();
  });
});
