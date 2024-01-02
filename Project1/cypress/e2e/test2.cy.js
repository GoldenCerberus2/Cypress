/// <reference types="cypress"/>

it("Google", function () {
    cy.visit(
        "https://www.google.com/search?client=opera-gx&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8"
    );

    cy.get("#L2AGLb > .QS5gu").click();
    cy.get(".jfN4p").click();
});
