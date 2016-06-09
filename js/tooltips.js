/*
===================================================
PLEASE REFER TO static/html/tipContent.html FOR EDITING CONTENT

༼ つ ◕_◕ ༽つ

===================================================
*/

$(window).load(function() {


    // Container for fetched HTML file 
    var tipContent

    // Y-Offset values for tooltips based on image type
    var beanArray = ["Arabica", "Robusta"]
    var beanOffset = 60

    var roastArray = ["Light", "Medium", "Dark"]
    var roastOffset = -2

    var brewArray = ["Chemex", "Siphon", "ColdBrew", "Espresso", "Turkish"]
    var brewOffset = 35

    var milkArray = ["CowMilk", "AlmondMilk", "SoyMilk"]
    var milkOffset = 35

    var sweetArray = ["Sugar", "Honey", "Syrup"]
    var sweetOffset = 35

    var cupArray = ["compareCup", "mainCup"]
    var cupOffset = -2

    // Store data as a JQuery object
    tipContent = $(".tipHolder").html();
    // Y-Offset Holder
    var yOffset
    var myPosition = "bottom-center"
    var myAt = "top-center"


    // Create ToolTips and fill with content from tipContent.html
    function createTip(tipType) {
        // Check image type for custom offsets
        if ($.inArray(tipType, beanArray) > -1) {
            yOffset = beanOffset
        }
        else if ($.inArray(tipType, roastArray) > -1) {
            yOffset = roastOffset
        }
        else if ($.inArray(tipType, brewArray) > -1) {
            yOffset = brewOffset
        }
        else if ($.inArray(tipType, milkArray) > -1) {
            yOffset = milkOffset
        }
        else if ($.inArray(tipType, sweetArray) > -1) {
            yOffset = sweetOffset
        }
        else if ($.inArray(tipType, cupArray) > -1) {
            yOffset = cupOffset
            myPosition = (tipType == "mainCup" ? "left-center" : "right-center")
            myAt = (tipType == "mainCup" ? "right-center" : "left-center")
        }

        // Create selector to find element in index.html
        var selector = "[data='" + tipType + "']"

        // Create and return ready q-Tip object
        var tip = {
            id: tipType + "Tip",
            content: {
                text: $(tipContent).find("[info='" + tipType + "']").html()

            },

            position: {
                my: myPosition,
                at: myAt,
                target: $(selector),
                adjust: {
                    y: yOffset
                },
                mouse: true
            },
            style: {
                classes: 'qtip-dark'
            }
        }

        return tip
    }
    
    var tips = ["Arabica", "Robusta", "Light", "Medium", "Dark", "Chemex", "Siphon", "ColdBrew", "Espresso", "Turkish", "CowMilk", "AlmondMilk", "SoyMilk", "Sugar", "Honey", "Syrup", "compareCup", "mainCup"]
    
    for(var i= 0; i < tips.length; i++) {
        $("[data='" + tips[i] + "']").qtip(createTip(tips[i]))
    }

})
