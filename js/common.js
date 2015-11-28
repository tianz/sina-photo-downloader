// Fetch the titles and URLs from #eData after clicking x and send the message to background.js
function addClickEventListener(x) {
    x.addEventListener("click", function() {
        album = document.querySelector("head title").innerHTML;
        dls = document.querySelectorAll("#eData > dl");
        titles = []
        urls = []

        for (i = 0; i < dls.length; i++) {
            title = dls[i].querySelector("dt").innerHTML;
            url = dls[i].querySelector("dd").innerHTML;
            titles.push(title);
            urls.push(url);
        }

        chrome.runtime.sendMessage({album: album, titles: titles, urls: urls});
    });
}