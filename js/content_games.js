control_bar_top = document.querySelector(".control-bar-top");

var downloadA = document.createElement("a");
downloadA.id = "downloadA";
downloadA.setAttribute("href", "#");
downloadA.innerHTML = "<b>&#x2193</b> 打包下载";
control_bar_top.appendChild(downloadA);

addClickEventListener(downloadA);