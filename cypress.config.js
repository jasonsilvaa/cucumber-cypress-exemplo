const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.feature',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    video: false,
    screenshot: 'only-on-failure',
    screenshotOnRunFailure: true,
    env: {
      BASE_URL: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
      ADMIN_EMAIL: process.env.CYPRESS_ADMIN_EMAIL || 'admin@biblioteca.com',
      ADMIN_PASSWORD: process.env.CYPRESS_ADMIN_PASSWORD || 'admin123',
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }))
      return config
    },
  },
})
