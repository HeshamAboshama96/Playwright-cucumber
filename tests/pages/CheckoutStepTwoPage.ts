import { Locator, Page } from "playwright";

export class CheckoutStepTwoPage {
  readonly page: Page;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishButton = page.locator("data-test=finish");
  }
  async clickFinishButton() {
    await this.finishButton.scrollIntoViewIfNeeded();
    await this.finishButton.click();
  }
}
