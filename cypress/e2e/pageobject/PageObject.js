class PageObject {
    initialize() {
        // Sets required cookies to skip modal
        cy.setCookie('.GdprCookie.Date', '1655888900921');
        cy.setCookie('.GdprCookie.V1', '1');
    }

    // enterUsername(username) {
    //     cy.get('[id=email]')
    //         .should('be.visible')
    //         .clear()
    //         .type(username);
    //     return this
    // }

    // enterPassword(password) {
    //     cy.get('[id=password]')
    //         .should('be.visible')
    //         .clear()
    //         .type(password);
    //     return this
    // }

    // submit() {
    //     cy.get('[type=submit]')
    //         .should('be.visible')
    //         .click()
    // }

    // fillAndSendLoginInfo(username, password) {
    //     this.enterUsername(username);
    //     this.enterPassword(password);
    //     this.submit();
    // }
}
export default PageObject