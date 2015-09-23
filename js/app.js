$(document).ready(function() {
	var isKeydown = false
	function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
  $('.ryu').mouseenter(function() {
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  		   .mouseleave(function() {
    $('.ryu-action').hide();
	$('.ryu-still').show();
  })
   .mousedown(function() {
    console.log('mousedown');
    playHadouken();
    $('.ryu-action').hide();
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
    $('.ryu-action').hide();
  	$('.ryu-ready').show();
  });
$(document).keydown(function(event) {
	
    if (!isKeydown && event.which == 88) {
    console.log('keydown');
     $('.ryu-action').hide();
     $('.ryu-cool').show();
		isKeydown = true
   };
   })
  	.keyup(function(event) {
  		isKeydown = false
    if (event.which == 88) {
    console.log('keyup');	
     $('.ryu-action').hide();
     $('.ryu-still').show();
   };
   })

  });

