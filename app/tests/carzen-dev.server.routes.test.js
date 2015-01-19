'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	CarzenDev = mongoose.model('CarzenDev'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, carzenDev;

/**
 * Carzen dev routes tests
 */
describe('Carzen dev CRUD tests', function() {
	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			username: 'username',
			password: 'password'
		};

		// Create a new user
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: credentials.username,
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new Carzen dev
		user.save(function() {
			carzenDev = {
				name: 'Carzen dev Name'
			};

			done();
		});
	});

	it('should be able to save Carzen dev instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Carzen dev
				agent.post('/carzen-devs')
					.send(carzenDev)
					.expect(200)
					.end(function(carzenDevSaveErr, carzenDevSaveRes) {
						// Handle Carzen dev save error
						if (carzenDevSaveErr) done(carzenDevSaveErr);

						// Get a list of Carzen devs
						agent.get('/carzen-devs')
							.end(function(carzenDevsGetErr, carzenDevsGetRes) {
								// Handle Carzen dev save error
								if (carzenDevsGetErr) done(carzenDevsGetErr);

								// Get Carzen devs list
								var carzenDevs = carzenDevsGetRes.body;

								// Set assertions
								(carzenDevs[0].user._id).should.equal(userId);
								(carzenDevs[0].name).should.match('Carzen dev Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Carzen dev instance if not logged in', function(done) {
		agent.post('/carzen-devs')
			.send(carzenDev)
			.expect(401)
			.end(function(carzenDevSaveErr, carzenDevSaveRes) {
				// Call the assertion callback
				done(carzenDevSaveErr);
			});
	});

	it('should not be able to save Carzen dev instance if no name is provided', function(done) {
		// Invalidate name field
		carzenDev.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Carzen dev
				agent.post('/carzen-devs')
					.send(carzenDev)
					.expect(400)
					.end(function(carzenDevSaveErr, carzenDevSaveRes) {
						// Set message assertion
						(carzenDevSaveRes.body.message).should.match('Please fill Carzen dev name');
						
						// Handle Carzen dev save error
						done(carzenDevSaveErr);
					});
			});
	});

	it('should be able to update Carzen dev instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Carzen dev
				agent.post('/carzen-devs')
					.send(carzenDev)
					.expect(200)
					.end(function(carzenDevSaveErr, carzenDevSaveRes) {
						// Handle Carzen dev save error
						if (carzenDevSaveErr) done(carzenDevSaveErr);

						// Update Carzen dev name
						carzenDev.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Carzen dev
						agent.put('/carzen-devs/' + carzenDevSaveRes.body._id)
							.send(carzenDev)
							.expect(200)
							.end(function(carzenDevUpdateErr, carzenDevUpdateRes) {
								// Handle Carzen dev update error
								if (carzenDevUpdateErr) done(carzenDevUpdateErr);

								// Set assertions
								(carzenDevUpdateRes.body._id).should.equal(carzenDevSaveRes.body._id);
								(carzenDevUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Carzen devs if not signed in', function(done) {
		// Create new Carzen dev model instance
		var carzenDevObj = new CarzenDev(carzenDev);

		// Save the Carzen dev
		carzenDevObj.save(function() {
			// Request Carzen devs
			request(app).get('/carzen-devs')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Carzen dev if not signed in', function(done) {
		// Create new Carzen dev model instance
		var carzenDevObj = new CarzenDev(carzenDev);

		// Save the Carzen dev
		carzenDevObj.save(function() {
			request(app).get('/carzen-devs/' + carzenDevObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', carzenDev.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Carzen dev instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Carzen dev
				agent.post('/carzen-devs')
					.send(carzenDev)
					.expect(200)
					.end(function(carzenDevSaveErr, carzenDevSaveRes) {
						// Handle Carzen dev save error
						if (carzenDevSaveErr) done(carzenDevSaveErr);

						// Delete existing Carzen dev
						agent.delete('/carzen-devs/' + carzenDevSaveRes.body._id)
							.send(carzenDev)
							.expect(200)
							.end(function(carzenDevDeleteErr, carzenDevDeleteRes) {
								// Handle Carzen dev error error
								if (carzenDevDeleteErr) done(carzenDevDeleteErr);

								// Set assertions
								(carzenDevDeleteRes.body._id).should.equal(carzenDevSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Carzen dev instance if not signed in', function(done) {
		// Set Carzen dev user 
		carzenDev.user = user;

		// Create new Carzen dev model instance
		var carzenDevObj = new CarzenDev(carzenDev);

		// Save the Carzen dev
		carzenDevObj.save(function() {
			// Try deleting Carzen dev
			request(app).delete('/carzen-devs/' + carzenDevObj._id)
			.expect(401)
			.end(function(carzenDevDeleteErr, carzenDevDeleteRes) {
				// Set message assertion
				(carzenDevDeleteRes.body.message).should.match('User is not logged in');

				// Handle Carzen dev error error
				done(carzenDevDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		CarzenDev.remove().exec();
		done();
	});
});