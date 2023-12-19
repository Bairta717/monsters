describe('as a user I should be able to login to the hr app', () => {

    it('should practice each method', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')

        cy.get('[type="submit"]').click()

            cy.get('[href="/web/index.php/pim/viewPimModule"]').click()


            //explicit example
        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').then((x) => {


        //     expect('PIM').to.equal(x.text())


        // })

            //implicit example with invoke
        // cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').
        // invoke('text').
        // should('equal', 'PIM')


        
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
            .invoke('text')
            .as('HeaderPIM')

        cy.contains('Employee List')
            .invoke('text')
            .as('Elist')

        // cy.get('@HeaderPIM').should('equal', 'PIM')
        // cy.get('@Elist').should('equal', 'Employee List')

        cy.get('@Elist').click()

        // cy.contains('Leave').click()
// eg() method

  //cy.get('[class="oxd-main-menu"] li').eq(1).click()

        //cy.get("[data-v-5327b38a = ''] ul li").eq(3).click()


    });
});







  

