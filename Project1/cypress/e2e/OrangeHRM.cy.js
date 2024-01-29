/// <reference types="cypress"/>

import { orange } from "../Pages/orange";

const test = new orange();

it("SidebarTesting", function () {
    //Visit site
    test.navigate(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //Login
    test.enter_username("Admin");
    test.enter_password("admin123");
    test.login_button();

    // test sidebar
    test.test_sidebar();
});

it("AddingEmployee", function () {
    test.navigate(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    test.enter_username("Admin");
    test.enter_password("admin123");
    test.login_button();

    test.navigate_employee();

    test.add_employee();
});
