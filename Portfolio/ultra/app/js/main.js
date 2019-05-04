new WOW().init();

$(() => {
    const hamb = $(".hamburger");
    const menu = $(".m-menu");
    const close = menu.find(".close-m-menu, .close-link");
  
    hamb.on("click", function(e) {
      e.preventDefault();
      menu.toggleClass("m-menu__active");
    });
    close.on("click", function(e) {
      e.preventDefault();
      menu.toggleClass("m-menu__active");
    });
  });

  $('.scroll, .close-link').click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1500
    );
  });

  jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

  