$(document).ready(function() {
  setTimeout(function() {
    const modal = $(".modal");

    modal
      .css({ display: "flex" })
      .hide()
      .fadeIn(800);
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
    modal.hide(800, () => {
      modal.remove();
    });
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
    body.css("overflow", "scroll");
  });
    modal.click(function(e) {
    if (e.target == this) closeModalConfidentiality.trigger('click');
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
    body.css("overflow", "scroll");
  });
  
  modal.click(function(e) {
    if (e.target == this) closeModalConditions.trigger('click');
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

// function showDialog() {
//   x.showModal();
// }

// function closeDialog() {
//   x.close();
//   document.getElementsByTagName("body")[0].style.overflow = "scroll";
// }
