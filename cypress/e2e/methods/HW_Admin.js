import { admin } from '../pages/admin'
describe('practicing Admin', () => {

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
        cy.contains('Admin').click()
        cy.get(admin.addButton).click()

        cy.get('.oxd-select-text-input')

            .eq(0)
            .click()
            .get('.oxd-select-option')
            .contains('ESS')
            .click()


            cy.get('.oxd-select-text-input')

            .eq(1)
            .click()
            .get('.oxd-select-option')
            .contains('Enabled')
            .click()


            cy.get('[placeholder="Type for hints..."]')
            .type('Paul Collings')
            .get('[role="listbox"]')
            .contains('Paul Collings').click()



            cy.get('[autocomplete="off"]')
            .eq(0)
            .click()
            .type ('BAIRTA78')
            .click()


            cy.get('[autocomplete="off"]')
            .eq(1)
            .click()
            .type ('admin123')
            .click()

            cy.get('[autocomplete="off"]')
            .eq(2)
            .click()
            .type ('admin123')
            .click()

            cy.get('[type="submit"]')
            .click()

        cy.get(':nth-child(5) > .oxd-table-row > :nth-child(2) > div').
        invoke('text').
        should('equal', 'BAIRTA78')
        
    });

    // it('Test 2', () => {
    //     cy.visit('/')
       
    // });

    // it('Test 2', () => {
    //     cy.visit('/')
    //     cy.contains("Directory").click()
    // });
});