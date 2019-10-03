// Background script

console.log("Background script");

function rebuild(msg) {
  var i, j = 0;
  var el = null;
  var p = msg.content;
  var tabNum = null;

  console.log("Starting rebuild...");

  if (msg.msg != "page-content") {
    console.log("Aborting: invalid message received.");
    return;
  }

  // Get the JSON from the message we received and construct
  // an Object from it.

  var h = msg.content;
  var session = JSON.parse(h);

  // Walk the window list, pulling each window's tabs to
  // recreate them.

  console.log("Got session data from JSON; starting processing...");

  var windList = session.windows;

  for (i = 0; (wind = windList[i]); i++) {
    var urls = [];

    for (tabNum = 0; (tab = wind.tabs[tabNum]); tabNum++) {
      var details = tab.entries[tab.index - 1];
      urls.push(details.url);
    }

    // Now we have the window's tabs, so open the window

    chrome.windows.create({
      url: urls,
      left: parseInt(wind.screenX, 10),
      top: parseInt(wind.screenY, 10),
      width: parseInt(wind.width, 10),
      height: parseInt(wind.height, 10)
    });
  }
}

console.log("  Still");
function getContent() {
	console.log("Requesting page content...");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  	console.log("Rebuilding tab " + tabs[0].title);
    chrome.tabs.sendMessage(tabs[0].id, "get-content");
  });
}

console.log("  Still");
chrome.browserAction.onClicked.addListener(getContent);

console.log("  Still");
chrome.runtime.onConnect.addListener(function(port) {
  console.log("Adding rebuild listener");
  port.onMessage.addListener(rebuild);
});
