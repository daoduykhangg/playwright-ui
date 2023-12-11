import {test, expect} from '@playwright/test';

test('Login', async({page}) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.locator('id=login2').click();
  
  await page.locator('#loginusername').fill('pavanol');
  await page.fill('#loginpassword', 'test@123');

  await page.click("//button[text()='Log in']");
  await expect(page.locator("//a[@id='logout2']")).toBeVisible();
  await page.close();

})