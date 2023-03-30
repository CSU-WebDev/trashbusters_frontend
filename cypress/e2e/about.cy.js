describe('About', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should find the element with id "about-container" and check if it contains the text "About"', () => {
      cy.get('#about-container')
        .should('contain', 'About');
    });
  });
  