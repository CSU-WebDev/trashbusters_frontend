describe('Pitch', () => {
    
    beforeEach(() => {
        cy.visit('/');
    });

    it('should find the element with id "pitch-container" and check if it contains the text "Which do you prefer???" and two images', () => {
        cy.get('#pitch-container')
            .should('contain', 'Which do you prefer???')
        cy.get('#pitch-container')
            .find('img')
            .should('have.length', 2)
    });
});