chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  album = response.album;
  titles = response.titles;
  urls = response.urls;
  shortcut = response.shortcut;

  for (i = 0; i < titles.length; i++) {
    chrome.downloads.download({
      url: urls[i],
      filename: album + "/" + formatNum(i + 1) + " " + titles[i] + urls[i].substr(urls[i].lastIndexOf("."))
    });
  }

  chrome.downloads.download({
    url: shortcut,
    filename: album + "/" + "链接.html"
  });
  
});

function formatNum(n) {
  s = "000" + n;
  return s.slice(-3);
}