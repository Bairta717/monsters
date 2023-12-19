import { pim } from '../pages/pim'
describe('practicing pim', () => {

    before(() => {
        cy.fixture('users').then((data) => {
            globalThis.data = data
        })

    })

    beforeEach(() => {
        cy.login(data.username, data.password)
    });


    it('Test 1', () => {

        cy.visit('/')
        cy.contains('PIM').click()
        cy.get(pim.addButton).click()

            cy.get('[class="oxd-input oxd-input--active orangehrm-firstname"]')
            .click()
            .type ('Beata')
            .click()

            cy.get('[placeholder="Last Name"]')
            .click()
            .type ('Mallard')
            .click()


            cy.get('.oxd-button--secondary')
            .click()


            cy.get('[class="oxd-input oxd-input--active"]')
            .eq(2)
            .clear()
            .type('12345')
            .click()

            cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
            .eq(0)
            .click()

            cy.contains('Employee List').click()


        cy.contains('12345').
        invoke('text').
        should('equal', '12345')






        
    });

});