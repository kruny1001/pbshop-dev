/**
 * Created by kruny1001 on 1/21/15.
 */

var opencpu = require("opencpu");

opencpu.rCall("/library/datasets/R/mtcars/json", {}, function (err, data) {
    if (!err) {
        console.log(data.mpg[0] + data.mpg[1]); // => 42
    } else {
        console.log("opencpu call failed.");
    }
});

opencpu.rCall("/library/stats/R/rnorm/json", {
    n: 42,
    mean: 10,
    sd: 10
}, function (err, data) {
    if (!err) {
        console.log(data.length); // => 42
    } else {
        console.log("opencpu call failed.");
    }
});
