'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	D2lHwsSubmit = mongoose.model('D2lHwsSubmit'),
	_ = require('lodash');

/**
 * Create a D2l hws submit
 */
exports.create = function(req, res) {
	var d2lHwsSubmit = new D2lHwsSubmit(req.body);
	//d2lHwsSubmit.user = req.user;

	d2lHwsSubmit.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHwsSubmit);
		}
	});
};

/**
 * Show the current D2l hws submit
 */
exports.read = function(req, res) {
	res.jsonp(req.d2lHwsSubmit);
};

/**
 * Update a D2l hws submit
 */
exports.update = function(req, res) {
	var d2lHwsSubmit = req.d2lHwsSubmit ;

	d2lHwsSubmit = _.extend(d2lHwsSubmit , req.body);

	d2lHwsSubmit.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHwsSubmit);
		}
	});
};

/**
 * Delete an D2l hws submit
 */
exports.delete = function(req, res) {
	var d2lHwsSubmit = req.d2lHwsSubmit ;

	d2lHwsSubmit.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHwsSubmit);
		}
	});
};

/**
 * List of D2l hws submits
 */
exports.list = function(req, res) { 
	D2lHwsSubmit.find().sort('-created').populate('user', 'displayName').exec(function(err, d2lHwsSubmits) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHwsSubmits);
		}
	});
};

/**
 * D2l hws submit middleware
 */
exports.d2lHwsSubmitByID = function(req, res, next, id) { 
	D2lHwsSubmit.findById(id).populate('user').populate('class').exec(function(err, d2lHwsSubmit) {
		if (err) return next(err);
		if (! d2lHwsSubmit) return next(new Error('Failed to load D2l hws submit ' + id));
		req.d2lHwsSubmit = d2lHwsSubmit ;
		next();
	});
};

/**
 * D2l hws submit authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.d2lHwsSubmit.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};

exports.getSubmitInfo = function(req, res){
	D2lHwsSubmit.find({originId: req.params.docId, userEmail: req.params.userEmail}).exec(function(err, d2lHwsSubmit){
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHwsSubmit);
		}
	});
}

exports.getSubmitInfoGS = function(req, res){
	D2lHwsSubmit.find({docId: req.params.docId}).populate('class', 'user').exec(function(err, d2lHwsSubmit){
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHwsSubmit);
		}
	});
}
