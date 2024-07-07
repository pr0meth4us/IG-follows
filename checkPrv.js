import { webkit } from 'playwright';
import dotenv from 'dotenv';

dotenv.config();

export const checkAndLoginPrivateProfile = async (handle) => {
    if (!handle) {
        return null;
    }
    const browser = await webkit.launch({
        headless: true
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
        const profileUrl = `https://www.instagram.com/${handle}/`;
        await page.goto(profileUrl);
        const isPrivate = await page.getByText('This account is private');

        if (isPrivate) {
            console.log("it's fucking private")
            return isPrivate;
        } else {
            console.log(`Profile @${handle} is not private. No login required.`);
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
};