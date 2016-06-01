mainCupFlag = true;
var moveLeft = "-=15.3%"
var moveRight = "+=15.3%"

// Move cup left and right
$("#compare" ).click(function() {
    
  // Disable compare button  
  $("#compare").prop('disabled', true)    

  // Move cup left or right base on click
  $( ".mainCup" ).animate({
    left: (mainCupFlag==true ? moveLeft : moveRight)
  }, 500, function() {
    
    // Set cup flag for future movement
    mainCupFlag = (mainCupFlag==true ? false : true)
    
    // Enable compare button, animation complete
    $("#compare").prop('disabled', false);
  });
});

// Fade compare cup in and out
$("#compare").click(function () {
    this.toggle = !this.toggle;
    $(".compareCup").stop().fadeTo(400, this.toggle ? .25 : 0);
});