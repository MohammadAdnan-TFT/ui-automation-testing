/**
 * @module BillPayPage
 */

const selectors = require('../selectors/BillPayPageSelectors.js');
const verificationString = "Bill Payment Service";

/**
 * Represents the BillPayPage class for Parabank automation.
 * @class
 */
class BillPayPage {

    /**
     * Pay a bill with details of the specified reciever.
     * @async
     * @param {Object} payBillDetails - Bill payment details.
     * @returns {Promise<void>}
     */
    async billPay(payBillDetails) {

        const open = await page.waitForXPath(selectors.payBillXPath, { visible: true });
        await Promise.all([
            open.click(),
            page.waitForNavigation()
        ]);

        await page.waitForSelector(selectors.payeeNameSelector, { visible: true });
        await page.type(selectors.payeeNameSelector, payBillDetails.payeeName);
        await page.type(selectors.addressInputSelector, payBillDetails.address);
        await page.type(selectors.cityInputSelector, payBillDetails.city);
        await page.type(selectors.stateInputSelector, payBillDetails.state);
        await page.type(selectors.postInputCodeSelector, payBillDetails.post);
        await page.type(selectors.phoneNumberInputSelector, payBillDetails.phone);
        await page.type(selectors.accountSelector, payBillDetails.account);
        await page.type(selectors.verifyAccountSelector, payBillDetails.verifyAccount);
        await page.type(selectors.amountSelector, payBillDetails.amount);

        const submit = await page.waitForXPath(selectors.sendPaymentXpath, { visible: true });
        await submit.click();

        await page.waitForSelector(selectors.verifyBillXPath, { visible: true });
        const isTransferred = await page.$eval(selectors.verifyBillXPath, (el) => el.textContent);
        expect(isTransferred).toBe(verificationString);

    }

}
module.exports = BillPayPage;