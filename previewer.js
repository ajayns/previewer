/*!
 * previewer.js v0.1.1
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
	// $("body").append(this.template);
	document.body.innerHTML += this.template;

	// Define function to close preview
	this.closeWindow = function () {
		// $("#previewer").css("display", "none");
		// $("body").css("overflow", "scroll");

		document.getElementById("previewer").style.display = "none";
		document.body.style.overflow = "scroll";
	};

	var self = this;

	// Get img src and call previewer on click
	/*
	$(".preview-image, .preview-images img").click(function () {
		var imgSrc = $(this).attr("src");
		$("body").css("overflow", "hidden");
		$("#previewer-img").attr("src", imgSrc);
		$("#previewer").css("display", "block");
	});
	*/
	var images = document.querySelectorAll(".preview-image, .preview-images img");
	for (i = 0; i < images.length; i++) {
		images[i].addEventListener('click', function () {
			var imgSrc = this.getAttribute("src");
			document.getElementById("previewer-img").src = imgSrc;
			document.getElementById("previewer").style.display = "block";
		});
	}


	// Close previewer when clicked
	// $("#previewer-close, #previewer-fade").click(this.closeWindow);
	document.getElementById("previewer-close").addEventListener("click", this.closeWindow);
	document.getElementById("previewer-fade").addEventListener("click", this.closeWindow);


	// Close window on keypress
	/*
	$(document).keyup(function (e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27`

		}
	});
	*/
	document.onkeydown = function (evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			self.closeWindow();
		}
	};
}
