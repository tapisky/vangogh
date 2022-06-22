import CollectionPage from "../pageobject/CollectionPage";
import PaintingPage from "../pageobject/PaintingPage";

describe('Home test cases', () => {

  const collectionPage = new CollectionPage();
  const paintingPage = new PaintingPage();

  beforeEach(() => {
    collectionPage.initialize();
    cy.visit('/nl/collectie');
    collectionPage.searchItem('Het Gele Huis');
  });

  it('Test Case 2: Search "Het Gele Huis" and number of results greater than 700', () => {
    cy.get('.collection-art-object-list-results .results')
            .then(($el) => {
                expect(parseInt($el[0].innerText)).to.greaterThan(700);
            })
  })

  it('Test Case 3: Click on first result and verify painting info', () => {
    collectionPage.loadPaintingByPosition(1);
    paintingPage.expandDetailsSection();
    cy.contains('F0464').should('exist');
    cy.contains('JH1589').should('exist');
    cy.contains('s0032V1962').should('exist');
  })
})