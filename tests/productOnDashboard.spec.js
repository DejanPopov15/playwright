import { test, expect } from '@playwright/test';

test.describe('Product Management on Dashboard', () => {
    
    test('Add and Delete a Product', async ({ page }) => {

        // Step 1: Login
        await page.goto('https://automaticityacademy.ngrok.app/login');
        
        await page.getByRole('textbox', { name: 'Email' }).fill('user931@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('pass9@1A');

        await page.getByRole('button', { name: 'Sign in' }).click();

        // Ensure login was successful
        await expect(page).toHaveURL(/.*dashboard.*/);
        await expect(page.getByText('Dashboard')).toBeVisible();

        // Step 2: Navigate to "Add Product" Section
        await page.getByRole('button', { name: 'Add Product' }).click();

        // ✅ Step 3: Fill in Product Details
        const productName = `Product ${Date.now()}`; // Unique product name
        await page.getByRole('textbox', { name: 'Product Name' }).fill(productName);
        await page.getByRole('textbox', { name: 'Price' }).fill('19.99');
        await page.getByRole('textbox', { name: 'Description' }).fill('This is a test product.');

        await page.getByRole('button', { name: 'Submit' }).click();

        // ✅ Step 4: Verify Product Added
        await expect(page.getByText(productName)).toBeVisible();
        console.log(`✅ Product "${productName}" added successfully`);

        // ✅ Step 5: Delete the Product
        const productRow = page.locator(`tr:has-text("${productName}")`); // Locate the row with the product
        await productRow.getByRole('button', { name: 'Delete' }).click();

        // ✅ Step 6: Confirm Deletion (if there is a confirmation popup)
        if (await page.getByRole('button', { name: 'Confirm' }).isVisible()) {
            await page.getByRole('button', { name: 'Confirm' }).click();
        }

        // ✅ Step 7: Verify Product is Deleted
        await expect(page.getByText(productName)).not.toBeVisible();
        console.log(`✅ Product "${productName}" deleted successfully`);
    });
});
