// import { test, expect } from '@playwright/test';

// test('Login button should navigate to login page', async ({ page }) => {
//     // Step 1: Navigate to the homepage
//     await page.goto('https://automaticityacademy.ngrok.app/login'); 
  
//     // Step 2: Locate the login button
//     const loginButton = page.locator('button', { name: 'Sign in' });
//     // Step 3: Click the login button
//     await loginButton.click();
  
//     // Step 4: Verify redirection (change URL if needed)
//     await expect(page).toHaveURL('https://automaticityacademy.ngrok.app/login');
  
//     // Step 5: Check if the login form is visible
//     //const loginForm = page.locator('form#login-form'); // Adjust selector accordingly
//     //await expect(loginForm).toBeVisible();
//   });

import { test, expect } from '@playwright/test';
test('Login button should navigate to login page', async ({ page }) => {
await page.goto('https://automaticityacademy.ngrok.app/login'); 
const loginButton = page.locator('button', { name: 'Sign in' });
 await loginButton.click();
});