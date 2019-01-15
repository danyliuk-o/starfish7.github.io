new WOW().init();

//popups
$(() => {
    const regPopup = $('.reg-popup');
    const regBtn = $('.reg-btn');
    const close = regPopup.find('.close-popup');

    regBtn.on('click', e => {
        e.preventDefault();
        regPopup.slideToggle(800, () => {
            regPopup.css('display', 'block');
        });
    });
    close.on('click', e => {
        e.preventDefault();
        regPopup.slideToggle(800, () => {
            regPopup.css('display', 'none');
        });
    });
});

$(() => {
    const langBtn = $('.lang');
    const langPopup = $('.language-popup');
    const close = langPopup.find('.close-popup');

    langBtn.on('click', e => {
        e.preventDefault();
        langPopup.fadeIn(800, () => {
            langPopup.css('display', 'block');
        });
    });
    close.on('click', e => {
        e.preventDefault();
        langPopup.fadeOut(800, () => {
            langPopup.css('display', 'none');
        });

    });
});
//popups

//scrollings

$('.to-bottom, .to-top').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});
$(window).scroll(() => {
    if ($(window).scrollTop() > 1000) {
        $('.to-top').show()
    } else {
        $('.to-top').hide()
    }
});
//scrollings


//start dropdown languages
// $(document).ready(() => {
//     let event = true;
//     $('.lang').on('click', () => {
//         if (event == true) {
//             $('.lang-list').slideUp();
//             event = !event;
//         } else {
//             $('.lang-list').slideDown();
//             event = !event;
//         }
//     });
// });
//end dropdown languages
//registration popup start