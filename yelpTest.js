/**
 * Created by Kevin on 2014-12-28.
 */

/*
 oauth_consumer_key: 'Bed-soxiHkuSeGlcqzsX2w', //Consumer Key
 oauth_token: 'r1_lpzxz8xI41TNoJvibKt_-F0CHBRtj', //Token
 oauth_signature_method: "HMAC-SHA1",
 oauth_timestamp: new Date().getTime(),
 oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
 term: 'food'
 };
 var consumerSecret = 'tBWjndG8lO9vKHIgcMP9p9sRRIM'; //Consumer Secret
 var tokenSecret = 'AdK1QESG63cRdJnj4uTg6sijpf8'; //Token Secret
*/
var yelp = require("yelp").createClient({
    consumer_key: "Bed-soxiHkuSeGlcqzsX2w",
    consumer_secret: "tBWjndG8lO9vKHIgcMP9p9sRRIM",
    token: "r1_lpzxz8xI41TNoJvibKt_-F0CHBRtj",
    token_secret: "AdK1QESG63cRdJnj4uTg6sijpf8"
});

/*
// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "food", location: "Montreal"}, function(error, data) {
    console.log(error);
    console.log(data);
});
*/

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("tjs-hair-studio-golden-valley-2", function(error, data) {
    console.log(error);
    console.log(data);
});
