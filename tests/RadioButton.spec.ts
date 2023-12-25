import { test, expect } from '@playwright/test'

test('Handle input textbox', async({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/")
  const maleRadioButton = await page.locator("//input[@id='male']")
  await maleRadioButton.check()
  await expect.soft(maleRadioButton).toBeChecked()
  const femaleRadioButton = await page.locator("//input[@id='female']");
  await expect.soft(await femaleRadioButton.isChecked()).toBeFalsy();

  await page.waitForTimeout(5000)
})