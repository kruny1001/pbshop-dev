'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	D2lHwsSubmit = mongoose.model('D2lHwsSubmit');

/**
 * Globals
 */
var user, d2lHwsSubmit;

/**
 * Unit tests
 */
describe('D2l hws submit Model Unit Tests:', function() {
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
			d2lHwsSubmit = new D2lHwsSubmit({
				name: 'D2l hws submit Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return d2lHwsSubmit.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			d2lHwsSubmit.name = '';

			return d2lHwsSubmit.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		D2lHwsSubmit.remove().exec();
		User.remove().exec();

		done();
	});
});