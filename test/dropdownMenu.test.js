const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Dropdown menu', function() {
    it('should select option 1', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`);
        internetPage.clickDropDownMenu();
        internetPage.clickDropdownMenuOption1();
        assert.equal(true, internetPage.dropdownMenuOption1.isSelected());
        browser.pause(3000);
    })

    it('should select option 2', () => {
        //browser.url(`${browser.options.baseUrl}/dropdown`);
        internetPage.clickDropDownMenu();
        internetPage.clickDropdownMenuOption2();
        assert.equal(true, internetPage.dropdownMenuOption2.isSelected());
        browser.pause(3000);
    })
})