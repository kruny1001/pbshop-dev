'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * D2l hws submit Schema
 */
var D2lHwsSubmitSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill D2l hws submit name',
		trim: true
	},
	docId: {
		type: String,
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	userEmail: {
		type: String,
		trim: true
	}
});

mongoose.model('D2lHwsSubmit', D2lHwsSubmitSchema);
