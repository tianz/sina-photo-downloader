swp_hd = document.querySelector(".swp-hd");

var downloadDiv = document.createElement("div");
downloadDiv.id = 'downloadDiv';
swp_hd.parentNode.insertBefore(downloadDiv, swp_hd);

var downloadA = document.createElement("a");
downloadA.id = "downloadA";
downloadA.setAttribute("href", "#");
downloadA.innerHTML = "<b>&#x2193</b> 打包下载";
downloadDiv.appendChild(downloadA);

addClickEventListener(downloadA);