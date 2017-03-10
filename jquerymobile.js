$(document).ready(function() {
  $('#section1 p').first().hide();
  $('#section2 p').first().hide();
  $('#section3 p').first().hide();
  
  $('#section1').on('tap', function() {
    $('#magic1').hide();
    $('#section1 p').first().show();
  });
  $('#section2').on('tap', function() {
    $('#section2 p').first().show();
    $('#balancing').hide();
  });
  $('#section3').on('tap', function() {
    $('#section3 p').first().show();
    $('#juggle').hide();
  });
});