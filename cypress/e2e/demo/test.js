describe('as a user I should be able to login to the hr app', () => {

    it('should login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()
        cy.url().should('include','dashboard')


    });
   
  


});