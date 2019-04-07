$(function() {

$(".menu li a").on("mouseover mouseout", function(event) {
	event.stopPropagation();
		$(this).toggleClass("active-hover")

})

});
