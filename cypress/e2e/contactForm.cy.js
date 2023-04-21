describe('Contact Form', () => {
    
    beforeEach(() => {
        cy.visit('localhost:4000/');
    });

    it('should find the contact form', () => {
        cy.get('#contact-container')
            .scrollIntoView()
            .wait(1000)
            .should('contain', 'Contact Us')
            .should('be.visible') 
    })
        
    it('should display the contact form', () => {
        cy.get('#contact-container').scrollIntoView();
        cy.get('#form').within(() => {
            cy.get('input[type="email"]').should('have.attr', 'placeholder', 'Enter email');
            cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password');
            cy.get('button[type="submit"]').contains('Submit');
        })
    })
    
    it('should fill out the form and submit', () => {
        cy.get('#contact-container').scrollIntoView();
        cy.get('#form').within(() => {
            cy.get('input[type="email"]').type('test@example.com');
            cy.get('input[type="password"]').type('testpassword');
            cy.get('button[type="submit"]').click();
        })
    })

});
