(function ($) {
  "use strict";

  // PRE LOADER
  $(window).on("load", function () {
    $(".preloader").delay(500).slideUp("slow"); // set duration in brackets
  });

  // NAVBAR
  var navbar = document.querySelector(".navbar"); // Pilih elemen navbar
  if (navbar) {
    // Pastikan navbar ada di halaman
    var headroom = new Headroom(navbar); // Inisialisasi Headroom.js untuk navbar
    headroom.init(); // Memulai Headroom.js
  }

  // Menutup menu navbar setelah klik pada link
  $(".navbar-collapse a").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Slick Slideshow
  $(".slick-slideshow").slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  });

  // Slick Testimonial
  $(".slick-testimonial").slick({
    arrows: false,
    dots: true,
  });
})(window.jQuery);
