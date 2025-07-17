//Question No 1

var num1 = 10
var num2 = 20;

var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

//Question No 2

var sub = num2 - num1;
document.write("Subtraction of " + num2 + " and " + num1 + " is " + sub + "<br>");

var mul = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");

var div = num2 / num1;
document.write("Division of " + num2 + " and " + num1 + " is " + div + "<br>");

var mod = num2 % num1;
document.write("Modulus of " + num2 + " and " + num1 + " is " + mod + "<br>");


//Question No 3

//a
var variable;
//b
document.write("Value after variable declaration is: " + variable + "<br>");
//c
variable = 5;
//d
document.write("Initial value: " + variable + "<br>");
//e
variable++;
//f
document.write("Value after increment is: " + variable + "<br>");
//g
variable += 7;
//h
document.write("Value after addition is: " + variable + "<br>");
//i
variable--;
//j
document.write("Value after decrement is: " + variable + "<br>");
//k
variable %= 3;
//l
document.write("The remainder is: " + variable + "<br>");


//Question No 4

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br>");

//Question No 5

document.write("Table of 4:<br>");
var tableNum = 4;

document.write(tableNum + " x 1 = " + (tableNum * 1) + "<br>");
document.write(tableNum + " x 2 = " + (tableNum * 2) + "<br>");
document.write(tableNum + " x 3 = " + (tableNum * 3) + "<br>");
document.write(tableNum + " x 4 = " + (tableNum * 4) + "<br>");
document.write(tableNum + " x 5 = " + (tableNum * 5) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 6) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 7) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 8) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 9) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 10) + "<br>");

//Question No 6

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");

//Question No 7

var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;

var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quantity + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quantity + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + totalCost + "<br>");

//Question No 8

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("h1>Marks Sheet</h1><br>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");

//Question No 9

var usdToPkr = 104.80;
var riyalToPkr = 28;
var usd = 10;
var riyal = 25;
var totalPkr = (usd * usdToPkr) + (riyal * riyalToPkr);
document.write("<h1>Currency in PKR</h1><br>");
document.write("Total currency in PKR: " + totalPkr + "<br>");

//Question No 10

var number = 5;
var result = ((number + 5) * 10) / 2;
document.write("Result of the operation is: " + result + "<br>");

//Question No 11

var currentYear = 2023;
var birthYear = 2000;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age: " + age + " years<br>");

//Question No 12

var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("<h1>The Geometrizer</h1><br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("Circumference of a circle: " + circumference.toFixed(2) + "<br>");
document.write("Area of a circle: " + area.toFixed(2) + "<br>");

//Question No 13

var favoriteSnack = "Chocolate Chip Cookies";
var currentAge = 15;
var maxAge = 65;
var estimatedAmountPerDay = 2;
var totalSnacks = (maxAge - currentAge) * 365 * estimatedAmountPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + estimatedAmountPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");


