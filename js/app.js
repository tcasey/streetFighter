$(document).ready(function() {
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

