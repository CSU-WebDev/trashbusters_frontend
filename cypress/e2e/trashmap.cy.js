describe('Trashmap', () => {
    
    beforeEach(() => {
        cy.intercept('https://trashbusters-backend.onrender.com/api/getPins', {fixture: 'onePin.json'})
        cy.visit('localhost:4000/');
    });

    it('should find the element with id "trashmap-container" and check if it contains the text "Trash Map"', () => {
        cy.get('#trashmap-container')
            .should('contain', 'Trash Map')
        cy.get('#google-map')
            .should('be.visible')
    });

    it('should click a stubbed pin location and check if an info window pops up with the stubbed information', () => {
        cy.get('#google-map')
            .wait(3000)
            .click('center')
    })
      
});
