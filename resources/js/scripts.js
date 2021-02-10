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
    $(".nav").slideToggle(200);

    if ($(".mobile-nav-icon").hasClass("fa-bars")) {
      $(".mobile-nav-icon").addClass("fa-times");
      $(".mobile-nav-icon").removeClass("fa-bars");
    } else {
      $(".mobile-nav-icon").addClass("fa-bars");
      $(".mobile-nav-icon").removeClass("fa-times");
    }
  });
});
