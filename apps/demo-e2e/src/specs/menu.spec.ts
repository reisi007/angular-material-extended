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
    await hamburger.first().click();
    await expect(page.getByRole('menu')).toBeVisible();
    await hamburger.first().click();
    await expect(page.getByRole('menu')).not.toBeVisible();
  });

  test('should show menu items when first menu opened', async ({ page }) => {
    await page.locator('rui-menu-button').first().click();
    await expect(page.getByText('Profile')).toBeVisible();
    await expect(page.getByText('Settings')).toBeVisible();
    await expect(page.getByText('Help')).toBeVisible();
    await expect(page.getByText('Logout')).toBeVisible();
  });

  test('should show icon menu items when second menu opened', async ({ page }) => {
    await page.locator('rui-menu-button').nth(1).click();
    await expect(page.getByText('Edit')).toBeVisible();
    await expect(page.getByText('Copy')).toBeVisible();
    await expect(page.getByText('Delete')).toBeVisible();
  });

  test('should show advanced menu items with separator and disabled', async ({ page }) => {
    await page.locator('rui-menu-button').nth(2).click();
    await expect(page.getByText('New File')).toBeVisible();
    await expect(page.getByText('Open')).toBeVisible();
    await expect(page.getByText('Save')).toBeVisible();
    await expect(page.getByText('Save As...')).toBeVisible();
    await expect(page.getByText('Export')).toBeVisible();
    await expect(page.getByText('Print')).toBeVisible();

    const disabledItem = page.getByRole('menuitem').filter({ hasText: 'Save As...' });
    await expect(disabledItem).toBeDisabled();
  });

  test('should close menu on escape key', async ({ page }) => {
    await page.locator('rui-menu-button').first().click();
    await expect(page.getByRole('menu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('menu')).not.toBeVisible();
  });

  test('should close hamburger menu when clicking outside', async ({ page }) => {
    const menuButton = page.locator('rui-menu-button').first();
    const button = menuButton.locator('button');
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await page.locator('body').click({ position: { x: 10, y: 10 } });
    await expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});
