export class orange {
    navigate(url) {
        //Visit site
        cy.visit(url);
    }

    enter_username(user) {
        cy.get(
            ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
        ).type(user);
    }

    enter_password(password) {
        cy.get(
            ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
        ).type(password);
    }
    login_button() {
        cy.get(".oxd-button").click();
    }

    test_sidebar() {
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
        //get admin access
        this.admin_access("admin123");
        //sidebar testing continues
        cy.get(":nth-child(11) > .oxd-main-menu-item").click();

        cy.get(":nth-child(12) > .oxd-main-menu-item").click();
    }

    admin_access(password2) {
        cy.get(
            ":nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input"
        ).type(password2);

        cy.get(".oxd-button--secondary").click();
    }
    navigate_employee() {
        cy.get(":nth-child(2) > .oxd-main-menu-item").click();
        cy.get(".oxd-topbar-body-nav > ul > :nth-child(3)").click();
    }
    add_employee() {
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
    }
}
