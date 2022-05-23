// array

var a = [1,2,3,"A"]
//       0 1 2  3

console.log(a);
console.log(typeof a);

var arr = new Array(10,20,30);

console.log(arr);
console.log(typeof arr);

console.log(a[-1]); // undefined

a[2] = 100;

console.log(a);

a[9] = 500;

console.log(a);
console.log(a[6]);


var arr1 = [
    "orange",
    true,
    { name: "dev" },
    function(){ alert("Hello"); },
]

console.log(arr1[2].name);

// arr1[3]();

// stack - LIFO

// int a = 10;
// struct student s1;
// struct student{
//     int a = 10
//     float per;
//     char name[10]
// }

var jan = ['orange', 'apple', 'banana']

jan.push("car");

// alert(jan);

console.log(jan.pop());

// alert(jan);


// queue = FIFO

var feb = ['orange', 'apple', 'banana']

// feb.shift();

// alert(feb);

// // feb.unshift("holi");

// alert(feb);

// for loop

var mar = ['orange', 'apple', 'banana','june']

// for(var i = 0; i < mar.length; i++){
//     alert(mar[i]);
// }

for (var y in mar){
    console.log(y);
}

for (var y of mar){
    console.log(y);
}

// nested array

var mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(mat[1][2]);

// splice

var april = ['orange', 'apple', 'banana','june']

// april.splice(1,2);

// alert(april);

april.splice(0,0,"lets", "indore");

// alert(april);

// slice
//                                 -2      -1
var may = ['orange', 'apple', 'banana','june']

// alert(may.slice(1,3));
// alert(may.slice(2));
// alert(may.slice(-2));

// concat

var x = [1,2]

var y = [3,4]

alert(x.concat(y));
console.log(x);
console.log(y);



