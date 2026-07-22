import { test, expect } from '@playwright/test';
import path from 'node:path';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('File Manager', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.fileManager);
  });

  test('should display the file manager demo page', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('File Management');
  });

  test('should render the basic file manager with files', async ({ page }) => {
    const section = page.locator('section:has(h2#basic)');
    const fm = section.locator('rui-file-manager');
    await expect(fm).toBeVisible();
    await expect(fm.locator('rui-file-manager-item')).toHaveCount(4);
  });

  test('should display file names in basic file manager', async ({ page }) => {
    const fm = page.locator('section:has(h2#basic) rui-file-manager');
    await expect(fm).toContainText('report-2024');
    await expect(fm).toContainText('vacation-photo');
    await expect(fm).toContainText('data-export');
    await expect(fm).toContainText('notes');
  });

  test('should show sortable/editable/fileManagement toggle switches', async ({ page }) => {
    const toggleCard = page.locator('mat-card:has(mat-card-title:text("Toggle Features"))');
    await expect(toggleCard.getByText('Sortable')).toBeVisible();
    await expect(toggleCard.getByText('Editable')).toBeVisible();
    await expect(toggleCard.getByText('File Management')).toBeVisible();
  });

  test('should render rename section with files', async ({ page }) => {
    const section = page.locator('section:has(h2#rename)');
    await expect(section.locator('h2#rename')).toBeVisible();
    const fm = section.locator('rui-file-manager');
    await expect(fm).toBeVisible();
    await expect(fm.locator('rui-file-manager-item')).toHaveCount(3);
    await expect(fm).toContainText('presentation-v3');
    await expect(fm).toContainText('budget-2024');
    await expect(fm).toContainText('readme');
  });

  test('should show extension toggle in rename section', async ({ page }) => {
    const extCard = page.locator('mat-card:has(mat-card-title:text("Extension Handling"))');
    await expect(extCard.getByText('Edit extension')).toBeVisible();
  });

  test('should render sort section with sortable files', async ({ page }) => {
    const section = page.locator('section:has(h2#sort)');
    await expect(section.locator('h2#sort')).toBeVisible();
    const fm = section.locator('rui-file-manager');
    await expect(fm).toBeVisible();
    await expect(fm.locator('rui-file-manager-item')).toHaveCount(4);
    await expect(fm).toContainText('alpha');
    await expect(fm).toContainText('bravo');
    await expect(fm).toContainText('charlie');
    await expect(fm).toContainText('delta');
  });

  test('should NOT show file management controls when fileManagement is false', async ({ page }) => {
    const fm = page.locator('section:has(h2#sort) rui-file-manager');
    await expect(fm.getByRole('button', { name: /clear/i })).not.toBeAttached();
    await expect(fm.locator('[aria-label^="Remove"]')).not.toBeAttached();
  });

  test('should render composition section with file upload and file manager', async ({ page }) => {
    const compCard = page.locator('mat-card:has(mat-card-title:text("Upload + Management"))');
    await expect(compCard.locator('rui-file-upload')).toBeVisible();
    await expect(compCard.locator('rui-file-manager')).toBeAttached();
  });

  test('should display file names in composition section after upload', async ({ page }) => {
    const compCard = page.locator('mat-card:has(mat-card-title:text("Upload + Management"))');
    const fileInput = compCard.locator('rui-file-upload input[type="file"]');
    await fileInput.setInputFiles(__filename);
    const expectedName = path.basename(__filename).replace(/\.[^.]+$/, '');
    await expect(compCard.locator('rui-file-manager')).toContainText(expectedName, { timeout: 10000 });
    await expect(compCard.locator('rui-file-manager rui-file-manager-item')).toHaveCount(1, { timeout: 10000 });
  });
});
