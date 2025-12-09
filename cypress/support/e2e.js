// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import '@shelex/cypress-allure-plugin';

import './commands'
// 1. Prevent cross-origin script errors from failing tests
Cypress.on("uncaught:exception", () => {
  return false;
});
// Block all major ad networks
beforeEach(() => {
  const blockList = [
    /pagead2.googlesyndication/,
    /stat-rock/,
    /googleads/,
    /doubleclick/,
    /googlesyndication/,
    /googletagmanager/,
    /adservice/,
    /adroll/,
    /criteo/,
    /id5-sync/,
    /openx/,
    /adtrafficquality/,
    /ep1\.adtrafficquality\.google/,
  ];

  blockList.forEach((pattern) => {
    cy.intercept('GET', pattern, {
      statusCode: 204,
      body: '',
    }).as('blocked');
  });
});