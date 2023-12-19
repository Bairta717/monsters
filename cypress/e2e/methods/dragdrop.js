/// <reference types="cypress" />

describe('practice drag and drop', () => {
    it('should drop the object', () => {

        const dataTransfer = new DataTransfer()

        // cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        // cy.get('#column-a').trigger('dragstart', { dataTransfer })

        // cy.get('#column-b').trigger('drop', { dataTransfer })

        // cy.get('#column-a header').invoke('text').should('equal', 'B')

        cy.visit('https://artoftesting.com/samplesiteforselenium')

        cy.get('#myImage').trigger('dragstart', { dataTransfer })

        cy.get('#targetDiv').trigger('drop', { dataTransfer })



    });
});