
/// <reference types="cypress" />


describe('', () => {
    it('', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('#mce_0_ifr').then((iframe) => {

            const iframeDocument = iframe.contents().find('body')

            cy.wrap(iframeDocument).clear().type('test')




        })

    });
});