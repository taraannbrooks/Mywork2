console.log("Testing");

function fade() {
  $('.preloader').fadeOut("slow");
  }
  setTimeout(fade, 4000);

$(function() {
    $(".menu").click(function() {
      if ($("#navigation").hasClass("hidden")) {
        $("#navigation").attr("class", "visible animated slideInLeft");
      } else {
        $("#navigation").attr("class", "hidden animated slideOutLeft");
      }
      $(this).toggleClass("open");
    });
  
    $("#navigation").click(function() {
      if ($("#navigation").hasClass("visible")) {
        $(".menu").toggleClass("open");
      } else {
      }
      $(this).attr("class", "slideOutLeft hidden");
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        if ($("#navigation").hasClass("visible")) {
          $(".menu").toggleClass("open");
        } else {
        }
        $("#navigation").attr("class", "slideOutLeft hidden");
      }
    });
  });
  