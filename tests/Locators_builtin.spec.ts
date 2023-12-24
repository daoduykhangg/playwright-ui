import { test, expect } from '@playwright/test';

test('Locators built-in', async({page}) => {
/*

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //page.getByRole() to locate by explicit and implicit accessibility attributes.
  await expect(page.getByAltText('company-branding')).toBeVisible();

  //page.getByPlaceholder() to locate an input by placeholder.
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  //page.getByRole() to locate by explicit and implicit accessibility attributes.
  await page.getByRole('button', { type: 'submit' }).click();

  //page.getByText() to locate by text content.
  const NameElement = await page.locator("//p[@class='oxd-userdropdown-name']").textContent() as string;
  
  await expect(page.getByText(NameElement)).toBeVisible();

  //page.getByLabel() to locate a form control by associated label's text.
  await page.locator("//span[text()='My Info']").click();
})