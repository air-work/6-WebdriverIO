const { expect, assert } = require("chai");
const logindata = require("../../data/logindata");
const internetPage = require("../../pages/internet.page");
loginData = require('../data/logindata');

describe("Test element actions", () => {
    it.only('Should click element', () => {
        browser.url('/');
        browser.pause(3000)
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

    it.skip('Should enter username', () => {
        browser.url(`${browser.options.baseurl}/login`);
        internetPage.enterUsername('Julia');
        assert.equals('Julia', internetPage.username.getValue());
    })

    it('Should enter username', () => {
        browser.url(`${browser.options.baseurl}/login`);
        internetPage.enterUsername(loginData.username);
        assert.equals(loginData.username, internetPage.username.getValue());
    })
    
    it.skip('Should enter password', () => {
        browser.url(`${browser.options.baseurl}/login`);
        internetPage.enterPassword('Password');
        assert.equals('Password', internetPage.password.getValue());
    })

    it('Should enter password', () => {
        browser.url(`${browser.options.baseurl}/login`);
        internetPage.enterPassword(loginData.password);
        assert.equals(loginData.password, internetPage.password.getValue());
    })

    it('Should clear value', () => {
        internetPage.username.click();
        internetPage.username.clearValue();
        assert.equals('', internetPage.username.getValue());

    })


})