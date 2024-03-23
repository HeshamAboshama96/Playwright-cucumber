import { LoginPage } from '../../tests/pages/LoginPage'
import { ICustomWorld } from '../../support/custom-world'
import { Given, When } from '@cucumber/cucumber'

Given('Go to home page', async function (this: ICustomWorld) {
  // const loginPage = new LoginPage(this.page!)
  await this.page?.goto('https://www.saucedemo.com/')
})

When('Login by username: {string} and password: {string}', async function (this: ICustomWorld, username: string, password: string) {
  const loginPage = new LoginPage(this.page!)
  await loginPage.fillUsername(username)
  await loginPage.fillPassword(password)
  await loginPage.clickLoginButton()
})