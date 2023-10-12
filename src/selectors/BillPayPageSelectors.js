module.exports = {


    payBillXPath: `//li/a[contains(text(), 'Bill Pay')]`,

    payeeNameSelector: `input[name="payee.name"]`,

    addressInputSelector: `input[name="payee.address.street"]`,

    postInputCodeSelector: `input[name="payee.address.zipCode"]`,

    cityInputSelector: `input[name="payee.address.city"]`,

    stateInputSelector: `input[name="payee.address.state"]`,

    phoneNumberInputSelector: `input[name="payee.phoneNumber"]`,

    accountSelector: `input[name="payee.accountNumber"]`,

    verifyAccountSelector: `input[name="verifyAccount"]`,

    amountSelector: `input[name="amount"]`,

    sendPaymentXpath: `//input[@value="Send Payment"]`,

    verifyBillXPath: `h1.title`,
}