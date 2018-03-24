// fade in each page

$(document).ready(function () {
    $('div.hidden').fadeIn(1000).removeClass('hidden');
});

$('a.outbound').hover(function() {
	$(this).animate({backgroundColor: "#5ec2d0"}, 'slow');
});
