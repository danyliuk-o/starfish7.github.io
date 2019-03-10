new WOW().init();

$(() => {
    const popup = $('.popup');
    const contactBtn = $('.contact-btn');
    const close = popup.find('.close-popup');

    contactBtn.on('click', event => {
        event.preventDefault();
        popup.fadeIn(800, () => {
            popup.css('display', 'flex');
        });
    });
    close.on('click', event => {
        event.preventDefault();
        popup.fadeOut(800, () => {
            popup.css('display', 'none');
        });
    });
});

$(':input').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
           .attr('placeholder','');
 }).blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
 });

$(function() {
    const link = $('.m-menu-link');
    const menu = $('.m-menu');
    const close = menu.find('.close-popup, .close-link');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
});

$('.scroll, .close-link').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1500);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
        $('.to-top').show()
    } else {
        $('.to-top').hide()
    }
});