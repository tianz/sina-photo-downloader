// common function shared by all pages

function addClickEventListener(a) {
  a.addEventListener("click", function() {
    album = document.querySelector("head title").innerHTML;
    dls = document.querySelectorAll("#eData > dl");
    titles = []
    urls = []

    for (var i = 0; i < dls.length; i++) {
      title = dls[i].querySelector("dt").innerHTML;
      url = dls[i].querySelector("dd").innerHTML;
      
      titles.push(title);
      urls.push(url);
    }

    chrome.runtime.sendMessage({
      album: album,
      titles: titles,
      urls: urls,
      shortcut: a.getAttribute("data-shortcut")
    });
  });
}