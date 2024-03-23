import { CartPage } from '../../tests/pages/CartPage'
import { ICustomWorld } from '../../support/custom-world'
import { When, Then } from '@cucumber/cucumber'
import { scroll } from '../../support/helpers'


When('Scroll down to the buttom then click on checkout button', async function (this: ICustomWorld) {
  const cartPage = new CartPage(this.page!)
  await cartPage.clickCheckoutButton()
})
