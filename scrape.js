const selectors = require('./selectors.json');
require('dotenv').config()
const { followers, following, username, password } = selectors;
const {webkit}  =  require('playwright');

(async () => {
    const browser = await webkit.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.instagram.com/');
    await page.locator('input[name=username]').fill(process.env.USERNAME);
    await page.locator('input[name=password]').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: 'Log in', exact: true }).click();
    await page.screenshot({path: './screenshot.png'});
    let handle = prompt('Enter the IG handle:');
    if (handle) {
        const profileUrl = `https://www.instagram.com/${handle}/`;
        await page.goto(profileUrl);
    } else {
        console.log('No handle entered. Exiting...');
    }
    await browser.close();
})();
