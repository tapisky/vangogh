import PageObject from "./PageObject";

class CollectionPage extends PageObject {

    discoverCollectionLink() {
        return cy.get('a').contains('Ontdek de collectie')
    }

    searchInput(item) {
        cy.get('input[aria-label="Zoek een kunstwerk"]')
            .should('be.visible')
            .clear()
            .type(item);
        return this
    }

    submitSearch() {
        cy.get('[type=submit]')
            .should('be.visible')
            .click()
    }

    searchItem(item) {
        cy.intercept('/nl/collectie/search*').as('search');
        this.searchInput(item);
        this.submitSearch();
        cy.wait('@search');
    }

    loadPaintingByPosition(position) {
        cy.intercept('GET', '/nl/collectie/*').as('load');
        cy.get('div[aria-posinset="' + String(position) + '"]').first().click();
        cy.wait('@load');
    }

}
export default CollectionPage