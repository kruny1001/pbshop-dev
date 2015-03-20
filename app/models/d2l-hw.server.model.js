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
	//name: {
	//	type: String,
	//	default: '',
	//	trim: true
	//},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	class:{
		type: Schema.ObjectId,
		ref: 'D2lClass'
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
	totalGrade:{
		type: Number,
		default: 0
	},
	percent:{
		type: Number,
		default: 0
	},
	dDate:{
		type: Date
	},
	content:{
		type: String,
		default: '',
		trim: true
	}
    //rate: {
    //    type: Number,
    //    default: 800,
    //    trim: true
    //}
});

mongoose.model('D2lHw', D2lHwSchema);
