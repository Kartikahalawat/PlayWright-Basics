const { test, expect } = require('@playwright/test');

test.only('Browser Context-Validating  Error login', async ({ page }) => {
    // chrome - plugins/cookies

    const productName = 'Zara Coat 4';

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("kartikahalawat01@gmail.com");
    await page.locator("#userPassword").fill("Kartik01*");
    await page.locator("[value='Login']").click();

    //Waiting till all network calls are made
    //await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const products = await page.locator(".card-body");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    const count = await products.count();
    for(let i=0; i<count; i++){
        if (await products.nth(i).locator("b").textContent() === productName){
            //add to cart
            await products.nth(i).locator("text='Add To Cart'").click();
            break;
        }
    }


});
