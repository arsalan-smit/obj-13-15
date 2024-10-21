var char = prompt("enter the character");
if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
    alert("The input is a number.");
} else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    alert("The input is an uppercase letter.");
} else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("Invalid input.");
}

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both numbers are equal.");
}

var number = +prompt("Enter a number");
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

var char = prompt("Enter a character (1 letter):").toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    alert("True, it is a vowel.");
} else {
    alert("False, it is not a vowel.");
}

var correctPassword = "mypassword"; // Store correct password
var inputPassword = prompt("Enter your password:");
if (inputPassword === "") {
    alert("Please enter your password");
} else if (inputPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7pm)");
if (time >= 0 && time < 1200) {
    alert("Good morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night");
} else {
    alert("Invalid time format");
}






