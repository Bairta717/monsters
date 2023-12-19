/// <reference types="cypress" />

describe('practicing upload', () => {
    it('hi', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').selectFile("cypress/fixtures/dog.jpeg")

        cy.get('#file-submit').click()

        cy.get('.example h3')

            //1 way of assertion should
            // .invoke('text')
            // .should('equal', "File Uploaded!")

            //2 way of assertion should

            .should('have.text', 'File Uploaded!')

    });
});





