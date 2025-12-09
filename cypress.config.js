const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  await allureWriter(on, config);
  on('file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Screenshot logging
  on('after:screenshot', (details) => {
        console.log('Screenshot captured:', details.path);
  });
  return config;
}


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/",
    specPattern: '**/*.{feature,features}',
    setupNodeEvents,
    reporter: 'spec',
    // Screenshot configuration
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    supportFile: "cypress/support/e2e.js",
    // For tagging
    env: {
      TAGS: "",
      allure: true
    }
  }  
});
