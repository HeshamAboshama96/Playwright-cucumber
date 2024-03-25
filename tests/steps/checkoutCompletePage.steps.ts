import { CheckoutCompletePage } from "../../tests/pages/CheckoutCompletePage";
import { ICustomWorld } from "../../support/custom-world";
import { Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";

Then(
  "Verify that the order completion message appears correctly",
  async function () {
    const checkoutCompletePage = new CheckoutCompletePage(this.page!);
    await expect(
      await checkoutCompletePage.returnCheckoutCompleteContainer()
    ).toContain("Thank you for your order!");
    await expect(
      await checkoutCompletePage.returnCheckoutCompleteContainer()
    ).toContain(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  }
);
