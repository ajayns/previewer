function constructor() {
	var template = '<div id="previewer">' +
		'		<div id="previewer-fade"></div>' +
		'		<img src="" alt="" id="previewer-img">' +
		'		<div id="previewer-close">' +
		'			<span>×</span>' +
		'		</div>' +
		'	</div>';
	$("body").append(template);
	$(".preview-img").click(function () {
		showPreview($(this).attr("src"));
	})
	
	$("#previewer-close").click(function () {
		$("#previewer").css("display","none");
	});	
}

function showPreview(imgSrc) {
	$("#previewer-img").attr("src", imgSrc);
	$("#previewer").css("display", "block");
}

