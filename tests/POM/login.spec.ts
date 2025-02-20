//  Validate Header & Footer in Login and Register Pages

import { test, expect } from '@playwright/test';
import { HeaderFooter } from './utilis/header-footer';

test('Validate Header & Footer on Login page', async ({ page }) => {
    await page.goto('https://automaticityacademy.ngrok.app/login');
    
    const headerFooter = new HeaderFooter(page);
    await headerFooter.validateHeader();
    await headerFooter.validateFooter();
});
