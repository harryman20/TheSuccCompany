$(document).ready(function() {
  $('.scroll-down').click (function() {
   $('html, body').animate({scrollTop: $('section.photos').offset().top }, 'slow');
    return false;
  });
  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
  }
}

var btnContainer = document.getElementById("navbar");
var btns = btnContainer.getElementsByClassName("a");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
