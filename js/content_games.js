var shortcutContent = "<html><body><script>window.location.href='" + window.location.href + "';</script></body></html>";
var blob = new Blob([shortcutContent]);

var shortcutA = document.createElement("a");
shortcutA.style = "display: none";
shortcutA.href = window.URL.createObjectURL(blob);

var downloadA = document.createElement("a");
downloadA.id = "downloadA";
downloadA.href = "#";
downloadA.innerHTML = "<b>&#x2193</b> 打包下载";
downloadA.dataset.shortcut = shortcutA.href;

var controlBarTop = document.querySelector(".control-bar-top");
controlBarTop.appendChild(downloadA);

addClickEventListener(downloadA);