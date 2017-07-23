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
		document.getElementById("previewer-img").src = "";
		document.body.style.overflow = "scroll";
	};

	var self = this;

	var current = 0;

	// Call previewer on image click
	var images = document.querySelectorAll(".preview-image, .preview-images img");
	
	for (i = 0; i < images.length; i++) {
		(function(i) {
			images[i].addEventListener('click', function () {
				var imgSrc = this.getAttribute("src");
				document.getElementById("previewer-img").src = imgSrc;
				document.getElementById("previewer").style.display = "block";
				current = i;
			});
		})(i)
	}


	// Close previewer when clicked
	document.getElementById("previewer-close").addEventListener("click", this.closeWindow);
	document.getElementById("previewer-fade").addEventListener("click", this.closeWindow);


	// Keyboard controls
	document.onkeydown = keyCtrl;

	function keyCtrl(e) {
		e = e || window.event;
		
		// Close preview on esc key
		if (e.keyCode == '27') {
			self.closeWindow();		
		}

		// Next image on arrow right
		if (e.keyCode == '39') {
			if (current < images.length-1)
				document.getElementById("previewer-img").src = images[++current].getAttribute("src");		
		}

		// Previous image on arrow left
		if (e.keyCode == "37") {
			if (current > 0)
				document.getElementById("previewer-img").src = images[--current].getAttribute("src");
		}
	}
}
