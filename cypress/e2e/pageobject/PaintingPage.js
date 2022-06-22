import PageObject from "./PageObject";

class PaintingPage extends PageObject {

    expandDetailsSection() {
        cy.contains('button', 'Objectgegevens').click();
    }
}
export default PaintingPage