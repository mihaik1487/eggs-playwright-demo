import { test, expect } from '@playwright/test';

test.beforeEach('login with valid credentials', async ({ page }) => {

    // Navigate to your login page
    await page.goto('https://www.saucedemo.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);
});

test('User login with valid credentials', { tag: ['@smoke', '@login', '@regression'] }, async ({ page }) => {

    // Navigate to your login page
    await page.goto('https://www.saucedemo.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);

    // Fill in email and password
    await page.locator('[data-test="username"]').pressSequentially('standard_user');
    await page.locator('[data-test="password"]').pressSequentially('secret_sauce');

    // Click the login button
    await page.click('#login-button');

    // Assert you are redirected or logged in successfully
    await expect(page).toHaveURL(/inventory/);  // adjust the regex or URL as needed

    await expect(page.locator('#error-message-container error')).toBeHidden();
});

test('User tries to login with invalid credentials - invalid user', { tag: ['@smoke','@login', '@regression'] }, async ({ page }) => {

     // Fill in email and password
    await page.locator('[data-test="username"]').pressSequentially('invalid_user');
    await page.locator('[data-test="password"]').pressSequentially('secret_sauce');

    // Click the login button
    await page.click('#login-button');

    // Expect an error message to be visible
    await expect(page.locator('.error-message-container.error')).toBeVisible();
});

test('User tries to login with invalid credentials - invalid password', { tag: ['@login', '@regression'] }, async ({ page }) => {

     // Fill in email and password
    await page.locator('[data-test="username"]').pressSequentially('standard_user');
    await page.locator('[data-test="password"]').pressSequentially('invalid_password');

    // Click the login button
    await page.click('#login-button');

    // Expect an error message to be visible
    await expect(page.locator('.error-message-container.error')).toBeVisible();
});

