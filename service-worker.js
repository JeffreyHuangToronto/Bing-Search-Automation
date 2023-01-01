let searchInterval;
// let iteration = 0;
let refreshTime = 250; // 1000ms = 1 second

chrome.runtime.onMessage.addListener((request) => {
    if (request.type === "start-90") {
        let iteration = 0;
        searchInterval = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.update(tabs[0].id, {
                    url: `https://www.bing.com/search?q=${iteration}`,
                });
                iteration += 1;

                if (iteration >= 30) {
                    clearInterval(searchInterval);
                }
            });
        }, refreshTime);
    } else if (request.type === "start-60") {
        let iteration = 0;
        searchInterval = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.update(tabs[0].id, {
                    url: `https://www.bing.com/search?q=${iteration}`,
                });
                iteration += 1;

                if (iteration >= 20) {
                    clearInterval(searchInterval);
                }
            });
        }, refreshTime);
    } else if (request.type === "start-12") {
        let iteration = 0;
        searchInterval = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.update(tabs[0].id, {
                    url: `https://www.bing.com/search?q=${iteration}`,
                });
                iteration += 1;

                if (iteration >= 6) {
                    clearInterval(searchInterval);
                }
            });
        }, refreshTime);
    } else if (request.type === "stop") {
        clearInterval(searchInterval);
    }
});
