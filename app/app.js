

function addListeners(){
	
	
	$("nav a").click(function (e) {
		var buttonId = e.currentTarget.id;
		var sectionID = buttonId + "Section";
		
		  $('html, body').animate({
        scrollTop: $("#" + sectionID).offset().top	
    }, 500);
		

	});
	

}

$(document).ready(function(){

	addListeners();
});