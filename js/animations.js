var mainCupFlag = true;
var moveLeft = "-=20.3%"
var moveRight = "+=20.3%"


$( "#compare" ).click(function() {
  $("#compare").prop('disabled', true);    
  $( ".mainCup" ).animate({
    left: (mainCupFlag==true ? moveLeft : moveRight)
  }, 500, function() {
    // Animation complete.
    mainCupFlag = (mainCupFlag==true ? false : true)
    $("#compare").prop('disabled', false);
  });
});

$("#compare").click(function () {
    this.toggle = !this.toggle;
    $(".compareCup").stop().fadeTo(400, this.toggle ? 1 : 0);
});