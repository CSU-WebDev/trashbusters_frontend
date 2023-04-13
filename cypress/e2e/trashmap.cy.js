describe('Trashmap', () => {
    
    beforeEach(() => {
        cy.intercept('https://trashbusters-backend.onrender.com/api/getPins', {fixture: 'onePin.json'})
        cy.visit('localhost:4000/');
    });

    it('should click the navbar trashmap link and scroll to it', () => {
        cy.get('#trashmap-link')
            .click({ force: true })
        cy.get('#trashmap-link')
        // cy.scrollTo('bottom', { easing: 'linear', duration: 300 }).wait(300);
            .click({ force: true })
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
            .click()
    });

    // it('should find the element with id "trashmap-container" and check if it contains the text "Trash Map"', () => {
    //     cy.get('#trashmap-container')
    //         .should('contain', 'Trash Map')
    //     cy.get('#google-map')
    //         .should('be.visible')
    //     cy.get('#trashmap-container')
    //         .should('be.visible')
    //         .scrollTo('center', {ensureScrollable: false})
        // cy.wait(2000)
        // cy.get('#trashmap-link')
        //     .click({ force: true })
        // cy.wait(3000)
        // cy.get('#trashmap-link')
        //     .click({ force: true })
            // .wait(3000)
        // cy.get('[aria-label="hello world"]')
        //     .scrollIntoView()
        //     cy.wait(5000)
        //     .click({ force: true })
    // });

    // it('should click a stubbed pin location and check if an info window pops up with the stubbed information', () => {
    //     cy.get('#google-map')
    //         .wait(3000)
    //         .click('center')
    // })
      
});
