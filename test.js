console.log('hi');
var Test = (function () {
    function Test() {
    }
    return Test;
})();
var t = new Test();
function greeter(person) {
    return "Hello, " + person;
}
var user = [0, 1, 2];
var result = greeter(user);
console.log(result);
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Jane", lastname: "User" };
var result2 = greeter(user);
console.log(result2);
var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = new Student("Jane", "M.", "User");
var result3 = greeter(user);
console.log(user.fullname);
console.log(result3);
//# sourceMappingURL=test.js.map