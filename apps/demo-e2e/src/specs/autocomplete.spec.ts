import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('Autocomplete', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.autocomplete);
  });

  test('should display the autocomplete demo page', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Autocomplete');
  });

  test('should show signal forms section with autocomplete', async ({ page }) => {
    const section = page.locator('section:has(#signal-forms)');
    await expect(section).toContainText('Select a fruit');
  });

  test('should show reactive forms section', async ({ page }) => {
    await expect(page.locator('#reactive-forms')).toBeVisible();
  });

  test('should show template-driven forms section', async ({ page }) => {
    await expect(page.locator('#template-driven-forms')).toBeVisible();
  });

  test('should display all three form sections on the page', async ({ page }) => {
    await expect(page.locator('#signal-forms')).toBeVisible();
    await expect(page.locator('#reactive-forms')).toBeVisible();
    await expect(page.locator('#template-driven-forms')).toBeVisible();
  });

  test('should open dropdown when typing in signal forms autocomplete', async ({ page }) => {
    const section = page.locator('section:has(#signal-forms)');
    const input = section.locator('input');
    await input.click();
    await input.fill('Ap');
    const panel = section.locator('.mat-mdc-autocomplete-panel');
    await expect(panel).toBeVisible();
    await expect(section.locator('mat-option')).toContainText('Apple');
  });

  test('should select an option from dropdown', async ({ page }) => {
    const section = page.locator('section:has(#signal-forms)');
    const input = section.locator('input');
    await input.click();
    await input.fill('Ba');
    const panel = section.locator('.mat-mdc-autocomplete-panel');
    await expect(panel).toBeVisible();
    await section.locator('mat-option').filter({ hasText: 'Banana' }).click();
    await expect(input).toHaveValue('Banana');
  });

  test('should filter options case-insensitively', async ({ page }) => {
    const section = page.locator('section:has(#signal-forms)');
    const input = section.locator('input');
    await input.click();
    await input.fill('CHERRY');
    const panel = section.locator('.mat-mdc-autocomplete-panel');
    await expect(panel).toBeVisible();
    await expect(section.locator('mat-option')).toContainText('Cherry');
  });

  test('should update selected display after selection in signal forms', async ({ page }) => {
    const section = page.locator('section:has(#signal-forms)');
    const input = section.locator('input');
    await input.click();
    await input.fill('Ch');
    const panel = section.locator('.mat-mdc-autocomplete-panel');
    await expect(panel).toBeVisible();
    await section.locator('mat-option').filter({ hasText: 'Cherry' }).click();
    await expect(section).toContainText('Selected: "Cherry"');
  });

  test('should work with reactive forms autocomplete', async ({ page }) => {
    const section = page.locator('section:has(#reactive-forms)');
    const input = section.locator('input');
    await input.click();
    await input.fill('Col');
    const panel = section.locator('.mat-mdc-autocomplete-panel');
    await expect(panel).toBeVisible();
    await section.locator('mat-option').filter({ hasText: 'Colorado' }).click();
    await expect(input).toHaveValue('Colorado');
  });

  test('should work with template-driven forms autocomplete', async ({ page }) => {
    const section = page.locator('section:has(#template-driven-forms)');
    const input = section.locator('input');
    await input.click();
    await input.fill('Ger');
    const panel = section.locator('.mat-mdc-autocomplete-panel');
    await expect(panel).toBeVisible();
    await section.locator('mat-option').filter({ hasText: 'Germany' }).click();
    await expect(input).toHaveValue('Germany');
  });
});
