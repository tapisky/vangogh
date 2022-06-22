import HomePage from "../pageobject/HomePage";

describe('Home test cases', () => {

  const homePage = new HomePage();

  beforeEach(() => {
    homePage.initialize();
  });

  it('Test Case 1: Home Page -> Collection', () => {
    cy.visit('/');
    homePage.discoverCollectionLink().click();
    cy.url().should('eq', Cypress.config().baseUrl + '/nl/collectie');
  })
})