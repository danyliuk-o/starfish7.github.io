$(document).ready(function() {
  const modal = $(".modal");
  const closeModal = $(".modal__window-close");
  const downloadBtn = $(".download-btn");
  setTimeout(function() {
    modal
      .css({ display: "flex" })
      .hide()
      .fadeIn(800);
  }, 30000);

  closeModal.on("click", function() {
    modal.hide(800);
  });
  downloadBtn.on("click", () => {
    modal
      .css({ display: "flex" })
      .hide()
      .fadeIn(800);
  });
});

new WOW().init();

$(() => {
  const modal = $(".modal-video");
  const closeModalVideo = $(".modal-video__window-close");
  const openModalVideo = $(".video-block-img");
  openModalVideo.on("click", () => {
    modal
      .css({ display: "flex" })
      .hide()
      .fadeIn(800);
  });
  closeModalVideo.on("click", () => {
    modal.hide(800);
    let $frame = $("#main-video");
    let videoSrc = $frame.attr("src");
    $frame.attr("src", "");
    $frame.attr("src", videoSrc);
  });
});

$(() => {
  const modal = $(".modal-confidentiality");
  const closeModalConfidentiality = $(".close-text-btn");
  const openModalConfidentiality = $(".confidentiality");
  const body = $("body, html");

  openModalConfidentiality.on("click", () => {
    modal
      .css({ display: "flex" })
      .hide()
      .fadeIn(800);
    body.css("overflow", "hidden");
  });
  closeModalConfidentiality.on("click", () => {
    modal.fadeOut(800);
    body.css("overflow", "auto");
  });
  modal.click(function(e) {
    if (e.target == this) closeModalConfidentiality.trigger("click");
  });

  $("modal").on("click", e => {
    var el = $(e.target);
    if (el.hasClass("modal")) PopUpHide();
  });
});

$(() => {
  const modal = $(".modal-conditions");
  const closeModalConditions = $(".close-text-btn");
  const openModalConditions = $(".conditions");
  const body = $("body, html");
  openModalConditions.on("click", () => {
    modal
      .css({ display: "flex" })
      .hide()
      .fadeIn(800);
    body.css("overflow", "hidden");
  });
  closeModalConditions.on("click", () => {
    modal.fadeOut(800);
    body.css("overflow", "auto");
  });

  modal.click(function(e) {
    if (e.target == this) closeModalConditions.trigger("click");
  });
});

$(".feedback__slider").slick({
  dots: true,
  dotsClass: "my-dots",
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  accessibility: false
});

$(".scroll, .close-link").click(function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1500
  );
});

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

let a = 0;
$(window).scroll(function() {

  let oTop = $('.progress').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum); 
          }
        });
    });
    a = 1;
  }
});
