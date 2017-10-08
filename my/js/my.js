$(document).ready(function(){
	$("#my-menu-highligh-post .my-label-parent").on("click", function(e){
		if($(this).closest("li").hasClass("collapse")) {
			$(this).closest("li").removeClass("collapse");
		} else {
			$(this).closest("li").addClass("collapse");
		}
		e.preventDefault();
	});
});