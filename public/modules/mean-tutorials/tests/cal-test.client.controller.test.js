'use strict';

(function() {
	// Cal test Controller Spec
	describe('Cal test Controller Tests', function() {
		// Initialize global variables
		var CalTestController,
			scope;

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Initialize the Cal test controller.
			CalTestController = $controller('Project2Controller', {
				$scope: scope
			});
		}));

        var a;
		it('Check scope variables', inject(function() {
            a = true;
            expect(scope.id).toBe('meanT-project2');
            expect(a).toBe(true);

		}));
	});

    describe("The 'toBe' matcher compares with ===", function(){
        it("and has a positive case", function() {
            expect(true).toBe(true);
        });
        it("and can have a negative case", function() {
            expect(false).not.toBe(true);
        });

        it("The 'toBe' matcher compares with ===", function(){
            var a = 12;
            var b = a;

            expect(a).toBe(b);
            expect(a).not.toBe(null);
        });

        describe("The 'toEqual' matcher", function(){
            it("works for simple literals and variables", function() {
                var a = 12;
                expect(a).toEqual(12);
            });

            it("should work for objects", function() {
                var foo = {
                    a:12,
                    b:34
                };
                var bar = {
                    a:12,
                    b:34
                };
                expect(foo).toEqual(bar);
            });

            it("The 'toBeDefined' matcher compares against 'undefined'", function(){
                var a = {
                    foo:'foo'
                };

                expect(a.foo).toBeDefined();
                expect(a.bar).not.toBeDefined();
            });

        });

        it("The 'toMatch' matcher is for regular expressions", function() {
            var message = "foo bar baz";

            expect(message).toMatch(/bar/);
            expect(message).toMatch("bar");
            expect(message).not.toMatch(/quux/);
        });

        it("The 'toBeDefined' matcher compares against `undefined`", function() {
            var a = {
                foo: "foo"
            };

            expect(a.foo).toBeDefined();
            expect(a.bar).not.toBeDefined();
        });




    });
}());
