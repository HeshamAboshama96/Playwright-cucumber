import { CartPage } from '../../tests/pages/CartPage'
import { ICustomWorld } from '../../support/custom-world'
import { When } from '@cucumber/cucumber'

When('Scroll down to the bottom then click on checkout button', async function () {
  const cartPage = new CartPage(this.page!)
  await cartPage.clickCheckoutButton()
})
