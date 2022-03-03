const DropdownPage = require('../pageobjects/dropdown.page');

describe('My Dropdown application', () => {
    it('should click dropdown button and pause for 2 seconds', async () => {
        await DropdownPage.open();

        await expect (DropdownPage.DropdownButton).toBeExisting;
        await DropdownPage.DropdownButton.click();
        await browser.pause(2000)
    });
});