
/* 
<!-- JavaScript -->

1)undefined
undefined means “not assigned”

2)Null
null means “intentionally empty”.

3)functions And there types

In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. 
They can be assigned to variables, passed as arguments, and returned from other functions.


**1. Function Declaration (Function Statement)**
function greet(name) {
  return "Hello, " + name;
}


**2. Function Expression**
const greet = function(name) {
  return "Hello, " + name;
};


**3. Arrow Function (ES6)**
const greet = (name) => "Hello, " + name;


**4. Anonymous Function**
setTimeout(function() {
  console.log("Hello");
}, 1000);


**5. Named Function Expression**
const greet = function sayHello(name) {
  return "Hello, " + name;
};


**6. Constructor Function**
function Person(name) {
  this.name = name;
}
const john = new Person("John");


**7. Generator Function**
function* gen() {
  yield 1;
  yield 2;
}


**8. Async Function**
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  return response.json();
}
   





============================================================





**JavaScript Arrays and Their Types**

In JavaScript, arrays are used to store multiple values in a single variable. They are index-based and can hold items of any data type.


**1. Standard Array**
let colors = ["Red", "Green", "Blue"];
- A simple, index-based list of items.


**2. Multidimensional Array**
let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
- An array containing other arrays, often used for grids or tables.


**3. Sparse Array**
let sparse = [1, , 3];
console.log(sparse[1]); // undefined
- Contains “holes” or missing values.


**4. Array of Objects**  
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
- Useful for storing structured data like user profiles.


**5. Typed Arrays**
let buffer = new ArrayBuffer(8);
let int8View = new Int8Array(buffer);
- Used for handling binary data, commonly in graphics, games, or files.


**Common Array Methods**
let arr = [1, 2, 3, 4];

arr.push(5);        // Add to end
arr.pop();          // Remove from end
arr.shift();        // Remove from start
arr.unshift(0);     // Add to start
arr.map(x => x * 2); // Transform items
arr.filter(x => x > 2); // Filter elements

Arrays in JavaScript are versatile and powerful. Understanding the types and available methods helps write clean and efficient code.

====================

Object

In JavaScript, objects are collections of related data and/or functionality. These are stored as key-value pairs, where the keys are 
strings (called properties), and the values can be any data type — numbers, strings, arrays, functions, other objects, etc.

====================

What Is Hoisting?
Hoisting means that variable and function declarations are moved to the top of their scope (before code execution),
behind the scenes by JavaScript.

======================

Scoping is all about where in your code a variable or function can be seen or used.
Think of your code like a series of boxes inside other boxes. Each box represents a different scope:

1) Global Scope
Global Scope is like the big outer box. If you write a variable here, it can be used anywhere inside your program.

2) Function Scope
Function Scope is like a smaller box inside the global one. If you create a variable inside a function, only that 
function can see or use it.

3) Block Scope
Block Scope is even smaller—like a box inside a function or a loop or an if statement. If you use let or const to 
declare a variable inside curly braces {}, that variable stays in that block and can’t be used outside.

4) Lexical Scope
Lexical Scope means that when you write a function inside another function, the inner function can see and use the 
variables from the outer one. It's like the inner box can peek outside to see what's in the bigger box.


=======================================

What is promise

A Promise is a way to handle asynchronous tasks in JavaScript.
It acts as a placeholder for a value that will be available in the future—either a success (resolved) or a failure (rejected).

A Promise can be in three states:
pending – It’s still working on it.
fulfilled – It succeeded and gave a result.
rejected – Something went wrong.

=========================================



*/
