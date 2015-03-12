'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * The clean crud Schema
 */
var TheCleanCrudSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill The clean crud name',
		trim: true
	},
    orderDate:{
        type: Date
    },
    deliberyDate:{
        type: Date
    },
    Address:{
        type: String
    },
    detailInfo:{
        type: String
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

mongoose.model('TheCleanCrud', TheCleanCrudSchema);
