$(document).ready(function(){
	setBindings();

	
});


// page-scroll
function setBindings(){

	$("nav a").click(function(e){
		e.preventDefault();
		var sectionId = e.currentTarget.id + "Section";

		$("html body").animate({
			scrollTop: $("#" + sectionId).offset().top

		},1000);
	});
}