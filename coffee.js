console.log(data);

var coffeeSet = {
    
    // Attributes the user must select
    bean: "",
    roast: "",
    method: "",
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