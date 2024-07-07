export const scrollAndLoad = (targetDiv) => {
    let lastScrollHeight = targetDiv.scrollHeight;
    targetDiv.scrollTop = targetDiv.scrollHeight;
    setTimeout(function() {
        if (targetDiv.scrollHeight > lastScrollHeight) {
            scrollAndLoad();
        } else {
            console.log("Reached the bottom or no more content is loading.");
        }
    }, 1000);
}