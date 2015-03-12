'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	TheCleanCrud = mongoose.model('TheCleanCrud'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, theCleanCrud;

/**
 * The clean crud routes tests
 */
describe('The clean crud CRUD tests', function() {
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

		// Save a user to the test db and create new The clean crud
		user.save(function() {
			theCleanCrud = {
				name: 'The clean crud Name'
			};

			done();
		});
	});

	it('should be able to save The clean crud instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new The clean crud
				agent.post('/the-clean-cruds')
					.send(theCleanCrud)
					.expect(200)
					.end(function(theCleanCrudSaveErr, theCleanCrudSaveRes) {
						// Handle The clean crud save error
						if (theCleanCrudSaveErr) done(theCleanCrudSaveErr);

						// Get a list of The clean cruds
						agent.get('/the-clean-cruds')
							.end(function(theCleanCrudsGetErr, theCleanCrudsGetRes) {
								// Handle The clean crud save error
								if (theCleanCrudsGetErr) done(theCleanCrudsGetErr);

								// Get The clean cruds list
								var theCleanCruds = theCleanCrudsGetRes.body;

								// Set assertions
								(theCleanCruds[0].user._id).should.equal(userId);
								(theCleanCruds[0].name).should.match('The clean crud Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save The clean crud instance if not logged in', function(done) {
		agent.post('/the-clean-cruds')
			.send(theCleanCrud)
			.expect(401)
			.end(function(theCleanCrudSaveErr, theCleanCrudSaveRes) {
				// Call the assertion callback
				done(theCleanCrudSaveErr);
			});
	});

	it('should not be able to save The clean crud instance if no name is provided', function(done) {
		// Invalidate name field
		theCleanCrud.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new The clean crud
				agent.post('/the-clean-cruds')
					.send(theCleanCrud)
					.expect(400)
					.end(function(theCleanCrudSaveErr, theCleanCrudSaveRes) {
						// Set message assertion
						(theCleanCrudSaveRes.body.message).should.match('Please fill The clean crud name');
						
						// Handle The clean crud save error
						done(theCleanCrudSaveErr);
					});
			});
	});

	it('should be able to update The clean crud instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new The clean crud
				agent.post('/the-clean-cruds')
					.send(theCleanCrud)
					.expect(200)
					.end(function(theCleanCrudSaveErr, theCleanCrudSaveRes) {
						// Handle The clean crud save error
						if (theCleanCrudSaveErr) done(theCleanCrudSaveErr);

						// Update The clean crud name
						theCleanCrud.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing The clean crud
						agent.put('/the-clean-cruds/' + theCleanCrudSaveRes.body._id)
							.send(theCleanCrud)
							.expect(200)
							.end(function(theCleanCrudUpdateErr, theCleanCrudUpdateRes) {
								// Handle The clean crud update error
								if (theCleanCrudUpdateErr) done(theCleanCrudUpdateErr);

								// Set assertions
								(theCleanCrudUpdateRes.body._id).should.equal(theCleanCrudSaveRes.body._id);
								(theCleanCrudUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of The clean cruds if not signed in', function(done) {
		// Create new The clean crud model instance
		var theCleanCrudObj = new TheCleanCrud(theCleanCrud);

		// Save the The clean crud
		theCleanCrudObj.save(function() {
			// Request The clean cruds
			request(app).get('/the-clean-cruds')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single The clean crud if not signed in', function(done) {
		// Create new The clean crud model instance
		var theCleanCrudObj = new TheCleanCrud(theCleanCrud);

		// Save the The clean crud
		theCleanCrudObj.save(function() {
			request(app).get('/the-clean-cruds/' + theCleanCrudObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', theCleanCrud.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete The clean crud instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new The clean crud
				agent.post('/the-clean-cruds')
					.send(theCleanCrud)
					.expect(200)
					.end(function(theCleanCrudSaveErr, theCleanCrudSaveRes) {
						// Handle The clean crud save error
						if (theCleanCrudSaveErr) done(theCleanCrudSaveErr);

						// Delete existing The clean crud
						agent.delete('/the-clean-cruds/' + theCleanCrudSaveRes.body._id)
							.send(theCleanCrud)
							.expect(200)
							.end(function(theCleanCrudDeleteErr, theCleanCrudDeleteRes) {
								// Handle The clean crud error error
								if (theCleanCrudDeleteErr) done(theCleanCrudDeleteErr);

								// Set assertions
								(theCleanCrudDeleteRes.body._id).should.equal(theCleanCrudSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete The clean crud instance if not signed in', function(done) {
		// Set The clean crud user 
		theCleanCrud.user = user;

		// Create new The clean crud model instance
		var theCleanCrudObj = new TheCleanCrud(theCleanCrud);

		// Save the The clean crud
		theCleanCrudObj.save(function() {
			// Try deleting The clean crud
			request(app).delete('/the-clean-cruds/' + theCleanCrudObj._id)
			.expect(401)
			.end(function(theCleanCrudDeleteErr, theCleanCrudDeleteRes) {
				// Set message assertion
				(theCleanCrudDeleteRes.body.message).should.match('User is not logged in');

				// Handle The clean crud error error
				done(theCleanCrudDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		TheCleanCrud.remove().exec();
		done();
	});
});