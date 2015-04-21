/**
 * Created by kruny1001 on 4/20/15.
 */

/**
 * Created by kruny1001 on 4/20/15.
 */

//var casper = require('casper').create({
//	verbose: true,
//	logLevel: 'debug',
//	pageSettings: {
//		loadImages:  false,         // The WebPage instance used by Casper will
//		loadPlugins: false,         // use these settings
//		userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
//	}
//});

// print out all the messages in the headless browser context
casper.on('remote.message', function(msg) {
	this.echo('remote message caught: ' + msg);
});

// print out all the messages in the headless browser context
casper.on("page.error", function(msg, trace) {
	this.echo("Page Error: " + msg, "ERROR");
});

var url = 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=http%3A%2F%2Fwww.ebay.com%2F';

casper.start(url, function() {
	// search for 'casperjs' from google form
	console.log("page loaded");
	console.log(this);
	this.test.assertExists('form', 'form is found');
	this.fill('form#SignInForm', {
		userid: '',
		pass:  ''
	}, true);
});

var viewportSizes = [
	[1280,800],
	[1440,900]
]

casper.wait(3000, function() {

	this.clickLabel('My eBay', 'a');

});

casper.wait(3000, function() {
	this.clickLabel('Purchase history','a');
});

casper.wait(3000, function() {
	this.capture('test1.png', {
		top: 0,
		left: 0,
		width: 900,
		height: 900
	});
});

casper.wait(3000, function() {
	this.clickLabel(' The last 60 days','span');
});

casper.wait(1000, function() {
	this.clickLabel('2013','a');
});
casper.wait(3000, function() {
	this.capture('test2.png', {
		top: 0,
		left: 0,
		width: 900,
		height: 900
	});
});

casper.thenEvaluate(function(){
	console.log("Page Title " + document.title);
});


casper.run();
