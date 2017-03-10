$(document).ready(function() {
	$('#section1 p').first().hide();
	$('#section2 p').first().hide();
	$('#section3 p').first().hide();
	
	$('#section1').on('mouseenter', function() {
 		$('#magic1').hide();
 		$('#section1 p').first().show();
  	});
  	$('#section1').on('mouseleave', function() {
 		$('#magic1').show();
 		$('#section1 p').first().hide();
	});
  	$('#section2').on('mouseenter', function() {
 		$('#section2 p').first().show();
 		$('#balancing').hide();
  	});
  	$('#section2').on('mouseleave', function() {
 		$('#balancing').show();
 		$('#section2 p').first().hide();
 	});
 	$('#section3').on('mouseenter', function() {
 		$('#section3 p').first().show();
 		$('#juggle').hide();
  	});
  	$('#section3').on('mouseleave', function() {
 		$('#juggle').show();
 		$('#section3 p').first().hide();
 	});
});