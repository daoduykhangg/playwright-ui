import {test, expect} from '@playwright/test';
import { log } from 'console';

test('Assertions', async({page}) =>{

  //1) toHaveURL
  await page.goto('https://demo.nopcommerce.com/register')
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2) toHaveTitle
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  //3) toBeVisible
  const logoImage = await page.locator("//div[@class='header-logo']//img")
  await expect(logoImage).toBeVisible()

  //4) toBeEnable
  const searchTextbox = await page.locator("//input[@placeholder='Search store']")
  await expect(searchTextbox).toBeEnabled()

  //5)) toBeChecked - RadioButton
  const maleRadioButton = await page.locator("//label[text()='Male']//preceding-sibling::input")
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  //6)) toBeChecked - Checkbox
  const newsletterCheckbox = await page.locator("//input[@id='Newsletter']")
  await expect(newsletterCheckbox).toBeChecked();

  //7) toHaveAttribute
  const registerButton = await page.locator("//button[text()='Register']")
  await expect(registerButton).toHaveAttribute("type","submit")

  //8) toHaveText()
  const titleText = await page.locator("//div[@class='page-title']//h1")
  await expect(titleText).toHaveText("Register")

  //9) toContainText()
  await expect(titleText).toContainText("Reg")

  //10) toHaveValue()
  const firstNameTextbox = await page.locator("//label[text()='First name:']//following-sibling::input")
  await firstNameTextbox.clear()
  await firstNameTextbox.fill("Khang")
  await expect(firstNameTextbox).toHaveValue("Khang")

  //11) toHaveCount()
  const dayDropdownList = await page.locator("//select[@name='DateOfBirthDay']//option")
  await expect(dayDropdownList).toHaveCount(32)
})