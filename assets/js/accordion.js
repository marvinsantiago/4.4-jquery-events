var buttonsEl = $('headers');
var subMenu = $('submenu');

$('.headers').click(function(){
$('.submenu').slideUp("slow", function(){});
$(this).next().slideDown("slow", function(){});
});
