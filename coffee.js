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
    roast: "Dark",
    milk: "Cow Milk",
    sweetener: "Honey"
}

var coffee = coffeeSet;

$(".bean").click(function(){
    coffee.bean = $(this).attr('data')
    console.log(coffee.bean)
})

$(".method").click(function(){
    coffee.method = $(this).attr('data')
    console.log(coffee.method)
})

$(".roast").click(function(){
    coffee.roast = $(this).attr('data')
    console.log(coffee.roast)
})

$(".mod").click(function(){
    coffee.milk = $(this).attr('data')
    console.log(coffee.milk)
})

$(".sweetener").click(function(){
    coffee.sweetener = $(this).attr('data')
    console.log(coffee.sweetener)
})

// $("*").click(function(){
//     console.log(coffee)
// })

function calc(coffeeVal) {
    
    // Reset coffee attributes
    caffeine = 0;
    calories = 0;
    flavor = 0;
    price = 0;
    
    
    for (var key in data) {
        
        // skip loop if the property is from prototype
        if (!data.hasOwnProperty(key)) continue;
        
        // Set new object to data property
        var obj = data[key];
        
        for (var prop in obj) {
            
            // skip loop if the property is from prototype
            if(!obj.hasOwnProperty(prop)) continue;

            
            if (obj[prop]["name"] == coffee.bean)
                console.log(obj[prop]["name"]);
            
            if (obj[prop]["name"] == coffee.roast)
                console.log(obj[prop]["name"]);
            
            if (obj[prop]["name"] == coffee.method)
                console.log(obj[prop]["name"]);
            
            if (obj[prop]["name"] == coffee.milk)
                console.log(obj[prop]["name"]);
            
            if (obj[prop]["name"] == coffee.sweetener)
                console.log(obj[prop]["name"]);

        }
    }
}

calc(coffee);
