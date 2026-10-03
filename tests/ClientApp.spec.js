const { test, expect } = require('@playwright/test');

test.only('Browser Context-Validating  Error login', async ({ page }) => {
    // chrome - plugins/cookies

    const productName = 'Zara Coat 3';

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("kartikahalawat01@gmail.com");
    await page.locator("#userPassword").fill("Kartik01*");
    await page.locator("[value='Login']").click();

    //Waiting till all network calls are made
    //await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const products = await page.locator(".card-body");
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    const count = await products.count();
    for (let i = 0; i < count; i++) {
        const title = await products.nth(i).locator("b").textContent();

        if (title?.trim().toLowerCase() === productName.trim().toLowerCase()) {
            await products.nth(i).locator("text='Add To Cart'").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = page.locator("h3:has-text('ZARA COAT 3')").isVisible();

    expect(bool).toBeTruthy();

});
