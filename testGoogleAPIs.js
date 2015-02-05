/**
 * Created by kruny1001 on 2/3/15.
 *
 * This is a example of Google APIs for NODEJS
 */
//
//var google = require('googleapis');
//var drive = google.drive('v2');
//var OAuth2Client = google.auth.OAuth2;
//
//var CLIENT_ID = '574563539488-k7vlvuaianqvvs3od45udc0ktf676dm6.apps.googleusercontent.com';
//var CLIENT_SECRET = '-3DgMF99fphLBq0p6yhY8GfP';
//var REDIRECT_URL = 'http://localhost:3000';
//var EMAIL_ADDR = '574563539488-k7vlvuaianqvvs3od45udc0ktf676dm6@developer.gserviceaccount.com'
//
//// my version of request
//var request = require('request');
//
//request = require('google-oauth-jwt').requestWithJWT(request);
//
//request({
//    url: 'https://www.googleapis.com/drive/v2/files',
//    jwt: {
//        // use the email address of the service account, as seen in the API console
//        email: EMAIL_ADDR,
//        // use the PEM file we generated from the downloaded key
//        keyFile: 'key.pem',
//        // specify the scopes you wish to access - each application has different scopes
//        scopes: ['https://www.googleapis.com/auth/drive.readonly']
//    }
//}, function (err, res) {
//    console.log(res);
//});

//var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
//
//var authClient = new google.auth.JWT(
//    '574563539488-pctm7fr21vcetcfpdf9hhaje9q5vepee@developer.gserviceaccount.com',
//    //'key.pem',
//    // Contents of private_key.pem if you want to load the pem file yourself
//    // (do not use the path parameter above if using this param)
//    //'MIICXQIBAAKBgQDHG1H/mlt6ua/saB/31BmFHwkmpgesBl+QzaxpH2u8uFciRnb0
//    "bZHsasFvfeiLKMWQc4NexjzYp6KzjaQJpuIue4irwU3pJGuzet9ggwWBj/ZHhpQf"+
//    "iMUvHd27NnNoqEC6tKfDKwxDV91JugDC4buhojMuqjBrpuFeUdvETYhu4wIDAQAB"+
//"AoGAA9loXWurhxTd7NEahR0JnUQ7Vg7xqQa6hD8lrSaZW52ouZXpKNKRdqOdt70U"+
//"aNRR9Xf2OzfT51BeWeBMIo+iYcDt4HjzJhkeZMJQ4pruTgD68ONpYU4I2Z1ieIte"+
//"gyIhcPu7BPTHm++lLI4xX3wAwZAdiOSwXJnGrkVbMQWKrlkCQQDtzItGfDSWPclK"+
//"rdSR7GramjTPPDr6lnaYiCsCHKbfqyPMvsgrN5ckxVnjD/dkxchxGg9PcpQoNRzj"+
//"AEMwCWQ/AkEA1lii1qCY0fgxkkK8rGsikmpyA3Z1vz/3T8XrKQM1Ojk6iIp7v0MM"+
//"7l+f9HRlYDhpR+kIRnwdx/X+v5W4VE/8XQJAGct3TCUK+0UmgaBLj6yqhp31nok1"+
//"CJurr64NpEQBYf/JeVs0kWONVKLHtla0Ck1eCc6+3GpcYeQpBwKvRxWttwJBAJGh"+
//"cSmfvZTTK2LzQttmgvu1pLcjkgaZwD8L+qVHz686WMGSTVd6h9uhTr05I/OHAEji"+
//"VEQHafiE80tZvv5RxeUCQQCLCKLWOj1bcGcsRac7tjLjrb5O1eXgDiwe2gO1iu2A"+
//"bCot2+2/URU7xcLIcXZBHyjXttiPvLBqKkr3awwB90yy",
//    // Scopes can be specified either as an array or as a single, space-delimited string
//    ['https://www.googleapis.com/auth/drive.readonly'],
//    // User to impersonate (leave empty if no impersonation needed)
//    'kruny1001@gmail.com');
//
//authClient.authorize(function(err, tokens) {
//    if (err) {
//        console.log(err);
//        return;
//    }
//
//    // Make an authorized request to list Drive files.
//    drive.files.list({ auth: authClient }, function(err, resp) {
//        // handle err and response
//    });
//});



var CLIENT_ID_WEB_APPLICATION = '574563539488-pctm7fr21vcetcfpdf9hhaje9q5vepee.apps.googleusercontent.com';
var CLIENT_SECRET_WEB_APPLICATION = '-3DgMF99fphLBq0p6yhY8GfP';
var REDIRECT_URL = 'http://localhost:3000/oauth2callback';

var google = require('googleapis');
var plus = google.plus('v1');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(CLIENT_ID_WEB_APPLICATION, CLIENT_SECRET_WEB_APPLICATION, REDIRECT_URL);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
    access_type: 'online', // 'online' (default) or 'offline' (gets refresh_token)
    scope: scopes // If you only need one scope you can pass it as string
});

console.log(url);
var code = '4/n39bYBlfJgpagkIxUqQWyWHo7yr9KJDG3hP_VtvW2-w.Il4q7cO13NsfXmXvfARQvthKqnSslgI';

oauth2Client.getToken(code, function(err, tokens) {
    // Now tokens contains an access_token and an optional refresh_token. Save them.
    if(!err) {
        oauth2Client.setCredentials(tokens);
        var drive = google.drive({ version: 'v2', auth: oauth2Client });
        plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
            if (err) {
                console.log('An error occured', err);
                return;
            }else{
                console.log('Success!');
            }
            console.log(profile.displayName, ':', profile.tagline);
        });
    }else{
        console.log(err);
    }
});
