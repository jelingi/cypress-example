const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'fixtures',
  screenshotsFolder: './report/',
  e2e: {
    experimentalOriginDependencies: true,
    reporter: 'cypress-xray-junit-reporter',
    reporterOptions: {
      mochaFile: './report/[suiteName].xml',
      useFullSuiteTitle: false,
      jenkinsMode: true,
      xrayMode: true, // if JiraKey are set correctly inside the test the XML report will contain the JiraKey value
      attachScreenshot: true, // if a test fails, the screenshot will be attached to the XML report and imported into xray
    },
    setupNodeEvents (on, config) {
      require('cypress-xray-junit-reporter/plugin')(on, config, {})
      //require('./plugins')(on, config)
      return config

    },
    baseUrl: 'https://qualityshepherd.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support',
    defaultCommandTimeout: 10000
  }
})
