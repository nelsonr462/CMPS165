/*
===================================================
PLEASE REFER TO static/html/tipContent.html FOR EDITING CONTENT

༼ つ ◕_◕ ༽つ

===================================================
*/

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

// Fetch HTML file with formatted tooltips
$.get("static/html/tipContent.html", function(data) {
    // Parse HTML data from GET Request
    var tempData = $('<output>').append($.parseHTML(data));
    // Store data as a JQuery object
    tipContent = tempData.html();
    // Y-Offset Holder
    var yOffset
    var myPosition = "bottom-center"
    var myAt = "top-center"

    
    // Create ToolTips and fill with content from tipContent.html
    function createTip(tipType) {
        // Check image type for custom offsets
        if($.inArray(tipType, beanArray) > -1) {
            yOffset = beanOffset 
        } else if($.inArray(tipType, roastArray) > -1) {
            yOffset = roastOffset
        } else if($.inArray(tipType, brewArray) > -1) {
            yOffset = brewOffset
        } else if($.inArray(tipType, milkArray) > -1) {
            yOffset = milkOffset
        } else if($.inArray(tipType, sweetArray) > -1) {
            yOffset = sweetOffset
        } else if($.inArray(tipType, cupArray) > -1) {
            yOffset = cupOffset
            myPosition=(tipType=="mainCup"?"left-center":"right-center")
            myAt=(tipType=="mainCup"?"right-center":"left-center")
        }

        // Create selector to find element in index.html
        var selector = "[data='" + tipType + "']"
        
        // Create and return ready q-Tip object
        var tip = {
            content: {
                text: $(tipContent).find("#" + tipType).html()

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

    $("[data='Arabica']").qtip(createTip("Arabica"))

    $("[data='Robusta']").qtip(createTip("Robusta"))
    
    $("[data='Light']").qtip(createTip("Light"))
    
    $("[data='Medium']").qtip(createTip("Medium"))
    
    $("[data='Dark']").qtip(createTip("Dark"))
    
    $("[data='Chemex']").qtip(createTip("Chemex"))
    
    $("[data='Siphon']").qtip(createTip("Siphon"))
    
    $("[data='ColdBrew']").qtip(createTip("ColdBrew"))
    
    $("[data='Espresso']").qtip(createTip("Espresso"))
    
    $("[data='Turkish']").qtip(createTip("Turkish"))
    
    $("[data='CowMilk']").qtip(createTip("CowMilk"))
    
    $("[data='AlmondMilk']").qtip(createTip("AlmondMilk"))
    
    $("[data='SoyMilk']").qtip(createTip("SoyMilk"))
    
    $("[data='Sugar']").qtip(createTip("Sugar"))
    
    $("[data='Honey']").qtip(createTip("Honey"))
    
    $("[data='Syrup']").qtip(createTip("Syrup"))
    
    $("[data='compareCup']").qtip(createTip("compareCup"))
    
    $("[data='mainCup']").qtip(createTip("mainCup"))
    

}, 'text');

