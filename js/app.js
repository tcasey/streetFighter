$(document).ready(function() {
	function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  		   .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })
   .mousedown(function() {
    console.log('mousedown');
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  });
  })
  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  })
  	.keydown(function(event) {
    if (event.which == 88) {
    console.log('keydown');
     $('.ryu-cool').show();
     $('.ryu-still').hide();
   };
   })
  	.keyup(function(event) {
    if (event.which == 88) {
    console.log('keyup');	
     $('.ryu-cool').hide();
     $('.ryu-still').show();
   };
   })

  });

