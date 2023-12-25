import { test, expect } from '@playwright/test'

test('Handle input textbox', async({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/")

  await expect(page.locator("//label[text()='Name:']//following-sibling::input[@id='name']")).toBeVisible()
  await expect(page.locator("//label[text()='Name:']//following-sibling::input[@id='name']")).toBeEmpty()
  await expect(page.locator("//label[text()='Name:']//following-sibling::input[@id='name']")).toBeEnabled()
  await expect(page.locator("//label[text()='Name:']//following-sibling::input[@id='name']")).toBeEditable()

  await page.locator("//label[text()='Name:']//following-sibling::input[@id='name']").clear()
  await page.locator("//label[text()='Name:']//following-sibling::input[@id='name']").fill("Khang Dao")
  await page.waitForTimeout(5000)
})