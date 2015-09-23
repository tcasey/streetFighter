$(document).ready(function() {
<<<<<<< HEAD
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
=======
	doIntro();
	var isKeydown = false
	function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.1;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
    function doIntro() {
  		$('#theme-song')[0].volume = 0.2;
  		$('#theme-song')[0].load();
  		$('#theme-song')[0].play();
}
  	$('.ryu').mouseenter(function() {
   		$('.ryu-action').hide();
   		$('.logo').hide();
   		$('.ryu-ready').show();
		$('.instructions').show();
  })
  		   .mouseleave(function() {
    	$('.ryu-action').hide();
    	$('.instructions').hide();
		$('.ryu-still').show();
		$('.logo').show();
>>>>>>> master
  })
   .mousedown(function() {
    console.log('mousedown');
    playHadouken();
    	$('.ryu-action').hide();
    	$('.instructions').hide();
    	$('.logo').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
<<<<<<< HEAD
    $(this).hide();
    $(this).css('left', '520px');
=======
    	$(this).hide();
    	$(this).css('left', '520px');
>>>>>>> master
  });
  })
  .mouseup(function() {
    console.log('mouseup');
<<<<<<< HEAD
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
=======
    	$('.ryu-action').hide();
  		$('.ryu-ready').show();
  });
$(document).keydown(function(event) {
	
    if (!isKeydown && event.which == 88) {	
    console.log('keydown');
    	$('.ryu-action').hide();
    	$('.instructions').hide();
     	$('.ryu-cool').show();
     	$('.logo').show();
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
>>>>>>> master

