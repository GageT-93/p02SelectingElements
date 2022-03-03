const ChallengingDOMPage = require('../pageobjects/challenging_dom.page');

describe('My anchor link assertion', () => {
    it('should verify existence of link', async () => {
        await ChallengingDOMPage.open();
        await expect (ChallengingDOMPage.anchorLink).toBeExisting();
        await browser.pause(2000)
    });
});