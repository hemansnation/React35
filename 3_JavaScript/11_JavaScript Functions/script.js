// functions
function indore(){
    let y = 10;
    console.log(y);
    return y + 5;
}

console.log(indore()); // 15

let a = indore();

console.log(a);

// function expression

let alpha = function(){
    let y = 10;
    console.log(y);
    return y + 10;
}

console.log(alpha());

console.log(alpha);

console.log(typeof alpha);  //function

// function expresion with arguments 

let beta = function(a,b){
    let y = 10;
    console.log(y);
    return a + b;
}

let f = beta(10,20);

console.log(f);


// single line arrow function

let dog = (x,y) => x + y;

console.log(dog(5,7));

// single line arrow funtion without arguments

let cat = () => console.log("Hello from arrow function");

cat();


// single argument
let bat = n => n * n;

console.log(bat(5));


let age = prompt("Enter your age");

let welcome = (age >= 18) ? () => alert("Hello") : () => alert("Bye");

welcome();

// multi line arrow function

let yellow = () => {
    let r = 10;
    console.log(r + 45);
    return r + 1;
}

yellow();

console.log(yellow());

// hakerrank

// eulers project
