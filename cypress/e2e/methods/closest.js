/// <reference types="cypress" />


describe('', () => {
    it('', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

        cy.get('[href = "/web/index.php/leave/viewLeaveModule"]')

            .closest('ul')
            .should('have.class', 'oxd-main-menu')

            

    });
});