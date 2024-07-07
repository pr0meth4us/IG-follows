import readline from 'readline';
import { checkAndLoginPrivateProfile } from './checkPrv.js';
import {loginAndScrape} from "./login.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the Instagram handle: ', async (handle) => {
    try {
        const isPrivate = await checkAndLoginPrivateProfile(handle.trim());

        if (isPrivate) {
            rl.question("Is this person in your following? (y/n): ", (answer) => {
                if (answer.toLowerCase() === 'y') {
                    rl.question("Would you like to get their follow information through your account?", (login) => {
                        if (answer.toLowerCase() === "y") {
                            loginAndScrape(handle);
                        }
                    })
                } else if (answer.toLowerCase() === 'n') {
                    console.log('There is nothing you can do.');
                } else {
                    console.log('Invalid response.');
                }
                rl.close();
            });
        } else {
            console.log(`Profile @${handle} is not private. No further action required.`);
            rl.close();
        }
    } catch (error) {
        console.error('Error:', error);
        rl.close();
    }
});
