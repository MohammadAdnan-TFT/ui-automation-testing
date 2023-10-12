module.exports = {

    //GitHUb
    gitSignInXPath: `//a[contains(text(),"Sign in")]`,

    gitUserNameInputSelector: `input[id="login_field"]`,

    gitPasswordInputSelector: `input[id="password"]`,

    gitSignInButtonSelector: `input[value="Sign in"][type="submit"]`,

    gitProfilePhotoSelector: `button[aria-label="Open user account menu"]`,

    gitVerifyLoginXPath: `//span[contains(text(),"test-automation-acc")]`,

    gitMyProfileXPath: `//span[contains(text(), "Your profile")]`,


    //ParaBank
    bankRegisterAccountXPath: `//a[contains(text(), "Register")]`,

    bankfirstNameInputSelector: `input[id="customer.firstName"]`,

    banklastNameInputSelector: `input[id="customer.lastName"]`,

    bankaddressInputSelector: `input[id="customer.address.street"]`,

    bankpostInputCodeSelector: `input[id="customer.address.zipCode"]`,

    bankcityInputSelector: `input[id="customer.address.city"]`,

    bankstateInputSelector: `input[id="customer.address.state"]`,

    bankphoneNumberInputSelector: `input[id="customer.phoneNumber"]`,

    bankssnInputSelector: `input[id="customer.ssn"]`,

    bankUserNameInputSelector: `input[id="customer.username"]`,

    bankPasswordInputSelector: `input[id="customer.password"]`,

    bankconfirmPassInputSelector: `input#repeatedPassword`,

    bankregisterButtonSelector: `input.button[value="Register"]`,

    bankloginUserNameSelector: `div.login>input[name="username"]`,
    bankloginPasswordSelector: `input[name="password"]`,
    bankloginSelector: `input[value="Log In"]`,

    bankVerifyLoginSelector: `//div/p[contains(text(),"Your account was created successfully. You are now logged in.")]`,

    //ToolShop
    dateOfBirth: `01/01/2001`,

    signInXPath: `//a[contains(text(),"Sign in")]`,

    registerAccountXPAth: `//a[contains(text(),"Register your account")]`,

    firstNameInputSelector: `input#first_name`,

    lastNameInputSelector: `input#last_name`,

    dobSelector: `input[data-test="dob"]`,

    addressInputSelector: `input#address`,

    postInputCodeSelector: `input#postcode`,

    cityInputSelector: `input#city`,

    stateInputSelector: `input#state`,

    countryDropDownSelector: `select#country`,

    countrySelectedOptionValue: `IN`,

    phoneNumberInputSelector: `input#phone`,

    emailInputSelector: `input#email`,

    passwordInputSelector: `input#password`,

    registerButtonSelector: `button[data-test="register-submit"]`,

    signInButtonSelector: `.btnSubmit`,

    homeButtonXPath: `//a[@data-test="nav-home" and @class="nav-link active"]`,

    loginErrorSelector: `div.help-block`,

}