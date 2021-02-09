// fadeIn and Out effects on click for right container
$(document).ready(function () {
  $(".about-button").click(function () {
    $("#content-about").fadeIn("slow");
    $("#conten-works").fadeOut("slow");
    $("#contentt-resume").fadeOut("slow");
    $("#content-contact").fadeOut("slow");
  });
  $(".resume-button").click(function () {
    $("#content-about").fadeOut("slow");
    $("#content-resume").fadeIn("slow");
    $("#content-works").fadeOut("slow");
    $("#content-contact").fadeOut("slow");
  });
  $(".works-button").click(function () {
    $("#content-about").fadeOut("slow");
    $("#content-resume").fadeOut("slow");
    $("#content-works").fadeIn("slow");
    $("#content-contact").fadeOut("slow");
  });
  $(".contact-button").click(function () {
    $("#content-about").fadeOut("slow");
    $("#content-resume").fadeOut("slow");
    $("#content-works").fadeOut("slow");
    $("#content-contact").fadeIn("slow");
  });
});

// $(window).resize(function () {
//   if ($(window).width() > 1024) {
//     $(document).ready(function () {
//       $(".about-button").click(function () {
//         $("#content-about").fadeIn("slow");
//         $("#conten-works").fadeOut("slow");
//         $("#contentt-resume").fadeOut("slow");
//         $("#content-contact").fadeOut("slow");
//       });
//       $(".resume-button").click(function () {
//         $("#content-about").fadeOut("slow");
//         $("#content-resume").fadeIn("slow");
//         $("#content-works").fadeOut("slow");
//         $("#content-contact").fadeOut("slow");
//       });
//       $(".works-button").click(function () {
//         $("#content-about").fadeOut("slow");
//         $("#content-resume").fadeOut("slow");
//         $("#content-works").fadeIn("slow");
//         $("#content-contact").fadeOut("slow");
//       });
//       $(".contact-button").click(function () {
//         $("#content-about").fadeOut("slow");
//         $("#content-resume").fadeOut("slow");
//         $("#content-works").fadeOut("slow");
//         $("#content-contact").fadeIn("slow");
//       });
//     });
//   } else {
//     $("body").css("border", "thick solid #0000FF"); //test
//   }
// });

// function myFunction(x) {
//   if (x.matches) {
//     // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }
// var x = window.matchMedia("(min-width: 1024px)");
// myFunction(x); // Call listener function at run time
// x.addEventListener(myFunction); // Attach listener function on state changes
