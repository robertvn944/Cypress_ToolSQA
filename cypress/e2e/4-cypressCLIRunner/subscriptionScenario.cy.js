describe('Login and Subscribe', () => {
 it('Logs in and subscribes to newsletter', () => {
   // Visit the web site
   cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')


// Click on login button
 cy.get('[value="Login"]').click()
// Enter the valid email and password
cy.get('#input-email').type('lambdatestnew@yopmail.com')
cy.get('#input-password').type('Lambda123')


// Click on login button
cy.get('[value="Login"]').click()


// Verify user logged in successfully
cy.url().should('include', 'index.php?route=account/account')
cy.contains('My Account').should('be.visible')


// Subscribe the newsletter
 cy.contains('Newsletter').click()
 cy.get('#input-newsletter-yes').click({force:true})
 cy.get('[value="Continue"]').click()


 // Verify the subscription success message
   cy.get('.alert-success').should('contain', 'Success: Your newsletter subscription has been successfully updated!')
 })
})