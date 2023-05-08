describe('Navigation Bar', () => {
    beforeEach(() => {
        cy.visit('localhost:4000')
    })

    it('should navigate to each section when the navbar links are clicked', () => {
        cy.get('#navigation-bar').within(() => {
            cy.get('.navbar-link').eq(0).click()
        });
        cy.get('#about-container').should('be.visible');
        cy.url().should('include', '#about-container');

        cy.get('#navigation-bar').within(() => {
            cy.get('#trashmap-link').click()
        });
        cy.get('#trashmap-container').should('be.visible');
        cy.url().should('include', '#trashmap-container');

        cy.get('#navigation-bar').within(() => {
            cy.get('.navbar-link').eq(2).click()
        });
        cy.get('#contact-container').should('be.visible');
        cy.url().should('include', '#contact-container');
    })
})