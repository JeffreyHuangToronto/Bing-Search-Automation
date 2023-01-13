const startSearchButton90 = document.getElementById("start-search-90");
const startSearchButton60 = document.getElementById("start-search-60");
const startSearchButton12 = document.getElementById("start-search-12");
const stopSearchButton = document.getElementById("stop-search");
const progress = document.getElementById("progress");

let stop = false;

startSearchButton90.addEventListener("click", () => {
    let iteration = 0;
    chrome.runtime.sendMessage({ type: "start-90" });
    disableButtons(true);
    setStop(false);

    searchInterval = setInterval(() => {
        iteration += 1;

        progress.textContent = `${((iteration / 120) * 100).toFixed(2)}%`;
        if (iteration >= 120 || stop) {
            clearInterval(searchInterval);
            disableButtons(false);
        }
    }, 50);
});
startSearchButton60.addEventListener("click", () => {
    let iteration = 0;
    chrome.runtime.sendMessage({ type: "start-60" });
    disableButtons(true);
    setStop(false);

    searchInterval = setInterval(() => {
        iteration += 1;

        progress.textContent = `${iteration}/80`;
        if (iteration >= 80 || stop) {
            clearInterval(searchInterval);
            disableButtons(false);
        }
    }, 50);
});
startSearchButton12.addEventListener("click", () => {
    let iteration = 0;
    chrome.runtime.sendMessage({ type: "start-12" });
    disableButtons(true);
    setStop(false);

    searchInterval = setInterval(() => {
        iteration += 1;

        progress.textContent = `${iteration}/8`;
        if (iteration >= 8 || stop) {
            clearInterval(searchInterval);
            disableButtons(false);
        }
    }, 50);
});

stopSearchButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "stop" });
    setStop(true);
});

function setStop(bool) {
    stop = bool;
}

function disableButtons(bool) {
    startSearchButton90.disabled = bool;
    startSearchButton60.disabled = bool;
    startSearchButton12.disabled = bool;
    stopSearchButton.disabled = !bool;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        chrome.runtime.sendMessage({ type: "stop" });
        setStop(true);
    }
});
