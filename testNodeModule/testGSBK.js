/**
 * Created by kruny1001 on 1/21/15.
 */


var mongoose = require('mongoose');
var _ = require('lodash');

mongoose.connect('mongodb://localhost/mean-dev');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GskbSchema = new Schema({
    label: {
        type: String,
        default: ''
    },

    species:{
        type: String,
        required: ''
    },
    source:{
        type: String,
        default: ''
    },
    regType:{
        type: String,
        default: ''
    },
    chip:{
        type: String,
        default: ''
    },
    detailsUrl:{
        type: String,
        default: ''
    },
    nGenes:{
        type: Number,
        default:0
    },
    descriptionBrief: {
        type: String,
        default:''
    },
    descriptionFull: {
        type: String,
        default:''
    },
    pubmed: {
        type: String,
        default:''
    },
    firstAuthor: {
        type: String,
        default:''
    },
    paperTtitle: {
        type: String,
        default:''
    },
    year: {
        type: Number,
        default:0
    },
    citation: {
        type: String,
        default:''
    },
    comment: {
        type: String,
        default:''
    },
    genes: {
        type: String,
        default:''
    },
    genesSym: {
        type: String,
        default:''
    }}
);

mongoose.model('gskb', GskbSchema, 'gskb');

gskb = mongoose.model('gskb');


var o ={};
o.map = function() {
    emit(this.source, 1)
}
o.reduce = function(k, vals){
    //console.log(vals);
    return Array.sum(vals);
}
//o.out = { replace: 'totalNumofDocSortedByYear' };
o.verbose = true;
o.out = { replace: 'createdCollectionNameForResults' }

/*
//normal way to mapreduce
gskb.mapReduce(o, function(err, results, stats){
    console.log('map reduce took %d ms', stats.processtime)
    results.find().where('value').gt(500).exec(function (err, docs) {
        console.log(docs);
    });
    //console.log(results)
})
*/

// promise version of mapreduce
var promise = gskb.mapReduce(o);
promise.then(function (model, stats) {
    console.log('map reduce took %d ms', stats.processtime)
    return model.find().where('value').gt(1).exec();
}).then(function (docs) {
    var count = 0;
    docs.forEach(function(result){
        count += result.value;
    });
    console.log(docs);
    console.log('total docs are: ', count);
}).then(null, handleError).end()


function handleError(){console.log("error")}

/*
gskb.find({year:2008}, {genes:1, genesSym:1})//.limit(2)
    .exec(function(err, gskbs) {
        if (err) {
            console.log('error');
        } else {
            //console.log(gskbs);
            count(gskbs);
            //processData(gskbs);

        }
    });
*/

function count(result){
    console.log(result.length);
    console.log(result[result.length-1]);
}

function processData(input){
    console.log(input.length);
    console.log(input);
    //console.log(input[0].genesSym);
    console.log('\n');
    var string0 = input[0].genesSym.split(',');
    var string1 = input[1].genesSym.split(',')
    console.log(string0.length);
    console.log(string1.length);

    var test1 = [1,2,3,4];
    var test2 = [1,3,3,7];
    var lengthDiff = _.difference(string0, string1).length

    console.log(_.difference(string0, string1));
    console.log(_.difference(string1, string0));

    console.log(lengthDiff);
    console.log(_.difference(test1, test2));

    // make them array
    // I can find out what is the difference
}

