// JavaScript source code
//let screen_resolution = "Screen resolution: ";
//screen_resolution += window.screen.width;
//screen_resolution += "x";
//screen_resolution += window.screen.height;

//Screen:
window.document.getElementById("screen-resolution").innerHTML = //screen_resolution;
	`Screen resolution: ${window.screen.width}x${screen.height}`;
window.document.getElementById("screen-available-resolution").innerHTML =
	`Available resolution: ${window.screen.availWidth}x${screen.availHeight}`;
window.document.getElementById("screen-color-depth").innerHTML =
	`Color depth: ${window.screen.colorDepth}`;
window.document.getElementById("screen-pixel-depth").innerHTML =
	`Pixel depth: ${window.screen.pixelDepth}`;
window.document.getElementById("screen-orientation").innerHTML =
	`Screen orientation: ${window.screen.orientation.type}`;

//Location:
document.getElementById("current-page").innerHTML = window.location.href;
document.getElementById("current-directory").innerHTML = window.location.pathname;
document.getElementById("hostname").innerHTML = window.location.hostname;
document.getElementById("protocol").innerHTML = window.location.protocol;

//History:
//window.history.back();
//window.moveTo('index.html');

document.getElementById("btn-backward").addEventListener
	(
		"click",
		function ()
		{
			window.history.back()
		}
	);
document.getElementById("btn-forward").addEventListener("click", () => window.history.forward());