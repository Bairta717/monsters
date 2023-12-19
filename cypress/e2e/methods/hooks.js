import { admin } from '../pages/admin'
describe('practicing hooks', () => {

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
    });

    it('Test 2', () => {
        cy.visit('/')
        cy.contains("Claim").click()
    });

    it('Test 2', () => {
        cy.visit('/')
        cy.contains("Directory").click()
    });
});