/**
 * @module LoginPage
*/
const selectors = require('../selectors/LoginPageSelector.js');
const paraBankVerifyLoginMsg = "Your account was created successfully. You are now logged in.";
/**
 * Represents the LoginPage class for GitHub automation.
 * @class
 */
class LoginPage {
    /**
     * Navigate to the login page.
     * @async
     * @param {string} url - The url of website to navigate.
     * @returns {Promise<void>}
     */
    async visit(url) {
        await Promise.all([
            page.waitForNavigation(),
            page.goto(url)
        ]);
    }

    /**
    * Sign up with user details in ParaBank.
    * @async
    * @param {Object} paraBankUserDetails - User details to sign up with
    * @param {Object} paraBankCredentials - User credentials to sign up with
    * @returns {Promise<void>}
    */
    async paraBankSignUp(paraBankUserDetails, paraBankCredentials) {

        const register = await page.waitForXPath(selectors.bankRegisterAccountXPath, { visible: true })
        await Promise.all([
            register.click(),
            page.waitForNavigation()
        ]);


        await page.waitForSelector(selectors.bankfirstNameInputSelector, { visible: true });
        await page.type(selectors.bankfirstNameInputSelector, paraBankUserDetails.firstName);
        await page.type(selectors.banklastNameInputSelector, paraBankUserDetails.lastName);
        await page.type(selectors.bankaddressInputSelector, paraBankUserDetails.address);
        await page.type(selectors.bankcityInputSelector, paraBankUserDetails.city);
        await page.type(selectors.bankstateInputSelector, paraBankUserDetails.state);
        await page.type(selectors.bankpostInputCodeSelector, paraBankUserDetails.post);
        await page.type(selectors.bankphoneNumberInputSelector, paraBankUserDetails.phone);
        await page.type(selectors.bankssnInputSelector, paraBankUserDetails.ssn);
        await page.type(selectors.bankUserNameInputSelector, paraBankCredentials.userName);
        await page.type(selectors.bankPasswordInputSelector, paraBankCredentials.password);
        await page.type(selectors.bankconfirmPassInputSelector, paraBankCredentials.password);

        await page.waitForSelector(selectors.bankregisterButtonSelector, { visible: true });
        await Promise.all([
            page.click(selectors.bankregisterButtonSelector, { visible: true }),
            page.waitForNavigation()
        ]);

        const verifyHandle = await page.waitForXPath(selectors.bankVerifyLoginSelector);
        const verify = await page.evaluate((el) => el.textContent, verifyHandle);
        expect(verify).toBe(paraBankVerifyLoginMsg);

    }

    /**
     * Log in to GitHub using provided details.
     * @async
     * @param {object} gitHubPrimaryProfileDetails - The user's login details.
     * @returns {Promise<void>}
     */
    async gitHubLogin(gitHubPrimaryProfileDetails) {

        const signInHandle = await page.waitForXPath(selectors.gitSignInXPath, { visible: true });
        await Promise.all([
            signInHandle.click(),
            page.waitForNavigation()
        ]);

        await page.waitForSelector(selectors.gitUserNameInputSelector, { visible: true });
        await page.type(selectors.gitUserNameInputSelector, gitHubPrimaryProfileDetails.userName);
        await page.type(selectors.gitPasswordInputSelector, gitHubPrimaryProfileDetails.password);


        await page.waitForSelector(selectors.gitSignInButtonSelector, { visible: true });
        await Promise.all([
            page.click(selectors.gitSignInButtonSelector),
            page.waitForNavigation()
        ]);
    }

    /**
     * Sign up with user details into ToolShop.
     * @async
     * @param {object} toolShopUserDetails - The user's details for registration.
     * @param {object} toolShopCredentials - The user's credentials.
     * @returns {Promise<void>}
     */
    async toolShopSignUp(toolShopUserDetails, toolShopCredentials) {

        await page.waitForSelector(selectors.firstNameInputSelector, { visible: true });
        await page.type(selectors.firstNameInputSelector, toolShopUserDetails.firstName);
        await page.type(selectors.lastNameInputSelector, toolShopUserDetails.lastName);

        await page.focus(selectors.dobSelector);
        await page.type(selectors.dobSelector, selectors.dateOfBirth);

        await page.type(selectors.addressInputSelector, toolShopUserDetails.address);
        await page.type(selectors.postInputCodeSelector, toolShopUserDetails.post);
        await page.type(selectors.cityInputSelector, toolShopUserDetails.city);
        await page.type(selectors.stateInputSelector, toolShopUserDetails.state);

        await page.waitForSelector(selectors.countryDropDownSelector, { visible: true });
        await page.select(selectors.countryDropDownSelector, selectors.countrySelectedOptionValue);

        await page.type(selectors.phoneNumberInputSelector, toolShopUserDetails.phone);
        await page.type(selectors.emailInputSelector, toolShopCredentials.email);
        await page.type(selectors.passwordInputSelector, toolShopCredentials.password);

        await Promise.all([
            page.click(selectors.registerButtonSelector, { visible: true }),
            page.waitForNavigation()
        ]);
    }

    /**
     * Logs in with user credentials into ToolShop.
     * @async
     * @param {object} toolShopCredentials - The user's credentials to sign in.
     * @returns {Promise<void>}
     */
    async toolShopLogin(toolShopCredentials) {

        await page.waitForSelector(selectors.emailInputSelector, { visible: true });
        await page.type(selectors.emailInputSelector, toolShopCredentials.email);
        await page.type(selectors.passwordInputSelector, toolShopCredentials.password);


        await page.click(selectors.signInButtonSelector, { visible: true });
        await Promise.all([
            page.click(selectors.signInButtonSelector),
            page.waitForNavigation()
        ]);

        const homeH = await page.waitForXPath(selectors.homeButtonXPath, { visible: true });
        const isLoggedIn = await page.evaluate((el) => el.textContent, homeH);
        expect(isLoggedIn).not.toBe(null);

        const home = await page.waitForXPath(selectors.homeButtonXPath, { visible: true });
        await home.click();
        await page.waitForNavigation()


    }




}
module.exports = LoginPage;

