// Coffee result attributes
var caffeine;
var calories;
var flavor;
var price;

console.log(data);

var coffeeSet = {
    
    // Attributes the user must select
    bean: "Arabica",
    method: "Siphon",
    roast: "Light",
    milk: "Cow Milk",
    sweetener: "Honey"
}

var coffee = coffeeSet;

// Set bean
$(".bean").click(function(){
    coffee.bean = $(this).attr('data')
    console.log(coffee.bean)
})

// Set method
$(".method").click(function(){
    coffee.method = $(this).attr('data')
    console.log(coffee.method)
})

// Set roast
$(".roast").click(function(){
    coffee.roast = $(this).attr('data')
    console.log(coffee.roast)
})

// Set milk
$(".milk").click(function(){
    coffee.milk = $(this).attr('data')
    console.log(coffee.milk)
})

// Set sweetener
$(".sweetener").click(function(){
    coffee.sweetener = $(this).attr('data')
    console.log(coffee.sweetener)
})

// Calculate calories, caffeine, flavor and price of a given cup of coffee
function calc(coffeeVal) {
    
    // Initialize base flavor
    flavor = 0.5
    
    // Size in ounces of the cup of coffee
    var size = 0;
    
    // Grams in a cup
    var gramsPerCup = 0;
    
    // Caffeine variables
    var caffeine_mg = 0;
    var base_caffeine_scalar = 0;
    var caffeine_scalar = 0;
    
    // Calorie variables
    var calorie_ounce_method = 0;
    var calorie_ounce_milk = 0;
    var calorie_ounce_sweetener = 0;
    
    // Flavor variables
    var bean_flavor = 0;
    var method_flavor = 0;
    var roast_flavor = 0;
    var milk_flavor = 0;
    var sweetener_flavor = 0;
    
    // Price variables
    var bean_price = 0;
    var milk_price = 0;
    var sweetener_price = 0;
    
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
        var obj = data[key];
        
        for (var prop in obj) {
            
            // skip loop if the property is from prototype
            if(!obj.hasOwnProperty(prop)) continue;

            // Adjust variables based on bean type
            if (obj[prop]["name"] == coffee.bean) {
                
                console.log(obj[prop]["name"]);
                
                // Set needed variables
                base_caffeine_scalar = obj[prop]["base_caffeine_scalar"];
                bean_flavor = obj[prop]["bean_flavor"];
                bean_price = obj[prop]["bean_price"];
            }
                
            // Adjust variables based on roast type
            if (obj[prop]["name"] == coffee.roast) {
                
                console.log(obj[prop]["name"]);
                
                // Set needed variables
                caffeine_scalar = obj[prop]["caffeine_scalar"];
                roast_flavor = obj[prop]["roast_flavor"];
            }
            
            // Adjust variables based on method type
            if (obj[prop]["name"] == coffee.method) {
                
                console.log(obj[prop]["name"]);
                
                // Set needed variables
                caffeine_mg = obj[prop]["caffeine_mg"];
                size = obj[prop]["size"];
                calorie_ounce_method = obj[prop]["calorie_ounce_method"];
                method_flavor = obj[prop]["method_flavor"];
                gramsPerCup = obj[prop]["gramsPerCup"];
            }
            
            // Adjust variables based on milk type
            if (obj[prop]["name"] == coffee.milk) {
                
                console.log(obj[prop]["name"]);
                
                // Set needed variables
                calorie_ounce_milk = obj[prop]["calorie_ounce_milk"];
                milk_flavor = obj[prop]["milk_flavor"];
                milk_price = obj[prop]["milk_price"];    
            }
            
            // Adjust variables based on sweetener type
            if (obj[prop]["name"] == coffee.sweetener) {
                
                console.log(obj[prop]["name"]);
                
                // Set needed variables
                calorie_ounce_sweetener = obj[prop]["calorie_ounce_sweetener"];
                sweetener_flavor = obj[prop]["sweetener_flavor"];
                sweetener_price = obj[prop]["sweetener_price"];
            }
        }
    }
    // All values have been set, begin coffee calculations
    
    console.log("Size: "+size);
    console.log("gramsPerCup: "+gramsPerCup);
    console.log("caffeine_mg: "+caffeine_mg);
    console.log("base_caffeine_scalar: "+base_caffeine_scalar);
    console.log("caffeine_scalar: "+caffeine_scalar);
    console.log("calorie_ounce_method: "+calorie_ounce_method);
    console.log("calorie_ounce_milk: "+calorie_ounce_milk);
    console.log("calorie_ounce_sweetener: "+calorie_ounce_sweetener);
    console.log("bean_flavor: "+bean_flavor);
    console.log("method_flavor: "+method_flavor);
    console.log("roast_flavor: "+roast_flavor);
    console.log("milk_flavor: "+milk_flavor);
    console.log("sweetener_flavor: "+sweetener_flavor);
    console.log("bean_price: "+bean_price);
    console.log("milk_price: "+milk_price);
    console.log("sweetener_price: "+sweetener_price);   
}

calc(coffee);
