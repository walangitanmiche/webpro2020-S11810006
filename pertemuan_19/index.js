console.log("Javacrips Class & OOP");


//Class & Construct
// const Person ={
//     firstName: "Michelle",
//     lastName: "Walangitan",
//     displayFullName: function() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     },
// };
// Person.displayFullName();

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const Person1 = new Person("Michelle", "Walangitan");
Person1.displayFullName();
const Person2 = new Person("Isrel", "Tumatar");
// Person2.displayFullName();

//Inheritance

class Student extends Person{
    constructor(firstName, lastName, Grade){
        super(firstName, lastName);
        this.Grade = Grade;
    }
    //Static Member
    static sayHello(){
        console.log(`Hello World`)
    }
    
    displayGrade(){
        console.log(`Hello ${this.firstName}, Your Grade is ${this.Grade}`);
    }
    //Setter & Getter
    set studentScore(score){
        this.score = score;
    }
    get studentScore(){
        return this.score;
    }
}

const Isrel = new Student ("Isrel", "Tumatar", "C");
Isrel.displayFullName();
Isrel.displayGrade();
Student.sayHello();

Isrel.studentScore = 13;
console.log(Isrel.studentScore);

