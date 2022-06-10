const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8h3wye',
  "defaultCommandTimeout": 10000,
  "reporter" : "mochawesome",
  "env": { 
    "url" : "https://rahulshettyacademy.com",
    
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
