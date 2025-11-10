describe.only('Lambda Test login', () => {
    it("Open the URL", () => {
        cy.visit(
            "http://ecommerce-playground.lambdatest.io/index.php?route=account/login"
        );
        //cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
        //cy.get('[id="input-password"]').type("lambdatest");
        //cy.get('[type="submit"]').eq(2).click();
    });

    it("Login to the application", () => {
        cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
        cy.get('[id="input-password"]').type("lambdatest");
        cy.get('[type="submit"]').eq(2).click();
    });

    it("Search for the product", () => {
        cy.get('[name="search"]').eq(0).type("VAIO");
        cy.get('[type="submit"]').eq(0).click();
    });

    it
    ("Verify the product", () => {
        cy.contains("Sony VAIO");
    });
});