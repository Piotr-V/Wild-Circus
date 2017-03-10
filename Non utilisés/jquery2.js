$('#section1').on('mouseenter', function() {
    var magic1 = $find('.magic1');
    var magic2 = $find('.magic2');
    $(this).detach(magic1);
    $(this).append(message);
  });
$('#section2').on('mouseleave', function() { 
    $(this).detach(magic2);
    $(this).append(magic1);
  });

  $('#section1').on('mouseenter', function() {
    var balancing = $find.('.magic1').detach();
    var message = $('<p>If you think you know what balancing act is, just watch !</p>');
    $(this).append(message);
    $('#section2').on('mouseleave', function() { 
    $(this).remove(message);
    $(this).append(balancing);



	

	$('#section1').on('mouseleave', function() { 
    	$(this).remove('#magic2');
    	$(this).addid('#magic1');
  	});
  	$('#section2').on('mouseenter', function() {
 		$(this).remove('#balancing');
    	$(this).append('#section2 p').first();
  	});
  	$('#section1').on('mouseleave', function() { 
    	$(this).addid('#balancing');
    	$(this).hide('#section2 p').first();
  	});
  	$('#section3').on('mouseenter', function() {
 		$(this).remove('#juggle');
    	$(this).append('#section2 p').first();
  	});
  	$('#section3').on('mouseleave', function() { 
    	$(this).addid('#juggle');
    	$(this).hide('#section2 p').first();
  	});
});



 		$(document).ready(function() {
  	$('#section2').on('mouseenter', function() {
 		$('#section2 p').first().show();
 		$('#balancing').hide();
  	});
  	$('#section2').on('mouseleave', function() {
 		$('#balancing').show();
 		$('#section2 p').first().hide();
 	});



