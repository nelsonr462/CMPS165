// Coffee result attributes
var caffeine;
var calories;
var flavor;
var price;

console.log(data);

var coffeeSet = {
    
    // Attributes the user must select
    bean: "",
    method: "",
    roast: "",
    milk: "",
    sweetener: ""
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
    
    
    for (var key in data && coffee) {
        
        // skip loop if the property is from prototype
        if (!data.hasOwnProperty(key)) continue;
        

        // Set new object to data property
        var obj = data[key];
        
        for (var prop in obj) {
            
            // skip loop if the property is from prototype
            if(!obj.hasOwnProperty(prop)) continue;

            // Loop though keys within each data key
            if (Object.is(coffee[key], obj[prop]["name"]))
                console.log("tets");
        }
    }
}

calc(coffee);