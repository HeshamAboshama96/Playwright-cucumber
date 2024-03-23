import { CheckoutStepTwoPage } from '../../tests/pages/CheckoutStepTwoPage'
import { ICustomWorld } from '../../support/custom-world'
import { When } from '@cucumber/cucumber'
import { scroll } from '../../support/helpers'

When('Scrol down to the buttom then click on finish button', async function (this: ICustomWorld) {
  const checkoutStepTwoPage = new CheckoutStepTwoPage(this.page!)
  await checkoutStepTwoPage.clickFinishButton()
})
