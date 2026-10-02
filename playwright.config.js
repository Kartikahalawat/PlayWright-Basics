// @ts-check
import { defineConfig, devices } from '@playwright/test';



const config = ({
    testDir: './tests',
    timeout: 40 * 1000, //40 milliseconds
    expect : {
      timeout: 40 *1000
    },

    use: {
      browserName: 'webkit',
      headless : false
  },

});
module.exports = config;

