'use strict';

(function() {
	// D2l grades Controller Spec
	describe('D2l grades Controller Tests', function() {
		// Initialize global variables
		var D2lGradesController,
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

			// Initialize the D2l grades controller.
			D2lGradesController = $controller('D2lGradesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one D2l grade object fetched from XHR', inject(function(D2lGrades) {
			// Create sample D2l grade using the D2l grades service
			var sampleD2lGrade = new D2lGrades({
				name: 'New D2l grade'
			});

			// Create a sample D2l grades array that includes the new D2l grade
			var sampleD2lGrades = [sampleD2lGrade];

			// Set GET response
			$httpBackend.expectGET('d2l-grades').respond(sampleD2lGrades);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lGrades).toEqualData(sampleD2lGrades);
		}));

		it('$scope.findOne() should create an array with one D2l grade object fetched from XHR using a d2lGradeId URL parameter', inject(function(D2lGrades) {
			// Define a sample D2l grade object
			var sampleD2lGrade = new D2lGrades({
				name: 'New D2l grade'
			});

			// Set the URL parameter
			$stateParams.d2lGradeId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/d2l-grades\/([0-9a-fA-F]{24})$/).respond(sampleD2lGrade);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.d2lGrade).toEqualData(sampleD2lGrade);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(D2lGrades) {
			// Create a sample D2l grade object
			var sampleD2lGradePostData = new D2lGrades({
				name: 'New D2l grade'
			});

			// Create a sample D2l grade response
			var sampleD2lGradeResponse = new D2lGrades({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l grade'
			});

			// Fixture mock form input values
			scope.name = 'New D2l grade';

			// Set POST response
			$httpBackend.expectPOST('d2l-grades', sampleD2lGradePostData).respond(sampleD2lGradeResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the D2l grade was created
			expect($location.path()).toBe('/d2l-grades/' + sampleD2lGradeResponse._id);
		}));

		it('$scope.update() should update a valid D2l grade', inject(function(D2lGrades) {
			// Define a sample D2l grade put data
			var sampleD2lGradePutData = new D2lGrades({
				_id: '525cf20451979dea2c000001',
				name: 'New D2l grade'
			});

			// Mock D2l grade in scope
			scope.d2lGrade = sampleD2lGradePutData;

			// Set PUT response
			$httpBackend.expectPUT(/d2l-grades\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/d2l-grades/' + sampleD2lGradePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid d2lGradeId and remove the D2l grade from the scope', inject(function(D2lGrades) {
			// Create new D2l grade object
			var sampleD2lGrade = new D2lGrades({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new D2l grades array and include the D2l grade
			scope.d2lGrades = [sampleD2lGrade];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/d2l-grades\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleD2lGrade);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.d2lGrades.length).toBe(0);
		}));
	});
}());