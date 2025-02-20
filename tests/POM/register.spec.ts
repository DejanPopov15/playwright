import { test, expect } from '@playwright/test';
import { HeaderFooter } from './utilis/header-footer';

test('Validate Header & Footer on Register page', async ({ page }) => {
    await page.goto('https://automaticityacademy.ngrok.app/register');

    const headerFooter = new HeaderFooter(page);
    await headerFooter.validateHeader();
    await headerFooter.validateFooter();
});
