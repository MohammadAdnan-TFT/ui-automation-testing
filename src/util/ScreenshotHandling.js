const puppeteer = require('puppeteer');
/**
 * Takes a screenshot and saves it to a file based on the error type.
 * @async
 * @param {Error} error - The error that occurred.
 */
const takeScreenShot = async function (error) {

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString().replace(/[/:]/g, '-');

    if (error instanceof puppeteer.TimeoutError) {
        await page.screenshot({ path: `./screenshots/${formattedDate}Timeouterror-screenshot.png` });
    } else {
        await page.screenshot({ path: `./screenshots/${formattedDate}error-screenshot.png` });
    }
}

module.exports = takeScreenShot;
