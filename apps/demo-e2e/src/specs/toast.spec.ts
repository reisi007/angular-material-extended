import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Toast', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.toast);
    await page.waitForLoadState('networkidle');
  });

  test('should display the toast demo', async ({ page }) => {
    await expect(page.getByText('Toast / Notification')).toBeVisible();
  });

  test('should show success toast on button click', async ({ page }) => {
    await page.getByRole('button', { name: 'Success' }).click();
    await expect(page.getByText('Operation completed successfully!')).toBeVisible();
    await expect(page.getByText('Undo')).toBeVisible();
  });

  test('should show error toast', async ({ page }) => {
    await page.getByRole('button', { name: 'Error' }).click();
    await expect(page.getByText('Something went wrong')).toBeVisible();
  });

  test('should show info toast', async ({ page }) => {
    await page.getByRole('button', { name: 'Info' }).click();
    await expect(page.getByText('new messages')).toBeVisible();
  });

  test('should show warning toast', async ({ page }) => {
    await page.getByRole('button', { name: 'Warning' }).click();
    await expect(page.getByText('session will expire')).toBeVisible();
  });

  test('should dismiss all toasts', async ({ page }) => {
    await page.getByRole('button', { name: 'Success' }).click();
    await page.getByRole('button', { name: 'Error' }).click();
    await page.getByRole('button', { name: 'Dismiss All' }).click();
    await expect(page.getByText('Operation completed successfully!')).not.toBeVisible();
    await expect(page.getByText('Something went wrong')).not.toBeVisible();
  });

  test('should show custom toast with custom message', async ({ page }) => {
    const customSection = page.locator('h2#toast-custom-duration ~ mat-card');
    await customSection.locator('input').first().fill('Custom E2E test message');
    await customSection.getByRole('button', { name: 'Show Custom' }).click();
    await expect(page.getByText('Custom E2E test message')).toBeVisible({ timeout: 5000 });
  });

  test('should show toast at different positions', async ({ page }) => {
    await page.getByRole('button', { name: 'top-start' }).click();
    await expect(page.getByText('Toast at top-start')).toBeVisible({ timeout: 3000 });
    await page.getByRole('button', { name: 'Dismiss All' }).click();
    await expect(page.getByText('Toast at top-start')).not.toBeVisible();
  });

  test('should auto-dismiss toast after duration', async ({ page }) => {
    await page.goto(DEMO_URLS.toast);
    const customSection = page.locator('h2#toast-custom-duration ~ mat-card');
    await customSection.locator('input').nth(1).fill('1000');
    await customSection.getByRole('button', { name: 'Show Custom' }).click();
    await expect(page.getByText('Custom toast message')).toBeVisible({ timeout: 3000 });
    await page.waitForTimeout(2000);
    await expect(page.getByText('Custom toast message')).not.toBeVisible({ timeout: 3000 });
  });
});
