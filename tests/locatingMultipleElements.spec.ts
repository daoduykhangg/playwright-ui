import { test, expect } from '@playwright/test';

test('Locating multiple elements', async({page}) => {
  await page.goto('https://demoblaze.com');
  await page.waitForSelector("//div[@id='tbodyid']//h4/a");
  const productNameElements = await page.$$("//div[@id='tbodyid']//h4/a");
  for(const productNameElement of productNameElements){
    const productName = await productNameElement.textContent();
    console.log(productName);
  }

})