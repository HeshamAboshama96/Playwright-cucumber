import { CartPage } from '../../tests/pages/CartPage'
import { ICustomWorld } from '../../support/custom-world'
import { When, Then } from '@cucumber/cucumber'

When('Scroll down to the buttom then click on checkout button', async function (this: ICustomWorld) {
  const cartPage = new CartPage(this.page!)
  await cartPage.clickCheckoutButton()
})
