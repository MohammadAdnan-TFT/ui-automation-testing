const jestPuppeteerConfig = {
    launch: {
        headless: process.env.JEST_HEADLESS === "true" ? "new" : false,
        defaultViewport: null,
    },

};

module.exports = jestPuppeteerConfig;