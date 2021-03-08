fetch(chrome.extension.getURL("/html/dialog.html"))
  .then((response) => response.text())
  .then((data) => {
    var div = document.createElement("div");
    div.className = "twex";
    div.innerHTML = data.replace(
      /{{ext_base_url}}/g,
      chrome.extension.getURL("/")
    );

    var appsElements = document.getElementsByTagName("body");
    appsElements[0].append(div);

    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = chrome.runtime.getURL("script.js");
    appsElements[0].appendChild(script);
  })
  .catch((err) => {
    // handle error
  });
