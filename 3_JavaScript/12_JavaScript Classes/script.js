// class

// class Person{
//     //
// }

// const p1 = new Person()

// console.log(p1);

// constructor

class Person{

    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
}

const p2 = new Person("Piyush", "Jain")

console.log(p2);

console.log(p2.firstname);

const p3 = new Person("Oj", "SK")
const p4 = new Person("Rahul", "Sharma")

console.log(p3);
console.log(p4);

// default values


// class PersonOne{

//     constructor(firstname = 'Indore', lastname='MP'){
//         this.firstname = firstname
//         this.lastname = lastname
//     }
// }

// const p = new PersonOne()

// console.log(p);

// methods


// class PersonOne{

//     constructor(firstname = 'Indore', lastname='MP'){
//         this.firstname = firstname
//         this.lastname = lastname
//     }

//     getFullName(){
//         const fullname = this.firstname + " " + this.lastname

//         return fullname
//     }
// }

// const p = new PersonOne("Jayesh", "Nagar")

// console.log(p.getFullName());

// getter and setter method


class PersonOne{

    constructor(firstname = 'Indore', lastname='MP'){
        this.firstname = firstname
        this.lastname = lastname
        this.score = 0
        this.skills = []
    }

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skills
    }

    set setScore(score){
        this.score += score
    }

    set setSkills(skill){
        this.skills.push(skill)
    }

    getFullName(){
        const fullname = this.firstname + " " + this.lastname

        return fullname
    }
}

const p = new PersonOne("Jayesh", "Nagar")

console.log(p.getFullName());

console.log(p.getScore);  // no need to use paranthasis

console.log(p.getSkills);

p.setScore = 2  //setScore(2)

p.setSkills = 'HTML'

console.log(p.getScore);  // no need to use paranthasis

console.log(p.getSkills);


// inheritance

class Paytm extends PersonOne {
    saySomething(){
        console.log("Hello from Paytm");
    }
}

const upi = new Paytm("himanshu","rama")

upi.saySomething()

console.log(upi.getFullName());

