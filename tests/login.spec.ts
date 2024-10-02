import { test, expect } from '@playwright/test';

test('Login user', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.locator('[name="username"]').fill('CSmith');
    await page.locator('[name="password"]').fill('parabank');
    await page.locator('[value="Log In"]').click();
   // await expect(page.locator('div[id="body-panel"] page.smallText')).toContainText(' William Holcombe');
   await expect(page.getByText('Welcome William Holcombe')).toBeVisible();
   //
});
