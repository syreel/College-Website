$(document).ready(function() {
	// This code always runs upon the page finishing loading.

	// Code for making the nav-bar buttons go grey when you hover over them.
	$(".nav-button").hover(function(){
		$(this).css("background-color", "lightgrey");
		}, function(){
		$(this).css("background-color", "white");
	}); 

});