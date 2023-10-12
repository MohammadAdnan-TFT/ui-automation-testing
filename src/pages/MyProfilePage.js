/**
 * @module MyProfilePage
 */

const selectors = require('../selectors/MyProfilePageSelectors.js');
const urlAfterDeleting = `https://github.com/test-automation-acc?tab=repositories`;

/**
 * Represents the MyProfilePage class for GitHub automation.
 * @class
 */
class MyProfilePage {
    /**
     * Search for a user on GitHub.
     * @async
     * @param {object} secondaryProfileDetails - The user's details for searching.
     * @returns {Promise<void>}
     */

    async searchUser(secondaryProfileDetails) {

        await page.reload();
        await page.waitForSelector(selectors.searchBarSelector, { visible: true });
        await page.click(selectors.searchBarSelector);

        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');


        await page.waitForSelector(selectors.searchBarInputSelector, { visible: true });
        await page.type(selectors.searchBarInputSelector, secondaryProfileDetails.userName)

        await Promise.all([
            page.keyboard.press('Enter'),
            page.waitForNavigation()
        ]);

        const profileHandle = await page.waitForXPath(selectors.userProfileXPath, { visible: true });
        await Promise.all([
            profileHandle.click(),
            page.waitForNavigation()
        ]);

    }

    /**
     * Create a new repository on GitHub.
     * @async
     * @param {string} newRepoName - The name of the new repo to create.
     * @returns {Promise<void>}
     */
    async createNewRepo(newRepoName) {

        const typ = await page.waitForXPath(selectors.repoNameInputSelector1, { visible: true });
        await typ.type(newRepoName);

        const createRepoHandle = await page.waitForXPath(selectors.createRepoButtonXPath1, { visible: true });
        await Promise.all([
            createRepoHandle.click(),
            page.waitForNavigation()
        ]);

        await page.waitForSelector(selectors.settingsSelector, { visible: true });
        await Promise.all([
            page.click(selectors.settingsSelector),
            page.waitForNavigation()
        ]);

    }

    /**
     * Delete a new repository on GitHub.
     * @async
     * @param {object} primaryProfileDetails - The user's details for deleting a repo.
     * @returns {Promise<void>}
     */
    async deleteNewRepo(primaryProfileDetails, newRepoName) {

        await page.waitForSelector(selectors.deleteButtonSelector, { visible: true });
        await page.click(selectors.deleteButtonSelector);

        const delete1Handle = await page.waitForXPath(selectors.deleteRepoProceedXPath, { visible: true });
        await delete1Handle.click();

        const readProceedHandle = await page.waitForXPath(selectors.readAndUnderstandXPath, { visible: true });
        await readProceedHandle.click();

        await page.waitForSelector(selectors.verificationFeildInputSelector, { visible: true });
        await page.type(selectors.verificationFeildInputSelector, `${primaryProfileDetails.userName}/${newRepoName}`);

        await page.waitForSelector(selectors.deleteRepoConfirmSelector, { visible: true });
        await page.click(selectors.deleteRepoConfirmSelector);
        await page.waitForNavigation();

        const url = page.url();
        expect(url).toBe(urlAfterDeleting);

    }

}
module.exports = MyProfilePage;
