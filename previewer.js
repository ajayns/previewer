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

	this.closeWindow = function () {
		$("#previewer").css("display", "none");
		$("body").css("overflow", "scroll");
	}

	var self = this;
	// Add it to the body on init
	$("body").append(this.template);

	// Get img src and call previewer on click
	$(".preview-image, .preview-images>li>img").click(function () {
		var imgSrc = $(this).attr("src");
		$("body").css("overflow", "hidden");
		$("#previewer-img").attr("src", imgSrc);
		$("#previewer").css("display", "block");
	});

	// Close previewer on click
	$("#previewer-close").click(function () {
		self.closeWindow();
	});
	
	// Close previewer on click outside #previewer-img
	$("#previewer-fade").click(function () {
		self.closeWindow();
	});
	

	// Close window on keypress
	$(document).keyup(function (e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27`
			self.closeWindow();
		}
	});
}
