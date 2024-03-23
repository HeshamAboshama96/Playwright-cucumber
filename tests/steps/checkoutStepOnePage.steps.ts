import { CheckoutStepOnePage } from '../../tests/pages/CheckoutStepOnePage'
import { ICustomWorld } from '../../support/custom-world'
import { When } from '@cucumber/cucumber'

When('Fill first name by {string}, last name by {string} and postal code by {string} then click on continue', async function (firstName: string, lastName: string, postalCode: string) {
  const checkoutStepOnePage = new CheckoutStepOnePage(this.page!)
  await checkoutStepOnePage.fillFirstName(firstName)
  await checkoutStepOnePage.fillLastName(lastName)
  await checkoutStepOnePage.fillPostalCode(postalCode)
  await checkoutStepOnePage.clickContinueButton()
})