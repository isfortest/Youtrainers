const { defineConfig } = require('cypress')
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  /*reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Report test | Youtrainers',
    embeddedScreenshots: true,
    ignoreVideos: false,
    videoOnFailOnly: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },*/
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    chromeWebSecurity: false,
    baseUrl: "https://www.staging.youtrainers.com",
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);

      allureCypress(on);
      return config;
      },

    env: {
      allureReuseAfterSpec: false
    }

  },
})