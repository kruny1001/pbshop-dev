/**
 * Created by kruny1001 on 4/20/15.
 */

var Spooky = require('spooky');

exports.search = function(req, res){
	var spooky = new Spooky({
		child: {
			transport: 'http'
		},
		casper: {
			logLevel: 'debug',
			verbose: true,
			options: {
				clientScripts: ['../public/lib/jquery/dist/jquery.min.js']
			},
			pageSettings: {
				loadImages:  false,         // The WebPage instance used by Casper will
				loadPlugins: false,         // use these settings
				userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
			}
		}
	},function(err){
		if(err){
			e = new Error('Failed to initialize SpookyJS');
			e.details = err;
			throw e;
		}

		var url = 'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=http%3A%2F%2Fwww.ebay.com%2F';
		spooky.start(url);
		spooky.then(function () {
			//this.capture('./capture1.png');
			this.fill('form#SignInForm', {
				userid: '',
				pass:  '!'
			}, true);
		});
		spooky.wait(5000,function () {
			this.capture('./capture1.png');
			this.click($('a').text('My eBay'));
		});
		spooky.wait(3000,function () {
			this.capture('./capture2.png');
		});
		spooky.run();
	});

	spooky.on('error', function (e, stack){
		console.log(e);
		if(stack){
			console.log(stack);
			res.text(stack);
		}
	});
	spooky.on('hello', function (greeting) {
		console.log(greeting);
		res.send(greeting);
		//res.jsonp({result: greeting});
	});

	spooky.on('log', function (log) {
		if (log.space === 'remote') {
			console.log(log.message.replace(/ \- .*/, ''));
		}
	});
}
