describe('Cypress Studio Demo', () => {});

it('cypressStudioTest', function() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    //cy.get(' ').click();
    cy.xpath('//a[@data-test="item-3-title-link"]').click();
    cy.xpath('//div[@data-test="inventory-item-name"] //button[@id="add-to-cart"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').click();
    cy.get('[data-test="firstName"]').type('Joe');
    cy.get('[data-test="lastName"]').click();
    cy.get('[data-test="lastName"]').type('Soap');
    cy.get('[data-test="postalCode"]').click();
    cy.get('[data-test="postalCode"]').type('1234');
    cy.get('[data-test="continue"]').click();
});