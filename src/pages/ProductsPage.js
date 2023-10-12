/**
 * @module ProductsPage
 */

const selectors = require('../selectors/ProductPageSelectors');

/**
 * Represents the ProductsPage class for product-related actions.
 * @class
 */
class ProductsPage {
    /**
     * Selects an item on the products page.
     * @async
     * @returns {Promise<void>}
     */
    async selectItem() {
        await page.waitForSelector(selectors.itemSelector, { visible: true });

        await Promise.all([
            page.waitForNavigation(),
            await page.click(selectors.itemSelector),
        ]);

    }

    /**
    * Adds the selected item to the cart.
    * @async
    * @returns {Promise<void>}
    */
    async addToCart() {

        await page.waitForSelector(selectors.increaseQuantitySelector, { visible: true });
        await page.click(selectors.increaseQuantitySelector);

        await page.waitForSelector(selectors.addToCartButtonSelector, { visible: true });
        await page.click(selectors.addToCartButtonSelector);


    }

    /**
     * Adds the selected item to the wishlist.
     * @async
     * @returns {Promise<void>}
     */
    async addToWishList() {

        await page.waitForSelector(selectors.hoverSelector);
        await page.hover(selectors.hoverSelector);

        const addToWishList = await page.waitForXPath(selectors.addToWishlistXPath);

        await Promise.all([
            page.waitForNavigation(),
            addToWishList.click()
        ]);

    }

    /**
     * Navigates to the shopping cart.
     * @async
     * @returns {Promise<void>}
     */
    async goToCart() {
        await page.waitForSelector(selectors.shoppingCartSelector, { visible: true })

        await Promise.all([
            page.waitForNavigation(),
            page.click(selectors.shoppingCartSelector),
        ]);
    }




}

module.exports = ProductsPage;