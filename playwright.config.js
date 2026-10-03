// @ts-check
import { defineConfig, devices } from '@playwright/test';



const config = ({
    testDir: './tests',
    timeout: 30 * 1000, //30 milliseconds
    expect : {
      timeout: 5000
    },

    reporter: 'html',

    use: {
      browserName: 'chromium',
      use: {
    headless: process.env.CI ? true : false,
}
  },

});
module.exports = config;

