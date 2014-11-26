'use strict';

module.exports = {
	app: {
		title: 'URIMIUM',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/angular-material/angular-material.css',
				'public/lib/angular-material/themes/amber-theme.css',
				'public/lib/angular-material/themes/blue-grey-theme.css',
				'public/lib/angular-material/themes/brown-theme.css',
				'public/lib/angular-material/themes/cyan-theme.css',
				'public/lib/angular-material/themes/indigo-theme.css',
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',

				'public/lib/angular-aria/angular-aria.js',
				'public/lib/hammerjs/hammer.js',
				'public/lib/angular-material/angular-material.js',

				'public/lib/gsap/src/uncompressed/TimelineMax.js',
				'public/lib/gsap/src/uncompressed/TweenMax.js',

				'public/lib/ng-context-menu/dist/ng-context-menu.js',
				'public/lib/gsap/src/uncompressed/utils/Draggable.js',
				'public/lib/gsap/src/uncompressed/plugins/TextPlugin.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		scss:[

		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
