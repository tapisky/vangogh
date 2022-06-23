import PageObject from "./PageObject";

class PaintingPage extends PageObject {

    expandDetailsSection() {
        cy.contains('button', 'Objectgegevens').click();
    };

    verifyPainting(fnummer, jhnummer, inventarisnummer) {
        this.expandDetailsSection();
        // Verify f-nummer, jh-nummer and inventarisnummer
        cy.contains(fnummer).should('exist');
        cy.contains(jhnummer).should('exist');
        cy.contains(inventarisnummer).should('exist');
    }
}
export default PaintingPage