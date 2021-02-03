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



// Loop //
// for(let i = 0; i < 10; i++)
//    console.log(i);