// Coffee result attributes
var t_caffeine
var t_calories
var t_flavor
var t_price

// List of saved coffee
var coffeeList = []

console.log(data);

var coffeeSet = {
    
    // Attributes the user must select
    bean: "Arabica",
    method: "Siphon",
    roast: "Light",
    milk: "Cow Milk",
    sweetener: "Honey"
}

var coffee = coffeeSet

// Set bean
$(".bean").click(function(){
    
    // Set coffee attribute
    coffee.bean = $(this).attr('data')
    console.log(coffee.bean)
   
    // Calculate new coffee results based on changed attribute
    calc(coffee)
    
    // Update animation accordingly
    setAnimation(t_caffeine, t_calories, t_price)
    
    
})

// Set method
$(".method").click(function(){
    
    // Set coffee attribute
    coffee.method = $(this).attr('data')
    console.log(coffee.method)
    
    // Calculate new coffee results based on changed attribute
    calc(coffee)
    
    // Update animation accordingly
    setAnimation(t_caffeine, t_calories, t_price)
})

// Set roast
$(".roast").click(function(){
    
    // Set coffee attribute
    coffee.roast = $(this).attr('data')
    console.log(coffee.roast)
    
    // Calculate new coffee results based on changed attribute
    calc(coffee)
    
    // Update animation accordingly
    setAnimation(t_caffeine, t_calories, t_price)
})

// Set milk
$(".milk").click(function(){
    
    // Set coffee attribute
    coffee.milk = $(this).attr('data')
    console.log(coffee.milk)
    
    // Calculate new coffee results based on changed attribute
    calc(coffee)
    
    // Update animation accordingly
    setAnimation(t_caffeine, t_calories, t_price)
})

// Set sweetener
$(".sweetener").click(function(){
    
    // Set coffee attribute    
    coffee.sweetener = $(this).attr('data')
    console.log(coffee.sweetener)
    
    // Calculate new coffee results based on changed attribute
    calc(coffee)
    
    // Update animation accordingly
    setAnimation(t_caffeine, t_calories, t_price)
})

// Save current cup of coffee and add to coffeeList
$(".save").click(function(){
   
    // Grab user text
    var txt = $('#txt').val()
    
    // Check if user named coffee
    // Add to array of key/value pairs
    if (txt) {
        
        // Check if name already exists
        for (var prop in coffeeList) {
            if (coffeeList[prop]["key"] == txt) {
                alert("Name not unique")
                return                
            }
        }
        
        // Add blend to list
        dropdownAdd(txt)
        
        // Add current coffee object to array
        addObj(txt, coffee)
        console.log(coffeeList)
        
        // Reset val back to empty string
        $('#txt').val("")
    } 
})


$("#dropList li").click(function(){
    alert("test")
})


function dropdownAdd(name) {
    
    var li = document.createElement("li")
    var center = document.createElement("center")
    var text = document.createTextNode(name)
    
    center.appendChild(text)
    li.appendChild(center)
    
    var list = document.getElementById("dropList")
    
    list.appendChild(li)
}

// add object to array
function addObj(keyName, val) {
    coffeeList.push({
        key: keyName,
        value: val
    });
}

// Calculate calories, caffeine, flavor and price of a given cup of coffee
function calc(coffeeVal) {
    
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
            if(!obj.hasOwnProperty(prop)) continue;

            // Adjust variables based on bean type
            if (obj[prop]["name"] == coffee.bean) {
                
                console.log(obj[prop]["name"])
                
                // Set needed variables
                base_caffeine_scalar = obj[prop]["base_caffeine_scalar"]
                bean_flavor = obj[prop]["bean_flavor"]
                bean_price = obj[prop]["bean_price"]
            }
                
            // Adjust variables based on roast type
            if (obj[prop]["name"] == coffee.roast) {
                
                console.log(obj[prop]["name"])
                
                // Set needed variables
                caffeine_scalar = obj[prop]["caffeine_scalar"]
                roast_flavor = obj[prop]["roast_flavor"]
            }
            
            // Adjust variables based on method type
            if (obj[prop]["name"] == coffee.method) {
                
                console.log(obj[prop]["name"])
                
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
            if (obj[prop]["name"] == coffee.milk) {
                
                console.log(obj[prop]["name"])
                
                // Set needed variables
                calorie_ounce_milk = obj[prop]["calorie_ounce_milk"]
                milk_flavor = obj[prop]["milk_flavor"]
                milk_price = obj[prop]["milk_price"]   
            }
            
            // Adjust variables based on sweetener type
            if (obj[prop]["name"] == coffee.sweetener) {
                
                console.log(obj[prop]["name"])
                
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
            (calorie_ounce_sweetener * (1/6))
        
        // Calculate price for Turkish/Espresso methods
        t_price =
            (bean_price * gramsPerCup) +
            (milk_price * size) +
            (sweetener_price * (1/6))
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
    
    console.log("Size: "+size)
    console.log("gramsPerCup: "+gramsPerCup)
    console.log("Method: "+method)
    console.log("caffeine_mg: "+caffeine_mg)
    console.log("base_caffeine_scalar: "+base_caffeine_scalar)
    console.log("caffeine_scalar: "+caffeine_scalar)
    console.log("calorie_ounce_method: "+calorie_ounce_method)
    console.log("calorie_ounce_milk: "+calorie_ounce_milk)
    console.log("calorie_ounce_sweetener: "+calorie_ounce_sweetener)
    console.log("bean_flavor: "+bean_flavor)
    console.log("method_flavor: "+method_flavor)
    console.log("roast_flavor: "+roast_flavor)
    console.log("milk_flavor: "+milk_flavor)
    console.log("sweetener_flavor: "+sweetener_flavor)
    console.log("bean_price: "+bean_price)
    console.log("milk_price: "+milk_price)
    console.log("sweetener_price: "+sweetener_price)
    console.log("BEGIN COFFEE STATS")
    console.log("Caffeine: "+t_caffeine+" mg")
    console.log("Calories: "+t_calories)
    console.log("Flavor: "+ t_flavor)
    console.log("Price: "+t_price)
    
    
    // Update Graph Labels
    var caffeineLabel = $(".graphData")[0]
    var calorieLabel = $(".graphData")[1]
    var priceLabel = $(".graphData")[2]
    
    $(caffeineLabel).text(Math.round(t_caffeine * 100) / 100 + " mg")
    $(calorieLabel).text(Math.round(t_calories * 100) / 100)
    $(priceLabel).text("$"+t_price.toFixed(2))
    
}

// Display inital animation
calc(coffee)
setAnimation(t_caffeine, t_calories, t_price)

// Fix Scrollbar lag
$(".mCustomScrollbar").mCustomScrollbar({
    scrollInertia: 1
});