/**
 * @module UserProfilePage
 */

const selectors = require('../selectors/UserProfilePageSelectors.js');

/**
 * Represents the UserProfilePage class for GitHub automation.
 * @class
 */
class UserProfilePage {
    /**
     * Search for a repository on the user's profile.
     * @async
     * @param {object} secondaryProfileDetails - The user's details for searching a repo.
     * @returns {Promise<void>}
     */
    async searchRepo(secondaryProfileDetails) {

        const homePageHandle = await page.waitForXPath(selectors.userProfileHomePageXPath, { visible: true });
        await Promise.all([
            homePageHandle.click(),
            page.waitForNavigation()
        ]);

        await page.waitForSelector(selectors.repoTabSelector, { visible: true });
        await Promise.all([
            page.click(selectors.repoTabSelector),
            page.waitForNavigation()
        ]);

        await page.waitForSelector(selectors.searchRepoBarInputSelector, { visible: true });
        await page.type(selectors.searchRepoBarInputSelector, secondaryProfileDetails.repoName);

        const selectRepoHandle = await page.waitForXPath(selectors.selectFirstRepoXPath, { visible: true });
        await Promise.all([
            selectRepoHandle.click(),
            page.waitForNavigation()
        ]);

    }

    /**
     * View the user's repository.
     * @async
     * @returns {Promise<void>}
     */
    async viewRepo() {

        await page.waitForXPath(selectors.codeButtonXPath);

        await page.waitForSelector(selectors.profilePhotoSelector, { visible: true });
        await page.click(selectors.profilePhotoSelector);

        await page.waitForSelector(selectors.logoutSelector, { visible: true });
        await Promise.all([
            page.click(selectors.logoutSelector),
            page.waitForNavigation()
        ]);

        await page.waitForSelector(selectors.signOutSelector, { visible: true });
        await Promise.all([
            page.click(selectors.signOutSelector),
            page.waitForNavigation()
        ]);

    }
}

module.exports = UserProfilePage;
