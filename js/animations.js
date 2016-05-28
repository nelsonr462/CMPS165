$( ".mainCup" ).click(function() {
  $( ".mainCup" ).animate({
    left: "-=25%"
  }, 500, function() {
    // Animation complete.
  });
});
