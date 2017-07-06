/*!
 * previewer.js v0.2.0
 * https://github.com/ajayns/previewer
 *
 * Copyright (c) 2017 Ajay NS
 * Released under the MIT license
 */

// PREVIEWER CLASS
function Previewer() {

	// Previewer html template
	this.template = '<div id="previewer">' +
		'		<div id="previewer-fade"></div>' +
		'		<img src="" alt="" id="previewer-img">' +
		'		<div id="previewer-close">' +
		'			<span>×</span>' +
		'		</div>' +
		'	</div>';


	// Add it to the body on init
	document.body.innerHTML += this.template;

	// Define function to close preview
	this.closeWindow = function () {
		document.getElementById("previewer").style.display = "none";
		document.body.style.overflow = "scroll";
	};

	var self = this;

	// Call previewer on image click
	var images = document.querySelectorAll(".preview-image, .preview-images img");
	for (i = 0; i < images.length; i++) {
		images[i].addEventListener('click', function () {
			var imgSrc = this.getAttribute("src");
			document.getElementById("previewer-img").src = imgSrc;
			document.getElementById("previewer").style.display = "block";
		});
	}


	// Close previewer when clicked
	document.getElementById("previewer-close").addEventListener("click", this.closeWindow);
	document.getElementById("previewer-fade").addEventListener("click", this.closeWindow);


	// Close window on keypress
	document.onkeydown = function (evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			self.closeWindow();
		}
	};
}
