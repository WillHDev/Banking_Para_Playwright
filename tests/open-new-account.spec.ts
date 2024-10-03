import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.locator('[name="username"]').fill('CSmith');
    await page.locator('[name="password"]').fill('parabank');
    await page.locator('[value="Log In"]').click();
   // await expect(page.locator('div[id="body-panel"] page.smallText')).toContainText(' William Holcombe');
   await expect(page.getByText('Welcome William Holcombe')).toBeVisible();
   //
  });

  test('Open a new account', async ({ page }) => {
    //await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', { name: 'Open New Account' }).click();
    await page.locator('input[value="Open New Account"]').click();
    await page.waitForTimeout(5000);


    await page.getByRole('link', { name: 'Transfer Funds' }).click();

    await page.locator('#amount').fill('100');
    await page.locator('#toAccountId').click()
   //
});