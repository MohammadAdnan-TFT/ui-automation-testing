/**
 * @module CartPage
 */

const selectors = require('../selectors/CartPageSelector.js');


/**
 * Represents the CartPage class for cart-related actions.
 * @class
 */
class CartPage {

    /**
     * Verifies product details in the cart.
     * @async
     * @param {object} productDetails - The details of the product to verify.
     * @returns {Promise<void>}
     */
    async verifyProduct(productDetails) {

        await page.waitForSelector(selectors.prodNameSelector, { visible: true });

        const productName = await page.$eval(selectors.prodNameSelector, (el) => el.textContent);
        expect(productName).toBe(productDetails.productName);

        const productPriceEH = await page.waitForXPath(selectors.prodPriceXPath, { visible: true });
        const productPrice = await page.evaluate((el) => el.textContent, productPriceEH);
        expect(productPrice).toBe(productDetails.productPrice);

        const productTotalEH = await page.waitForXPath(selectors.prodTotalXPath, { visible: true });
        const productTotal = await page.evaluate((el) => el.textContent, productTotalEH);
        expect(productTotal).toBe(productDetails.total);

    }

    /**
     * Proceeds to checkout from the cart.
     * @async
     * @returns {Promise<void>}
     */
    async proceedToCheckout() {

        await page.waitForSelector(selectors.proceedToCheckoutButtonSelector, { visible: true });
        await page.click(selectors.proceedToCheckoutButtonSelector)
    }


}
module.exports = CartPage;