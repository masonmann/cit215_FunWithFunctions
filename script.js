var miles = Number(prompt("What is the estimated number of miles you drive a year?"));
var cost = Number(prompt("What is the current cost of a gallon of gasoline in your area?"));
function calculate(miles, cost, mpg, ele){
  var total = (miles/mpg) * cost;
  document.querySelector(ele).innerHTML="To drive a car with an MPG rating of " +mpg+ " for " +miles+ " miles at $" +cost.toFixed(2)+ " per gallon would cost $" +total.toFixed(2)+ ".";
}

calculate(miles, cost, 12, ".car1");
calculate(miles, cost, 17, ".car2");
calculate(miles, cost, 26, ".car3");
calculate(miles, cost, 29, ".car4");