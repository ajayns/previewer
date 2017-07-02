function Previewer() {

	this.template = '<div id="previewer">' +
		'		<div id="previewer-fade"></div>' +
		'		<img src="" alt="" id="previewer-img">' +
		'		<div id="previewer-close">' +
		'			<span>×</span>' +
		'		</div>' +
		'	</div>';
	$("body").append(this.template);

	$(".preview-img").click(function () {
		var imgSrc = $(this).attr("src");
		$("#previewer-img").attr("src", imgSrc);
		$("#previewer").css("display", "block");
	});
	
	$(".preview-imgs>li>img").click(function () {
		$("#previewer-img").attr("src", $(this).attr("src"));
		$("#previewer").css("display", "block");
	});

	$("#previewer-close").click(function () {
		$("#previewer").css("display", "none");
	});

}
