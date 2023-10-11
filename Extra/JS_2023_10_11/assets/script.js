// console

// console.log("Hello!");
// console.error("Hello2!");
// console.table({name: "Kavindu", age: 28});
// console.clear();


// create variables
/* variable declarations
    1) var
    2) let
    3) const
 */

var name = "Kavindu";
var isAllowed = true;
var age = 28;
var score = 90.8;

console.log(typeof name);
name = 10;

let a = "hello";
let b = 10;
let c = true;

b = 200;

const z = 100;

{
    var school = "ijse";
    let subject = "SE";
    const max = 100;
    console.log(school);
    console.log(subject);
    console.log(max);
}

console.log(school);
// console.log(subject);
// console.log(max);

// JS data types

// var x = 10; // number
// x = "Hello"; // string
// x = true; // boolean
// x = null; // object
// x = undefined; // undefined
// x = Symbol("foo"); // symbol
// x = BigInt("1231231231231"); // bigint
// x = {}; // object
// x = []; // object
// x = function () {}; // function

// String methods

var myword = "hello";
/*
* h - 0
* e - 1
* l - 2
* l - 3
* o - 4
* */

console.log(myword.charAt(1)); // Returns the character at a specified index in a string.

console.log(myword.charCodeAt(1)); // Returns the Unicode of the character at a specified index in a string.

var x1 = "ijse";
var x2 = "student";
x1.concat(x2); // 'ijsestudent' - Combines two or more strings
var x3 = "protal";
x1.concat(x2, x3); // 'ijsestudentprotal'

var x3 = "hello world!";
x3.endsWith("d!"); // true - Checks whether a string ends with specified characters.

String.fromCharCode(101); // 'e' - Converts Unicode values into characters.

x3.includes("hello"); // true - Checks whether a string contains the specified substring.

x3.indexOf("wo"); // 5 - Returns the index of the first occurrence of a specified value in a string.

x3.lastIndexOf("wo"); // 11 - Returns the index of the last occurrence of a specified value in a string.

'helloworld!world!'
x3.split(""); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', '!', 'w', 'o', 'r', 'l', 'd', '!']
x3 = "hello,world,student";
x3.split(","); // ['hello', 'world', 'student']

var x4 = "HelloIjse";
x4.toLowerCase(); // 'helloijse' Converts a string to lowercase.
x4.toUpperCase(); // 'HELLOIJSE' Converts a string to uppercase.


// if conditions in JS
var max = 91;
if(max > 90) {
    console.log("Win");
} else {
    console.log("Sorry");
}

var mark = 70;

// >= 75 -> A
// >= 65 -> B
// >= 50 -> C
// < 50 -> F

if(mark>=75) {
    console.log("A");
} else if(mark>=65) {
    console.log("B");
} else if(mark>=50) {
    console.log("c");
} else {
    console.log("F");
}


