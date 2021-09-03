const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Switch Window', function() {
    it('Should switch to the next window', () => {
        browser.url(`${browser.options.baseurl}/windows`);
        internetPage.clickHereLink()
        browser.switchWindow(`${browser.options.baseurl}/windows/new`)
        assert.equals(true, internetPage.h3Header.isExisting())
        assert.equals(true, internetPage.h3Header.isDisplayed())
        assert.equals('New Window', internetPage.h3Header.getText())

    })
})

