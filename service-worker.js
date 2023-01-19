let searchInterval;
// let iteration = 0;

chrome.runtime.onMessage.addListener((request) => {
    if (request.type === "start-90") {
        let iteration = 0;
        searchInterval = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const result = Math.random().toString(36).substring(2, 7);
                chrome.tabs.update(tabs[0].id, {
                    url: `https://www.bing.com/search?q=${result}`,
                });
                iteration += 1;

                if (iteration >= 120) {
                    clearInterval(searchInterval);
                }
            });
        }, request.speed);
    } else if (request.type === "start-60") {
        let iteration = 0;
        searchInterval = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                const result = Math.random().toString(36).substring(2, 7);
                chrome.tabs.update(tabs[0].id, {
                    url: `https://www.bing.com/search?q=${result}`,
                });
                iteration += 1;

                if (iteration >= 80) {
                    clearInterval(searchInterval);
                }
            });
        }, request.speed);
    } else if (request.type === "start-12") {
        let iteration = 0;
        searchInterval = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.update(tabs[0].id, {
                    url: `https://www.bing.com/search?q=${iteration}`,
                });
                iteration += 1;

                if (iteration >= 8) {
                    clearInterval(searchInterval);
                }
            });
        }, request.speed);
    } else if (request.type === "stop") {
        clearInterval(searchInterval);
    }
});
