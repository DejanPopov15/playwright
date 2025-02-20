import { test, expect } from '@playwright/test';

test('Add multiple products from different pages to cart', async ({ page }) => {
    // Step 1: Go to the homepage
    await page.goto('https://automaticityacademy.ngrok.app/dashboard'); // Replace with the actual store URL

    // If your product pages are inside a dashboard with the same URL, 
    // but you can navigate between pages dynamically (e.g., using pagination, 
    //     tabs, or category selection), we need to interact with 
    //     the UI to select different products instead of using direct URLs.
      // Define product selection (Selectors & Quantities)
      const productsToAdd = [
        { name: 'Logitech G Pro Wireless Gaming Mouse', quantity: 2, pageNumber: 1 },
        { name: 'ASUS TUF Gaming X570-Plus ATX Motherboard', quantity: 3, pageNumber: 4 },
        { name: 'Acer Nitro 5', quantity: 1, pageNumber: 2 }
    ];

    // Loop through each product
    for (const product of productsToAdd) {
        console.log(`Looking for ${product.name} on page ${product.pageNumber}`);

        // Navigate to the expected page
        await navigateToPage(page, product.pageNumber);

        // Locate the product on that page
        const productLocator = page.locator('.product-item', { hasText: product.name });

        if (await productLocator.isVisible()) {
            await productLocator.locator('button.add-to-cart').click();
            console.log(`${product.name} added to cart!`);
        } else {
            console.log(`❌ ${product.name} not found on page ${product.pageNumber}`);
        }
    }
   
});

/**
 * Function to navigate to a specific page number in a paginated product listing
 */
async function navigateToPage(page, targetPageNumber) {
    console.log(`Navigating to page ${targetPageNumber}...`);

    // Selector for the current page number
    const currentPageLocator = page.locator('.current-page'); // Change if needed
    const nextPageButton = page.locator('button.next-page'); // Adjust based on actual site
    const prevPageButton = page.locator('button.prev-page'); // Adjust based on actual site

    // Get the current page number
    let currentPageText = await currentPageLocator.textContent();
    let currentPage = parseInt(currentPageText || '1', 10); // Default to page 1 if missing

    while (currentPage !== targetPageNumber) {
        if (currentPage < targetPageNumber) {
            await nextPageButton.click(); // Move forward
        } else {
            await prevPageButton.click(); // Move backward
        }
        await page.waitForLoadState('domcontentloaded'); // Wait for page load
        currentPageText = await currentPageLocator.textContent();
        currentPage = parseInt(currentPageText || '1', 10);
    }
}