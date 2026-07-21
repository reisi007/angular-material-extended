import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.menu);
  });

  test('should display the menu demo', async ({ page }) => {
    await expect(page.getByText('Menu / Hamburger')).toBeVisible();
  });

  test('should toggle menu on hamburger click', async ({ page }) => {
    const hamburger = page.locator('rui-menu-button button');
    await hamburger.click();
    await expect(page.getByRole('menu')).toBeVisible();
    await hamburger.click();
    await expect(page.getByRole('menu')).not.toBeVisible();
  });

  test('should show menu items', async ({ page }) => {
    await page.locator('rui-menu-button button').click();
    await expect(page.getByText('Profile')).toBeVisible();
    await expect(page.getByText('Settings')).toBeVisible();
    await expect(page.getByText('Help')).toBeVisible();
    await expect(page.getByText('Logout')).toBeVisible();
  });

  test('should show icon menu items', async ({ page }) => {
    await page.locator('rui-menu-button').last().click();
    await expect(page.getByText('Edit')).toBeVisible();
    await expect(page.getByText('Copy')).toBeVisible();
    await expect(page.getByText('Delete')).toBeVisible();
  });
});
