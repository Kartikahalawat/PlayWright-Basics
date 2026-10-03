const { test, expect } = require('@playwright/test');

test('Browser Context-Validating  Error login', async ({ page }) => {
    // chrome - plugins/cookies

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("kartikahalawat01@gmail.com");
    await page.locator("#userPassword").fill("Kartik01*");
    await page.locator("[value='Login']").click();

    //Waiting till all network calls are made
    //await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

});
