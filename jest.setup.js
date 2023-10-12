const retry = 2;
global.__RETRY__ = retry;
jest.setTimeout(1000000);

beforeEach(async () => {
    await jestPuppeteer.resetPage();
    await jest.resetModules();
    const client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCookies');
    await client.send('Network.clearBrowserCache');
})