const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('WebdriverIO API Actions', function (){
    it('Should hover on figure 1', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(3);
        assert.equal("name: user1", internetPage.getFigureDetailsText(3))
        browser.pause(2000);
    })

    it('Should hover on figure 2', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(4);
        assert.equal("name: user2", internetPage.getFigureDetailsText(4))
        browser.pause(1000);
    })

    it('Should hover on figure 3', () => {
        browser.url(`${browser.options.baseUrl}/hovers`);
        internetPage.hoverOnFigure(5);
        assert.equal("name: user3", internetPage.getFigureDetailsText(5))
        browser.pause(1000);
    })

    it('Should send keyboard value Backspace', function() {
        browser.url(`${browser.options.baseUrl}/key_presses`);
        internetPage.clickTarget();
        internetPage.sendKeysToTarget("Backspace");
        assert.equal("You entered: BACK_SPACE",internetPage.getResultText());
        browser.pause(1000);
    })

    it('Should send keyboard value Tab', function() {
        browser.url(`${browser.options.baseUrl}/key_presses`);
        internetPage.clickTarget();
        internetPage.sendKeysToTarget("Tab");
        assert.equal("You entered: TAB",internetPage.getResultText());

    })

    it('should send keyboard value Shift', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Shift")
        assert.equal("You entered: SHIFT", internetPage.getResultText())
    })    

})