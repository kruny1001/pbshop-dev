var googleapis = require('googleapis'),
    JWT = googleapis.auth.JWT,
    analytics = googleapis.analytics('v3');

var SERVICE_ACCOUNT_EMAIL = 'kruny1001@gmail.com';
var SERVICE_ACCOUNT_KEY_FILE = 'googleapi-privatekey.pem';
var access_type = 'offline'

var authClient = new JWT(
    SERVICE_ACCOUNT_EMAIL,
    SERVICE_ACCOUNT_KEY_FILE,
    access_type,
    null,
    ['https://www.googleapis.com/auth/analytics.readonly']
);

authClient.authorize(function(err, tokens) {
    if (err) {
        console.log('!!: '+err);
        return;
    }
    analytics.data.ga.get({
        auth: authClient,
        'ids': 'ga:XXXXXXXX',
        'start-date': '2015-02-03',
        'end-date': '2015-02-04',
        'metrics': 'ga:visits'
    }, function(err, result) {
        console.log(err);
        console.log(result);
    });
});
