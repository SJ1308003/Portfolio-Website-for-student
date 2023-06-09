$(document).ready(function(){
    var navOffset = 50;  //nav height in pixels
    // close mobile menu on item selection
    $("ul.navbar-nav > li").click(function(e){
      $(".navbar-collapse").collapse("hide");
      // animated smooth scrolling
      var $target = $($(this).children().attr("href"));
      if($target.length){
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $target.offset().top - navOffset
        }, 600);
      }
    });
    $(".navbar-brand").click(function(e){
      $(".navbar-collapse").collapse("hide");
      var $target = $($(this).attr("href"));
      if($target.length){
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $target.offset().top - navOffset
        }, 600);
      }
    });
  });
