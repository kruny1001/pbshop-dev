'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	MeanEvent = mongoose.model('MeanEvent'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, meanEvent;

/**
 * Mean event routes tests
 */
describe('Mean event CRUD tests', function() {
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

		// Save a user to the test db and create new Mean event
		user.save(function() {
			meanEvent = {
				name: 'Mean event Name'
			};

			done();
		});
	});

	it('should be able to save Mean event instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mean event
				agent.post('/mean-events')
					.send(meanEvent)
					.expect(200)
					.end(function(meanEventSaveErr, meanEventSaveRes) {
						// Handle Mean event save error
						if (meanEventSaveErr) done(meanEventSaveErr);

						// Get a list of Mean events
						agent.get('/mean-events')
							.end(function(meanEventsGetErr, meanEventsGetRes) {
								// Handle Mean event save error
								if (meanEventsGetErr) done(meanEventsGetErr);

								// Get Mean events list
								var meanEvents = meanEventsGetRes.body;

								// Set assertions
								(meanEvents[0].user._id).should.equal(userId);
								(meanEvents[0].name).should.match('Mean event Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Mean event instance if not logged in', function(done) {
		agent.post('/mean-events')
			.send(meanEvent)
			.expect(401)
			.end(function(meanEventSaveErr, meanEventSaveRes) {
				// Call the assertion callback
				done(meanEventSaveErr);
			});
	});

	it('should not be able to save Mean event instance if no name is provided', function(done) {
		// Invalidate name field
		meanEvent.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mean event
				agent.post('/mean-events')
					.send(meanEvent)
					.expect(400)
					.end(function(meanEventSaveErr, meanEventSaveRes) {
						// Set message assertion
						(meanEventSaveRes.body.message).should.match('Please fill Mean event name');
						
						// Handle Mean event save error
						done(meanEventSaveErr);
					});
			});
	});

	it('should be able to update Mean event instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mean event
				agent.post('/mean-events')
					.send(meanEvent)
					.expect(200)
					.end(function(meanEventSaveErr, meanEventSaveRes) {
						// Handle Mean event save error
						if (meanEventSaveErr) done(meanEventSaveErr);

						// Update Mean event name
						meanEvent.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Mean event
						agent.put('/mean-events/' + meanEventSaveRes.body._id)
							.send(meanEvent)
							.expect(200)
							.end(function(meanEventUpdateErr, meanEventUpdateRes) {
								// Handle Mean event update error
								if (meanEventUpdateErr) done(meanEventUpdateErr);

								// Set assertions
								(meanEventUpdateRes.body._id).should.equal(meanEventSaveRes.body._id);
								(meanEventUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Mean events if not signed in', function(done) {
		// Create new Mean event model instance
		var meanEventObj = new MeanEvent(meanEvent);

		// Save the Mean event
		meanEventObj.save(function() {
			// Request Mean events
			request(app).get('/mean-events')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Mean event if not signed in', function(done) {
		// Create new Mean event model instance
		var meanEventObj = new MeanEvent(meanEvent);

		// Save the Mean event
		meanEventObj.save(function() {
			request(app).get('/mean-events/' + meanEventObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', meanEvent.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Mean event instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mean event
				agent.post('/mean-events')
					.send(meanEvent)
					.expect(200)
					.end(function(meanEventSaveErr, meanEventSaveRes) {
						// Handle Mean event save error
						if (meanEventSaveErr) done(meanEventSaveErr);

						// Delete existing Mean event
						agent.delete('/mean-events/' + meanEventSaveRes.body._id)
							.send(meanEvent)
							.expect(200)
							.end(function(meanEventDeleteErr, meanEventDeleteRes) {
								// Handle Mean event error error
								if (meanEventDeleteErr) done(meanEventDeleteErr);

								// Set assertions
								(meanEventDeleteRes.body._id).should.equal(meanEventSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Mean event instance if not signed in', function(done) {
		// Set Mean event user 
		meanEvent.user = user;

		// Create new Mean event model instance
		var meanEventObj = new MeanEvent(meanEvent);

		// Save the Mean event
		meanEventObj.save(function() {
			// Try deleting Mean event
			request(app).delete('/mean-events/' + meanEventObj._id)
			.expect(401)
			.end(function(meanEventDeleteErr, meanEventDeleteRes) {
				// Set message assertion
				(meanEventDeleteRes.body.message).should.match('User is not logged in');

				// Handle Mean event error error
				done(meanEventDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		MeanEvent.remove().exec();
		done();
	});
});