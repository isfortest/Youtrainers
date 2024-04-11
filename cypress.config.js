const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Report test | Youtrainers',
    embeddedScreenshots: true,
    ignoreVideos: false,
    videoOnFailOnly: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video: true,
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    chromeWebSecurity: false,
    //PluginConfig cypress-mochawesome-reporter
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})