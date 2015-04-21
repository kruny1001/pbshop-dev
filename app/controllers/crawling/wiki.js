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

		var url = "http://pbshop.herokuapp.com/#!/signin";
		spooky.start(url);
		spooky.then(function () {
			this.capture('./capture1.png');
			this.fill("form", {username: "", password: ""}, true);
		});
		spooky.then(function () {
			this.emit('hello', 'Hello, from ' + this.evaluate(function () {
				return document.title;
			}));
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
		links = links.concat(this.evaluate(getLinks));
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
