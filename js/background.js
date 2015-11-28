chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    album = response.album;
    titles = response.titles;
    urls = response.urls;
    for (i = 0; i < titles.length; i++) {
        chrome.downloads.download({
            url: urls[i],
            filename: album + "/" + formatNum(i + 1) + " " + titles[i] + urls[i].substr(urls[i].lastIndexOf("."))
        });
    }
});

function formatNum(n) {
    s = "000" + n;
    return s.slice(-3);
}