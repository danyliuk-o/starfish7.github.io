$('.card').on('click', () => {
    $('.container').toggleClass('container-origin');
});

$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(1500);

    $("a.transition").click(e => {
        e.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});



$("html").click(function(e) {
    var ripple = $(this);
    // визуальный элемент эффекта
    if (ripple.find(".effekt").length == 0) {
        ripple.append("<span class='effekt'></span>");
    }
    var efekt = ripple.find(".effekt");
    efekt.removeClass("replay");
    if (!efekt.height() && !efekt.width()) {
        var d = Math.max(ripple.outerWidth(), ripple.outerHeight());
        efekt.css({ height: d / 5, width: d / 5 }); // Определяем размеры элемента эффекта
    }
    var x = e.pageX - ripple.offset().left - efekt.width() / 2;
    var y = e.pageY - ripple.offset().top - efekt.height() / 2;
    efekt.css({
        top: y + 'px',
        left: x + 'px'
    }).addClass("replay");
})