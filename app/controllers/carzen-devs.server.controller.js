'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	CarzenDev = mongoose.model('CarzenDev'),
	_ = require('lodash');

/**
 * Create a Carzen dev
 */
exports.create = function(req, res) {
	var carzenDev = new CarzenDev(req.body);
	carzenDev.user = req.user;

	carzenDev.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(carzenDev);
		}
	});
};

/**
 * Show the current Carzen dev
 */
exports.read = function(req, res) {
	res.jsonp(req.carzenDev);
};

/**
 * Update a Carzen dev
 */
exports.update = function(req, res) {
	var carzenDev = req.carzenDev ;

	carzenDev = _.extend(carzenDev , req.body);

	carzenDev.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(carzenDev);
		}
	});
};

/**
 * Delete an Carzen dev
 */
exports.delete = function(req, res) {
	var carzenDev = req.carzenDev ;

	carzenDev.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(carzenDev);
		}
	});
};

/**
 * List of Carzen devs
 */
exports.list = function(req, res) { 
	CarzenDev.find().sort('-created').populate('user', 'displayName').exec(function(err, carzenDevs) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(carzenDevs);
		}
	});
};

/**
 * Carzen dev middleware
 */
exports.carzenDevByID = function(req, res, next, id) { 
	CarzenDev.findById(id).populate('user', 'displayName').exec(function(err, carzenDev) {
		if (err) return next(err);
		if (! carzenDev) return next(new Error('Failed to load Carzen dev ' + id));
		req.carzenDev = carzenDev ;
		next();
	});
};

/**
 * Carzen dev authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.carzenDev.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
