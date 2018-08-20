new WOW().init();

$('.slider-tv').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.menu-mob').click(function() {
    $('.nav-top').slideToggle('slow', function() {});
});



$('.scroll').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1200);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        $('#to-top').show()
    } else {
        $('#to-top').hide()
    }
});
