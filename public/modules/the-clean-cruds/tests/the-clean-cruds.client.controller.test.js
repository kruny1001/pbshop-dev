'use strict';

(function() {
	// The clean cruds Controller Spec
	describe('The clean cruds Controller Tests', function() {
		// Initialize global variables
		var TheCleanCrudsController,
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

			// Initialize the The clean cruds controller.
			TheCleanCrudsController = $controller('TheCleanCrudsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one The clean crud object fetched from XHR', inject(function(TheCleanCruds) {
			// Create sample The clean crud using the The clean cruds service
			var sampleTheCleanCrud = new TheCleanCruds({
				name: 'New The clean crud'
			});

			// Create a sample The clean cruds array that includes the new The clean crud
			var sampleTheCleanCruds = [sampleTheCleanCrud];

			// Set GET response
			$httpBackend.expectGET('the-clean-cruds').respond(sampleTheCleanCruds);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.theCleanCruds).toEqualData(sampleTheCleanCruds);
		}));

		it('$scope.findOne() should create an array with one The clean crud object fetched from XHR using a theCleanCrudId URL parameter', inject(function(TheCleanCruds) {
			// Define a sample The clean crud object
			var sampleTheCleanCrud = new TheCleanCruds({
				name: 'New The clean crud'
			});

			// Set the URL parameter
			$stateParams.theCleanCrudId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/the-clean-cruds\/([0-9a-fA-F]{24})$/).respond(sampleTheCleanCrud);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.theCleanCrud).toEqualData(sampleTheCleanCrud);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(TheCleanCruds) {
			// Create a sample The clean crud object
			var sampleTheCleanCrudPostData = new TheCleanCruds({
				name: 'New The clean crud'
			});

			// Create a sample The clean crud response
			var sampleTheCleanCrudResponse = new TheCleanCruds({
				_id: '525cf20451979dea2c000001',
				name: 'New The clean crud'
			});

			// Fixture mock form input values
			scope.name = 'New The clean crud';

			// Set POST response
			$httpBackend.expectPOST('the-clean-cruds', sampleTheCleanCrudPostData).respond(sampleTheCleanCrudResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the The clean crud was created
			expect($location.path()).toBe('/the-clean-cruds/' + sampleTheCleanCrudResponse._id);
		}));

		it('$scope.update() should update a valid The clean crud', inject(function(TheCleanCruds) {
			// Define a sample The clean crud put data
			var sampleTheCleanCrudPutData = new TheCleanCruds({
				_id: '525cf20451979dea2c000001',
				name: 'New The clean crud'
			});

			// Mock The clean crud in scope
			scope.theCleanCrud = sampleTheCleanCrudPutData;

			// Set PUT response
			$httpBackend.expectPUT(/the-clean-cruds\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/the-clean-cruds/' + sampleTheCleanCrudPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid theCleanCrudId and remove the The clean crud from the scope', inject(function(TheCleanCruds) {
			// Create new The clean crud object
			var sampleTheCleanCrud = new TheCleanCruds({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new The clean cruds array and include the The clean crud
			scope.theCleanCruds = [sampleTheCleanCrud];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/the-clean-cruds\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleTheCleanCrud);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.theCleanCruds.length).toBe(0);
		}));
	});
}());