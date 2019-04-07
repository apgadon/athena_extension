// this is the background code...

// listen for our browerAction to be clicked
var clicked_bool = false;
chrome.browserAction.onClicked.addListener(function (tab) {
	clicked_bool = !clicked_bool;
	console.write(clicked_bool);
	if(clicked_bool==true){
		chrome.tabs.executeScript(tab.ib, {
			file: 'inject.js'
		});
	}
	else
		alert("WHA");
});