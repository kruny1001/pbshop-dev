'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	TheCleanCrud = mongoose.model('TheCleanCrud');

/**
 * Globals
 */
var user, theCleanCrud;

/**
 * Unit tests
 */
describe('The clean crud Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			theCleanCrud = new TheCleanCrud({
				name: 'The clean crud Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return theCleanCrud.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			theCleanCrud.name = '';

			return theCleanCrud.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		TheCleanCrud.remove().exec();
		User.remove().exec();

		done();
	});
});