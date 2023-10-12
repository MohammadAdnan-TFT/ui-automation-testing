module.exports = {
    preset: "jest-puppeteer",
    setupFilesAfterEnv: [
        "./jest.setup.js"
    ],
    testMatch: [
        "**/tests/**/*.test.js"
    ],
    reporters: [
        "default",
        [
            "jest-html-reporter",

            {
                "outputPath": "report.html",
                "includeConsoleLog": true
            }
        ]
    ],
}
