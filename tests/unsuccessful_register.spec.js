// Automatizovati sledeci scenario:

// Registracija korisnika sa validnim podacima

// Login sa novoregistrovanim korisnikom

// Funkcija koja se koristi za popunjavanje  input polja : https://playwright.dev/docs/api/class-locator#locator-fill
// Funkcija koja se koristi za klik na dugme:
// https://playwright.dev/docs/api/class-locator#locator-click

// Kreirati novu granu iz main/master grane i na njoj raditi zadatak. Uradjen zadatak poslati u formi linka ka GitHub pull request-u u komentaru Trello kartice.

// Testove pustati u serial modu koriscenjem anotacije test.describe.configure({ mode: 'serial' });
// iznad describe bloka (ili ogranicavanjem broja worker-a u konfiguracionom fajlu sa 4 na 1).

import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('Successful login with valid registred account', async ({ page }) => {
    
    // Register
    await page.goto('https://automaticityacademy.ngrok.app/register'); 

    await page.getByRole('textbox', { name: 'Username' }).fill('user81');
    await page.getByRole('textbox', { name: 'Email' }).fill('user81@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('pas');
    
    const registerButton = page.getByRole('button', { name: 'Register' });
    await registerButton.click();

    //await expect(page).toHaveURL(/.*dashboard.*/);


});