$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show().css('display', 'inline-block');
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
	  $('.ryu-still').show().css('display', 'inline-block');
  })

  .mousedown(function() {
    console.log('mousedown');
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
    console.log('mouseup');
    // ryu goes back to his ready position
  })

  .mousedown(function() {
    playHadouken()
    $('.ryu-ready').hide();
    $('.ryu-throwing').show().css('display', 'inline-block');
    $('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  })
})
  .mouseup(function() {
  $('.ryu-throwing').hide();
  $('.ryu-ready').show().css('display', 'inline-block');
})

$(window).keydown(function(e) {
    if (e.which == 88) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.hadouken').hide();
      $('.ryu-cool').show().css('display', 'inline-block');
    }
  })
  .keyup(function() {
    $('.ryu-cool').hide();
    $('.ryu-still').show().css('display', 'inline-block');
  });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}




