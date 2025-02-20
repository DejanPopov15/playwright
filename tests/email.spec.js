import { test, expect } from '@playwright/test';

test('Provera email boxa', async ({ page }) => {
  // 1. Otvori stranicu
  await page.goto('https://automaticityacademy.ngrok.app/login');

  // 2. Pronađi email input polje
  const emailBox = page.locator('#email');

  // 3. Unesi email adresu
  await emailBox.fill('test@example.com');

  // 4. Proveri da li je email ispravno unet
  await expect(emailBox).toHaveValue('test@example.com');
});