const selectors = require('./selectors.json');
require('dotenv').config()
const {webkit}  =  require('playwright');

export const loginAndScrape = async (handle) => {
    if (!handle){
        return null
    }
    const browser = await webkit.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
        await page.goto('https://www.instagram.com/');
        await page.locator('input[name="username"]').fill(process.env.USERNAME);
        await page.locator('input[name="password"]').fill(process.env.PASSWORD);
        await page.locator('button[type="submit"]').click();
        const profileUrl = `https://www.instagram.com/${handle}/`;
        await page.goto(profileUrl);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
};