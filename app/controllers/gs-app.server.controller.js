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

var drive = google.drive('v2');
var plus = google.plus('v1');
var OAuth2 = google.auth.OAuth2;

exports.gsGet = function(req, res){
	//res.jsonp(req.user.additionalProvidersData.google.accessToken);
	//res.jsonp(req.user);
	var google = require('googleapis');
	var OAuth2 = google.auth.OAuth2;
	var plus = google.plus('v1');
	var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
	oauth2Client.setCredentials({
		access_token: req.user.additionalProvidersData.google.accessToken,
		refresh_token: req.user.additionalProvidersData.google.refreshToken,
		expiry_date:(new Date()).getTime()*1000
	});
	oauth2Client.refreshAccessToken(function(err, tokens) {
		// your access_token is now refreshed and stored in oauth2Client
		// store these new tokens in a safe place (e.g. database)
		console.log('!!!!', tokens);
		oauth2Client.setCredentials(tokens);
		plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
				if (err) {
					console.log('An error occured', err);
					return;
				}
				res.jsonp(profile);
			});
	});
	//plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
	//		if (err) {
	//			console.log('An error occured', err);
	//			return;
	//		}
	//		res.jsonp(profile);
	//	});
}

exports.getUserInfo = function(req, res) {
	res.jsonp(req.user);
}

/**
 * Create a Gs app
 */
exports.createFile = function(req, res) {

	var plus = google.plus('v1');
	var drive = google.drive('v2');
	var OAuth2 = google.auth.OAuth2;
	var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
	oauth2Client.setCredentials({
		access_token: req.user.additionalProvidersData.google.accessToken,
		refresh_token: req.user.additionalProvidersData.google.refreshToken
	});

	oauth2Client.refreshAccessToken(function(err, tokens) {
		// your access_token is now refreshed and stored in oauth2Client
		// store these new tokens in a safe place (e.g. database)
		//console.log('!!!!', tokens);
		oauth2Client.setCredentials(tokens);
		// insertion example
		drive.files.insert({
			resource: {
				title: 'refreshToken Folder',
				mimeType: 'application/vnd.google-apps.folder'
			},
			auth: oauth2Client
		}, function(err, response) {
			if (err) {
				console.log('An error occured', err);
				return;
			}
			res.jsonp(response);
		});
	});
};

exports.createHWD2l = function(req, res) {
    var response = req;
    console.log(req.body);
    res.jsonp({result: "hello world"});
    //var drive = google.drive('v2');
    //var OAuth2 = google.auth.OAuth2;
    var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
    oauth2Client.setCredentials({
        access_token: req.user.additionalProvidersData.google.accessToken,
        refresh_token: req.user.additionalProvidersData.google.refreshToken
    });

    oauth2Client.refreshAccessToken(function(err, tokens) {
        oauth2Client.setCredentials(tokens);
        // insertion example
        drive.files.insert({
            resource: {
                title: 'refreshToken Folder',
                mimeType: 'application/vnd.google-apps.folder'
            },
            auth: oauth2Client
        }, function(err, response) {
            if (err) {
                console.log('An error occured', err);
                return;
            }
            res.jsonp(response);
        });
    });
}

exports.getPermissionHWD2l = function(req, res){
	var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
	oauth2Client.setCredentials({
		access_token: req.user.additionalProvidersData.google.accessToken,
		refresh_token: req.user.additionalProvidersData.google.refreshToken
	});

	oauth2Client.refreshAccessToken(function(err, tokens) {
		oauth2Client.setCredentials(tokens);
		// insertion example
		drive.permissions.list(
			{
				'fileId': req.params.id,//'1DAka3Pg2DjItjXWtiSKOsZK71uFSo5rxLG4t5wCNHpA',
				'fields' : 'items(additionalRoles,id,name,photoLink,role)',
				auth: oauth2Client
			}, function(err, response) {
				if (err) {
					console.log('An error occured', err);
					//res.jsonp(err);
					return;
				}
				res.jsonp(response);
			});
	});
}

exports.insertPermissionHWD2l = function(req, res){
	var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
	oauth2Client.setCredentials({
		access_token: req.user.additionalProvidersData.google.accessToken,
		refresh_token: req.user.additionalProvidersData.google.refreshToken
	});

	oauth2Client.refreshAccessToken(function(err, tokens) {
		oauth2Client.setCredentials(tokens);
		// insertion example
		drive.permissions.insert(
			{
				'fileId': req.params.id,//'1DAka3Pg2DjItjXWtiSKOsZK71uFSo5rxLG4t5wCNHpA',
				'emailMessage': '이걸 보시오 accept 하면뎀 ㅋ',
				'sendNotificationEmails': true,
				'resource':{
					"role":"reader",
					"type":"user",
					"value": "nujabes403@gmail.com"
				},
				//'fields' : 'items(additionalRoles,id,name,photoLink,role)',
				auth: oauth2Client
			}, function(err, response) {
				if (err) {
					console.log('An error occured', err);
					//res.jsonp(err);
					return;
				}
				res.jsonp(response);
			});
	});
}

exports.getHWD2l = function(req, res){
	var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
	oauth2Client.setCredentials({
		access_token: req.user.additionalProvidersData.google.accessToken,
		refresh_token: req.user.additionalProvidersData.google.refreshToken
	});

	oauth2Client.refreshAccessToken(function(err, tokens) {
		oauth2Client.setCredentials(tokens);
		// insertion example
		drive.files.get(
			{
				'fileId': req.params.id,//'1DAka3Pg2DjItjXWtiSKOsZK71uFSo5rxLG4t5wCNHpA',
				//'fields' : 'items(additionalRoles,id,name,photoLink,role)',
				auth: oauth2Client
			}, function(err, response) {
			if (err) {
				console.log('An error occured', err);
				return;
			}
			res.jsonp(response);
		});

	});
}
