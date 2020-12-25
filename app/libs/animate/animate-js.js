$.fn.animated = function(inEffect) {
  $(this).each(function() {
    var ths = $(this);
    ths.css("opacity", "0").addClass("animate__animated").waypoint(function(dir) {
      if (dir === "down") {
        ths.addClass(inEffect).css("opacity", "1");
      };
    }, {
      offset: "90%"
    });

  });
};