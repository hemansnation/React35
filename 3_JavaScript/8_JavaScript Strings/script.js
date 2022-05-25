// // Array
// // find

// var june = [
//     {id:1, name:"Yash"},
//     {id:2, name:"Rama"},
//     {id:3, name:"jay"},
//     {id:4, name:"raj"},
// ]

// var y = june.find(i => i.id == 2)

// console.log(y);

// // filter

// var t = june.filter(j => j.id >= 2)

// console.log(t);


// alert(Array.isArray(june))

// Strings

var s = "indore" + 10

console.log(s);

// template literals

var t = `this is indore 

and ${s}`

console.log(t);

console.log(typeof t);


// length

var a = "india is the best"

// alert(a.length);


// alert(a[0]);


// charAt

console.log(a.charAt(5)); // work on index


// for loop

// var h = "india"
// //       01

// for (i of h){
//     console.log(i);
// }

// h[1] = "A"  // immutable

// 1 + 1 = 2

// 1 = 2

// h = "goa"

// console.log(h);


// question

// restart
// resta$t

// levell
// leve$$


// upper and lower case

var f = "indiA"

console.log(f.toUpperCase());

console.log(f.toLowerCase());

// indexOf

var st = "this is an apple this"

// alert(st.indexOf("h"));// 1

// alert(st.indexOf("this"));  // 0
// alert(st.indexOf("an"));  // 8

// alert(st.indexOf("this", 2));

console.log(st.indexOf("i", 10));

// includes

console.log(st.includes("apple"));



// slice

var x = "this is may"

console.log(x.slice(1,5));


console.log(x.slice(0,1));


console.log(x.slice(3));


// codePointAt

// A --> 65
// B --> 66

// Z --> 90

// a --> 97
// z --> 122

console.log("A".codePointAt(0));

var y = "indore"

console.log(y.codePointAt(2));

console.log(String.fromCodePoint(90));


// split

var d = "indore"

console.log(d.split(""));

var str = "this is an apple"

console.log(str.split(" "));

// wap to reverse a string word by word
"this is an apple"
"apple an is this"
