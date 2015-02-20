'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	D2lHw = mongoose.model('D2lHw'),
	_ = require('lodash');

/**
 * Create a D2l hw
 */
exports.create = function(req, res) {
	var d2lHw = new D2lHw(req.body);
	d2lHw.user = req.user;

	d2lHw.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHw);
		}
	});
};

/**
 * Show the current D2l hw
 */
exports.read = function(req, res) {
	res.jsonp(req.d2lHw);
};

/**
 * Update a D2l hw
 */
exports.update = function(req, res) {
	var d2lHw = req.d2lHw ;

	d2lHw = _.extend(d2lHw , req.body);

	d2lHw.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHw);
		}
	});
};

/**
 * Delete an D2l hw
 */
exports.delete = function(req, res) {
	var d2lHw = req.d2lHw ;

	d2lHw.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHw);
		}
	});
};

/**
 * List of D2l hws
 */
exports.list = function(req, res) { 
	D2lHw.find().sort('-created').populate('user', 'displayName').exec(function(err, d2lHws) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(d2lHws);
		}
	});
};

/**
 * D2l hw middleware
 */
exports.d2lHwByID = function(req, res, next, id) { 
	D2lHw.findById(id).populate('user', 'displayName').exec(function(err, d2lHw) {
		if (err) return next(err);
		if (! d2lHw) return next(new Error('Failed to load D2l hw ' + id));
		req.d2lHw = d2lHw ;
		next();
	});
};

/**
 * D2l hw authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.d2lHw.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
