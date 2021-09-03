const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Scroll to Element', function() {
    it.skip('Should scroll to the footer', () => {
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed();
        internetPage.scrollToPageFooter();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    })

    it('Should scroll into view', () => {
        internetPage.pageFooter.scrollIntoView();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
        browser.url('/');

    })
})