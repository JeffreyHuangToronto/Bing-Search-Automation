const startSearchButton90 = document.getElementById("start-search-90");
const startSearchButton60 = document.getElementById("start-search-60");
const startSearchButton12 = document.getElementById("start-search-12");
const stopSearchButton = document.getElementById("stop-search");

startSearchButton90.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "start-90" });
});
startSearchButton60.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "start-60" });
});
startSearchButton12.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "start-12" });
});

stopSearchButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "stop" });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        chrome.runtime.sendMessage({ type: "stop" });
    }
});
