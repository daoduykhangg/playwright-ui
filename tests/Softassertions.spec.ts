import {test, expect} from '@playwright/test';
import { log } from 'console';

test('Assertions', async({page}) =>{

  //1) toHaveURL
  await page.goto('https://demo.nopcommerce.com/register')
  await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2) toHaveTitle
  await expect.soft(page).toHaveTitle('nopCommerce demo store.')

  //3) toBeVisible
  const logoImage = await page.locator("//div[@class='header-logo']//img")
  await expect.soft(logoImage).toBeVisible()

  //4) toBeEnable
  const searchTextbox = await page.locator("//input[@placeholder='Search store']")
  await expect.soft(searchTextbox).toBeEnabled()

  //5)) toBeChecked - RadioButton
  const maleRadioButton = await page.locator("//label[text()='Male']//preceding-sibling::input")
  await maleRadioButton.click();
  await expect.soft(maleRadioButton).toBeChecked();

  //6)) toBeChecked - Checkbox
  const newsletterCheckbox = await page.locator("//input[@id='Newsletter']")
  await expect.soft(newsletterCheckbox).toBeChecked();

  //7) toHaveAttribute
  const registerButton = await page.locator("//button[text()='Register']")
  await expect.soft(registerButton).toHaveAttribute("type","submit")

  //8) toHaveText()
  const titleText = await page.locator("//div[@class='page-title']//h1")
  await expect.soft(titleText).toHaveText("Register")

  //9) toContainText()
  await expect.soft(titleText).toContainText("Reg")

  //10) toHaveValue()
  const firstNameTextbox = await page.locator("//label[text()='First name:']//following-sibling::input")
  await firstNameTextbox.clear()
  await firstNameTextbox.fill("Khang")
  await expect.soft(firstNameTextbox).toHaveValue("Khangg")

  //11) toHaveCount()
  const dayDropdownList = await page.locator("//select[@name='DateOfBirthDay']//option")
  await expect.soft(dayDropdownList).toHaveCount(32)
})