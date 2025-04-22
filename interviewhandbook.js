
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
Hoisting means that variable and function declarations are moved to the top of their scope (before code execution), behind the scenes by JavaScript.





*/
