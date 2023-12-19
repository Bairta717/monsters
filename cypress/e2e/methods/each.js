describe('as a user I should be able to login to the hr app', () => {

    it('should practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()
        cy.url().should('include','dashboard')
        
// use each method if you need click to one categories of many anothers
        // cy.get('[class="oxd-main-menu"] li').each((category) => {

        //     if (category.text().includes("Time")) {
        //         cy.wrap(category).click()
        //     }

        // })

        cy.get('[class="oxd-main-menu"] li').each((category) => {

            if (category.text().includes("Admin")) {
                cy.wrap(category).click()
            }

        })
        
        cy.get('[class="oxd-topbar-body"] li').each((category) => {

            if (category.text().includes("Nationalities")) {
                cy.wrap(category).click()
            }

        })
        
    });
   
  


});