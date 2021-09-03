const { expect, assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe("Test element actions", () => {
    it('Should click element', () => {
        browser.url('/');
        internetPage.clickOnLink();
        expect(browser.getURL()).equals('httP/the-internet.herokuapp.com/abtest')
    })

    it('Should get Text', () => {
        browser.url('/');
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })

    it('Should click checkbox', () => {
        internetPage.clickLink(6);
        internetPage.clickCheckbox(1);
        expect(internetPage.checkBoxes(1).isSelected().equals(true));
    })

    it('Should uncheck checkbox', () => {
        internetPage.clickCheckbox(1);
        expect(internetPage.checkBoxes(1).isSelected().equals(false));
    })

    it('Should enter username', () => {
        browser.url('${browser.options.baseurl}/login');
        internetPage.enterUsername('Julia');
        assert.equals('Julia', internetPage.username.getValue());
    })
    
    it('Should enter password', () => {
        browser.url('${browser.options.baseurl}/login');
        internetPage.enterPassword('Password');
        assert.equals('Password', internetPage.password.getValue());
    })

    it('Should clear value', () => {
        internetPage.username.click();
        internetPage.username.clearValue();
        assert.equals('', internetPage.username.getValue());

    })


})