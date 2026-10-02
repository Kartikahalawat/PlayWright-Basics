const {test} = require('@playwright/test');



test('Browser Context Playwright test', async (browser)=>     //anonymous async function with (browser) a fixtures (global variable)
{   
    //chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

 
});

test('Page Playwright test', async (page)=>     //anonymous async function with (page) a fixtures (global variable)
{   
    await page.goto("https://google.com");

});

