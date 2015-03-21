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
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('D2lHwsSubmit', D2lHwsSubmitSchema);
