import { Locator, Page } from '@playwright/test'

export class CartPage {
  readonly page: Page
  readonly checkoutButton: Locator

  constructor(page: Page) {
    this.page = page
    this.checkoutButton = page.locator('data-test=checkout')

}
async clickCheckoutButton(){
  await this.checkoutButton.scrollIntoViewIfNeeded()
    await this.checkoutButton.click()
}
}