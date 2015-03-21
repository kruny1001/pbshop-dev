'use strict';

(function() {
	// D2l hws submits Controller Spec
	describe('D2l hws submits Controller Tests', function() {
		// Initialize global variables
		var D2lHwsSubmitsController,
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

			// Initialize the D2l hws submits controller.
			D2lHwsSubmitsController = $controller('D2lHwsSubmitsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one D2l hws submit object fetched from XHR', inject(function(D2lHwsSubmits) {
			// Create sample D2l hws submit using the D2l hws submits service
			var sampleD2lHwsSubmit = new D2lHwsSubmits({
				name: 'New D2l hws submit'
			});

			// Create a sample D2l hws submits array that includes the new D2l hws submit
			var sampleD2lHwsSubmits = [sampleD2lHwsSubmit];

			// Set GET response
			$httpBackend.expectGET('d2l-hws-submits').respond(sampleD2lHwsSubmits);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lHwsSubmits).toEqualData(sampleD2lHwsSubmits);
		}));

		it('$scope.findOne() should create an array with one D2l hws submit object fetched from XHR using a d2lHwsSubmitId URL parameter', inject(function(D2lHwsSubmits) {
			// Define a sample D2l hws submit object
			var sampleD2lHwsSubmit = new D2lHwsSubmits({
				name: 'New D2l hws submit'
			});

			// Set the URL parameter
			$stateParams.d2lHwsSubmitId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/d2l-hws-submits\/([0-9a-fA-F]{24})$/).respond(sampleD2lHwsSubmit);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lHwsSubmit).toEqualData(sampleD2lHwsSubmit);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(D2lHwsSubmits) {
			// Create a sample D2l hws submit object
			var sampleD2lHwsSubmitPostData = new D2lHwsSubmits({
				name: 'New D2l hws submit'
			});

			// Create a sample D2l hws submit response
			var sampleD2lHwsSubmitResponse = new D2lHwsSubmits({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l hws submit'
			});

			// Fixture mock form input values
			scope.name = 'New D2l hws submit';

			// Set POST response
			$httpBackend.expectPOST('d2l-hws-submits', sampleD2lHwsSubmitPostData).respond(sampleD2lHwsSubmitResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the D2l hws submit was created
			expect($location.path()).toBe('/d2l-hws-submits/' + sampleD2lHwsSubmitResponse._id);
		}));

		it('$scope.update() should update a valid D2l hws submit', inject(function(D2lHwsSubmits) {
			// Define a sample D2l hws submit put data
			var sampleD2lHwsSubmitPutData = new D2lHwsSubmits({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l hws submit'
			});

			// Mock D2l hws submit in scope
			scope.d2lHwsSubmit = sampleD2lHwsSubmitPutData;

			// Set PUT response
			$httpBackend.expectPUT(/d2l-hws-submits\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/d2l-hws-submits/' + sampleD2lHwsSubmitPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid d2lHwsSubmitId and remove the D2l hws submit from the scope', inject(function(D2lHwsSubmits) {
			// Create new D2l hws submit object
			var sampleD2lHwsSubmit = new D2lHwsSubmits({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new D2l hws submits array and include the D2l hws submit
			scope.d2lHwsSubmits = [sampleD2lHwsSubmit];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/d2l-hws-submits\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleD2lHwsSubmit);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.d2lHwsSubmits.length).toBe(0);
		}));
	});
}());