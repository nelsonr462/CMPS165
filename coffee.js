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

function setBean(data) {
    coffee.bean = data.toString();
    alert(coffee.bean);
}

function setRoast(data) {
    coffee.roast = data.toString();
    alert(coffee.roast);
}

function setMethod(data) {
    coffee.method = data.toString();
    alert(coffee.method);
}

function setMilk(data) {
    coffee.milk = data.toString();
    alert(coffee.milk);
}

function setSweetener(data) {
    coffee.sweetener = data.toString();
    alert(coffee.sweetener);
}