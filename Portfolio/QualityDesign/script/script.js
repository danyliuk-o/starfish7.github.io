$(function () {
    $('.toggles button').click(function() {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function () {
        $('.post').show(500);
    });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:6,
    navigation: true
  });
});

if($(window).width() < 421){
    $(".owl-carousel").owlCarousel({
        items:3
    });
}

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
