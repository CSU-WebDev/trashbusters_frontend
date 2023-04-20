describe('Trashmap', () => {
    
    beforeEach(() => {
        cy.intercept('https://trashbusters-backend.onrender.com/api/getPins', {fixture: 'onePin.json'})
        cy.visit('localhost:4000/');
    });

    // it('should click the navbar trashmap link and scroll to it', () => {
    //     cy.scrollTo('bottom')
    //     cy.get('[href="#trashmap-container"]')
    //         .click({ scroll: true })
    //     // cy.get('#742cab9e8a85f22fcd58da8d')
    //     cy.get('[aria-label="hello world"]')
    //         .click({ force: true })
    //     // // cy.scrollTo('bottom', { easing: 'linear', duration: 300 }).wait(300);
    // });

    it('should grab the pin', () => {
  
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('[href="#trashmap-container"]')
            // .click({ scroll: true })
        cy.get('[role="button"]')
            .click({ force: true })
        cy.get('[role="dialog"]')
            .should('contain', 'Latitude: 32.517719')
        cy.get('[role="dialog"]')
            .should('contain', 'Longitude: -84.940670')
        cy.get('[role="dialog"]')
            .should('contain', 'Description: center test point')
        cy.get('#delete-btn')
            .click({ force: true })
    })


    // it('gets the google map instance', () => {
    //     cy.get('[href="#trashmap-container"]')
    //         .click({ scroll: true })
    //     cy.window().then((win) => {
    //         const trashMapInstance = win.document.querySelector('#google-map')
    //         cy.log(trashMapInstance)
    //     })
    // })

    // it('clicks on a pin', () => {
    //     cy.get('[href="#trashmap-container"]')
    //         .click({ scroll: true })
        
    // })
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
