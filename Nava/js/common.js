$(function() {
    var $hovImg = $('.scaleImg');
    $hovImg.hover(function() {
        var $selectImg = $(this);
        var $descr = $selectImg.siblings(".dPlace");
        $descr.slideToggle();
        console.log($descr);
    });

});