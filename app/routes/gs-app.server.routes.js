'use strict';

var passport = require('passport');

module.exports = function(app) {
	var gs = require('../../app/controllers/gs-app.server.controller');
	var users = require('../../app/controllers/users.server.controller')
	app.route('/gs')
		.get(users.requiresLogin, gs.gsGet);
	app.route('/createFile').get(users.requiresLogin, gs.createFile);
    app.route('/createHWD2l/:id').get(gs.createHWD2l);

	app.route('/userInfo').get(gs.getUserInfo);
};
