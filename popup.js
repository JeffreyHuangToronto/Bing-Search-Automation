const startSearchButton = document.getElementById("start-search-90");
const stopSearchButton = document.getElementById("stop-search");
const progress = document.getElementById("progress");

const speedToggle = document.getElementById("myonoffswitch");
const currentSpeed = document.getElementById("currentSpeed");

const slowRefresh = 100;
const quickRefresh = 50;
let refreshTime = speedToggle.checked ? slowRefresh : quickRefresh;
currentSpeed.innerText = `Current Speed: ${refreshTime}ms`;

speedToggle.addEventListener("click", () => {
    refreshTime = speedToggle.checked ? slowRefresh : quickRefresh;
    currentSpeed.innerText = `Current Speed: ${refreshTime}ms`;
});

let stop = false;

startSearchButton.addEventListener("click", () => {
    let iteration = 0;
    chrome.runtime.sendMessage({
        type: "start-90",
        speed: refreshTime,
    });

    disableButtons(true);
    setStop(false);

    searchInterval = setInterval(() => {
        iteration += 1;

        progress.textContent = `Progress: ${((iteration / 120) * 100).toFixed(
            2
        )}%`;
        if (iteration >= 120 || stop) {
            clearInterval(searchInterval);
            disableButtons(false);
        }
    }, refreshTime);
});

stopSearchButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "stop" });
    setStop(true);
});

function setStop(bool) {
    stop = bool;
}

function disableButtons(bool) {
    startSearchButton.disabled = bool;
    stopSearchButton.disabled = !bool;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        chrome.runtime.sendMessage({ type: "stop" });
        setStop(true);
    }
});
