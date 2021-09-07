const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Wait for Exist', function () {
    it('should wait until the delete button exisits', () => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        internetPage.clickExampleButton();
        internetPage.deletebutton(1).waitForExist();
        assert.equal(true, internetPage.deletebutton(1).isExisting());
        browser.pause(2000);
    })

    it('should wait for the delete button to  not exisit', () => {
        internetPage.clickDeleteButton(1);
        internetPage.deletebutton(1).waitForExist({timeout:500, reverse:true});
        assert.equal(false,internetPage.deletebutton(1).isExisting());
        browser.pause(2000);
    })
})