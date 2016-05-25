// Coffee result attributes
var t_caffeine
var t_calories
var t_flavor
var t_price

// Define max values for data normalization
var max_caffeine = 243
var max_calories = 259
var max_price = 1.0616659

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
    coffee.bean = $(this).attr('data')
    console.log(coffee.bean)
    calc(coffee)
    setAnimation()
})

// Set method
$(".method").click(function(){
    coffee.method = $(this).attr('data')
    console.log(coffee.method)
    calc(coffee)
    setAnimation()
})

// Set roast
$(".roast").click(function(){
    coffee.roast = $(this).attr('data')
    console.log(coffee.roast)
    calc(coffee)
    setAnimation()

})

// Set milk
$(".milk").click(function(){
    coffee.milk = $(this).attr('data')
    console.log(coffee.milk)
    calc(coffee)
    setAnimation()

})

// Set sweetener
$(".sweetener").click(function(){
    coffee.sweetener = $(this).attr('data')
    console.log(coffee.sweetener)
    calc(coffee)
    setAnimation()

})

function setAnimation() {

    var caffeine = new Chartist.Pie('.caffeine', {
//    series: [20, 10, 30, 40]
    series: [t_caffeine / max_caffeine * 100]
  }, {
    donut: true,
    donutWidth: 30,
    startAngle: 270,
    total: 200,
    showLabel: false,
  });
  
  var calories = new Chartist.Pie('.calories', {
//    series: [20, 10, 30, 40]
  series: [t_calories / max_calories * 100]
  }, {
    donut: true,
    donutWidth: 30,
    startAngle: 270,
    total: 200,
    showLabel: false
  });
  
  var price = new Chartist.Pie('.price', {
//    series: [20, 10, 30, 40]
  series: [t_price / max_price * 100]
  }, {
    donut: true,
    donutWidth: 30,
    startAngle: 270,
    total: 200,
    showLabel: false
  });   

    // Animate respective charts
    caffeine.on('draw', animateOnDraw)
    calories.on('draw', animateOnDraw)
    price.on('draw', animateOnDraw)
}
  
function animateOnDraw (data) {
    if(data.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      var pathLength = data.element._node.getTotalLength();

      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });

      // Create animation definition while also assigning an ID to the animation for later sync usage
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 1500,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };

      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }

      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });

      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      data.element.animate(animationDefinition, false);
    }
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
        
        // Calculate calories for Turkish/Espresso methods
        t_calories = 
            (calorie_ounce_method * size) +
            (calorie_ounce_milk * 2) +
            (calorie_ounce_sweetener * 2)
        
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
}

// Display inital animation
calc(coffee)
setAnimation()