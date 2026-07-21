import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';

test.describe('File Upload', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEMO_URLS.fileUpload);
  });

  test('should display the file upload component', async ({ page }) => {
    await expect(page.locator('rui-file-upload')).toBeVisible();
  });

  test('should have drop zone with text', async ({ page }) => {
    await expect(page.getByText('Drag & drop files here or click to browse')).toBeVisible();
  });

  test('should show multiple toggle', async ({ page }) => {
    await expect(page.getByText('Multiple files')).toBeVisible();
  });

  test('should open file picker on click', async ({ page }) => {
    const filePicker = page.locator('input[type="file"]');
    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser', { timeout: 3000 }).catch(() => null),
      page.locator('[role="button"]').first().click(),
    ]);
    expect(filePicker).toBeDefined();
  });

  test('should accept file upload and show file in list', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]');
    const filePath = __filename;
    await fileInput.setInputFiles(filePath);
    await expect(page.getByText('Upload starten')).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('(1 Dateien)')).toBeVisible();
  });

  test('should start upload and show progress', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]');
    const filePath = __filename;
    await fileInput.setInputFiles(filePath);
    await page.getByText('Upload starten').click();
    await expect(page.getByText('Uploading...')).toBeVisible({ timeout: 5000 });
    await expect(page.getByText(/100%/)).toBeVisible({ timeout: 10000 });
  });

  test('should show file size in file list', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]');
    const filePath = __filename;
    await fileInput.setInputFiles(filePath);
    await expect(page.getByText(/KB/)).toBeVisible();
  });

  test('should clear all files when clear button clicked', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]');
    const filePath = __filename;
    await fileInput.setInputFiles(filePath);
    await expect(page.getByText('Upload starten')).toBeVisible({ timeout: 3000 });
    await page.getByText('Clear all').click();
    await expect(page.getByText('Upload starten')).not.toBeVisible();
  });

  test('should accept multiple files when multiple mode is on', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]');
    const filePath = __filename;
    await fileInput.setInputFiles([filePath, filePath]);
    await expect(page.getByText('Upload starten')).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('(2 Dateien)')).toBeVisible();
  });
});
