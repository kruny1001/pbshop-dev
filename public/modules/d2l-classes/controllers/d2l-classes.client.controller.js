'use strict';

// D2l classes controller
angular.module('d2l-classes').controller('D2lClassesController',
	['$scope', '$stateParams', '$location', '$mdDialog', 'Authentication', 'D2lHws','D2lClasses','D2lHwsByClass','D2lHwsSubmitsTrue','D2lGrades','D2lHwsSubmitsTrueByClass','D2lHwsByOriginDocId',
	function($scope, $stateParams, $location, $mdDialog, Authentication, D2lHws, D2lClasses, D2lHwsByClass, D2lHwsSubmitsTrue, D2lGrades, D2lHwsSubmitsTrueByClass, D2lHwsByOriginDocId) {
		$scope.authentication = Authentication;
		$scope.numClasses = 0;

		// Create new D2l class
		$scope.create = function() {
			// Create new D2l class object
			var d2lClass = new D2lClasses ({
				name: this.name,
				prefix:this.prefix
			});

			// Redirect after save
			d2lClass.$save(function(response) {
				console.log('ddd');
				$mdDialog.hide();
				//$location.path('d2l-classes/' + response._id);

				// Clear form fields
				$scope.name = '';
                $scope.prefix = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing D2l class
		$scope.remove = function(d2lClass) {
			if ( d2lClass ) { 
				d2lClass.$remove();

				for (var i in $scope.d2lClasses) {
					if ($scope.d2lClasses [i] === d2lClass) {
						$scope.d2lClasses.splice(i, 1);
					}
				}
			} else {
				$scope.d2lClass.$remove(function() {
					$location.path('d2l-classes');
				});
			}
		};

		// Update existing D2l class
		$scope.update = function() {
			var d2lClass = $scope.d2lClass;

			d2lClass.$update(function() {
				$location.path('d2l-classes/' + d2lClass._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of D2l classes
		$scope.find = function() {
			$scope.d2lClasses = D2lClasses.query();
		};

		// Find existing D2l class
		$scope.findOne = function() {
			$scope.d2lClass = D2lClasses.get({
				d2lClassId: $stateParams.d2lClassId
			});

			$scope.d2lClass.$promise.then(function(result){
				$scope.numClasses = result.length;

				$scope.hws = D2lHwsByClass.get({classId: result._id},function(result){
					$scope.hwsCopy = [].concat(result);
				});

				$scope.submittedHW = D2lHwsSubmitsTrueByClass.get({classId: result._id},function(result){
					$scope.submittedHWCopy = [].concat(result);

					result.forEach(function(value, index){
						$scope.submittedHWCopy[index].hwInfo = D2lHwsByOriginDocId.get({gdocId: result[0].originId}, function(result){
							//$scope.submittedHWCopy.hwInfo = result[0];
						});
					})

				});
			});





			$scope.gradeCollection = D2lGrades.query();
			$scope.gradeCollection.$promise.then(function (result) {
				$scope.gradeCollectionCopy = [].concat(result);

				result.forEach(function(value, index){
					$scope.gradeCollectionCopy[index].hwInfo = D2lHws.get({d2lHwId: result[0].Assignment}, function(result){
						console.log(result);
					});
				})
				//D2lHws
			});


		};



		$scope.showNewAssign = function(ev){
			$mdDialog.show({
				controller: D2lHwDialogCtrl,
				templateUrl: 'modules/openboard/template/tutorial/newAssign-dialog.tpl.html',
				targetEvent: ev,
				clickOutsideToClose: false,
				preserveScope: false,
				locals: {project:{gdocId: ''}},
				bindToController: true,
				//onComplete: reset

			}).then(
				function(){
					//$log.debug('cancel');
				},
				function(){
					//$log.debug('created Assignment');
					$scope.hws = D2lHwsByClass.get({classId: $scope.d2lClass._id},function(result){
						$scope.hwsCopy = [].concat(result);
					});
				}
			);

			function D2lHwDialogCtrl(scope, $timeout, $mdDialog, D2lHws, D2lClassesOwnership, GDriveSelectResult){

				scope.$on('handleEmit', function(event, args) {
					console.log('broadcast is invoked');
					scope.project.gdocId=args.message;
					scope.$digest();
				});
				scope.cancel = function(){
					$mdDialog.cancel();
					scope.docs = "";
					scope.project = '';
					scope.projectForm = '';
					args.message = '';
					scope.$digest();
					console.log('B');;
				};
				scope.docs = GDriveSelectResult;
				scope.project = {gdocId : scope.docs.id};

				var dDate = new Date();
				dDate.setHours(23,59,59,999);

				scope.project = {
					dDate: dDate
					//gdocId : scope.docs.id
					//desc: 'Nuclear Missile Defense System',
				};

				scope.loadClasses = function() {
					console.log('Load Class is invoked');
					return $timeout(function() {
						scope.classes = D2lClassesOwnership.query();
					}, 650);
				};

				scope.createNewRecord = function() {
					console.log('Create');
					// Create new D2l hw object
					scope.project.dDate.setHours(23,59,59,999);
					var d2lHw = new D2lHws (scope.project);
					d2lHw.class = d2lHw.class._id;

					// Redirect after save
					d2lHw.$save(function(response) {
						//$location.path('d2l-hws/' + response._id);
						// Clear form fields
						scope.name = '';
						scope.project.gdocId = '';
						scope.projectForm = null;
						$mdDialog.cancel();
						scope.project = null;

					}, function(errorResponse) {
						scope.error = errorResponse.data.message;
					});
				};
			}
		};
	}
]);

angular.module('d2l-classes')
	.controller('mainController', function($scope, $state) {
		$scope.pageClass = 'page-home';
		$scope.goTo = function(name){
			$state.go(name);
		}
	})
	.controller('aboutController', function($scope, $state) {
		$scope.pageClass = 'page-about';
		$scope.goTo = function(name){
			$state.go(name);
		}
	})
	.controller('contactController', function($scope, $state) {
		$scope.pageClass = 'page-contact';
		$scope.goTo = function(name){
			$state.go(name);
		}
	});

