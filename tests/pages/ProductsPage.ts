import { Locator, Page } from "playwright";

export class ProductsPage {
  readonly page: Page;
  readonly productSortContainer: Locator;
  readonly activeOption: Locator;
  readonly addToCardButton: string;
  readonly shoppingCartContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productSortContainer = page.locator(
      "data-test=product_sort_container"
    );
    this.activeOption = page.locator(".active_option");
    this.addToCardButton = 'button:text("Add to cart")';
    this.shoppingCartContainer = page.locator("id=shopping_cart_container");
  }
  async selectProductSortOption(option: string) {
    switch (option) {
      case "Name (A to Z)":
        await this.productSortContainer.selectOption("az");
        break;
      case "Name (Z to A)":
        await this.productSortContainer.selectOption("za");
        break;
      case "Price (low to high)":
        await this.productSortContainer.selectOption("lohi");
        break;
      case "Price (high to low)":
        await this.productSortContainer.selectOption("hilo");
        break;
    }
  }
  returnActiveOption() {
    return this.activeOption;
  }
  async addAllProductsToCard() {
    const addToCartButtons = await this.page.$$(this.addToCardButton);
    for (const Button of addToCartButtons) {
      await Button.click();
    }
  }
  returnShoppingCartContainer() {
    return this.shoppingCartContainer;
  }
  async clickShoppingCartButton() {
    await this.shoppingCartContainer.click();
  }
}
