import { ProductsPage } from "../../tests/pages/ProductsPage";
import { ICustomWorld } from "../../support/custom-world";
import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("Add all the products on the current page to the cart", async function () {
  const productsPage = new ProductsPage(this.page!);
  await productsPage.addAllProductsToCard();
});

When("Click on shopping cart button", async function () {
  const productsPage = new ProductsPage(this.page!);
  await productsPage.clickShoppingCartButton();
});

When("sort the products by {string}", async function (sortOption: string) {
  const productsPage = new ProductsPage(this.page!);
  await productsPage.selectProductSortOption(sortOption);
});

Then(
  "Verify that the active option from the products sort options is {string}",
  async function (activeOption: string) {
    const productsPage = new ProductsPage(this.page!);
    expect(productsPage.returnActiveOption()).toContainText(activeOption);
  }
);

Then(
  "Verify that the count of products in the cart, which appears above the shopping cart icon is {string}",
  async function (productsCount: string) {
    const productsPage = new ProductsPage(this.page!);
    expect(productsPage.returnShoppingCartContainer()).toContainText(
      productsCount
    );
  }
);
