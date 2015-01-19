'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Carzen dev Schema
 */
var CarzenDevSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Carzen dev name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('CarzenDev', CarzenDevSchema);