var buttonsEl = $('.headers');
var subMenu = $('.submenu');

buttonsEl.click(function() {
  $(this).addClass('active');
  $(this).siblings('.headers').removeClass('active');

  var targetCurrent = $(this).next('.submenu');
  targetCurrent.slideDown('slow');

  targetCurrent.siblings('.submenu').slideUp('slow');
});
