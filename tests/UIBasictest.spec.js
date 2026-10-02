const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ browser }) => {
    // chrome - plugins/cookies

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title);

    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");

    //css, xpath
    await userName.fill("KartikAhalawat");
    await page.locator("[type='password']").fill("learning");
    await signIn.click();

    //wait until this locator shown up page
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
});

test('Page Playwright test', async ({ page }) => {
    await page.goto("https://google.com");
    //get title
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});