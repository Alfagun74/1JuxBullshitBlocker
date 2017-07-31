var currentBullshit = 0;
chrome.runtime.sendMessage({"newIconPath": "on.png"});



function replaceBullshit() {
	 var bs = document.getElementsByClassName("simple-button");
	 if (bs != null) {
		 for (var i = 0, l = bs.length; i < l; i++) {
				var li = (bs[i]).closest("li");
				li.parentNode.removeChild(li);
				currentBullshit += 1;
		 }
	 }
	 chrome.runtime.sendMessage({"counter": currentBullshit.toString()});
}

setInterval(replaceBullshit, 1500);
