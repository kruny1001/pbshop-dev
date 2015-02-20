'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * D2l hw Schema
 */
var D2lHwSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	title:{
		type: String,
		default: '',
		trim: true
	},
	desc:{
		type: String,
		default: '',
		trim: true
	},
	dDate:{
		type: String,
		default: '',
		trim: true
	},
	content:{
		type: String,
		default: '',
		trim: true
	}
});

mongoose.model('D2lHw', D2lHwSchema);
