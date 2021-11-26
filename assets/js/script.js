$(document).ready(function () {
  // Scroll to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $(".return-to-top").fadeIn(200);
    } else {
      $(".return-to-top").fadeOut(200);
    }
  });
  $(".return-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      900
    );
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      $(".return-to-top").addClass("bottom");
    } else {
      $(".return-to-top").removeClass("bottom");
    }
  });

  // scroll next section
  $(".scroller").click(function () {
    var cls = $(this).closest(".section-item").next().offset().top;
    $("html, body").animate({ scrollTop: cls }, "slow");
  });
});
