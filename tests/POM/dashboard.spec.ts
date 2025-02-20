import { test, expect } from '@playwright/test';
import { Dashboard } from './utilis/dashboard';

test('Add and Remove Product from Cart', async ({ page }) => {
    const dashboard = new Dashboard(page);

    // Step 1: Login
    await page.goto('https://automaticityacademy.ngrok.app/login');
    await page.fill('#email', 'user931@gmail.com');
    await page.fill('#password', 'pass9@1A');
    await page.click('#login-button');
    await expect(page).toHaveURL(/.*dashboard.*/);

    // Step 2: Add Product
    await dashboard.goToDashboard();
    await dashboard.addProductToCart('Test Product');

    // Step 3: Remove Product
    await dashboard.removeProductFromCart('Test Product');
});
