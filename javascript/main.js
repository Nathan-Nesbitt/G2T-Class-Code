/**
 * This is my separate JS file which will be loaded in!
 */

console.log("Woah! This is the main.js file!");

// Regular Variable //
var box = "Contents of my box!";
console.log(box);

// Variable that does not change (Constant) //
const non_changing_box = "This box does not change!"; 
// non_changing_box = "Woah new box value"; // This would result in an error!
console.log(non_changing_box);

// Scoped variable //
let x = 10;

/* Operators */

var num = 10;
// Arthmetic Operators
console.log(num + 10);  // Addition
console.log(num - 10);  // Subtraction
console.log(num * 10);  // Multiplication
console.log(num / 10);  // Division
console.log(num ** 10); // Power
console.log(num % 3);   // Modulo

// Assignment Operators

num = num + 1;  // Increment num by 1
num += 1;       // Increment num by 1
num++;          // Increment num by 1

num = num - 1;  // Decrements num by 1
num -= 1;       // Decrements num by 1
num--;          // Decrements num by 1

num = num * 2;  // Multiply num by 2
num *= 2;       // Multiply num by 2

// Comparison Operators //
num = 10;

console.log(num === 10);
console.log(num !== 29);
console.log(num > 10);
console.log(num < 10);
console.log(num >= 10);
console.log(num <= 10);

// Logical Operators //
console.log(true && true); // AND 
console.log(true && false); // AND 
console.log(10 === 10 && 10 % 2 === 1); // AND 

var nathan = "cool";
var todd = "old";

console.log(nathan == "cool" && todd == "supercool"); // AND

console.log(nathan == "cool" || todd == "old"); // OR
console.log(nathan == "cool" || todd == "has swag"); // OR
console.log(num === 10 || num % 2 === 1); // OR

console.log(!false);
console.log(!true);
console.log(!num);

/* Datatypes */

console.log(10 === "10");

console.log(typeof 10)          // Number
console.log(typeof "10")        // String
console.log(typeof 1.4444)      // Number :,(
console.log(typeof true)        // Boolean
console.log(typeof Number)      // Function
console.log(typeof document)    // Object
console.log(typeof num)         // Number


/* Conditional Statements (if / else if / else) */

var nathan_age = 2222222;

if(nathan_age < 16)
    console.log("You are not allowed to drive or vote! Your age is " + nathan_age);
else if(nathan_age < 18)
    console.log("You are allowed to drive but not vote! Your age is " + nathan_age);
else if(nathan_age < 21)
    console.log("You are allowed to drive and vote and you are happy! Your age is " + nathan_age)
else
    console.log("You are an old man and berry sad! Enjoy your pension. Your age is " + nathan_age)

if(nathan_age % 2 === 0)
    console.log("Nathan's age is even!")
else
    console.log("Nathan's age is odd!")

/* Loops */

// While Loop //
var increment = 0; // Counter
while(increment < 10) { // Check
    console.log("I'm gonna crash")
    increment++; // Increment
}
    
// For Loop //
// ( Counter ; Check ; Increment ) 
for(let i = 0; i < 10; i++)
    console.log("I'm gonna crash")


/* Arrays */
var shopping_list = [];

// Adding items to an array //
shopping_list.push("Oranges");
shopping_list.push("Apples");
shopping_list.push("A large snake called a python");
shopping_list.push("A new tesla car");
shopping_list.push("Bananas");
shopping_list.push("Manga");
shopping_list.push("PS5");
shopping_list.push("Gamestop Stocks");
shopping_list.push("Doritos");
shopping_list.push("My Crush");
shopping_list.push("A Hat");
shopping_list.push("A graphics card");

console.log(shopping_list)

// Getting items from an array 
var top_item = shopping_list[0];
console.log(top_item)
console.log(shopping_list[1]);
console.log(shopping_list[2]);

// Looping through an array //
for(let i = 0; i < shopping_list.length; i++) {
    document.write("<p>Item: " + i + " in our shoppinglist is " + shopping_list[i] + "</p>");
}

/* Functions */
var add_element = function(array, element) {
    array.push(element);
}

var empty_array = [];

add_element(empty_array, "Pork");
add_element(empty_array, "Cheese");
add_element(empty_array, "Legumes");
add_element(empty_array, "Forks");

console.log(empty_array);

var print_list = function(array) {
    for(let i = 0; i < array.length; i++) {
        document.write("<p>Item: " + i + " in our empty array is " + array[i] + "</p>");
    }
}

print_list(empty_array);
print_list(shopping_list);