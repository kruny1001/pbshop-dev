'use strict';

(function() {
	// Carzen devs Controller Spec
	describe('Carzen devs Controller Tests', function() {
		// Initialize global variables
		var CarzenDevsController,
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

			// Initialize the Carzen devs controller.
			CarzenDevsController = $controller('CarzenDevsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Carzen dev object fetched from XHR', inject(function(CarzenDevs) {
			// Create sample Carzen dev using the Carzen devs service
			var sampleCarzenDev = new CarzenDevs({
				name: 'New Carzen dev'
			});

			// Create a sample Carzen devs array that includes the new Carzen dev
			var sampleCarzenDevs = [sampleCarzenDev];

			// Set GET response
			$httpBackend.expectGET('carzen-devs').respond(sampleCarzenDevs);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.carzenDevs).toEqualData(sampleCarzenDevs);
		}));

		it('$scope.findOne() should create an array with one Carzen dev object fetched from XHR using a carzenDevId URL parameter', inject(function(CarzenDevs) {
			// Define a sample Carzen dev object
			var sampleCarzenDev = new CarzenDevs({
				name: 'New Carzen dev'
			});

			// Set the URL parameter
			$stateParams.carzenDevId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/carzen-devs\/([0-9a-fA-F]{24})$/).respond(sampleCarzenDev);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.carzenDev).toEqualData(sampleCarzenDev);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(CarzenDevs) {
			// Create a sample Carzen dev object
			var sampleCarzenDevPostData = new CarzenDevs({
				name: 'New Carzen dev'
			});

			// Create a sample Carzen dev response
			var sampleCarzenDevResponse = new CarzenDevs({
				_id: '525cf20451979dea2c000001',
				name: 'New Carzen dev'
			});

			// Fixture mock form input values
			scope.name = 'New Carzen dev';

			// Set POST response
			$httpBackend.expectPOST('carzen-devs', sampleCarzenDevPostData).respond(sampleCarzenDevResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Carzen dev was created
			expect($location.path()).toBe('/carzen-devs/' + sampleCarzenDevResponse._id);
		}));

		it('$scope.update() should update a valid Carzen dev', inject(function(CarzenDevs) {
			// Define a sample Carzen dev put data
			var sampleCarzenDevPutData = new CarzenDevs({
				_id: '525cf20451979dea2c000001',
				name: 'New Carzen dev'
			});

			// Mock Carzen dev in scope
			scope.carzenDev = sampleCarzenDevPutData;

			// Set PUT response
			$httpBackend.expectPUT(/carzen-devs\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/carzen-devs/' + sampleCarzenDevPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid carzenDevId and remove the Carzen dev from the scope', inject(function(CarzenDevs) {
			// Create new Carzen dev object
			var sampleCarzenDev = new CarzenDevs({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Carzen devs array and include the Carzen dev
			scope.carzenDevs = [sampleCarzenDev];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/carzen-devs\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleCarzenDev);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.carzenDevs.length).toBe(0);
		}));
	});
}());