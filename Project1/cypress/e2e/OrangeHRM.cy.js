/// <reference types="cypress"/>

//TODO #1 Apply Page Object Model to the test

it("IndexTesting", function () {
    //Visit site
    cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    //Login
    cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");

    cy.get(
        ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");

    cy.get(".oxd-button").click();

    // test sidebar
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(":nth-child(3) > .oxd-main-menu-item").click();
    cy.get(":nth-child(4) > .oxd-main-menu-item").click();
    cy.get(":nth-child(5) > .oxd-main-menu-item").click();
    cy.get(":nth-child(6) > .oxd-main-menu-item").click();
    cy.get(":nth-child(7) > .oxd-main-menu-item").click();
    cy.get(":nth-child(8) > .oxd-main-menu-item").click();
    cy.get(":nth-child(9) > .oxd-main-menu-item").click();
    cy.get(":nth-child(10) > .oxd-main-menu-item").click();
    //get admin acces
    cy.get(
        ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");

    cy.get(".oxd-button--secondary").click();
    //sidebar testing continues
    cy.get(":nth-child(11) > .oxd-main-menu-item").click();

    cy.get(":nth-child(12) > .oxd-main-menu-item").click();
});

it.only("AddingEmployee", function () {
    cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");

    cy.get(
        ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");

    cy.get(".oxd-button").click();

    cy.get(":nth-child(2) > .oxd-main-menu-item").click();

    cy.get(".oxd-topbar-body-nav > ul > :nth-child(3)").click();

    cy.get(
        ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type("Janusz");
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").type("Krzysztof");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("Pyzik");
    cy.get(".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input")
        .clear()
        .type("123422");
    cy.get(".oxd-button--secondary").click();
    cy.get(".oxd-toast").should("be.visible");
    cy.wait(4000);
    cy.get(".--visited > .oxd-topbar-body-nav-tab-item").click();
    cy.contains("Janusz Krzysztof");
});
