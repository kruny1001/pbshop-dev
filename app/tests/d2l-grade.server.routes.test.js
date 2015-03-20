'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	D2lGrade = mongoose.model('D2lGrade'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, d2lGrade;

/**
 * D2l grade routes tests
 */
describe('D2l grade CRUD tests', function() {
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

		// Save a user to the test db and create new D2l grade
		user.save(function() {
			d2lGrade = {
				name: 'D2l grade Name'
			};

			done();
		});
	});

	it('should be able to save D2l grade instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l grade
				agent.post('/d2l-grades')
					.send(d2lGrade)
					.expect(200)
					.end(function(d2lGradeSaveErr, d2lGradeSaveRes) {
						// Handle D2l grade save error
						if (d2lGradeSaveErr) done(d2lGradeSaveErr);

						// Get a list of D2l grades
						agent.get('/d2l-grades')
							.end(function(d2lGradesGetErr, d2lGradesGetRes) {
								// Handle D2l grade save error
								if (d2lGradesGetErr) done(d2lGradesGetErr);

								// Get D2l grades list
								var d2lGrades = d2lGradesGetRes.body;

								// Set assertions
								(d2lGrades[0].user._id).should.equal(userId);
								(d2lGrades[0].name).should.match('D2l grade Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save D2l grade instance if not logged in', function(done) {
		agent.post('/d2l-grades')
			.send(d2lGrade)
			.expect(401)
			.end(function(d2lGradeSaveErr, d2lGradeSaveRes) {
				// Call the assertion callback
				done(d2lGradeSaveErr);
			});
	});

	it('should not be able to save D2l grade instance if no name is provided', function(done) {
		// Invalidate name field
		d2lGrade.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l grade
				agent.post('/d2l-grades')
					.send(d2lGrade)
					.expect(400)
					.end(function(d2lGradeSaveErr, d2lGradeSaveRes) {
						// Set message assertion
						(d2lGradeSaveRes.body.message).should.match('Please fill D2l grade name');
						
						// Handle D2l grade save error
						done(d2lGradeSaveErr);
					});
			});
	});

	it('should be able to update D2l grade instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l grade
				agent.post('/d2l-grades')
					.send(d2lGrade)
					.expect(200)
					.end(function(d2lGradeSaveErr, d2lGradeSaveRes) {
						// Handle D2l grade save error
						if (d2lGradeSaveErr) done(d2lGradeSaveErr);

						// Update D2l grade name
						d2lGrade.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing D2l grade
						agent.put('/d2l-grades/' + d2lGradeSaveRes.body._id)
							.send(d2lGrade)
							.expect(200)
							.end(function(d2lGradeUpdateErr, d2lGradeUpdateRes) {
								// Handle D2l grade update error
								if (d2lGradeUpdateErr) done(d2lGradeUpdateErr);

								// Set assertions
								(d2lGradeUpdateRes.body._id).should.equal(d2lGradeSaveRes.body._id);
								(d2lGradeUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of D2l grades if not signed in', function(done) {
		// Create new D2l grade model instance
		var d2lGradeObj = new D2lGrade(d2lGrade);

		// Save the D2l grade
		d2lGradeObj.save(function() {
			// Request D2l grades
			request(app).get('/d2l-grades')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single D2l grade if not signed in', function(done) {
		// Create new D2l grade model instance
		var d2lGradeObj = new D2lGrade(d2lGrade);

		// Save the D2l grade
		d2lGradeObj.save(function() {
			request(app).get('/d2l-grades/' + d2lGradeObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', d2lGrade.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete D2l grade instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new D2l grade
				agent.post('/d2l-grades')
					.send(d2lGrade)
					.expect(200)
					.end(function(d2lGradeSaveErr, d2lGradeSaveRes) {
						// Handle D2l grade save error
						if (d2lGradeSaveErr) done(d2lGradeSaveErr);

						// Delete existing D2l grade
						agent.delete('/d2l-grades/' + d2lGradeSaveRes.body._id)
							.send(d2lGrade)
							.expect(200)
							.end(function(d2lGradeDeleteErr, d2lGradeDeleteRes) {
								// Handle D2l grade error error
								if (d2lGradeDeleteErr) done(d2lGradeDeleteErr);

								// Set assertions
								(d2lGradeDeleteRes.body._id).should.equal(d2lGradeSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete D2l grade instance if not signed in', function(done) {
		// Set D2l grade user 
		d2lGrade.user = user;

		// Create new D2l grade model instance
		var d2lGradeObj = new D2lGrade(d2lGrade);

		// Save the D2l grade
		d2lGradeObj.save(function() {
			// Try deleting D2l grade
			request(app).delete('/d2l-grades/' + d2lGradeObj._id)
			.expect(401)
			.end(function(d2lGradeDeleteErr, d2lGradeDeleteRes) {
				// Set message assertion
				(d2lGradeDeleteRes.body.message).should.match('User is not logged in');

				// Handle D2l grade error error
				done(d2lGradeDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		D2lGrade.remove().exec();
		done();
	});
});