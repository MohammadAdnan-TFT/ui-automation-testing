/**
 * @module LogoutPage
 */
const selectors = require('../selectors/LogoutPageSelectors.js');

/**
 * Represents the LoginoutPage class for Parabank automation.
 * @class
 */
class LogoutPage {

    /**
     * Visit the logout page and log out of the current account from ParaBank.
     * @async
     * @returns {Promise<void>}
     */
    async bankLogout() {

        const open = await page.waitForXPath(selectors.logOutXPath, { visible: true });
        await Promise.all([
            open.click(),
            page.waitForNavigation()
        ]);
    }
}

module.exports = LogoutPage;