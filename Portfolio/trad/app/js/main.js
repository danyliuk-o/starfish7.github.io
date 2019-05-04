$(document).ready(function() {
<<<<<<< HEAD
  const modal = $(".modal");
  const closeModal = $(".modal__window-close");
  const downloadBtn = $(".download-btn");
  setTimeout(function() {
=======
  setTimeout(function() {
    const modal = $(".modal");

>>>>>>> afd039f510130d9f0894dd901239c1be33389466
    modal
      .css({ display: "flex" })
      .hide()
      .fadeIn(800);
<<<<<<< HEAD
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

=======
  }, 1000);
});

$(() => {
  const modal = $(".modal");
  const closeModal = $(".modal__window-close");
  const modalBtn = $(".modal-btn");
  modalBtn.on("click", () => {
    return false;
  });
  closeModal.on("click", function() {
    modal.hide(800);
  });
});

>>>>>>> afd039f510130d9f0894dd901239c1be33389466
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
<<<<<<< HEAD
    modal.hide(800);
    let $frame = $("#main-video");
    let videoSrc = $frame.attr("src");
    $frame.attr("src", "");
    $frame.attr("src", videoSrc);
=======
    modal.hide(800, () => {
      modal.remove();
    });
>>>>>>> afd039f510130d9f0894dd901239c1be33389466
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
<<<<<<< HEAD
    body.css("overflow", "auto");
  });
  modal.click(function(e) {
    if (e.target == this) closeModalConfidentiality.trigger("click");
=======
    body.css("overflow", "scroll");
  });
    modal.click(function(e) {
    if (e.target == this) closeModalConfidentiality.trigger('click');
>>>>>>> afd039f510130d9f0894dd901239c1be33389466
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
<<<<<<< HEAD
    body.css("overflow", "auto");
  });

  modal.click(function(e) {
    if (e.target == this) closeModalConditions.trigger("click");
=======
    body.css("overflow", "scroll");
  });
  
  modal.click(function(e) {
    if (e.target == this) closeModalConditions.trigger('click');
>>>>>>> afd039f510130d9f0894dd901239c1be33389466
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

<<<<<<< HEAD
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
=======
// function showDialog() {
//   x.showModal();
// }

// function closeDialog() {
//   x.close();
//   document.getElementsByTagName("body")[0].style.overflow = "scroll";
// }
>>>>>>> afd039f510130d9f0894dd901239c1be33389466
