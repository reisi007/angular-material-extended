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

  test('should show custom toast with custom message', async ({ page }) => {
    const customInput = page.getByLabel('Message');
    await customInput.fill('Custom E2E test message');
    await page.getByText('Show Custom').click();
    await expect(page.getByText('Custom E2E test message')).toBeVisible({ timeout: 5000 });
  });

  test('should show toast at different positions', async ({ page }) => {
    await page.getByText('top-start').click();
    await expect(page.getByText('Toast at top-start')).toBeVisible({ timeout: 3000 });
    await page.getByText('Dismiss All').click();
    await expect(page.getByText('Toast at top-start')).not.toBeVisible();
  });

  test('should auto-dismiss toast after duration', async ({ page }) => {
    await page.goto(DEMO_URLS.toast);
    const durationInput = page.getByLabel('Duration (ms)');
    await durationInput.fill('1000');
    await page.getByText('Show Custom').click();
    await expect(page.getByText('Custom toast message')).toBeVisible({ timeout: 3000 });
    await page.waitForTimeout(2000);
    await expect(page.getByText('Custom toast message')).not.toBeVisible({ timeout: 3000 });
  });
});
