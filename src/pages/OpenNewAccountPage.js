/**
 * @module OpenNewAccountPage
 */

const selectors = require('../selectors/OpenNewAccountSelectors.js');
const verificationString = "Open New Account";

/**
 * Represents the OpenNewAccountPage class for Parabank automation.
 * @class
 */
class OpenNewAccountPage {

    /**
     * Visit the openAccount page and open a new account.
     * @async
     * @returns {Promise<void>}
     */
    async openAccount() {

        const open = await page.waitForXPath(selectors.OpenNewAccountXPath, { visible: true });
        await Promise.all([
            open.click(),
            page.waitForNavigation()
        ]);

        await page.waitForSelector(selectors.accountTypeDropDownSelector, { visible: true });
        await page.select(selectors.accountTypeDropDownSelector, '1');

        await page.waitForSelector(selectors.selectAccountDropDownSelector, { visible: true })
        await page.click(selectors.selectAccountDropDownSelector);


        const submit = await page.waitForXPath(selectors.openNewAccountButtonXPath, { visible: true });
        await submit.click();

        await page.waitForSelector(selectors.verifyAccountOpenedXPath, { visible: true });
        const isOpened = await page.$eval(selectors.verifyAccountOpenedXPath, (el) => el.textContent);
        expect(isOpened).toBe(verificationString);
    }

}


module.exports = OpenNewAccountPage;