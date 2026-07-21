import { test, expect } from '@playwright/test';
import { DEMO_URLS } from '../fixtures/test-data';
import path from 'path';

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

  test('should accept file upload', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]');
    const filePath = path.resolve(__dirname, '../fixtures/test-data.ts');
    await fileInput.setInputFiles(filePath);
    await page.waitForTimeout(500);
    await expect(page.getByText('Upload starten')).toBeVisible();
  });
});
