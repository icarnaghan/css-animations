$(document).ready(function(){
	$('.card').bind("click", function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});
});