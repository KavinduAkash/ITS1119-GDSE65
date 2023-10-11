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
console.log(subject);
console.log(max);

// JS data types

var x = 10; // number
x = "Hello"; // string
x = true; // boolean
x = null; // object
x = undefined; // undefined
x = Symbol("foo"); // symbol
x = BigInt("1231231231231"); // bigint
x = {}; // object
x = []; // object
x = function () {}; // function