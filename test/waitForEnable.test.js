const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Wait for Enabled', function() {
    it('should wait for the input field to be enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        browser.pause(3000);
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled(4000);
        assert.equal(true, internetPage.inputEnabledField.isEnabled());
        //browser.debug() uncomment to test how the debug functionality works
    })

    it('should wait for the input field to be disabled', () => {
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled({timeout:4000, reverse:true});
        assert.equal(false, internetPage.inputEnabledField.isEnabled());
    })
})