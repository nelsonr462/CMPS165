$(window).load(function() {



    // Coffee result attributes
    var t_caffeine
    var t_calories
    var t_flavor
    var t_price


    var cupClickFlag = true

    var max_caffeine = 243
    var max_calories = 259
    var max_price = 1.57745779568

    var mainCupFlag;

    var coffeeFlag = "coffee1"
    var isAnimating = false

    // List of saved coffee
    var coffeeList = []

    // console.log(data);

    var coffeeSet1 = {

        // Attributes the user must select
        bean: "Arabica",
        method: "Chemex",
        roast: "Light",
        milk: "CowMilk",
        sweetener: "Sugar"
    }

    var coffeeSet2 = {

        // Attributes the user must select
        bean: "Robusta",
        method: "Turkish",
        roast: "Dark",
        milk: "SoyMilk",
        sweetener: "Syrup"
    }



    /* =====================================================

                        ON CLICK HANDLERS

    ========================================================*/


    // --------------------CUPS-----------------------------

    // Set flag, options and cup opacity based on cup clicked
    $(".compareCup").click(function() {
        if (cupClickFlag) {
            coffeeFlag = "coffee2"
            setOptions(coffeeSet2)
            if ($(".compareIce").css("opacity") == .2) $(".compareIce").css("opacity", 1)
            $(".compareCup").fadeTo(250, 1)
            $(".compareFill").fadeTo(250, 1)
            $(".mainCup").fadeTo(250, .25)
            $(".mainFill").fadeTo(250, .25)
            if ($(".mainIce").css("opacity") > .2) $(".mainIce").css("opacity", .2)
        }

    })

    $(".mainCup").click(function() {
        if ($(".compareCupSide").css("opacity") > .2) {
            coffeeFlag = "coffee1"
            setOptions(coffeeSet1)
            if ($(".compareIce").css("opacity") > .2) $(".compareIce").css("opacity", .2)
            $(".compareCup").fadeTo(250, .25)
            $(".compareFill").fadeTo(250, .25)
            $(".mainCup").fadeTo(250, 1)
            $(".mainFill").fadeTo(250, 1)
            if ($(".mainIce").css("opacity") == .2) $(".mainIce").css("opacity", 1)

        }
    })


    //-----------------BEANS-----------------------

    // Set bean
    $(".bean").click(function() {

        // Set coffee attribute
        (coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2).bean = $(this).attr('data')
            //console.log(coffee.bean)

        // Set options
        $("#Arabica").fadeTo(250, ($(this).attr("data") == "Arabica" ? 1 : .25))
        $("#Robusta").fadeTo(250, ($(this).attr("data") == "Robusta" ? 1 : .25))

        // Calculate new coffee results based on changed attribute
        calc(coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)

        // Update animation accordingly
        coffeeFlag == "coffee1" ? updateOrig() : updateNew()


    })

    // --------------------BREW METHODS -----------------

    // Set method
    $(".method").click(function() {

        // Set coffee attribute
        (coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2).method = $(this).attr('data')
            //console.log(coffee.method)

        // Set options
        $("#Chemex").fadeTo(250, ($(this).attr("data") == "Chemex" ? 1 : .25))
        $("#Siphon").fadeTo(250, ($(this).attr("data") == "Siphon" ? 1 : .25))
        $("#ColdBrew").fadeTo(250, ($(this).attr("data") == "ColdBrew" ? 1 : .25))
        $("#Espresso").fadeTo(250, ($(this).attr("data") == "Espresso" ? 1 : .25))
        $("#Turkish").fadeTo(250, ($(this).attr("data") == "Turkish" ? 1 : .25))



        // Calculate new coffee results based on changed attribute
        calc(coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)



        // Update animation accordingly
        coffeeFlag == "coffee1" ? updateOrig() : updateNew()

        // Update Cup
        updateCup($(this).attr("data"))

    })


    // -----------------------------ROAST----------------------------
    // Set roast
    $(".roast").click(function() {

        // Set coffee attribute
        (coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2).roast = $(this).attr('data')
            //console.log(coffee.roast)

        // Set options
        $("#Light").fadeTo(250, ($(this).attr("data") == "Light" ? 1 : .25))
        $("#Medium").fadeTo(250, ($(this).attr("data") == "Medium" ? 1 : .25))
        $("#Dark").fadeTo(250, ($(this).attr("data") == "Dark" ? 1 : .25))

        // Calculate new coffee results based on changed attribute
        calc(coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)

        // Update animation accordingly
        coffeeFlag == "coffee1" ? updateOrig() : updateNew()
    })


    //-----------------------------MILK------------------------------
    // Set milk
    $(".milk").click(function() {
        var currentSet = (coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)
        var fill = (coffeeFlag == "coffee1" ? ".mainFill" : ".compareFill")

        if (currentSet.milk == $(this).attr('data')) {
            currentSet.milk = "NoMilk"
            $("#CowMilk").fadeTo(250, .25)
            $("#AlmondMilk").fadeTo(250, .25)
            $("#SoyMilk").fadeTo(250, .25)
            $(fill).removeClass("hasMilk")

        }
        else {

            // Set coffee attribute    
            currentSet.milk = $(this).attr('data')

            // Set options
            $("#CowMilk").fadeTo(250, ($(this).attr("data") == "CowMilk" ? 1 : .25))
            $("#AlmondMilk").fadeTo(250, ($(this).attr("data") == "AlmondMilk" ? 1 : .25))
            $("#SoyMilk").fadeTo(250, ($(this).attr("data") == "SoyMilk" ? 1 : .25))
            $(fill).addClass("hasMilk")

        }

        // Calculate new coffee results based on changed attribute
        calc(coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)

        // Update animation accordingly
        coffeeFlag == "coffee1" ? updateOrig() : updateNew()
    })


    //--------------------------SWEETENER----------------------------------
    // Set sweetener
    $(".sweetener").click(function() {
        var currentSet = (coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)
        if (currentSet.sweetener == $(this).attr('data')) {
            currentSet.sweetener = "NoSweet"
            $("#Sugar").fadeTo(250, .25)
            $("#Honey").fadeTo(250, .25)
            $("#Syrup").fadeTo(250, .25)
        }
        else {

            // Set coffee attribute    
            currentSet.sweetener = $(this).attr('data')

            // Set options
            $("#Sugar").fadeTo(250, ($(this).attr("data") == "Sugar" ? 1 : .25))
            $("#Honey").fadeTo(250, ($(this).attr("data") == "Honey" ? 1 : .25))
            $("#Syrup").fadeTo(250, ($(this).attr("data") == "Syrup" ? 1 : .25))

        }

        // Calculate new coffee results based on changed attribute
        calc(coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)

        // Update animation accordingly
        coffeeFlag == "coffee1" ? updateOrig() : updateNew()
    })


    //-----------------------------FUNCTION BUTTONS--------------------------------
    // Save current cup of coffee and add to coffeeList
    $(".save").click(function() {
        swal({
            title: "Give your cup a name!",
            text: "Write something unique:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }

            // Check if name already exists
            for (var prop in coffeeList) {
                if (coffeeList[prop]["key"] == inputValue) {
                    swal("Woops!", "Please enter a unique name!")
                    return
                }
            }

            // Add blend to list
            dropdownAdd(inputValue)

            // Add current coffee object to array
            addObj(inputValue, (coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2))
            console.log(coffeeList)
            swal.close()
        });

    })

    // Set the current coffee object to the new one requested
    // Then perform the calculations and animate accordingly
    $("#dropList").on("click", "li", function() {
            // Check if name already exists
            for (var prop in coffeeList) {
                if (coffeeList[prop]["key"] == $(this).text()) {

                    // Update coffe object
                    $.extend(true, coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2, {
                        bean: coffeeList[prop]["value"].bean,
                        method: coffeeList[prop]["value"].method,
                        roast: coffeeList[prop]["value"].roast,
                        milk: coffeeList[prop]["value"].milk,
                        sweetener: coffeeList[prop]["value"].sweetener,
                    });

                    // Perform calc, set options and update flag
                    setOptions(coffeeList[prop]["value"])
                    calc(coffeeList[prop]["value"])
                    coffeeFlag == "coffee1" ? updateOrig() : updateNew()
                    coffeeFlag == "coffee1" ? updateCup(coffeeSet1.method) : updateCup(coffeeSet2.method)
                }
            }
        })
        //=====================END ONCLICK LISTENERS==========================


    // Set all options at once
    function setOptions(obj) {

        // Set bean
        $("#Arabica").fadeTo(250, (obj.bean == "Arabica" ? 1 : .25))
        $("#Robusta").fadeTo(250, (obj.bean == "Robusta" ? 1 : .25))

        // Set roast
        $("#Light").fadeTo(250, (obj.roast == "Light" ? 1 : .25))
        $("#Medium").fadeTo(250, (obj.roast == "Medium" ? 1 : .25))
        $("#Dark").fadeTo(250, (obj.roast == "Dark" ? 1 : .25))


        // Set method
        $("#Chemex").fadeTo(250, (obj.method == "Chemex" ? 1 : .25))
        $("#Siphon").fadeTo(250, (obj.method == "Siphon" ? 1 : .25))
        $("#ColdBrew").fadeTo(250, (obj.method == "ColdBrew" ? 1 : .25))
        $("#Espresso").fadeTo(250, (obj.method == "Espresso" ? 1 : .25))
        $("#Turkish").fadeTo(250, (obj.method == "Turkish" ? 1 : .25))

        // Ste milk
        $("#CowMilk").fadeTo(250, (obj.milk == "CowMilk" ? 1 : .25))
        $("#AlmondMilk").fadeTo(250, (obj.milk == "AlmondMilk" ? 1 : .25))
        $("#SoyMilk").fadeTo(250, (obj.milk == "SoyMilk" ? 1 : .25))

        // Set sweetener
        $("#Sugar").fadeTo(250, (obj.sweetener == "Sugar" ? 1 : .25))
        $("#Honey").fadeTo(250, (obj.sweetener == "Honey" ? 1 : .25))
        $("#Syrup").fadeTo(250, (obj.sweetener == "Syrup" ? 1 : .25))
    }


    function updateOrig() {
        caffeine_0.load({
            columns: [
                ['data', t_caffeine]
            ]
        });
        calories_0.load({
            columns: [
                ['data', t_calories]
            ]
        });
        price_0.load({
            columns: [
                ['data', t_price]
            ]
        });
        // console.log(t_price)
        // console.log(coffeeSet1)
    }

    function updateNew() {
        caffeine_1.load({
            columns: [
                ['data', t_caffeine]
            ]
        });
        calories_1.load({
            columns: [
                ['data', t_calories]
            ]
        });
        price_1.load({
            columns: [
                ['data', t_price]
            ]
        });
        // console.log(coffeeSet2)
    }

    // Add element to dropdown list
    function dropdownAdd(name) {

        // Create elements
        var li = document.createElement("li")
        var center = document.createElement("center")
        var text = document.createTextNode(name)

        // Nest center inside li
        center.appendChild(text)
        li.appendChild(center)

        // Grab list
        var list = document.getElementById("dropList")

        // Append li to list
        list.appendChild(li)
    }

    // Choose correct images to display and animate change
    function updateCup(data) {
        var cup = (coffeeFlag == "coffee1" ? ".mainCup" : ".compareCup")
        var fill = (coffeeFlag == "coffee1" ? ".mainFill" : ".compareFill")

        if (data == "Chemex" || data == "Siphon") {
            if ($(cup).attr("src") == "static/img/cups/siphonCup.svg") return
            animateResult(cup, 0, fill)
        }
        else if (data == ("ColdBrew")) {
            if ($(cup).attr("src") == "static/img/cups/coldbrewCup.svg") return
            animateResult(cup, 1, fill)
        }
        else if (data == "Espresso" || data == "Turkish") {
            if ($(cup).attr("src") == "static/img/cups/espressoCup.svg") return
            animateResult(cup, 2, fill)
        }


        function animateResult(cup, methodType, fill) {

            var fillHeight = ["6.43em", "7em", "2.45em"]
            var fillLeft = ["37.8%", "36.8%", "6.48em"]
            var fillBottom = ["6.0em", "6.0em", "6.54em"]
            var fillURL = ["static/img/cups/siphonFill.svg", "static/img/cups/coldbrewFill.svg", "static/img/cups/espressoFill.svg"]
            var fillWidth = ["4.55em", "4.35em", "2.81em"]

            var cupHeight = ["9em", "9.5em", "3.8em"]
            var cupTop = ["1em", "0.5em", "5.5em"]
            var cupLeft = ["35%", "34%", "6.1em"]
            var cupURL = ["static/img/cups/siphonCup.svg", "static/img/cups/coldbrewCup.svg", "static/img/cups/espressoCup.svg"]

            var currentMilk = (coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2).milk
            var currentIce = (coffeeFlag == "coffee1" ? ".mainIce" : ".compareIce")

            var attIndex = methodType

            // Fade away Fill
            if (methodType != 1) $(currentIce).fadeTo(100, 0)
            $(fill).animate({
                opacity: 0
            }, 250, "linear", function() {
                $(fill).attr("src", fillURL[attIndex])
            })

            $(cup).animate({
                opacity: 0
            }, 300, "linear", function() {
                $(fill).css({
                    height: "0em",
                    width: fillWidth[methodType]
                })
                $(cup).attr("src", cupURL[attIndex])
                $(cup).css({
                    height: cupHeight[attIndex],
                    top: cupTop[attIndex],
                    left: cupLeft[attIndex]
                })

                $(cup).animate({
                    opacity: 1
                }, 300, "linear", function() {


                })
                $(fill).css({
                    bottom: fillBottom[attIndex],
                    left: fillLeft[attIndex]
                })
                $(fill).animate({
                    opacity: 1,
                    height: fillHeight[attIndex]
                }, 200, "swing", function() {
                    (currentMilk == "NoMilk" ? $(fill).removeClass("hasMilk") : $(fill).addClass("hasMilk"))
                    if (methodType == 1) $(currentIce).fadeTo(200, 1)
                })

            })
        }
    }



    // add object to array
    function addObj(keyName, val) {

        // Create coffee object
        var obj = {
            key: keyName,
            value: jQuery.extend({}, val)
        }

        // Append to coffeeList
        coffeeList.push(obj)
    }

    // Calculate calories, caffeine, flavor and price of a given cup of coffee
    function calc(coffeeObj) {

        // Initialize base flavor
        flavor = 0.5

        // Store name of method for calculation
        var method = ""

        // Size in ounces of the cup of coffee
        var size = 0

        // Grams in a cup
        var gramsPerCup = 0

        // Caffeine variables
        var caffeine_mg = 0
        var base_caffeine_scalar = 0
        var caffeine_scalar = 0

        // Calorie variables
        var calorie_ounce_method = 0
        var calorie_ounce_milk = 0
        var calorie_ounce_sweetener = 0

        // Flavor variables
        var bean_flavor = 0
        var method_flavor = 0
        var roast_flavor = 0
        var milk_flavor = 0
        var sweetener_flavor = 0

        // Price variables
        var bean_price = 0
        var milk_price = 0
        var sweetener_price = 0

        /*
        We loop though all sub-objects of the main data object.
        For every sub-object looped over we check if its "name" value
        equals our current coffee attributes. If we get a match we set 
        the variables needed to compute the global coffee attributes defined
        at the top of the file.
        */
        for (var key in data) {

            // skip loop if the property is from prototype
            if (!data.hasOwnProperty(key)) continue;

            // Set new object to data property
            var obj = data[key]

            for (var prop in obj) {

                // skip loop if the property is from prototype
                if (!obj.hasOwnProperty(prop)) continue;

                // Adjust variables based on bean type
                if (obj[prop]["name"] == coffeeObj.bean) {

                    //console.log(obj[prop]["name"])

                    // Set needed variables
                    base_caffeine_scalar = obj[prop]["base_caffeine_scalar"]
                    bean_flavor = obj[prop]["bean_flavor"]
                    bean_price = obj[prop]["bean_price"]
                }

                // Adjust variables based on roast type
                if (obj[prop]["name"] == coffeeObj.roast) {

                    //console.log(obj[prop]["name"])

                    // Set needed variables
                    caffeine_scalar = obj[prop]["caffeine_scalar"]
                    roast_flavor = obj[prop]["roast_flavor"]
                }

                // Adjust variables based on method type
                if (obj[prop]["name"] == coffeeObj.method) {

                    //console.log(obj[prop]["name"])

                    // Set methood name
                    method = obj[prop]["name"]

                    // Set needed variables
                    caffeine_mg = obj[prop]["caffeine_mg"]
                    size = obj[prop]["size"]
                    calorie_ounce_method = obj[prop]["calorie_ounce_method"]
                    method_flavor = obj[prop]["method_flavor"]
                    gramsPerCup = obj[prop]["gramsPerCup"]
                }

                // Adjust variables based on milk type
                if (obj[prop]["name"] == coffeeObj.milk) {

                    //console.log(obj[prop]["name"])

                    // Set needed variables
                    calorie_ounce_milk = obj[prop]["calorie_ounce_milk"]
                    milk_flavor = obj[prop]["milk_flavor"]
                    milk_price = obj[prop]["milk_price"]
                }

                // Adjust variables based on sweetener type
                if (obj[prop]["name"] == coffeeObj.sweetener) {

                    //console.log(obj[prop]["name"])

                    // Set needed variables
                    calorie_ounce_sweetener = obj[prop]["calorie_ounce_sweetener"]
                    sweetener_flavor = obj[prop]["sweetener_flavor"]
                    sweetener_price = obj[prop]["sweetener_price"]
                }
            }
        }
        // All values have been set, begin coffee calculations

        // Total caffeine in mg
        t_caffeine = (base_caffeine_scalar + caffeine_scalar) * (caffeine_mg)

        // Turkish and espresso both have different volumes requiring different 
        // calorie and price calculations
        if (method == "Turkish" || method == "Espresso") {

            // Calculate calories for Turkish/Espresso methods
            t_calories =
                (calorie_ounce_method * size) +
                (calorie_ounce_milk * size) +
                (calorie_ounce_sweetener * (1 / 6))

            // Calculate price for Turkish/Espresso methods
            t_price =
                (bean_price * gramsPerCup) +
                (milk_price * size) +
                (sweetener_price * (1 / 6))
        }
        else {

            // Calculate calories for all other methods
            t_calories =
                (calorie_ounce_method * size) +
                (calorie_ounce_milk * 2) +
                (calorie_ounce_sweetener * 2)

            // Calculate price for all other methods
            t_price =
                (bean_price * gramsPerCup) +
                (milk_price * 2) +
                (sweetener_price * 2)
        }

        // Flavor
        t_flavor = bean_flavor + method_flavor + roast_flavor + milk_flavor + sweetener_flavor

        // Update Graph Labels
        var caffeineLabel = $(".graphData")[(coffeeFlag == "coffee1" ? 0 : 3)]
        var calorieLabel = $(".graphData")[(coffeeFlag == "coffee1" ? 1 : 4)]
        var priceLabel = $(".graphData")[(coffeeFlag == "coffee1" ? 2 : 5)]


        $(caffeineLabel).text(Math.round(t_caffeine * 100) / 100 + " mg")
        $(calorieLabel).text(Math.round(t_calories * 100) / 100)
        $(priceLabel).text("$" + t_price.toFixed(2))

        var cupSelector = (coffeeFlag == "coffee1" ? "mainCup" : "compareCup") 
        updateTip(cupSelector, coffeeObj.bean, "beanInfo")
        updateTip(cupSelector, coffeeObj.method, "brewInfo")
        updateTip(cupSelector, coffeeObj.roast, "roastInfo")
        updateTip(cupSelector, coffeeObj.milk, "milkInfo")
        updateTip(cupSelector, coffeeObj.sweetener, "sweetInfo")





    }

    function updateTip(cup, info, infoType) {

        var tipContent = (cup == "mainCup" ? "[info='mainCup']" : "[info='compareCup']")
        var selector = "[data='" + cup + "']"
        var myPosition
        var myAt
        var yOffset = -2
        
        // Clean info text by inserting spaces before capital letters and trimming excess space
        var cleanInfo = info.replace(/([A-Z])/g, ' $1').trim()
        
        myPosition = (cup == "mainCup" ? "left-center" : "right-center")
        myAt = (cup == "mainCup" ? "right-center" : "left-center")

        // Update tooltip with new info text
        $(tipContent).find("#" + infoType).text(cleanInfo)

        var tip = {
            overwrite: true,
            
            content: {
                text: $(tipContent).html()

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

        $(selector).qtip(tip)

    }
    
    
    // Add Presets
    var preset1= {
         bean: "Arabica",
         method: "Espresso",
         roast: "Medium",
         milk: "CowMilk",
         sweetener: "Sugar"
     }
     
     var preset2 = {
         bean: "Robusta",
         method: "Siphon",
         roast: "Medium",
         milk: "SoyMilk",
         sweetener: "NoSweet"
     }
     
     var preset3 = {
         bean: "Arabica",
         method: "ColdBrew",
         roast: "Dark",
         milk: "AlmondMilk",
         sweetener: "Sugar"
     }
        
    dropdownAdd("Cortado")
    addObj("Cortado", preset1)
    dropdownAdd("Café au lait")
    addObj("Café au lait", preset2)
    dropdownAdd("Toddy Coffee")
    addObj("Toddy Coffee", preset3)
    
    

    // Display inital animation
    setOptions(coffeeFlag == "coffee1" ? coffeeSet1 : coffeeSet2)

    // Calc coffee1 and create initial animation
    calc(coffeeSet1)
    updateOrig()
    updateCup(coffeeSet1.method)

    // Create base coffee2 animation
    coffeeFlag = "coffee2"
    calc(coffeeSet2)
    updateNew()
    updateCup(coffeeSet2.method)
    coffeeFlag = "coffee1"


    // Info Button
    $(".infoButton").click(function() {
        swal({
            title: "WHAT IS THIS?",
            text: "Here, you'll be able to see what \
        goes into a cup and how it changes when\
        your coffee is made at home with the brew methods shown here.<br><br>\
        Simply select what you want to go into the first cup by clicking\
        options on the left. To compare to cups, click the other cup to change what\
        goes into it.\
        \n \n \
        <p style='font-size: 0.7em; padding-top: 1em'>Credit: Nelson Ramirez, Alex Janakos, Jenny Kwok, Suresh Lodha @ UCSC</p>\
        <p style='font-size: 0.7em; padding-top: 0.3em'><a href='README.md'>Sources<a></p>",
            html: true
        })

    })
    
    


})

// Fix Scrollbar lag
$(".mCustomScrollbar").mCustomScrollbar({
    scrollInertia: 0,
    autoHideScrollbar: false
});


