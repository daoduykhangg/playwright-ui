import { test, expect } from '@playwright/test';

test('Home Page', async ({page}) =>{
  await page.goto('https://demoblaze.com/');

  const pageTitle = await page.title();
  console.log('pageTitle: ', pageTitle);
  await expect(page).toHaveTitle('STORE');

  const pageURL = await page.url();
  console.log('pageURL: ', pageURL);
  await expect(page).toHaveURL('https://demoblaze.com/');
  await page.close();
})