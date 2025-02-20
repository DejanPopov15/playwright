import { test, expect } from '@playwright/test';

test('Add multiple products from different pages to cart', async ({ page }) => {
    // Step 1: Go to the homepage
    await page.goto('https://automaticityacademy.ngrok.app/dashboard'); // Replace with the actual store URL

    // If your product pages are inside a dashboard with the same URL, 
    // but you can navigate between pages dynamically (e.g., using pagination, 
    //     tabs, or category selection), we need to interact with 
    //     the UI to select different products instead of using direct URLs.
      // Define product selection (Selectors & Quantities)
      const products = [
        { name: 'Logitech G Pro Wireless Gaming Mouse', quantity: 2, pageNumber: 3 },
        { name: 'ASUS TUF Gaming X570-Plus ATX Motherboard', quantity: 3, pageNumber: 3 },
        { name: 'ProducNZXT H510 Elite ATX Mid Tower Caset C', quantity: 1, pageNumber: 3 }
    ];

   
});