/**
 * @module CheckoutPage
 */

const selectors = require('../selectors/CheckoutPageSelector.js');

/**
 * Represents the CheckoutPage class for checkout-related actions.
 * @class
 */
class CheckoutPage {
    /**
     * Fills in checkout details including account name and account number.
     * @async
     * @param {string} accName - Account Name of the Customer.
     * @param {string} accNumber - Account Number of the Customer.
     * @returns {Promise<void>}
     */
    async fillDetails(accName, accNumber) {

        const ptc1 = await page.waitForXPath(selectors.ptcSignInButtonXPath);
        await ptc1.click();

        const ptc2 = await page.waitForXPath(selectors.ptcAddressButtonXPath);
        await ptc2.click();

        await page.waitForSelector(selectors.paymentTypeDropdownSelector);
        await page.select(selectors.paymentTypeDropdownSelector, selectors.paymentSelectOptionValue);

        const accountNameH = await page.waitForXPath(selectors.accountNameInputXPath);
        await accountNameH.type(accName);

        const accountNumH = await page.waitForXPath(selectors.accountNumberInputXPath);
        await accountNumH.type(accNumber);

    }
}

module.exports = CheckoutPage;
