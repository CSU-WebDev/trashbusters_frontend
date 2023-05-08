describe('Footer', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  

    it('should contain Trashbusters, copyright sign, and the current date', () => {
        const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
    
        cy.get('#footer')
          .find('p')
          .should('contain.text', `Trashbusters © ${currentDate}`);
      });

  });
  