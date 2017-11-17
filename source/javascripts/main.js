$(document).ready(function() {
  $('.project-prop').each(function(i) {
    $(this).addClass("p" + i);
  });

  $('.show-image').each(function(i) {
    $(this).addClass("so" + i);
  });

  $('.hover-image').each(function(i) {
    $(this).addClass("ho" + i);
  });

  $('.p0 img').on('mouseenter', function() {
    $('.so0').hide();
    $('.ho0').show();
  }).on('mouseleave', function() {
    $('.ho0').hide();
    $('.so0').show()
  });

  $('.p1 img').on('mouseenter', function() {
    $('.so1').hide();
    $('.ho1').show();
  }).on('mouseleave', function() {
    $('.ho1').hide();
    $('.so1').show()
  });

  $('.p2 img').on('mouseenter', function() {
    $('.so2').hide();
    $('.ho2').show();
  }).on('mouseleave', function() {
    $('.ho2').hide();
    $('.so2').show()
  });

  $('.p3 img').on('mouseenter', function() {
    $('.so3').hide();
    $('.ho3').show();
  }).on('mouseleave', function() {
    $('.ho3').hide();
    $('.so3').show()
  });
});
