import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Data Table', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.dataTable);
  });

  test('should display the data table', async ({ page }) => {
    await expect(page.getByText('Data Table')).toBeVisible();
  });

  test('should show configuration toggles', async ({ page }) => {
    await expect(page.getByText('Sortable')).toBeVisible();
    await expect(page.getByText('Filter')).toBeVisible();
    await expect(page.getByText('Select')).toBeVisible();
  });

  test('should have table with columns', async ({ page }) => {
    await expect(page.getByText('ID')).toBeVisible();
    await expect(page.getByText('Name')).toBeVisible();
    await expect(page.getByText('Email')).toBeVisible();
    await expect(page.getByText('Role')).toBeVisible();
    await expect(page.getByText('Active')).toBeVisible();
  });

  test('should filter table data', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('Alice');
    await page.waitForTimeout(300);
    await expect(page.getByText('alice@example.com')).toBeVisible();
  });
});
