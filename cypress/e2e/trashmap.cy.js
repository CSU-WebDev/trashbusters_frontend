describe('Trashmap', () => {
    
    beforeEach(() => {
        cy.visit('localhost:4000/');
    });

    it('should find the Google Map', () => {
        cy.get('#trashmap-container')
            .should('contain', 'Trash Map')
        cy.get('#google-map')
            .should('be.visible')
        cy.get('#trashmap-container')
            .should('be.visible')
    })
502664
    it('should find and click the sole pin, check the pin\'s data in the content of the InfoWindow, and delete the pin', () => {
        cy.intercept('https://trashbusters-backend.onrender.com/api/getPins', {fixture: 'onePin.json'})
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('[href="#trashmap-container"]')
        cy.get('[role="button"]')
            .click({ force: true })
        cy.get('[role="dialog"]')
            .should('contain', 'Latitude: 32.517719')
        cy.get('[role="dialog"]')
            .should('contain', 'Longitude: -84.940670')
        cy.get('[role="dialog"]')
            .should('contain', 'Description: center test point')
        cy.intercept('https://trashbusters-backend.onrender.com/api/deletePin/742cab9e8a85f22fcd58da8d', {fixture: 'noPins.json'})
        cy.get('#delete-btn')
            .click({ force: true })
        cy.get('[role="dialog"]').should('not.exist');
    })

    it('should click the map, see the InfoWindow pop up, \
    enter in a new point description, save the point, click the saved point, \
    and confirm that it is the same point', () => {
        // cy.scrollTo('bottom')
        // cy.wait(2000)
        cy.get('#google-map')
            .scrollIntoView()
            .wait(2000)
            .click('center')
        cy.get('[role="dialog"]')
            .should('contain', 'Latitude: 32.50')
        cy.get('#new-pin-desc-input')
            .click({ force: true })
            .type('new test pin')
        cy.intercept('https://trashbusters-backend.onrender.com/api/addPin', {fixture: 'newPin.json'})
        cy.get('#save-btn')
            .click({ force: true })
        cy.wait(2000)
        cy.get('[role="button"]')
            .click({ force: true })
        cy.get('[role="dialog"]')
            .should('contain', 'new test pin')
    })

    it('should scroll to map', () => {
        cy.get('#google-map')
            .scrollIntoView()
        cy.wait(2000)
    })
    
});
