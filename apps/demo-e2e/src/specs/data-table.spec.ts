import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Data Table', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.dataTable);
  });

  test('should display the data table', async ({ page }) => {
    await expect(page.getByText('Data Table')).toBeVisible();
  });

  test('should have table with columns', async ({ page }) => {
    await expect(page.getByText('ID')).toBeVisible();
    await expect(page.getByText('Name')).toBeVisible();
    await expect(page.getByText('Email')).toBeVisible();
    await expect(page.getByText('Role')).toBeVisible();
    await expect(page.getByText('Active')).toBeVisible();
  });

  test('should filter table data', async ({ page }) => {
    const filterCard = page.locator('mat-card:has(mat-card-title:text("Filter"))');
    await filterCard.getByPlaceholder('Search...').fill('Alice');
    await expect(filterCard.getByText('alice@example.com')).toBeVisible({ timeout: 3000 });
    await expect(filterCard.getByText('bob@example.com')).not.toBeVisible();
  });

  test('should sort table by name ascending', async ({ page }) => {
    const sortCard = page.locator('mat-card:has(mat-card-title:text("Multi-select with sorting"))');
    const nameHeader = sortCard.getByText('Name');
    await nameHeader.click();
    await expect(sortCard.getByText('Alice')).toBeVisible();
  });

  test('should show select checkboxes in multi-select tables', async ({ page }) => {
    const noSortCard = page.locator('mat-card:has(mat-card-title:text("Multi-select without sorting"))');
    await expect(noSortCard.locator('mat-checkbox').first()).toBeVisible();
    const sortCard = page.locator('mat-card:has(mat-card-title:text("Multi-select with sorting"))');
    await expect(sortCard.locator('mat-checkbox').first()).toBeVisible();
  });

  test('should not show checkboxes in filter-only table', async ({ page }) => {
    const filterCard = page.locator('mat-card:has(mat-card-title:text("Filter"))');
    const checkboxes = filterCard.locator('mat-checkbox');
    await expect(checkboxes).toHaveCount(0);
  });

  test('should select all rows via header checkbox', async ({ page }) => {
    const noSortCard = page.locator('mat-card:has(mat-card-title:text("Multi-select without sorting"))');
    const headerCheckbox = noSortCard.locator('mat-checkbox').first();
    await headerCheckbox.click();
    const output = page.getByText('No sorting table:');
    await expect(output).toBeVisible({ timeout: 3000 });
  });

  test('should paginate table data', async ({ page }) => {
    const paginator = page.getByLabel('Select page').first();
    await expect(paginator).toBeVisible();
  });

  test.describe('Expandable Rows', () => {
    const expandableCard = (page: import('@playwright/test').Page) =>
      page.locator('mat-card:has(mat-card-title:text("Expandable Rows"))');

    test('should show expand button on expandable table rows', async ({ page }) => {
      const card = expandableCard(page);
      const icons = card.locator('button[mat-icon-button] mat-icon');
      await expect(icons.first()).toHaveText('expand_more', { timeout: 3000 });
    });

    test('should expand a row and show detail content', async ({ page }) => {
      const card = expandableCard(page);
      await card.locator('button[mat-icon-button]').first().click();
      await expect(card.getByText('Department:')).toBeVisible({ timeout: 3000 });
      const icon = card.locator('button[mat-icon-button] mat-icon').first();
      await expect(icon).toHaveText('expand_less');
    });

    test('should collapse an expanded row', async ({ page }) => {
      const card = expandableCard(page);
      const expandBtn = card.locator('button[mat-icon-button]').first();
      await expandBtn.click();
      await expect(card.getByText('Department:')).toBeVisible({ timeout: 3000 });
      await expandBtn.click();
      await expect(card.getByText('Department:')).not.toBeVisible();
    });

    test('should expand and collapse by clicking row body', async ({ page }) => {
      const card = expandableCard(page);
      const firstRow = card.locator('table tbody tr.cursor-pointer').first();
      await firstRow.locator('td').nth(1).click();
      await expect(card.getByText('Department:')).toBeVisible({ timeout: 3000 });
      await firstRow.locator('td').nth(1).click();
      await expect(card.getByText('Department:')).not.toBeVisible();
    });
  });
});
