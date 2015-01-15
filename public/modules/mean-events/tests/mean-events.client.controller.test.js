'use strict';

(function() {
	// Mean events Controller Spec
	describe('Mean events Controller Tests', function() {
		// Initialize global variables
		var MeanEventsController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Mean events controller.
			MeanEventsController = $controller('MeanEventsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Mean event object fetched from XHR', inject(function(MeanEvents) {
			// Create sample Mean event using the Mean events service
			var sampleMeanEvent = new MeanEvents({
				name: 'New Mean event'
			});

			// Create a sample Mean events array that includes the new Mean event
			var sampleMeanEvents = [sampleMeanEvent];

			// Set GET response
			$httpBackend.expectGET('mean-events').respond(sampleMeanEvents);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.meanEvents).toEqualData(sampleMeanEvents);
		}));

		it('$scope.findOne() should create an array with one Mean event object fetched from XHR using a meanEventId URL parameter', inject(function(MeanEvents) {
			// Define a sample Mean event object
			var sampleMeanEvent = new MeanEvents({
				name: 'New Mean event'
			});

			// Set the URL parameter
			$stateParams.meanEventId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/mean-events\/([0-9a-fA-F]{24})$/).respond(sampleMeanEvent);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.meanEvent).toEqualData(sampleMeanEvent);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(MeanEvents) {
			// Create a sample Mean event object
			var sampleMeanEventPostData = new MeanEvents({
				name: 'New Mean event'
			});

			// Create a sample Mean event response
			var sampleMeanEventResponse = new MeanEvents({
				_id: '525cf20451979dea2c000001',
				name: 'New Mean event'
			});

			// Fixture mock form input values
			scope.name = 'New Mean event';

			// Set POST response
			$httpBackend.expectPOST('mean-events', sampleMeanEventPostData).respond(sampleMeanEventResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Mean event was created
			expect($location.path()).toBe('/mean-events/' + sampleMeanEventResponse._id);
		}));

		it('$scope.update() should update a valid Mean event', inject(function(MeanEvents) {
			// Define a sample Mean event put data
			var sampleMeanEventPutData = new MeanEvents({
				_id: '525cf20451979dea2c000001',
				name: 'New Mean event'
			});

			// Mock Mean event in scope
			scope.meanEvent = sampleMeanEventPutData;

			// Set PUT response
			$httpBackend.expectPUT(/mean-events\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/mean-events/' + sampleMeanEventPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid meanEventId and remove the Mean event from the scope', inject(function(MeanEvents) {
			// Create new Mean event object
			var sampleMeanEvent = new MeanEvents({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Mean events array and include the Mean event
			scope.meanEvents = [sampleMeanEvent];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/mean-events\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleMeanEvent);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.meanEvents.length).toBe(0);
		}));
	});
}());