'use strict';

(function() {
	// D2l classes Controller Spec
	describe('D2l classes Controller Tests', function() {
		// Initialize global variables
		var D2lClassesController,
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

			// Initialize the D2l classes controller.
			D2lClassesController = $controller('D2lClassesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one D2l class object fetched from XHR', inject(function(D2lClasses) {
			// Create sample D2l class using the D2l classes service
			var sampleD2lClass = new D2lClasses({
				name: 'New D2l class'
			});

			// Create a sample D2l classes array that includes the new D2l class
			var sampleD2lClasses = [sampleD2lClass];

			// Set GET response
			$httpBackend.expectGET('d2l-classes').respond(sampleD2lClasses);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lClasses).toEqualData(sampleD2lClasses);
		}));

		it('$scope.findOne() should create an array with one D2l class object fetched from XHR using a d2lClassId URL parameter', inject(function(D2lClasses) {
			// Define a sample D2l class object
			var sampleD2lClass = new D2lClasses({
				name: 'New D2l class'
			});

			// Set the URL parameter
			$stateParams.d2lClassId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/d2l-classes\/([0-9a-fA-F]{24})$/).respond(sampleD2lClass);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lClass).toEqualData(sampleD2lClass);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(D2lClasses) {
			// Create a sample D2l class object
			var sampleD2lClassPostData = new D2lClasses({
				name: 'New D2l class'
			});

			// Create a sample D2l class response
			var sampleD2lClassResponse = new D2lClasses({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l class'
			});

			// Fixture mock form input values
			scope.name = 'New D2l class';

			// Set POST response
			$httpBackend.expectPOST('d2l-classes', sampleD2lClassPostData).respond(sampleD2lClassResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the D2l class was created
			expect($location.path()).toBe('/d2l-classes/' + sampleD2lClassResponse._id);
		}));

		it('$scope.update() should update a valid D2l class', inject(function(D2lClasses) {
			// Define a sample D2l class put data
			var sampleD2lClassPutData = new D2lClasses({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l class'
			});

			// Mock D2l class in scope
			scope.d2lClass = sampleD2lClassPutData;

			// Set PUT response
			$httpBackend.expectPUT(/d2l-classes\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/d2l-classes/' + sampleD2lClassPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid d2lClassId and remove the D2l class from the scope', inject(function(D2lClasses) {
			// Create new D2l class object
			var sampleD2lClass = new D2lClasses({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new D2l classes array and include the D2l class
			scope.d2lClasses = [sampleD2lClass];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/d2l-classes\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleD2lClass);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.d2lClasses.length).toBe(0);
		}));
	});
}());