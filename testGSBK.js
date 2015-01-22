/**
 * Created by kruny1001 on 1/21/15.
 */


var mongoose = require('mongoose')

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


gskb.find(function (err, gskbs) {
    if (err) return console.error(err);
    console.log(gskbs);
})

console.log('query');
