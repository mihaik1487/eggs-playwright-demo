import { test, expect } from '@playwright/test';

test.beforeEach('User login with valid credentials', async ({ page }) => {

    // Navigate to your login page
    await page.goto('https://www.saucedemo.com/');

    // Fill in email and password
    await page.locator('[data-test="username"]').pressSequentially('standard_user');
    await page.locator('[data-test="password"]').pressSequentially('secret_sauce');

    // Click the login button
    await page.click('#login-button');
});

test('User complete checkout flow',{ tag: ['@regression @checkout'] }, async ({ page }) => {

   // Add backpack item to cart
   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

   // Open the cart
   await page.click('.shopping_cart_link');

   // Click checkout
   await page.click('[data-test="checkout"]');

   // Fill user info
   await page.fill('[data-test="firstName"]', 'John');
   await page.fill('[data-test="lastName"]', 'Doe');
   await page.fill('[data-test="postalCode"]', '12345');
   await page.click('[data-test="continue"]');

   // Finish checkout
   await page.click('[data-test="finish"]');

   // Assert checkout complete
   await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

