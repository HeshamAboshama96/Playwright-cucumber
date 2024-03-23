import { Locator, Page } from 'playwright'

export class LoginPage {
  readonly page: Page
  readonly username: Locator
  readonly password: Locator
  readonly loginButton: Locator

  constructor(page: Page) {
    this.page = page
    this.username = page.locator('data-test=username')
    this.password = page.locator('data-test=password')
    this.loginButton = page.locator('data-test=login-button')
}
async fillUsername(username: string){
    await this.username.fill(username)
}

async fillPassword(password: string){
    await this.password.fill(password)
}

async clickLoginButton(){
    await this.loginButton.click()
}


  async goto(url: string) {
    await this.page.goto(url)
  }
}
