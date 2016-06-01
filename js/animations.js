mainCupFlag = true;
var moveLeft = "-=20.3%"
var moveRight = "+=20.3%"

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
    
//    if(!mainCupFlag) {
//        $(".compareCup").fadeTo(250, .5)
//    }
//    else
    
//    if (!mainCupFlag) {
//        $(".compareCup").on("click", "img", function () {
//            coffeeFlag = "coffee2"
//            setOptions(coffee2)
//            $(".compareCup").fadeTo(250, .5)
//            $(".mainCup").fadeTo(250, 1)
//        })
//    }
//    else {
//        $(".compareCup").off() 
//        coffeeFlag = "coffee1"
//        setOptions(coffee1)
//        $(".compareCup").fadeTo(250, .5)
//        $(".mainCup").fadeTo(250, 1)
//    }
    
    // Enable compare button, animation complete
    $("#compare").prop('disabled', false);
  });
});

// Fade compare cup in and out
$("#compare").click(function () {
    this.toggle = !this.toggle;
    $(".compareCup").stop().fadeTo(400, this.toggle ? .5 : 0);
});