swp_hd = document.querySelector(".swp-hd");

var downloadDiv = document.createElement("div");
downloadDiv.id = 'downloadDiv';
swp_hd.parentNode.insertBefore(downloadDiv, swp_hd);

var downloadA = document.createElement("a");
downloadA.id = "downloadA";
downloadA.setAttribute("href", "#");
downloadA.innerHTML = "<b>&#x2193</b> 打包下载";
downloadDiv.appendChild(downloadA);

downloadA.addEventListener("click", function() {
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