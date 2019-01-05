$('.header__slider_content').slick({});

$('.posts_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false
        }
    }]

});

$('.post_pic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,

});

$(() => {
    const link = $('.m-menu-link');
    const close = $('.close-menu');
    const menu = $('.m-menu');
    link.on('click', e => {
        e.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    close.on('click', e => {
        e.preventDefault();
        menu.toggleClass('m-menu__active');
    });
});