import { Page } from 'playwright'

export async function scroll(page: Page, x: number, y: number) {
    await page.evaluate(() => {
        window.scrollBy(x,y)
    })
  }
  