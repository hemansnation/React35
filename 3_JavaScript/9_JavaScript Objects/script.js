// objects

// json

// {
//     name: "viraj",
//     age: 21
// }


var student = {
    name: "Virat",
    age: 21,
    city: "Indore"
}


console.log(student);

console.log(typeof student);

// class

// c

// int a = 10; // 2 bytes

// struct student {
//     int rollno;
//     char name[10];
//     float per;
// }

// struct student s; // 16 bytes

// class

// TV == class
// - wifi
// - blutooth
// - hdmi
// - alexa

// actual TV == object
// - product id

// remote  == reference

// var hello = { }

var person1 = {
    firstname: "Rahul",
    lastname: "jain",
    age: 21
}

// hashcode - id - virtual code

var person2 = {
    firstname: "Vishal",
    lastname: "jain",
    age: 23
}

console.log(person1 == person2);

console.log(person1 === person2);

// object class
console.log(Object.is(person1, person2));

// function constructor

function Person(firstname, lastname) {

    this.x = firstname
    this.y = lastname
    this.age = 18
    console.log(this);

}

// this - represents current object

var p1 = new Person("Punit", "Garg");
var p2 = new Person("Piyush", "Jain");

// console.log(p1);
// console.log(p2);

// console.log(x);
console.log(p1.x);
console.log(p2.x);




