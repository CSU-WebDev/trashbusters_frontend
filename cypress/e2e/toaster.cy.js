describe('Toaster', () => {
    
    beforeEach(() => {
        cy.visit('localhost:4000/');
    });

    it('should scroll to the map, enter in a new point, save the point, causing the spinner to appear, \
    and check for the spinner', () => {
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
            .wait(2000)
            .click({ force: true })
        cy.get('#spinner')
            .should('be.visible')
    })
});

describe('TrashMap', () => {

    beforeEach(() => {
        cy.visit('localhost:4000/');
    });

    it('should show the Toaster component if an error occurs while getting all pins', () => {
        cy.intercept('GET', 'https://trashbusters-backend.onrender.com/api/getPins', {
            statusCode: 500,
            body: {}
          }).as('getPinsError');
      
          cy.visit('localhost:4000/');
      
          cy.wait('@getPinsError');
      
          cy.get('[data-testid="toaster-container"]').should('be.visible');
          cy.get('[data-testid="toaster"]').should('contain', 'Error');
    });
  });
  