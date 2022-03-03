const CheckboxesPage = require('../pageobjects/checkboxes.page');

describe('My checkbox application', () => {
    it('should contain a heading', async () => {
        await CheckboxesPage.open();
        await expect (CheckboxesPage.header).toBeExisting();
    });
});

describe('My checkbox application', () => {
    it('should click checkbox2 and wait 2 seconds', async () => {
        await CheckboxesPage.open();
        await expect (CheckboxesPage.checkbox2).toBeExisting;
        await (CheckboxesPage.checkbox2).click;
        await browser.pause(2000);
    });
});



