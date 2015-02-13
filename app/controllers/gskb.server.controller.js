/**
 * Created by kruny1001 on 1/21/15.
 */

var mongoose = require('mongoose'),
    gskb = mongoose.model('gskb'),
    _ = require('lodash');
var ObjectId = require('mongoose').Types.ObjectId;

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
    var message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'GSKB record already exists';
                break;
            default:
                message = 'Something went wrong(GSKB)';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

/**
 * List of Products
 */
exports.list = function(req, res) {
    gskb.find({}, {paperTitle:1, genesArr:1}).limit(10)
        .exec(function(err, gskbs) {
            if (err) {
                return res.send(400, {
                    message: getErrorMessage(err)
                });
            } else {
                res.jsonp(gskbs);
            }
        }
    );
};

exports.indexQuery = function(req, res) {
	gskb.find()
		.where('genesArr').in(["AT2G14610", "AT4G23150"])
		.select('_id paperTitle genesArr')
		//.limit(15)
		.exec(function(err, gskbs){
			if (err) {
				return res.send(400, {
					message: getErrorMessage(err)
				});
			} else {
				res.jsonp(gskbs);
			}
		})

}

exports.getTotalbyKeyword = function(req, res){
    var o ={};
    o.map = function() {
        emit(this.year, 1)
    }
    o.reduce = function(k, vals){
        //console.log(vals);
        return Array.sum(vals);
    }
    o.verbose = true;
    o.out = { replace: 'createdCollectionNameForResults' }
    // promise version of mapreduce

    var promise = gskb.mapReduce(o);
    promise.then(function (model, stats) {
        console.log('map reduce took %d ms', stats.processtime);
        return model.find().where('value').gt(1).exec();
    }).then(function (docs) {
        /*
        var count = 0;
        docs.forEach(function(result){
            count += result.value;
        });
        */
        res.jsonp(docs);
        //console.log(docs);
        //console.log('total docs are: ', count);
    }).then(null, handleError).end();

    function handleError(){console.log("error")}
}

exports.queryIndex = function(req, res, next, id){

}

/**
 * Product middleware

exports.gskbByID = function(req, res, next, id) {
    GSKB.findById(id).populate('user', 'displayName').exec(function(err, product) {
        if (err) return next(err);
        if (!product) return next(new Error('Failed to load GSKB ' + id));
        req.product = product;
        next();
    });
};
 */
