const takeScreenShot = require('../util/ScreenshotHandling');
const retry = global.__RETRY__;

const testWithRetry = async (name, fun, maxRetries = retry) => {

    test(name, async () => {
        let retryCount = 0;
        while (true) {
            try {
                await fun();
                return;

            } catch (error) {
                if (retryCount >= maxRetries) {
                    await takeScreenShot(error);
                    throw error;
                }
                retryCount++;
                console.log(`Retrying (${retryCount}/${maxRetries}) for "${name}"`);
            }
        }

    });
};

module.exports = testWithRetry;