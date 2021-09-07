const { expect, assert } = require("chai");
const loginData = require("../../data/logindata");
const internetPage = require("../../pages/internet.page");
//loginData = require('../data/logindata');

describe("Test element actions", () => {
    it('Should click element', () => {
        browser.url('/');
        browser.pause(2000)
        internetPage.clickOnLink();
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })

    it('Should get Text', () => {
        browser.url('/');
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })

    it('Should click checkbox', () => {
        internetPage.clickLink(6);
        internetPage.clickCheckbox(1);
        expect(internetPage.checkBoxes(1).isSelected()).equals(true);
    })

    it('Should uncheck checkbox', () => {
        internetPage.clickCheckbox(1);
        expect(internetPage.checkBoxes(1).isSelected()).equals(false);
    })

    it.skip('Should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`);
        internetPage.enterUsername('Julia');
        assert.equal('Julia', internetPage.username.getValue());
    })

    it('Should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`);
        internetPage.enterUsername(loginData.username);
        assert.equal(loginData.username, internetPage.username.getValue());
    })
    
    it('Should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`);
        internetPage.enterPassword('Password');
        assert.equal('Password', internetPage.password.getValue());
    })

    it.skip('Should enter password', () => {
        browser.url(`${browser.options.baseUrl}/login`);
        internetPage.enterPassword(loginData.password);
        assert.equal(loginData.password, internetPage.password.getValue());
    })

    it('Should clear value', () => {
        internetPage.username.click();
        internetPage.username.clearValue();
        assert.equal('', internetPage.username.getValue());
    })

})