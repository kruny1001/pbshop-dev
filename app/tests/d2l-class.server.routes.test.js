'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	D2lClass = mongoose.model('D2lClass'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, d2lClass;

/**
 * D2l class routes tests
 */
describe('D2l class CRUD tests', function() {
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

		// Save a user to the test db and create new D2l class
		user.save(function() {
			d2lClass = {
				name: 'D2l class Name'
			};

			done();
		});
	});

	it('should be able to save D2l class instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l class
				agent.post('/d2l-classes')
					.send(d2lClass)
					.expect(200)
					.end(function(d2lClassSaveErr, d2lClassSaveRes) {
						// Handle D2l class save error
						if (d2lClassSaveErr) done(d2lClassSaveErr);

						// Get a list of D2l classes
						agent.get('/d2l-classes')
							.end(function(d2lClassesGetErr, d2lClassesGetRes) {
								// Handle D2l class save error
								if (d2lClassesGetErr) done(d2lClassesGetErr);

								// Get D2l classes list
								var d2lClasses = d2lClassesGetRes.body;

								// Set assertions
								(d2lClasses[0].user._id).should.equal(userId);
								(d2lClasses[0].name).should.match('D2l class Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save D2l class instance if not logged in', function(done) {
		agent.post('/d2l-classes')
			.send(d2lClass)
			.expect(401)
			.end(function(d2lClassSaveErr, d2lClassSaveRes) {
				// Call the assertion callback
				done(d2lClassSaveErr);
			});
	});

	it('should not be able to save D2l class instance if no name is provided', function(done) {
		// Invalidate name field
		d2lClass.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l class
				agent.post('/d2l-classes')
					.send(d2lClass)
					.expect(400)
					.end(function(d2lClassSaveErr, d2lClassSaveRes) {
						// Set message assertion
						(d2lClassSaveRes.body.message).should.match('Please fill D2l class name');
						
						// Handle D2l class save error
						done(d2lClassSaveErr);
					});
			});
	});

	it('should be able to update D2l class instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l class
				agent.post('/d2l-classes')
					.send(d2lClass)
					.expect(200)
					.end(function(d2lClassSaveErr, d2lClassSaveRes) {
						// Handle D2l class save error
						if (d2lClassSaveErr) done(d2lClassSaveErr);

						// Update D2l class name
						d2lClass.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing D2l class
						agent.put('/d2l-classes/' + d2lClassSaveRes.body._id)
							.send(d2lClass)
							.expect(200)
							.end(function(d2lClassUpdateErr, d2lClassUpdateRes) {
								// Handle D2l class update error
								if (d2lClassUpdateErr) done(d2lClassUpdateErr);

								// Set assertions
								(d2lClassUpdateRes.body._id).should.equal(d2lClassSaveRes.body._id);
								(d2lClassUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of D2l classes if not signed in', function(done) {
		// Create new D2l class model instance
		var d2lClassObj = new D2lClass(d2lClass);

		// Save the D2l class
		d2lClassObj.save(function() {
			// Request D2l classes
			request(app).get('/d2l-classes')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single D2l class if not signed in', function(done) {
		// Create new D2l class model instance
		var d2lClassObj = new D2lClass(d2lClass);

		// Save the D2l class
		d2lClassObj.save(function() {
			request(app).get('/d2l-classes/' + d2lClassObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', d2lClass.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete D2l class instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l class
				agent.post('/d2l-classes')
					.send(d2lClass)
					.expect(200)
					.end(function(d2lClassSaveErr, d2lClassSaveRes) {
						// Handle D2l class save error
						if (d2lClassSaveErr) done(d2lClassSaveErr);

						// Delete existing D2l class
						agent.delete('/d2l-classes/' + d2lClassSaveRes.body._id)
							.send(d2lClass)
							.expect(200)
							.end(function(d2lClassDeleteErr, d2lClassDeleteRes) {
								// Handle D2l class error error
								if (d2lClassDeleteErr) done(d2lClassDeleteErr);

								// Set assertions
								(d2lClassDeleteRes.body._id).should.equal(d2lClassSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete D2l class instance if not signed in', function(done) {
		// Set D2l class user 
		d2lClass.user = user;

		// Create new D2l class model instance
		var d2lClassObj = new D2lClass(d2lClass);

		// Save the D2l class
		d2lClassObj.save(function() {
			// Try deleting D2l class
			request(app).delete('/d2l-classes/' + d2lClassObj._id)
			.expect(401)
			.end(function(d2lClassDeleteErr, d2lClassDeleteRes) {
				// Set message assertion
				(d2lClassDeleteRes.body.message).should.match('User is not logged in');

				// Handle D2l class error error
				done(d2lClassDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		D2lClass.remove().exec();
		done();
	});
});