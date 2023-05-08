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
            cy.get('input[data-testid="name-input"]').should('have.attr', 'placeholder', 'Enter your name');
            cy.get('input[data-testid="message-input"]').should('have.attr', 'placeholder', 'Enter your message');
            cy.get('button[type="submit"]').contains('Submit');
        })
    })

    // it('should fill out the form and submit, then check that the confirmation page was rendered', () => {
    //     cy.get('#contact-container').scrollIntoView();
    //     cy.get('#form').within(() => {
    //         cy.get('input[type="email"]').type('test@example.com');
    //         cy.get('input[data-testid="name-input"]').type('Billy Bob');
    //         cy.get('input[data-testid="message-input"]').type('This is a test message');
    //         cy.get('button[type="submit"]').click();
    //         cy.wait(2000)
    //     })
    //     cy.url().then((url) => {
    //         console.log('Current URL:', url);
    //         console.log('Test window location:', window.location.href);
    //     }).should('include', 'formspree');
    // })

    // it('should submit the form, then generate the new form submission page and check that the page was rendered', () => {
    //     cy.get('#contact-container').scrollIntoView();
    //     cy.get('#form').within(() => {
    //         cy.get('input[type="email"]').type('test@example.com');
    //         cy.get('input[data-testid="name-input"]').type('Billy Bob');
    //         cy.get('input[data-testid="message-input"]').type('This is a test message');
    //         cy.get('button[type="submit"]').click();
    //         cy.wait(2000)
    //     })
    //     cy.get('.site-container')
    //       .should('contain', 'The form was submitted successfully.');
    //   });
    // });

})