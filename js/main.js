$(document).ready(function(){

	// about animation 
	$('.myhomecenter').hover(function() {
 	$('.myhomehover').fadeIn();}, function(){
 	$('.myhomehover').fadeOut();
	});

	$('.li1').click(function() {
 	$('.mysignin').toggle();}, function(){
 	$('.mysignin').toggle();
	});

	$('.mynavlogo').click(function() {
 	$('.mynavlogo').css('width','10000px');}, function(){
 	$('.mynavlogo').css('left','-161px');
	});


	$('.mymanu .myabout').click(function(){
		$(this).parents('div').find('#mysubnav').slideToggle();
	});

	 
	

// })
});