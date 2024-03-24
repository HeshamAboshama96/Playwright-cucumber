import { ICustomWorld } from "../support/custom-world";
import {
  ChromiumBrowser,
  chromium,
  firefox,
  FirefoxBrowser,
  webkit,
  WebKitBrowser,
} from "@playwright/test";
import { config } from "./config";
import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);
BeforeAll(async function () {
  switch (process.env.BROWSER) {
    case "firefox":
      browser = await firefox.launch(config.browserOptions);
      break;
    case "webkit":
      browser = await webkit.launch(config.browserOptions);
      break;
    default:
      browser = await chromium.launch(config.browserOptions);
  }
});
Before(async function (this: ICustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: ICustomWorld) {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});

function ensureDir(tracesDir: any) {
  throw new Error("Function not implemented.");
}
