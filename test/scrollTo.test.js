const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('Scroll to Element', function() {
    it('Should scroll to the footer', () => {
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed();
        internetPage.pageFooter.scrollIntoView();
        internetPage.scrollToPageFooter();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    })

    it('Should scroll into view', () => {
        browser.url('/');
        internetPage.pageFooter.scrollIntoView();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
    })
})