const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    integrationFolder: "cypress/e2e",
    downloadsFolder: "cypress/downloads",
    testIsolation: false,
  },
});
