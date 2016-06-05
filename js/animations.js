mainCupFlag = true;
var moveLeft = "-=15.3%"
var moveRight = "+=15.3%"

// Move cup left and right
$("#compare").click(function() {

    // Disable compare button  
    $("#compare").prop('disabled', true)

    // Move cup left or right base on click
    $(".mainCup").animate({
        left: (mainCupFlag == true ? moveLeft : moveRight)
    }, 500, function() {

        // Set cup flag for future movement
        mainCupFlag = (mainCupFlag == true ? false : true)

        // Enable compare button, animation complete
        $("#compare").prop('disabled', false);
    });
});

// Fade compare cup in and out
$("#compare").click(function() {
    this.toggle = !this.toggle;
    $(".compareCup").stop().fadeTo(400, this.toggle ? .25 : 0);
});


$(".compareCupSide").click(function() {
    $(".compareCupSide").fadeTo(250, 1)
    $(".compareCupSide").off("click")

})


var txt = ['strong', 'cheap', 'light', 'sweet', 'fancy', 'bitter', 'tasty', 'healthy'],
    n = txt.length,
    $swap = $('#swap'),
    $span,
    c = -1;

// CREATE SPANS INSIDE SPAN
for (var i = 0; i < txt.length; i++) $swap.append($('<span />', {
    text: txt[i]
}));
// HIDE AND COLLECT THEM
$span = $("span", $swap).hide();

(function loop() {
    c = ++c % n;
    $swap.animate({
        width: $span.eq(c).width()
    });
    $span.stop().fadeOut().eq(c).fadeIn().delay(2000).show(0, loop);
}());
