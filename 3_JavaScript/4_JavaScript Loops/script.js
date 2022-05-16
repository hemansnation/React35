// while loops

// var i = 1;

// while (i <= 5) {
//     console.log(i);
//     i += 1;  // i = i + 1
// }


// user input
// var a = prompt("Enter your name: ");

// console.log(a);


// wap to enter a number from user and print reverse of it.
// 153 
// 351

// wap to enter a number from user and print sum of its individual digits.
// 153 => 9

// wap to enter a number from user and print its individual digits on seperate line.


// data types

console.log(typeof 10);  // number
console.log(typeof "10"); // string

console.log(typeof '10'); // string

console.log(typeof 10.5); // number

console.log(typeof "A"); // string

console.log(typeof "India"); // string

console.log(typeof 0); // number

console.log(typeof 1); // number

console.log(typeof true); // boolean


// floor division

7 // 2 --> 3.5 -> 3 

var n = Math.floor(7/2);
console.log(n);


// do while

// var i = 1;

// do{
//     console.log(i);
//     i += 1;
// }while (i <= 7);


// for loop

// increment operator
// ++a  ==> a = a + 1

// decrement operator
// --a --> a = a - 1


for (var a = 2 ; a <= 5 ; a++ ) {
    console.log(a);
}

s = ""

for (var j = 1; j <= 5; j++) {
    s = s + "<h1>Hello " + j + "</h1>"
    //  <h1>Hello 1 </h1> + <h1>Hello 2 </h1> + <h1>Hello 3 </h1>
}

document.getElementById('division').innerHTML = s;

// function


// definition of a function
function book(){
    alert("Hello from function book");

    console.log("hi function");
}

book(); // calling of a function

