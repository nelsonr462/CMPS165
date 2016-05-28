var mainCupFlag = true;
var moveLeft = "-=25%"
var moveRight = "+=25%"

$( ".mainCup" ).click(function() {
  // Animate
  $( ".mainCup" ).animate({
    left: (mainCupFlag==true ? moveLeft : moveRight)
  }, 500, function() {
    // Animation complete.
  });
  
  // Directional Flag
  mainCupFlag = (mainCupFlag==true ? false : true)
  
});
