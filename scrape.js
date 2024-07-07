const selectors = require('./selectors');
const {followers, followings} = selectors;

const extractUsernamesAndLinksFromSelector = (selector) => {
    const firstDivChild = document.querySelector(selector).children[0];
    const spanClassSelector = '._ap3a._aaco._aacw._aacx._aad7._aade';
    const aClassSelector = 'a.notranslate._a6hd';
    const userDetails = [];
    const links = firstDivChild.querySelectorAll(aClassSelector);
    links.forEach(link => {
        const usernameSpan = link.querySelector(spanClassSelector);
        if (usernameSpan) {
            userDetails.push({
                href: link.getAttribute('href'),
                username: usernameSpan.textContent
            });
        }
    });
    return userDetails;
};
export const extractFollowersUsernamesAndLinks = () => {
    return extractUsernamesAndLinksFromSelector(followers);
};
export const extractFollowingsUsernamesAndLinks = () => {
    return extractUsernamesAndLinksFromSelector(followings);
};