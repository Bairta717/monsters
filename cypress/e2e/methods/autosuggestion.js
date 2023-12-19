/// <reference types="cypress" />

describe('practicing auto suggestion', () => {
    it('should pick Apple', () => {

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('A')

        cy.contains('.G43f7e li', 'Apple').click()



    });
});