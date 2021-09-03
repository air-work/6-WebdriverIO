const { default: $ } = require("webdriverio/build/commands/browser/$")
const { default: $$ } = require("webdriverio/build/commands/browser/$$")

class Internet {
    get pageHeader() { return $('.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3)') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }   
    get childElements() { return this.parent.$$('li') }
    specificChildElement(index) { return this.parent.$('li:nth-child(${index})') }

    get firstLink() { return $('ul li:nth-child(1) a') }
    link(index) { return $('ul li:nth-child(${index}) a') }

    checkBoxes(index) {return $('#checkboxes input:nth-child(${index})') }

    get username() { return $('#username') }
    get password() { return $('#password') }

    figures(index) { return $('.example .figure:nth-child(${index}) img') }
    figureDetails(index) { return $('.example .figure:nth-child($[index]) .figcatpion') }

    get target() { return $('.example #target') }
    get result() { return $('.example #result') }

    get hereLink() { return $('.example a') }

    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('#mceu_27 #mce_0_ifr') }

    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }

    get collumnAHeader() { return $('#column-a header') }
    get collumnBHeader() { return $('#column-b header') }

    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get dropppableParagraph() { return $('#droppable p') }

    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOption1() { return $(`#dropdown option:nth-child(2)`) }
    get dropdownMenuOption2() { return $(`#dropdown option:nth-child(3)`) }

    javascriptAlertButton(index) { return $(`.example li:nth-child(${index} button`) }

    get exampleButton() { return $('.example button') }
    deletebutton(index) { return $(`#elements button:nth-child(${index}`) }


    get enableButton() { return $('#input-example button') }
    get inputEnabledField() { return $('#input-example input') }


    /**
     * Click Example button
     */
    clickExampleButton() {
        this.exampleButton.waitForDispalyed();
        this.exampleButton.click()
    }

    /**
     * click delete button
     * @param {index} index index of button
     */
    clickDeleteButton(index){
        this.deletebutton(index).waitForDispalyed();
        this.deletebutton(index).click();
    }


    /**
     * Click the Enable/Disabled Button
     */
    clickEnableButton() {
        this.enableButton.waitForDisplayed();
        this.enableButton.click()
    }

    /**
     * Click the specified javascript alert button
     * @param {Number} index the index of the element
     */
    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }
    /**
     * Click drop down menu
     */
    clickDropDownMenu() {
        this.dropdownMenu.waitForDisplayed();
        this.dropdownMenu.click();
    }

    /**
     * Click option 1
     */
    clickDropdownMenuOption1() {
        this.dropdownMenuOption1.waitForDisplayed();
        this.dropdownMenuOption1.click();
    }

        /**
     * Click option 2
     */
         clickDropdownMenuOption2() {
            this.dropdownMenuOption1.waitForDisplayed();
            this.dropdownMenuOption1.click();
        }


    /**
     * Drag and drop
     */
    dragDraggableToDroppable(){
        this.draggable.waitForDisplayed();
        this.draggable.dragAndDrop(this.draggable);   
    }

    /**
     * Drag box A to box B
     */
    dragColumnAToColumnB(){
        this.columnA.waitForDisplayed();
        this.columnA.dragAndDrop(this.columnB);
    }

    /**
     * Enter the text in the iframe
     * @param {String} text the text to be enetered 
     */
    sendTextToBody(text){
        this.iframeBody.waitforDisplayed();
        this.iframeBody.clearValue();
        this.iframeBody.click();
        this.iframeBody.keys(text);

    }


    /**
     * Clicks the "click here" link
     */
    clickHereLink(){
        this.hereLink.waitForDispalyed();
        this.hereLink.click();
    }

    /**
     * Scroll to page footer
     */
    scrollToPageFooter(){
        this.pageFooter.moveTo()
    }

    /**
     * Clicks the target input field
     * @param {String} text the keyboard text to enter
     */
    clickTarget(){
        this.target.waitForDispalyed;
        this.target.click;
    }

    /**
     * Send keyboard keys to Target
     * @param {String} text the kebyaord text to enter 
     */
    sendKeysToTarget(text){
        let myTarget = this.target;
        this.target.waitForDispalyed;
        //this.target.keys(text);
        myTarget.keys(text);
    }

    /**
     * Return the text of the return element
     */
    getResultText(){
        this.target.waitForDispalyed();
        return this.result.getText();
    }


    /**
     * Hovers over the specified image
     * @param {Number} index the specific index of the image
     */
    hoveronFigure(index){

        this.figures(index).waitForDispalyed()
        this.figures(index).move(1,1)
    }

    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element
     */
    getHoverDetailsText(index){
        this.getFigureDetailsText(index).waitForDispalyed()
        return this.figureDetails(index).getText()
    }

    /**
     * Hovers over the specified image
     * @param {Number} index the specific index of the image
     */
    hoverOnFigure(index){
        this.figures(index).waitForDisplayed();
        this.figures(index).moveTo(1,1);        

    }

    /**
     * Returns the text of the figure deetails
     * @param {Number} index the index of the element
     */
    getFigureDetailsText(index){

        this.figureDetails(index).waitForDisplayed();
        return this.figureDetails(index).getText()
    }


    /**
     * Enter the unsername into the field
     * @param {string} text username to be entered
     */
    enterUsername(text) {
        this.username.waitForDispalyed();
        this.username.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {string} text password to be entered
     */
     enterPassword(text) {
        this.this.password.waitForDispalyed();
        this.password.setValue(text)
    }


    /**
     * Clicks on the link based on the index provided
     * @param {Number} index the index of the element
     */
    clickLink(index) {
        this.link(index).waitForDisplayed();
        this.link(index).click();
    }

    clickCheckbox(index) {
        this.checkBoxes(index).waitForDisplayed();
        this.checkBoxes(index).click();
    }

    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText());
        })
    }

    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed();
        //console.log(await this.specificChildElement(index).getText());                    
        return this.specificChildElement(index).getText();                    
    }

    clickOnLink() {
        if((this.firstLink.isDisplayed()) === true) {
            this.firstLink.click();
        }
        //browser.pause(5000);
        this.h3Header.waitForDisplayed();
    }

}

module.exports = new Internet()
//export default new Internet()