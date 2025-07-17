// Question No 1

var num1 = 5;

document.write("Result: <br>")
document.write("The value of a is: " + num1 + "<br>");

document.write("••••••••••••••••••••••••••••••••••<br>")

document.write("The value of ++a is: " + ++num1 + "<br>");
document.write("Now the value of a is: " + num1 + "<br>");

document.write("The value of a++ is: " + num1++ + "<br>");
document.write("Now the value of a is: " + num1 + "<br>");

document.write("The value of --a is: " + --num1 + "<br>");
document.write("Now the value of a is: " + num1 + "<br>");

document.write("The value of a-- is: " + num1-- + "<br>");
document.write("Now the value of a is: " + num1 + "<br>");

// Question No 2


var a = 2, b = 1;

var result = --a - --b + ++b + b--;
document.write("--a is: " + --a + "<br>");
document.write("--a - --b is: " + (--a - --b) + "<br>");
document.write("--a - --b + ++b is: " + (--a - --b + ++b) + "<br>");
document.write("--a - --b + ++b + b-- is: " + (--a - --b + ++b + b--) + "<br>");
document.write("Result is: " + result + "<br>");


// Question No 3

var userName = prompt("Enter your name:");
document.write("Hello " + userName + "! Welcome to our website.<br>");

// Question No 4


var tableNum = parseInt(prompt("Enter a number to display its multiplication table (default is 5):", "5"));
document.write("Multiplication Table of " + tableNum + ":<br>");

for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

// Question No 5


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;
var marks1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":"));
var marks2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":"));
var totalObtained = marks1 + marks2 + marks3;

var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td>" + (totalMarks * 3) + "</td><td>" + totalObtained + "</td></tr>");
document.write("<tr><td><strong>Percentage</strong></td><td colspan='2'> " + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");


