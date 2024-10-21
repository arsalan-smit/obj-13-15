var studentNames = [];
studentNames.push("Arsalan"); 

var studentNames = new Array();

var stringArray = ["apple", "banana", "cherry"];

var numbersArray = [10, 20, 30, 40];

var booleanArray = [true, false, true];

var mixedArray = ["apple", 25, true];

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications in Pakistan:</h2>");
for (var i = 0; i < qualifications.length; i++) {
  document.write(`${i+1}) ${qualifications[i]} <br>`);
}

var studentNames = ["Ali", "Arsalan", "Zain"];
var studentScores = [450, 420, 390];
var totalMarks = 500;
for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  document.write(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${percentage}%<br>`);
}


var colors = ["Red", "Green", "Blue"];
document.write(`Original colors: ${colors}<br>`);
// a. Add color to the beginning
var newColorBeginning = prompt("Enter color to add at the beginning:");
colors.unshift(newColorBeginning);
document.write(`After adding to the beginning: ${colors}<br>`);
// b. Add color to the end
var newColorEnd = prompt("Enter color to add at the end:");
colors.push(newColorEnd);
document.write(`After adding to the end: ${colors}<br>`);
// c. Add two colors to the beginning
colors.unshift("Purple", "Orange");
document.write(`After adding two to the beginning: ${colors}<br>`);
// d. Delete the first color
colors.shift();
document.write(`After deleting the first color: ${colors}<br>`);
// e. Delete the last color
colors.pop();
document.write(`After deleting the last color: ${colors}<br>`);
// f. Add color at a specific index
var indexToAdd = +prompt("At which index do you want to add a color?");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("After adding at index " + indexToAdd + ": " + colors + "<br>");
// g. Delete color at a specific index
var indexToDelete = +prompt("At which index do you want to delete color?");
var numOfColorsToDelete = +prompt("How many colors to delete?");
colors.splice(indexToDelete, numOfColorsToDelete);
document.write(`After deleting from index ${indexToDelete}: ${colors}<br>`);


var scores = [320, 230, 480, 120];
var orderScores =[120,230,320,480];
document.write(`Scores of student: ${scores}`);
document.write(`Order scores of student: ${orderScores}`);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.write("Cities List");
document.write(cities);
document.write("Selected cities List");
document.write(`Selected cities: ${selectedCities}`);

var arr = ["This ", "is ", "my ", "cat"];
var sentence = arr.join("");
document.write(`Array:<br>${arr}`);
document.write(`String:<br>${sentence}`);

var queue = [];
queue.push("keybord");
queue.push("Mouse");
queue.push("monitor");
queue.push("printer");
document.write(`Devices:<br>${queue}`)
document.write(`FIFO<br>out:<br>${queue[0]}<br>out:<br>${queue[1]}<br>out:<br>${queue[2]}<br>out:<br>${queue[3]}<br>`);

document.write(`Devices:<br>${queue}`);
document.write(`LIFO<br>out:<br>${queue[3]}<br>out:<br>${queue[2]}<br>out:<br>${queue[1]}<br>out:<br>${queue[0]}<br>`);

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write(`<option> ${manufacturers[i]}</option>`);
}
document.write("</select>");
