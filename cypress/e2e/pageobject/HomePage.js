import PageObject from "./PageObject";

class HomePage extends PageObject {

    discoverCollectionLink() {
        return cy.get('a').contains('Ontdek de collectie')
    }
}
export default HomePage