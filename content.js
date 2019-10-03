console.log("Starting up content.js...");

var port = chrome.runtime.connect();

if (window.parent === window) {
	console.log("Window");
  chrome.runtime.onMessage.addListener(function(msg) {
    if (msg === "get-content") {
      console.log("Content requested");

      var h = document.getElementsByTagName("pre")[0].innerHTML;
      var msg = {
        content: h,
        msg: "page-content"
      };
      console.log("Sending page content");
      port.postMessage(msg);
    }
  });
}
