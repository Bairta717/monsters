const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // screenshotOnRunFailure: true,
    // trashAssetsBeforeRuns: true,

    
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",


    baseUrl: "https://opensource-demo.orangehrmlive.com",

    viewportHeight: 1080,
    viewportWidth: 1630,

    // retries: {

    //   openMode: 1,

    //   runMode: 2

    // },

    // reporter: 'mochawesome',
    // projectId: "a4ook2" 

  },

  env: {



    qa: "https://www.google.com/",

    uat: "https://www.yahoo.com/?guccounter=1",

    bank: "https://parabank.parasoft.com/parabank/register.htm"

  },



});
