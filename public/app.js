$(document).ready(function() {
    $(function() {
      $(".navscroll").bind('click', function(event){
        event.preventDefault();
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top -100
          }, 100);
      });
  });

    $(".menuBar img").on("click", function() {
        $(".dropDown").toggle();
    });

    $(".dropDown a").on("click", function() {
        $(".dropDown").hide();
    });
});