/// <reference types="cypress" />


describe('', () => {
    it('', () => {

        // cy.visit('https://the-internet.herokuapp.com/iframe')

        // cy.get('#mce_0_ifr').then((iframe) => {

        //     const iframeDocument = iframe.contents().find('body')

        //     cy.wrap(iframeDocument).clear().type('test')

        // })

        cy.visit('https://nxtgenaiacademy.com/iframe/')

        cy.get('[name="formpage"]').then((iframe) => {

            const iframeDocument = iframe.contents().find('[name="vfb-5"]')

            cy.wrap(iframeDocument).type('BBBB')
                
              

        })



    });
});