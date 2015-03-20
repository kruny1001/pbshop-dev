'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	D2lGrade = mongoose.model('D2lGrade');

/**
 * Globals
 */
var user, d2lGrade;

/**
 * Unit tests
 */
describe('D2l grade Model Unit Tests:', function() {
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
			d2lGrade = new D2lGrade({
				name: 'D2l grade Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return d2lGrade.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			d2lGrade.name = '';

			return d2lGrade.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		D2lGrade.remove().exec();
		User.remove().exec();

		done();
	});
});