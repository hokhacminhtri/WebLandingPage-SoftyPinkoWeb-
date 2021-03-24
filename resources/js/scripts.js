$(document).ready(function () {
  // sticky nav
  $(".header-area").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      }
    },
    {
      offset: "100px",
    }
  );

  // mobile nav
  $(".mobile-nav-icon").click(function () {
    // $(".nav").slideToggle();

    if ($(".mobile-nav-icon").hasClass("fa-bars")) {
      $(".mobile-nav-icon").addClass("fa-times");
      $(".mobile-nav-icon").removeClass("fa-bars");
      $(".nav").addClass("toggle-on");
    } else {
      $(".mobile-nav-icon").addClass("fa-bars");
      $(".mobile-nav-icon").removeClass("fa-times");
      $(".nav").removeClass("toggle-on");
    }
  });
});
