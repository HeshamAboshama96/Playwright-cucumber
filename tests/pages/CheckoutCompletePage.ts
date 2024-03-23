import { Locator, Page } from 'playwright'

export class CheckoutCompletePage {
  readonly page: Page
  readonly checkoutCompleteContainer: Locator

  constructor(page: Page) {
    this.page = page
    this.checkoutCompleteContainer = page.locator('id=checkout_complete_container')

}
returnCheckoutCompleteContainer(){
    return this.checkoutCompleteContainer
}
}
