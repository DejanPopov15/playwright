//This will check if the Header and Footer exist on both Login and Register pages.

import { Page, expect } from '@playwright/test';

export class HeaderFooter {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Header elements
    async validateHeader() {
        await expect(this.page.locator('header')).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Home' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Login' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Register' })).toBeVisible();
    }

    // Footer elements
    async validateFooter() {
        await expect(this.page.locator('footer')).toBeVisible();
        await expect(this.page.getByText('© 2024 Automaticity Academy')).toBeVisible();
    }
}
