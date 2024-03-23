import { CheckoutStepTwoPage } from '../../tests/pages/CheckoutStepTwoPage'
import { ICustomWorld } from '../../support/custom-world'
import { When } from '@cucumber/cucumber'

When('Scroll down to the buttom then click on finish button', async function () {
  const checkoutStepTwoPage = new CheckoutStepTwoPage(this.page!)
  await checkoutStepTwoPage.clickFinishButton()
})
