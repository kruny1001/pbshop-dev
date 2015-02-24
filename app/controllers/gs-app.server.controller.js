'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

var CLIENT_ID='574563539488-n0vrevgjp3606l20hfk4rqfk1dc8j3qb.apps.googleusercontent.com',
	CLIENT_SECRET = 'B0PEX0jbIkDCumhmpH-D9Sq0',
	REDIRECT_URL = '/auth/google/callback';
var SCOPE = 'https://www.googleapis.com/auth/drive.file';
var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;
var plus = google.plus('v1');

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

exports.gsGet = function(req, res){
	//res.jsonp(req.user.additionalProvidersData.google.accessToken);
	//res.jsonp(req.user);

	oauth2Client.setCredentials({
		access_token: req.user.additionalProvidersData.google.accessToken,
		refresh_token: req.user.additionalProvidersData.google.refreshToken
	});
	plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
			if (err) {
				console.log('An error occured', err);
				return;
			}
			res.jsonp(profile);
		});
}

/**
 * Create a Gs app
 */
exports.createFile = function(req, res) {
	oauth2Client.setCredentials({
		access_token: req.user.additionalProvidersData.google.accessToken,
		refresh_token: req.user.additionalProvidersData.google.refreshToken
	});
	var drive = google.drive('v2');
	// insertion example
	drive.files.insert({
		resource: {
			title: 'folderTest',
			mimeType: 'application/vnd.google-apps.folder'
		},
		auth: oauth2Client
	}, function(err, response) {
		if(err !== null)
			res.jsonp({'error': err, 'inserted': response.id})
	});
};

/**
 * Show the current Gs app
 */
exports.read = function(req, res) {

};

/**
 * Update a Gs app
 */
exports.update = function(req, res) {

};

/**
 * Delete an Gs app
 */
exports.delete = function(req, res) {

};

/**
 * List of Gs apps
 */
exports.list = function(req, res) {

};
