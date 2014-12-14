'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
				'public/lib/angular-material/angular-material.css',
				'public/lib/angular-material/themes/amber-theme.css',
				'public/lib/angular-material/themes/blue-grey-theme.css',
				'public/lib/angular-material/themes/brown-theme.css',
				'public/lib/angular-material/themes/cyan-theme.css',
				'public/lib/angular-material/themes/indigo-theme.css',
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',

				'public/lib/angular-aria/angular-aria.min.js',
				'public/lib/hammerjs/hammer.min.js',
				'public/lib/angular-material/angular-material.min.js',

				'public/lib/gsap/src/minified/TimelineMax.min.js',
				'public/lib/gsap/src/minified/TweenMax.min.js',
				'public/lib/gsap/src/minified/utils/Draggable.min.js',
				'public/lib/gsap/src/minified/plugins/TextPlugin.js',
				//'public/lib/3rd/SplitText.min.js',

				'public/lib/ng-context-menu/dist/ng-context-menu.min.js',
				//'public/lib/threejs/build/three.min.js',

				'public/lib/tremulajs/libs/hammer.js',
				'public/lib/tremulajs/libs/jsBezier-0.6.js',
				'public/lib/tremulajs/dist/Tremula.js',

				'public/lib/Snap.svg/dist/snap.svg-min.js',
				'public/lib/lodash/dist/lodash.min.js',

			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
