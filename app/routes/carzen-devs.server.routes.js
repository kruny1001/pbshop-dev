"use strict";

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var carzenDevs = require('../../app/controllers/carzen-devs.server.controller');

	// Carzen devs Routes
	app.route('/carzen-devs')
		.get(carzenDevs.list)
		.post(users.requiresLogin, carzenDevs.create);

	app.route('/carzen-devs/:carzenDevId')
		.get(carzenDevs.read)
		.put(users.requiresLogin, carzenDevs.hasAuthorization, carzenDevs.update)
		.delete(users.requiresLogin, carzenDevs.hasAuthorization, carzenDevs.delete);

	// Finish by binding the Carzen dev middleware
	app.param('carzenDevId', carzenDevs.carzenDevByID);
};
