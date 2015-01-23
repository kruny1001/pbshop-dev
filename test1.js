/**
 * Created by kruny1001 on 1/23/15.
 */

console.log('test1');

exports.printPeople = function(obj){
    obj.forEach(function(val){
        console.log(val);
    })
}
