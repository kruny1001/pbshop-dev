'use strict';

(function() {
	// D2l hws Controller Spec
	describe('D2l hws Controller Tests', function() {
		// Initialize global variables
		var D2lHwsController,
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

			// Initialize the D2l hws controller.
			D2lHwsController = $controller('D2lHwsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one D2l hw object fetched from XHR', inject(function(D2lHws) {
			// Create sample D2l hw using the D2l hws service
			var sampleD2lHw = new D2lHws({
				name: 'New D2l hw'
			});

			// Create a sample D2l hws array that includes the new D2l hw
			var sampleD2lHws = [sampleD2lHw];

			// Set GET response
			$httpBackend.expectGET('d2l-hws').respond(sampleD2lHws);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lHws).toEqualData(sampleD2lHws);
		}));

		it('$scope.findOne() should create an array with one D2l hw object fetched from XHR using a d2lHwId URL parameter', inject(function(D2lHws) {
			// Define a sample D2l hw object
			var sampleD2lHw = new D2lHws({
				name: 'New D2l hw'
			});

			// Set the URL parameter
			$stateParams.d2lHwId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/d2l-hws\/([0-9a-fA-F]{24})$/).respond(sampleD2lHw);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lHw).toEqualData(sampleD2lHw);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(D2lHws) {
			// Create a sample D2l hw object
			var sampleD2lHwPostData = new D2lHws({
				name: 'New D2l hw'
			});

			// Create a sample D2l hw response
			var sampleD2lHwResponse = new D2lHws({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l hw'
			});

			// Fixture mock form input values
			scope.name = 'New D2l hw';

			// Set POST response
			$httpBackend.expectPOST('d2l-hws', sampleD2lHwPostData).respond(sampleD2lHwResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the D2l hw was created
			expect($location.path()).toBe('/d2l-hws/' + sampleD2lHwResponse._id);
		}));

		it('$scope.update() should update a valid D2l hw', inject(function(D2lHws) {
			// Define a sample D2l hw put data
			var sampleD2lHwPutData = new D2lHws({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l hw'
			});

			// Mock D2l hw in scope
			scope.d2lHw = sampleD2lHwPutData;

			// Set PUT response
			$httpBackend.expectPUT(/d2l-hws\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/d2l-hws/' + sampleD2lHwPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid d2lHwId and remove the D2l hw from the scope', inject(function(D2lHws) {
			// Create new D2l hw object
			var sampleD2lHw = new D2lHws({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new D2l hws array and include the D2l hw
			scope.d2lHws = [sampleD2lHw];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/d2l-hws\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleD2lHw);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.d2lHws.length).toBe(0);
		}));
	});
}());