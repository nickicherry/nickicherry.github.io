$(document).ready(function() {

  $(".work-toggle").click(function() {
    $(".big-nav-menu.work").toggleClass("is-active");
  });

  $(".mobile-work").click(function() {
    $(".work-sidebar").toggleClass("is-active");
  });

  $(".work-sidebar .close").click(function() {
    $(".work-sidebar").removeClass("is-active");
  });

  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

});

