const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('WaitUntil', function() {
    it('should wait until the button text changes', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        browser.pause(3000);
        internetPage.clickPageButton();
        browser.waitUntil( () => {
            return internetPage.pageButton.getText() === 'Add'
        }, 6000, 'Expect button text to change')
        assert.equal('Add', internetPage.pageButton.getText());
    })
})