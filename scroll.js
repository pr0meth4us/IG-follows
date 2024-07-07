export const scrollAndLoad = () => {
    let lastScrollHeight = myDiv.scrollHeight;
    targetDiv.scrollTop = myDiv.scrollHeight;
    setTimeout(function() {
        if (myDiv.scrollHeight > lastScrollHeight) {
            scrollAndLoad();
        } else {
            console.log("Reached the bottom or no more content is loading.");
        }
    }, 1000);
}