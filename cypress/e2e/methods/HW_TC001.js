import { admin } from '../pages/admin'
describe('practicing TC001', () => {

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
   

        cy.get('.oxd-topbar-body-nav-tab-item')
            .eq(6)
            .click()
            .get('.oxd-dropdown-menu')
            .contains('Language Packages')
            .click()


            cy.get('[class="oxd-icon bi-plus oxd-button-icon"]')
            .click()
 

            cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]')
            .click()
            .get('[role="listbox"]')
            .contains('Colognian (Germany)')
            .click()


            cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
            .eq(1)
            .click()


        cy.contains('Colognian (Germany)').
        invoke('text').
        should('equal', 'Colognian (Germany)')

  
        
    });

});