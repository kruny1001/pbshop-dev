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

    gskb.find({}, {genes:1, genesSym:1})
        .exec(function(err, gskbs) {
    if (err) {
        return res.send(400, {
            message: getErrorMessage(err)
        });
    } else {
        res.jsonp(gskbs);
    }

    });

};

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
