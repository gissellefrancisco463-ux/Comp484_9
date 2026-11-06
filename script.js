// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"
var date = new Date();
var month = date.getMonth() + 1;
if (month < 10){
    month = "0" + month;
}

var day = date.getDate();
if(day < 10){
    day = "0" + day;
}

var year = date.getFullYear();

document.getElementById("dateOutput").textContent = "Today is " + month +"/"+ day + "/" + year;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
var numericString1 = "12";
var numericString2 = "20";
var decimalString = "26.96";
var nonnumericString = "Hiiiiiiii";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
var converted1 = Number(numericString1);
var isNaN1 = Number.isNaN(converted1);
var isInteger1 = Number.isInteger(converted1);

var converted2 = Number(numericString2);
var isNaN2 = Number.isNaN(converted2);
var isInteger2= Number.isInteger(converted2);

var converted3 = Number(decimalString);
var isNaN3 = Number.isNaN(converted3);
var isInteger3= Number.isInteger(converted3);

var converted4 = Number(nonnumericString);
var isNaN4= Number.isNaN(converted4);
var isInteger4= Number.isInteger(converted4);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"
var result1 = "<p>Original: ' " + numericString1 + "' → Converted: " + converted1 + "→ isNaN: " + isNaN1 + "→ isInteger: " + isInteger1 + "</p>";
var result2 = "<p>Original: ' " + numericString2 + "' → Converted: " + converted2+ "→ isNaN: " + isNaN2 + "→ isInteger: " + isInteger2 + "</p>";
var result3 = "<p>Original: ' " + decimalString + "' → Converted: " + converted3 + "→ isNaN: " + isNaN3 + "→ isInteger: " + isInteger3 + "</p>";
var result4 = "<p>Original: ' " + nonnumericString+ "' → Converted: " + converted4 + "→ isNaN: " + isNaN4 + "→ isInteger: " + isInteger4 + "</p>";

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
var allResults = result1 + result2 + result3 + result4;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = allResults; 

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
// Week 9: Slide 29 and 33
//camelCase is a common JS naming convention
//keep the first word lowercase and capitalize each following word

//var is used as a container to store whatever data we want but in this case we want to store numeric data
//Numeric variables we don't use quotation marks
//Putting quotation marks around these values would make them strings
var itemPrice = 40;
var taxRate = 0.07;
var shippingCost = 10;

//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
var subtotal = itemPrice; //price before tax and shipping
var taxAmount = itemPrice * taxRate; //Tax amount
var totalCost = itemPrice + taxAmount + shippingCost; //price after tax and shipping cost

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//Formatted the total with exactly two decial places
var formattedTotal = totalCost.toFixed(2)


// 4. Build a string showing your results
var mathResults = "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" + "<p>Tax amount: " + taxAmount.toFixed(2) + "</p>" + "<p>Total cost: $" + totalCost.toFixed(2);
//
// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

//1. Check whether the converted value is NaN
if(Number.isNaN(converted4)){
    document.getElementById("numberConversionOutput").innerHTML += "<p>The text '" + nonnumericString + "' cannot be converted into a number.</p>";
}else{
    document.getElementById("numberConversionOutput").innerHTML += "<p>The value was successfully converted in a number.</p>"
}

//2. Check whether the total was greater than 50

if(totalCost > 50){
    document.getElementById("mathOutput").innerHTML +="<p>Your total is over $50.</p>"
}else{
    document.getElementById("mathOutput").innerHTML +="<p>Your total is $50 or less.</p>"

}