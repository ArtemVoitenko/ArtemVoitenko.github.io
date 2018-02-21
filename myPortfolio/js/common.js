
$(function() {
$('.showNav').click(function(e) {
	e.preventDefault();
	$('.mainNav').slideToggle();
});
	var $mnuLink = $(".mainNav a")
	 $mnuLink.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
$(".work").animated("rollIn");
$(".line").animated("slideInLeft");
$(".aboutTip").animated("slideInDown");
});
