# Cypress E-Commerce Automation

This repository contains automated tests for an e-commerce application using Cypress.

## Project Structure

```
CypressAutomation/
├── .github/
├── cypress/
│   ├── e2e/
│   │   ├── ecommerce.cy.js
│   │   ├── spec.cy.js
│   │   └── testing.cy.js
│   ├── fixtures/
│   └── support/
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package.json
└── package-lock.json
```

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Running Tests

To run the tests locally:

```bash
npm test
```

To run tests and record results in Cypress Dashboard:

```bash
npm run dashboard
```

## Dependencies

- Cypress (^10.0.2)
- cypress-iframe (^1.0.1)
- Mocha (^10.0.0)
- Mochawesome (^7.1.3)

## Test Specs

The project contains the following test specifications:

- `ecommerce.cy.js`: Tests for the e-commerce functionality
- `spec.cy.js`: General test specifications
- `testing.cy.js`: Additional test cases

## Configuration

Cypress is configured using the `cypress.config.js` file. The project uses Cypress Dashboard for test recording and monitoring.
