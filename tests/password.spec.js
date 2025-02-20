import { test, expect } from '@playwright/test';

test('Test password input field', async ({ page }) => {
  await page.goto('https://automaticityacademy.ngrok.app/login');

  // Sačekaj da se polje pojavi
  await page.waitForSelector('input[type="password"]', { state: 'visible' });

  const passwordInput = page.locator('input[type="password"]');
  await passwordInput.fill('MySecurePass123!');

  // Proveri da li je vrednost uneta
  await expect(passwordInput).toHaveValue('MySecurePass123!');
});