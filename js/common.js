$(function() {
	$('.topSlider').slick({
		prevArrow: '<img src="img/prevArrow.png">',
		nextArrow: '<img src="img/nextArrow.png">',
		arrows: true,
		useCss: true
	});
	$('.parthnersSlider').slick({
		slidesToShow: 5,
		prevArrow: '<img src="img/leftArrow2.png">',
		nextArrow: '<img src="img/rightArrow2.png">',
		arrows: true,
		useCss: true,
		infinite: true,
		
		responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4,
                }
              },
               {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                }
              }
                
                   

       
           
                    ]
	});
	var $showMnu = $(".showMnu");
	var $nav = $(".mainNav")
	$showMnu.click(function(e){
		e.preventDefault();
		$nav.slideToggle();


	})
});
