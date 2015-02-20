'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	D2lHw = mongoose.model('D2lHw'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, d2lHw;

/**
 * D2l hw routes tests
 */
describe('D2l hw CRUD tests', function() {
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

		// Save a user to the test db and create new D2l hw
		user.save(function() {
			d2lHw = {
				name: 'D2l hw Name'
			};

			done();
		});
	});

	it('should be able to save D2l hw instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hw
				agent.post('/d2l-hws')
					.send(d2lHw)
					.expect(200)
					.end(function(d2lHwSaveErr, d2lHwSaveRes) {
						// Handle D2l hw save error
						if (d2lHwSaveErr) done(d2lHwSaveErr);

						// Get a list of D2l hws
						agent.get('/d2l-hws')
							.end(function(d2lHwsGetErr, d2lHwsGetRes) {
								// Handle D2l hw save error
								if (d2lHwsGetErr) done(d2lHwsGetErr);

								// Get D2l hws list
								var d2lHws = d2lHwsGetRes.body;

								// Set assertions
								(d2lHws[0].user._id).should.equal(userId);
								(d2lHws[0].name).should.match('D2l hw Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save D2l hw instance if not logged in', function(done) {
		agent.post('/d2l-hws')
			.send(d2lHw)
			.expect(401)
			.end(function(d2lHwSaveErr, d2lHwSaveRes) {
				// Call the assertion callback
				done(d2lHwSaveErr);
			});
	});

	it('should not be able to save D2l hw instance if no name is provided', function(done) {
		// Invalidate name field
		d2lHw.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hw
				agent.post('/d2l-hws')
					.send(d2lHw)
					.expect(400)
					.end(function(d2lHwSaveErr, d2lHwSaveRes) {
						// Set message assertion
						(d2lHwSaveRes.body.message).should.match('Please fill D2l hw name');
						
						// Handle D2l hw save error
						done(d2lHwSaveErr);
					});
			});
	});

	it('should be able to update D2l hw instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hw
				agent.post('/d2l-hws')
					.send(d2lHw)
					.expect(200)
					.end(function(d2lHwSaveErr, d2lHwSaveRes) {
						// Handle D2l hw save error
						if (d2lHwSaveErr) done(d2lHwSaveErr);

						// Update D2l hw name
						d2lHw.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing D2l hw
						agent.put('/d2l-hws/' + d2lHwSaveRes.body._id)
							.send(d2lHw)
							.expect(200)
							.end(function(d2lHwUpdateErr, d2lHwUpdateRes) {
								// Handle D2l hw update error
								if (d2lHwUpdateErr) done(d2lHwUpdateErr);

								// Set assertions
								(d2lHwUpdateRes.body._id).should.equal(d2lHwSaveRes.body._id);
								(d2lHwUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of D2l hws if not signed in', function(done) {
		// Create new D2l hw model instance
		var d2lHwObj = new D2lHw(d2lHw);

		// Save the D2l hw
		d2lHwObj.save(function() {
			// Request D2l hws
			request(app).get('/d2l-hws')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single D2l hw if not signed in', function(done) {
		// Create new D2l hw model instance
		var d2lHwObj = new D2lHw(d2lHw);

		// Save the D2l hw
		d2lHwObj.save(function() {
			request(app).get('/d2l-hws/' + d2lHwObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', d2lHw.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete D2l hw instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hw
				agent.post('/d2l-hws')
					.send(d2lHw)
					.expect(200)
					.end(function(d2lHwSaveErr, d2lHwSaveRes) {
						// Handle D2l hw save error
						if (d2lHwSaveErr) done(d2lHwSaveErr);

						// Delete existing D2l hw
						agent.delete('/d2l-hws/' + d2lHwSaveRes.body._id)
							.send(d2lHw)
							.expect(200)
							.end(function(d2lHwDeleteErr, d2lHwDeleteRes) {
								// Handle D2l hw error error
								if (d2lHwDeleteErr) done(d2lHwDeleteErr);

								// Set assertions
								(d2lHwDeleteRes.body._id).should.equal(d2lHwSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete D2l hw instance if not signed in', function(done) {
		// Set D2l hw user 
		d2lHw.user = user;

		// Create new D2l hw model instance
		var d2lHwObj = new D2lHw(d2lHw);

		// Save the D2l hw
		d2lHwObj.save(function() {
			// Try deleting D2l hw
			request(app).delete('/d2l-hws/' + d2lHwObj._id)
			.expect(401)
			.end(function(d2lHwDeleteErr, d2lHwDeleteRes) {
				// Set message assertion
				(d2lHwDeleteRes.body.message).should.match('User is not logged in');

				// Handle D2l hw error error
				done(d2lHwDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		D2lHw.remove().exec();
		done();
	});
});