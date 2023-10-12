const UserProfilePage = require('../src/pages/UserProfilePage.js');
const MyProfilePage = require('../src/pages/MyProfilePage.js');
const LoginPage = require('../src/pages/LoginPage.js');
const BillPayPage = require('../src/pages/BillPayPage.js');
const TransferFundsPage = require('../src/pages/TransferFundsPage.js');
const OpenNewAccountPage = require('../src/pages/OpenNewAccountPage.js');
const LogoutPage = require('../src/pages/LogoutPage.js');
const ProductsPage = require('../src/pages/ProductsPage.js');
const CheckoutPage = require('../src/pages/CheckoutPage.js');
const CartPage = require('../src/pages/CartPage.js');
const testWithRetry = require('../src/util/testWithRetry.js');
const { faker } = require('@faker-js/faker');


describe('Testing Github', () => {

    let loginPage;
    let myProfilePage;
    let userProfilePage;
    let productsPage;
    let checkoutPage;
    let cartPage;
    let openNewAccountPage;
    let transferFundsPage;
    let billPayPage;
    let logoutPage;

    const toolShopAccName = "account67";
    const toolShopAccNumber = "1230987";

    beforeEach(async () => {

        loginPage = new LoginPage();
        myProfilePage = new MyProfilePage();
        userProfilePage = new UserProfilePage();
        openNewAccountPage = new OpenNewAccountPage();
        transferFundsPage = new TransferFundsPage();
        billPayPage = new BillPayPage();
        logoutPage = new LogoutPage();
        productsPage = new ProductsPage();
        checkoutPage = new CheckoutPage();
        cartPage = new CartPage();

    });

    const url = {

        gitHubUrl: `https://github.com/`,
        paraBankUrl: `https://parabank.parasoft.com/parabank/index.htm`,
        toolShopUrl: `https://practicesoftwaretesting.com/#/auth/register`,
    };

    const gitPrimaryProfileDetails = {
        userName: "test-automation-acc",
        password: "secret-sauce@1",
        newRepoDescription: `repo created via test automation using jest-puppeteer`
    }

    const gitSecondaryProfileDetails = {
        userName: "Md-Adnan-JHU",
        repoName: `javaScript`,
    }

    const bankUserDetailsObject = {
        firstName: `John`,
        lastName: `Wicked`,
        address: `APJ Road`,
        city: `Tenessey`,
        post: `12345`,
        phone: `12343567890`,
        state: `Alabama`,
        ssn: `qwer765`,

    };

    const bankPayBillDetails = {
        payeeName: `John`,
        address: `APJ Road`,
        city: `Tenessey`,
        post: `12345`,
        phone: `12343567890`,
        state: `Alabama`,
        account: `17299`,
        verifyAccount: `17299`,
        amount: `1000`,
    };

    const toolShopUserDetailsObject = {
        firstName: `John`,
        lastName: `Wicked`,
        address: `APJ Road`,
        city: `Tenessey`,
        post: `12345`,
        phone: `12343567890`,
        state: `Alabama`,
        country: `United States`,
    };

    const toolShopProductVerificationObject = {
        productName: "Combination Pliers",
        productPrice: "$14.15",
        total: "$28.30"
    }

    testWithRetry('Login and search for a user and then view one of his repo', async () => {

        await loginPage.visit(url.gitHubUrl);
        await loginPage.gitHubLogin(gitPrimaryProfileDetails);

        await myProfilePage.searchUser(gitSecondaryProfileDetails);

        await userProfilePage.searchRepo(gitSecondaryProfileDetails);
        await userProfilePage.viewRepo();

    });

    testWithRetry('Log in and create a new Repository and delete it', async () => {

        const newRepoName = faker.internet.userName();

        await loginPage.visit(url.gitHubUrl);
        await loginPage.gitHubLogin(gitPrimaryProfileDetails);

        await myProfilePage.createNewRepo(newRepoName);
        await myProfilePage.deleteNewRepo(gitPrimaryProfileDetails, newRepoName);

    });


    testWithRetry('ParaBank SignUp E2E', async () => {

        const paraBankCredentials = {
            userName: faker.internet.userName(),
            password: faker.internet.password(),
        };

        await loginPage.visit(url.paraBankUrl);
        await loginPage.paraBankSignUp(bankUserDetailsObject, paraBankCredentials);

        await openNewAccountPage.openAccount();

        await transferFundsPage.transferFund();

        await billPayPage.billPay(bankPayBillDetails);

        await logoutPage.bankLogout();

    });

    testWithRetry('ToolShpo E-Comm testing E2E', async () => {

        const toolShopCredentials = {
            email: faker.internet.email(),
            password: faker.internet.password(),
        };

        await loginPage.visit(url.toolShopUrl);
        await loginPage.toolShopSignUp(toolShopUserDetailsObject, toolShopCredentials);
        await loginPage.toolShopLogin(toolShopCredentials);

        await productsPage.selectItem();
        await productsPage.addToCart();
        await productsPage.goToCart();

        await cartPage.verifyProduct(toolShopProductVerificationObject);
        await cartPage.proceedToCheckout();

        await checkoutPage.fillDetails(toolShopAccName, toolShopAccNumber);

    });
});


