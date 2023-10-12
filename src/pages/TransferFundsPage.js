/**
 * @module TransferFundsPage
 */

const selectors = require('../selectors/TransferFundsSelectors.js');
const verificationString = "Transfer Funds";
const transferAmount = "1000";

/**
 * Represents the TransferFundsPage class for Parabank automation.
 * @class
 */
class TransferFundsPage {

    /**
    * Navigate to the Parabank transferFunds page and transferFunds to another account.
    * @async
    * @returns {Promise<void>}
    */
    async transferFund() {

        const open = await page.waitForXPath(selectors.transferFundsXPath, { visible: true });
        await Promise.all([
            open.click(),
            page.waitForNavigation()
        ]);

        await page.waitForXPath(selectors.toAccountDropdownXPath, { visible: true });
        await page.waitForXPath(selectors.fromAccountDropdownXPath, { visible: true });
        const amount = await page.waitForXPath(selectors.amountInputXPath, { visible: true });
        await amount.type(transferAmount);

        const submit = await page.waitForXPath(selectors.submitTransferButtonXPath, { visible: true });
        await submit.click();

        await page.waitForSelector(selectors.verifyTransferSelector, { visible: true });
        const isTransferred = await page.$eval(selectors.verifyTransferSelector, (el) => el.textContent);
        expect(isTransferred).toBe(verificationString);

    }


}
module.exports = TransferFundsPage;