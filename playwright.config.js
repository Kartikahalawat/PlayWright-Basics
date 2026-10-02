// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
    testDir: './tests',
    timeout: 40 * 1000, //40 milliseconds
    expect : {
      timeout: 40 *1000
    },

    use: {
      browserName: 'chromium'
   
  },

});
module.exports = config;

