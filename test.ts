console.log('hi')

class Test {}
var t = new Test();

function greeter(person: string){
    return "Hello, " + person;
}

var user = [0,1,2];

var result = greeter(user);
console.log(result);

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person){
    return "Hello, "+ person.firstname + " " + person.lastname;
}

var user = {firstname: "Jane", lastname:"User"};
var result2 = greeter(user);
console.log(result2);

class Student{
    fullname: string;
    constructor(public firstname, public middleinitial, public lastname){
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person:Person){
    return "Hello, "+person.firstname + " " + person.lastname;
}

var user = new Student("Jane", "M.", "User");
var result3 = greeter(user);
console.log(user.fullname);
console.log(result3);
