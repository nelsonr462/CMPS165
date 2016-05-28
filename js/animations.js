var mainCupFlag = true;
var moveLeft = "-=25%"
var moveRight = "+=25%"

$( ".mainCup" ).click(function() {
  $( ".mainCup" ).animate({
    left: (mainCupFlag==true ? moveLeft : moveRight)
  }, 500, function() {
    // Animation complete.
    mainCupFlag = (mainCupFlag==true ? false : true)
  });
});
