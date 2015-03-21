'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	D2lHwsSubmit = mongoose.model('D2lHwsSubmit'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, d2lHwsSubmit;

/**
 * D2l hws submit routes tests
 */
describe('D2l hws submit CRUD tests', function() {
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

		// Save a user to the test db and create new D2l hws submit
		user.save(function() {
			d2lHwsSubmit = {
				name: 'D2l hws submit Name'
			};

			done();
		});
	});

	it('should be able to save D2l hws submit instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hws submit
				agent.post('/d2l-hws-submits')
					.send(d2lHwsSubmit)
					.expect(200)
					.end(function(d2lHwsSubmitSaveErr, d2lHwsSubmitSaveRes) {
						// Handle D2l hws submit save error
						if (d2lHwsSubmitSaveErr) done(d2lHwsSubmitSaveErr);

						// Get a list of D2l hws submits
						agent.get('/d2l-hws-submits')
							.end(function(d2lHwsSubmitsGetErr, d2lHwsSubmitsGetRes) {
								// Handle D2l hws submit save error
								if (d2lHwsSubmitsGetErr) done(d2lHwsSubmitsGetErr);

								// Get D2l hws submits list
								var d2lHwsSubmits = d2lHwsSubmitsGetRes.body;

								// Set assertions
								(d2lHwsSubmits[0].user._id).should.equal(userId);
								(d2lHwsSubmits[0].name).should.match('D2l hws submit Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save D2l hws submit instance if not logged in', function(done) {
		agent.post('/d2l-hws-submits')
			.send(d2lHwsSubmit)
			.expect(401)
			.end(function(d2lHwsSubmitSaveErr, d2lHwsSubmitSaveRes) {
				// Call the assertion callback
				done(d2lHwsSubmitSaveErr);
			});
	});

	it('should not be able to save D2l hws submit instance if no name is provided', function(done) {
		// Invalidate name field
		d2lHwsSubmit.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hws submit
				agent.post('/d2l-hws-submits')
					.send(d2lHwsSubmit)
					.expect(400)
					.end(function(d2lHwsSubmitSaveErr, d2lHwsSubmitSaveRes) {
						// Set message assertion
						(d2lHwsSubmitSaveRes.body.message).should.match('Please fill D2l hws submit name');
						
						// Handle D2l hws submit save error
						done(d2lHwsSubmitSaveErr);
					});
			});
	});

	it('should be able to update D2l hws submit instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hws submit
				agent.post('/d2l-hws-submits')
					.send(d2lHwsSubmit)
					.expect(200)
					.end(function(d2lHwsSubmitSaveErr, d2lHwsSubmitSaveRes) {
						// Handle D2l hws submit save error
						if (d2lHwsSubmitSaveErr) done(d2lHwsSubmitSaveErr);

						// Update D2l hws submit name
						d2lHwsSubmit.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing D2l hws submit
						agent.put('/d2l-hws-submits/' + d2lHwsSubmitSaveRes.body._id)
							.send(d2lHwsSubmit)
							.expect(200)
							.end(function(d2lHwsSubmitUpdateErr, d2lHwsSubmitUpdateRes) {
								// Handle D2l hws submit update error
								if (d2lHwsSubmitUpdateErr) done(d2lHwsSubmitUpdateErr);

								// Set assertions
								(d2lHwsSubmitUpdateRes.body._id).should.equal(d2lHwsSubmitSaveRes.body._id);
								(d2lHwsSubmitUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of D2l hws submits if not signed in', function(done) {
		// Create new D2l hws submit model instance
		var d2lHwsSubmitObj = new D2lHwsSubmit(d2lHwsSubmit);

		// Save the D2l hws submit
		d2lHwsSubmitObj.save(function() {
			// Request D2l hws submits
			request(app).get('/d2l-hws-submits')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single D2l hws submit if not signed in', function(done) {
		// Create new D2l hws submit model instance
		var d2lHwsSubmitObj = new D2lHwsSubmit(d2lHwsSubmit);

		// Save the D2l hws submit
		d2lHwsSubmitObj.save(function() {
			request(app).get('/d2l-hws-submits/' + d2lHwsSubmitObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', d2lHwsSubmit.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete D2l hws submit instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l hws submit
				agent.post('/d2l-hws-submits')
					.send(d2lHwsSubmit)
					.expect(200)
					.end(function(d2lHwsSubmitSaveErr, d2lHwsSubmitSaveRes) {
						// Handle D2l hws submit save error
						if (d2lHwsSubmitSaveErr) done(d2lHwsSubmitSaveErr);

						// Delete existing D2l hws submit
						agent.delete('/d2l-hws-submits/' + d2lHwsSubmitSaveRes.body._id)
							.send(d2lHwsSubmit)
							.expect(200)
							.end(function(d2lHwsSubmitDeleteErr, d2lHwsSubmitDeleteRes) {
								// Handle D2l hws submit error error
								if (d2lHwsSubmitDeleteErr) done(d2lHwsSubmitDeleteErr);

								// Set assertions
								(d2lHwsSubmitDeleteRes.body._id).should.equal(d2lHwsSubmitSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete D2l hws submit instance if not signed in', function(done) {
		// Set D2l hws submit user 
		d2lHwsSubmit.user = user;

		// Create new D2l hws submit model instance
		var d2lHwsSubmitObj = new D2lHwsSubmit(d2lHwsSubmit);

		// Save the D2l hws submit
		d2lHwsSubmitObj.save(function() {
			// Try deleting D2l hws submit
			request(app).delete('/d2l-hws-submits/' + d2lHwsSubmitObj._id)
			.expect(401)
			.end(function(d2lHwsSubmitDeleteErr, d2lHwsSubmitDeleteRes) {
				// Set message assertion
				(d2lHwsSubmitDeleteRes.body.message).should.match('User is not logged in');

				// Handle D2l hws submit error error
				done(d2lHwsSubmitDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		D2lHwsSubmit.remove().exec();
		done();
	});
});