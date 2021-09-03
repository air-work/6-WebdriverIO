const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Dropdown menu', function() {
    it('should select option 1', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`);
        browser.pause(5000);
        internetPage.clickDropDownMenu();
        internetPage.clickDropdownMenuOption1();
        assert.equal(true, internetPage.dropdownMenuOption1.isSelected());
        browser.pause(5000);
    })

    it.skip('should select option 2', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`);
        browser.pause(5000);
        internetPage.clickDropDownMenu();
        internetPage.clickDropdownMenuOption1();
        assert.equal(true, internetPage.dropdownMenuOption1.isSelected());
        browser.pause(5000);
    })
})