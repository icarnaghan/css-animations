$(document).ready(function(){
	$('.menu, .overlay').bind("click", function(e) {
		e.preventDefault();
		$("body").toggleClass("no-scroll");
		$(".body").toggleClass("active");
	});
});