/**
 * Created by kruny1001 on 1/23/15.
 */

var test1 = require('./test1');
var _ = require('lodash');

var person = {
    name: 'dd',
    age: 12
} //JSON

var person2 = {
    name: 'aa',
    age: 22
} //JSON

var people = []; //array

people.push(person);
people.push(person2);

people.forEach(function(value) {
    console.log(value);
})

console.log(people.length);

console.log(people[0].name, people[0].age);

test1.printPeople(people);
var a1 = [1,2,3];
var a2 = [1,3,5];
console.log(_.difference(a1, a2));
