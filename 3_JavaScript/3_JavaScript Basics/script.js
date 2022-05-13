console.log("Hello from external JS");

// variables

var a = 10;

console.log(a);

var b = 10.5;

console.log(b);

var s = "Indore";

console.log(s);

console.log(a + b);

// operators

// 1. Arithmatic O.
// + - * / %  **

console.log(7 % 2);

console.log(2 ** 3);

// 2. Relational O.

// > < >= <= != == ===

console.log(10 > 20);

console.log(10 != 10);

//equality
console.log(10 == 10);

//strict equality
console.log(10 === '10'); // value and type

// 3. Boolean O,
// true false

// 4. Assignment O.
// = 
// += , -= , *= , /= , %= , **=

// var x = 10;
// x += 5;        // x = x + 5

// console.log(x);

var x = 10;
x /= 5;        // x = x / 5

console.log(x);


// 5. ternary O.

//     ?      :

var y = 5 > 2 ? "A" : "B"

console.log( y );

// var t = 10 > 20 ? alert("10 is greater") : alert("20 is greater");

// var c = document.getElementById('one').innerHTML

// console.log(c);


document.getElementById('one').innerHTML = "Hi Indore";