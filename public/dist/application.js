'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'mean';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils', 'ngMaterial', 'ng-context-menu'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('articles');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('banners');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
/**
 * Created by Kevin on 2014-11-26.
 */

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('disqus');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('g-drive');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('img-utility');

'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('payments');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('products');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('seller-interface');

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('user-interface');

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('utility');

'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Articles', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'New Article', 'articles/create');
	}
]);
'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listArticles', {
			url: '/articles',
			templateUrl: 'modules/articles/views/list-articles.client.view.html'
		}).
		state('createArticle', {
			url: '/articles/create',
			templateUrl: 'modules/articles/views/create-article.client.view.html'
		}).
		state('viewArticle', {
			url: '/articles/:articleId',
			templateUrl: 'modules/articles/views/view-article.client.view.html'
		}).
		state('editArticle', {
			url: '/articles/:articleId/edit',
			templateUrl: 'modules/articles/views/edit-article.client.view.html'
		});
	}
]);
'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var article = new Articles({
				title: this.title,
				content: this.content
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);
'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('articles').factory('Articles', ['$resource',
	function($resource) {
		return $resource('articles/:articleId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('banners').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Banners', 'banners', 'dropdown', '/banners(/create)?');
		Menus.addSubMenuItem('topbar', 'banners', 'List Banners', 'banners');
		Menus.addSubMenuItem('topbar', 'banners', 'New Banner', 'banners/create');
	}
]);
'use strict';

//Setting up route
angular.module('banners').config(['$stateProvider',
	function($stateProvider) {
		// Banners state routing
		$stateProvider.
		state('listBanners', {
			url: '/banners',
			templateUrl: 'modules/banners/views/list-banners.client.view.html'
		}).
		state('createBanner', {
			url: '/banners/create',
			templateUrl: 'modules/banners/views/create-banner.client.view.html'
		}).
		state('viewBanner', {
			url: '/banners/:bannerId',
			templateUrl: 'modules/banners/views/view-banner.client.view.html'
		}).
		state('editBanner', {
			url: '/banners/:bannerId/edit',
			templateUrl: 'modules/banners/views/edit-banner.client.view.html'
		});
	}
]);
'use strict';

// Banners controller
angular.module('banners').controller('BannersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Banners', 'Products', 'ProductsBanner',
	function($scope, $stateParams, $location, Authentication, Banners, Products, ProductsBanner) {
		$scope.authentication = Authentication;

		// Create new Banner
		$scope.create = function() {
			// Create new Banner object
			var banner = new Banners ({
				name: this.name,
                bannerTag: this.bannerTag
			});

			// Redirect after save
			banner.$save(function(response) {
				$location.path('banners/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
            this.bannerTag = '';
		};

		// Remove existing Banner
		$scope.remove = function( banner ) {
			if ( banner ) { banner.$remove();

				for (var i in $scope.banners ) {
					if ($scope.banners [i] === banner ) {
						$scope.banners.splice(i, 1);
					}
				}
			} else {
				$scope.banner.$remove(function() {
					$location.path('banners');
				});
			}
		};

		// Update existing Banner
		$scope.update = function() {
			var banner = $scope.banner ;

			banner.$update(function() {
				$location.path('banners/' + banner._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Banners
		$scope.find = function() {
			$scope.banners = Banners.query();
		};

		// Find existing Banner
		$scope.findOne = function() {
			$scope.banner = Banners.get({ 
				bannerId: $stateParams.bannerId
			});
		};

        $scope.findProductOne = function(){
            $scope.banner = Banners.get({
                bannerId: $stateParams.bannerId
            });

            $scope.products= Products.query({
                bannerId: $stateParams.bannerId
            });
        };

        $scope.toCreateProduct = function(){
            $location.path('products/create/'+$stateParams.bannerId);
        };

        // should be changed
        $scope.toEditPoduct = function(){
            $location.path('products/list/'+$stateParams.bannerId);
        };

        $scope.findProductUnderBanner = function() {
            console.log('banner id is '+ $stateParams.bannerId);
            $scope.products = ProductsBanner.query({},{bannerId:$stateParams.bannerId});
        }



	}
]);
'use strict';

//Banners service used to communicate Banners REST endpoints
angular.module('banners').factory('Banners', ['$resource',
	function($resource) {
		return $resource('banners/:bannerId', {
            bannerId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
            query:  {
                method:'GET',
                isArray:true
            }
		});
	}
]);

angular.module('banners').factory('BannerByUserId', ['$resource', function($resource) {
	return $resource('banners/find/:userId', {
		userId: '@userId'
	}, {
		update: {
			method: 'PUT'
		},
		query: {
			method: 'GET',
			isArray: true
		}
	});
}]);
'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');
		// Home state routing
		$stateProvider.
		state('home', {
			url: '/dev',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);


/**
 * Binds a TinyMCE widget to <textarea> elements.
 */
angular.module('ui.tinymce', [])
	.value('uiTinymceConfig', {
		plugins: "image, link, fullscreen, code, table, contextmenu, media",
		contextmenu: "link media image inserttable | cell row column deletetable",
		image_advtab: true,
		image_class_list: [
			{title: 'Responsive Size', value: 'img-responsive'}

		],
		fullscreen_new_window : true,
		fullscreen_settings : {
			theme_advanced_path_location : "top"
		}
	})
	.directive('uiTinymce', ['uiTinymceConfig', function(uiTinymceConfig) {
		uiTinymceConfig = uiTinymceConfig || {};
		var generatedIds = 0;
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ngModel) {
				var expression, options, tinyInstance;
				// generate an ID if not present
				if (!attrs.id) {
					attrs.$set('id', 'uiTinymce' + generatedIds++);
				}
				options = {
					// Update model when calling setContent (such as from the source editor popup)
					setup: function(ed) {
						ed.on('init', function(args) {
							ngModel.$render();
						});
						// Update model on button click
						ed.on('ExecCommand', function(e) {
							ed.save();
							ngModel.$setViewValue(elm.val());
							if (!scope.$$phase) {
								scope.$apply();
							}
						});
						// Update model on keypress
						ed.on('KeyUp', function(e) {
							console.log(ed.isDirty());
							ed.save();
							ngModel.$setViewValue(elm.val());
							if (!scope.$$phase) {
								scope.$apply();
							}
						});
					},
					mode: 'exact',
					elements: attrs.id
				};
				if (attrs.uiTinymce) {
					expression = scope.$eval(attrs.uiTinymce);
				} else {
					expression = {};
				}
				angular.extend(options, uiTinymceConfig, expression);
				setTimeout(function() {
					tinymce.init(options);
				});


				ngModel.$render = function() {
					if (!tinyInstance) {
						tinyInstance = tinymce.get(attrs.id);
					}
					if (tinyInstance) {
						tinyInstance.setContent(ngModel.$viewValue || '');
					}
				};
			}
		};
	}]);

'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication, YT_event) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.firstJumbo = 'first-jumbo-content';
		$scope.secondJumbo = 'second-jumbo-content';
		$scope.thirdJumbo = 'third-jumbo-content';
		var texts = angular.element(document.querySelector('.core-text-anni'));
		var tl = new TimelineMax({repeat:6, repeatDelay:1, yoyo:true});
		tl.staggerTo(texts, 0.2, {className:'+=superShadow', top:'-=10px', ease:Power1.easeIn}, '0.3', 'start');
	}
]);

/**
 * Created by KevinSo on 9/3/2014.
 */

'use strict';


angular.module('core').controller('PlanController', ['$scope', '$element', 'Authentication', 'Getplans',
    function($scope, $element, Authentication, Getplans) {
        //$scope.plans = Getplans;

        $scope.find = function() {
            $scope.plans = Getplans.query();
            //$scope.plans.contents = $sce.trustAsHtml($scope.plans.contents);
        };
        $scope.find();
        //$scope.plans = [{title: 'test1', body:'content', date:""}];
    }

]);


'use strict';

angular.module('core').factory('Getplans', ['$resource',
	function($resource) {
		// Getplans service logic
		// ...

		// Public API
        return $resource('/articles', {
            userID: '@_id'
        }, {
            update: {
                method: 'GET'
            }
        });
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
/**
 * Created by Kevin on 2014-11-26.
 */

(function (angular, window) {
    'use strict';

    var disqusModule = angular.module('disqus', [ ]);

    /**
     * $disqus provider.
     */
    disqusModule.provider('$disqus', function() {
        var TYPE_EMBED = 'embed.js'; // general disqus embed script
        var TYPE_COUNT = 'count.js'; // used for count

        // Placeholder for the disqus shortname
        var shortname;

        /**
         * @return {Element} dom element for script adding
         */
        function getScriptContainer() {
            return (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
        }

        /**
         * @return {String} disqus shortname
         */
        function getShortname() {
            return shortname || window.disqus_shortname;
        }

        /**
         * @param {String} shortname disqus shortname
         * @param {String} file file name to add.
         * @return {String} disqus embed src with embedded shortname
         */
        function getScriptSrc(shortname, file) {
            return '//' + shortname + '.disqus.com/' + file;
        }

        /**
         * Builds the script tag
         *
         * @param {String} src script source
         * @return {Element} script element
         */
        function buildScriptTag(src) {
            var script = document.createElement('script');

            // Configure the script tag
            script.type  = 'text/javascript';
            script.async = true;
            script.src   = src;

            return script;
        }

        /**
         * Searches the given element for defined script tag
         * if its already there then return true. Otherwise return false
         *
         * @param {Element} element element to search within
         * @param {String} scriptSrc script src
         * @return {Boolean} true if its there, false if its not
         */
        function hasScriptTagInPlace(container, scriptSrc) {
            var scripts   = container.getElementsByTagName('script'),
                script, i;

            for (i = 0; i < scripts.length; i += 1) {
                script = scripts[i];

                // Check if the name contains the given values
                // We need to check with indexOf because browsers replace // with their protocol
                if (~script.src.indexOf(scriptSrc)) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Writes disqus globals to window object.
         * Needed for the first load. Otherwise the disqus wouldn't know what thread comments to load.
         *
         * @param {String} id disqus identifier
         * @param {String} url disqus url
         * @param {String} shortname disqus shortname
         */
        function setGlobals(id, url, shortname) {
            window.disqus_identifier = id;
            window.disqus_url        = url;
            window.disqus_shortname  = shortname;
        }

        /**
         * Refreshes the count from DISQUSWIDGETS.
         */
        function getCount() {
            var widgets = window.DISQUSWIDGETS;
            if (widgets && angular.isFunction(widgets.getCount)) {
                widgets.getCount();
            }
        }

        /**
         * Trigger the reset comment call
         * @param  {String} $location location service
         * @param  {String} id Thread id
         */
        function resetCommit($location, id) {
            window.DISQUS.reset({
                reload: true,
                config : function() {
                    this.page.identifier = id;
                    this.page.url        = $location.absUrl();
                }
            });
        }

        /**
         * Adds disqus script tag to header by its type.
         * If the script tag already exists in header then wont continue.
         *
         * Adds script tags by their type.
         * Currently we are using two types:
         *  1. count.js
         *  2. embed.js
         *
         * @param {String} shortname disqus shortname
         * @param {String} type disqus script tag type
         */
        function addScriptTag(shortname, type) {
            var container = getScriptContainer(),
                scriptSrc = getScriptSrc(shortname, type);

            // If it already has a script tag in place then lets not do anything
            // This might happen if the user changes the page faster than then disqus can load
            if (hasScriptTagInPlace(container, scriptSrc)) {
                return;
            }

            // Build the script tag and append it to container
            container.appendChild(buildScriptTag(scriptSrc));
        }


        /**
         * @param {String} sname shortname
         */
        this.setShortname = function(sname) {
            shortname = sname;
        };

        // Provider constructor
        this.$get = [ '$location', function($location) {

            /**
             * Resets the comment for thread.
             * If disqus was not defined then it will add disqus to script tags.
             * If disqus was initialized earlier then it will just use disqus api to reset it
             *
             * @param  {String} id required thread id
             */
            function commit(id) {
                var shortname = getShortname();

                if (!angular.isDefined(shortname)) {
                    throw new Error('No disqus shortname defined');
                } else if (!angular.isDefined(id)) {
                    throw new Error('No disqus thread id defined');
                } else if (angular.isDefined(window.DISQUS)) {
                    resetCommit($location, id);
                } else {
                    setGlobals(id, $location.absUrl(), shortname);
                    addScriptTag(shortname, TYPE_EMBED);
                }
            }

            /**
             * Loads the comment script tag and initiates the comments.
             * Sets the globals according to the current page.
             *
             * If the embed disqus is not added to page then adds that.
             *
             * @param {String} id thread id
             */
            function loadCount(id) {
                setGlobals(id, $location.absUrl(), shortname);
                addScriptTag(getShortname(), TYPE_EMBED);
                addScriptTag(getShortname(), TYPE_COUNT);
                getCount();
            }

            // Expose public api
            return {
                commit       : commit,
                getShortname : getShortname,
                loadCount    : loadCount
            };
        }];
    });

    /**
     * Disqus thread comment directive.
     * Used to display the comments block for a thread.
     */
    disqusModule.directive('disqus', [ '$disqus', function($disqus) {

        return {
            restrict : 'AC',
            replace  : true,
            scope    : {
                id : '=disqus',
            },
            template : '<div id="disqus_thread"></div>',
            link: function link(scope) {
                scope.$watch('id', function(id) {
                    if (angular.isDefined(id)) {
                        $disqus.commit(id);
                    }
                });
            }
        };
    }]);

    /**
     * Disqus comment count directive.
     * Just wraps `disqus-identifier` to load the disqus comments count script tag on page
     */
    disqusModule.directive('disqusIdentifier', [ '$disqus', function($disqus) {
        return {
            restrict : 'A',
            link     : function(scope, elem, attr) {
                $disqus.loadCount(attr.disqusIdentifier);
            }
        };
    }]);

})(angular, this);


'use strict';

var CONFIG = {
	clientId: '574563539488-n0vrevgjp3606l20hfk4rqfk1dc8j3qb.apps.googleusercontent.com',
	developerKey: 'AIzaSyBEGA9BOSoo0DF69RNRh9MsMKDxaVlnT_U',
	scopes: [
		'https://www.googleapis.com/auth/drive',
		'https://www.googleapis.com/auth/drive.appdata',
		'https://www.googleapis.com/auth/plus.me',
		'https://www.googleapis.com/auth/paymentssandbox.make_payments'
	]
};
angular.module('g-drive').value('configGdrive', CONFIG);

//Setting up route
angular.module('g-drive').config(['$stateProvider',
	function($stateProvider) {
	}
]);

/*
 * Created by Kevin on 2014-10-29.
* */

'use strict';

angular.module('g-drive').factory('Googledrive', ['configGdrive',
	function(configGdrive) {
		return {
			createFolder: createFolder,
			findFolder: findFolder,
			getGoogleDriveInfo: getGoogleDriveInfo,
			setupPicker: setupPicker,
			listFolder: listFolder
		};

		function createFolder(FolderName, accessToken){
			var request = gapi.client.request({
				'path': '/drive/v2/files/',
				'method': 'POST',
				'headers': {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + accessToken
				},
				'body':{
					"title" : FolderName,
					"mimeType" : "application/vnd.google-apps.folder"
				}
			});
			request.execute(function(resp) {
				console.log(resp);
			});
		}

		// Search Folder
		function findFolder(callback){
			gapi.client.load('drive', 'v2').then(function(){
				var request = gapi.client.drive.files.list({
					q: "title contains 'URI-'",
					fields: 'items(id\,title)'
				});
				request.then(function(resp){
					//console.log('result File list');
					//console.log(resp);
					callback(resp);
				});
			});
		}

		function getGoogleDriveInfo(){
			gapi.client.load('drive', 'v2').then(function() {
				var request = gapi.client.drive.about.get();
				request.execute(function (resp) {
					console.log('Current user name: ' + resp.name);
					console.log('Root folder ID: ' + resp.rootFolderId);
					console.log('Total quota (bytes): ' + resp.quotaBytesTotal);
					console.log('Used quota (bytes): ' + resp.quotaBytesUsed);
				});
			});
		}

		//Google File Picker Platform
		function setupPicker(accessToken, callback){
			var callbackAfterFindFolder = function(resp){
				var folderID = resp.result.items[0].id;
				var picker = new google.picker.PickerBuilder()
					.setOAuthToken(accessToken)
					.setDeveloperKey(configGdrive.developerKey)
					.addView(new google.picker.DocsUploadView().setParent(folderID))
					.addView(new google.picker.DocsView().setParent(folderID))
					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
					.setLocale('ko')
					//.enableFeature(google.picker.Feature.NAV_HIDDEN)
					.setCallback(callback)
					.build();
				picker.setVisible(true);
			}
			findFolder(callbackAfterFindFolder);


		}

		function listFolder(){
			gapi.client.load('drive', 'v2').then(function() {

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

			});
		}
	}
]);

'use strict';

angular.module('img-utility').directive(
	"lazyImg",['$window', '$document',
	function( $window, $document ) {


		// I manage all the images that are currently being
		// monitored on the page for lazy loading.
		var lazyLoader = (function() {
			// I maintain a list of images that lazy-loading
			// and have yet to be rendered.
			var images = [];

			// I define the render timer for the lazy loading
			// images to that the DOM-querying (for offsets)
			// is chunked in groups.
			var renderTimer = null;
			var renderDelay = 100;

			// I cache the window element as a jQuery reference.
			var win = $( $window );

			// I cache the document document height so that
			// we can respond to changes in the height due to
			// dynamic content.
			var doc = $document;
			var documentHeight = doc.height();
			var documentTimer = null;
			var documentDelay = 2000;

			// I determine if the window dimension events
			// (ie. resize, scroll) are currenlty being
			// monitored for changes.
			var isWatchingWindow = false;


			// ---
			// PUBLIC METHODS.
			// ---


			// I start monitoring the given image for visibility
			// and then render it when necessary.
			function addImage( image ) {

				images.push( image );

				if ( ! renderTimer ) {

					startRenderTimer();

				}

				if ( ! isWatchingWindow ) {

					startWatchingWindow();

				}

			}


			// I remove the given image from the render queue.
			function removeImage( image ) {

				// Remove the given image from the render queue.
				for ( var i = 0 ; i < images.length ; i++ ) {

					if ( images[ i ] === image ) {

						images.splice( i, 1 );
						break;

					}

				}

				// If removing the given image has cleared the
				// render queue, then we can stop monitoring
				// the window and the image queue.
				if ( ! images.length ) {

					clearRenderTimer();

					stopWatchingWindow();

				}

			}


			// ---
			// PRIVATE METHODS.
			// ---


			// I check the document height to see if it's changed.
			function checkDocumentHeight() {

				// If the render time is currently active, then
				// don't bother getting the document height -
				// it won't actually do anything.
				if ( renderTimer ) {

					return;

				}

				var currentDocumentHeight = doc.height();

				// If the height has not changed, then ignore -
				// no more images could have come into view.
				if ( currentDocumentHeight === documentHeight ) {

					return;

				}

				// Cache the new document height.
				documentHeight = currentDocumentHeight;

				startRenderTimer();

			}


			// I check the lazy-load images that have yet to
			// be rendered.
			function checkImages() {

				// Log here so we can see how often this
				// gets called during page activity.
				console.log( "Checking for visible images..." );

				var visible = [];
				var hidden = [];

				// Determine the window dimensions.
				var windowHeight = win.height();
				var scrollTop = win.scrollTop();

				// Calculate the viewport offsets.
				var topFoldOffset = scrollTop;
				var bottomFoldOffset = ( topFoldOffset + windowHeight );

				// Query the DOM for layout and seperate the
				// images into two different categories: those
				// that are now in the viewport and those that
				// still remain hidden.
				for ( var i = 0 ; i < images.length ; i++ ) {

					var image = images[ i ];

					if ( image.isVisible( topFoldOffset, bottomFoldOffset ) ) {

						visible.push( image );

					} else {

						hidden.push( image );

					}

				}

				// Update the DOM with new image source values.
				for ( var i = 0 ; i < visible.length ; i++ ) {

					visible[ i ].render();

				}

				// Keep the still-hidden images as the new
				// image queue to be monitored.
				images = hidden;

				// Clear the render timer so that it can be set
				// again in response to window changes.
				clearRenderTimer();

				// If we've rendered all the images, then stop
				// monitoring the window for changes.
				if ( ! images.length ) {

					stopWatchingWindow();

				}

			}


			// I clear the render timer so that we can easily
			// check to see if the timer is running.
			function clearRenderTimer() {

				clearTimeout( renderTimer );

				renderTimer = null;

			}


			// I start the render time, allowing more images to
			// be added to the images queue before the render
			// action is executed.
			function startRenderTimer() {

				renderTimer = setTimeout( checkImages, renderDelay );

			}


			// I start watching the window for changes in dimension.
			function startWatchingWindow() {

				isWatchingWindow = true;

				// Listen for window changes.
				win.on( "resize.bnLazySrc", windowChanged );
				win.on( "scroll.bnLazySrc", windowChanged );

				// Set up a timer to watch for document-height changes.
				documentTimer = setInterval( checkDocumentHeight, documentDelay );

			}


			// I stop watching the window for changes in dimension.
			function stopWatchingWindow() {

				isWatchingWindow = false;

				// Stop watching for window changes.
				win.off( "resize.bnLazySrc" );
				win.off( "scroll.bnLazySrc" );

				// Stop watching for document changes.
				clearInterval( documentTimer );

			}


			// I start the render time if the window changes.
			function windowChanged() {

				if ( ! renderTimer ) {

					startRenderTimer();

				}

			}


			// Return the public API.
			return({
				addImage: addImage,
				removeImage: removeImage
			});

		})();


		// ------------------------------------------ //
		// ------------------------------------------ //


		// I represent a single lazy-load image.
		function LazyImage( element ) {

			// I am the interpolated LAZY SRC attribute of
			// the image as reported by AngularJS.
			var source = null;

			// I determine if the image has already been
			// rendered (ie, that it has been exposed to the
			// viewport and the source had been loaded).
			var isRendered = false;

			// I am the cached height of the element. We are
			// going to assume that the image doesn't change
			// height over time.
			var height = null;


			// ---
			// PUBLIC METHODS.
			// ---


			// I determine if the element is above the given
			// fold of the page.
			function isVisible( topFoldOffset, bottomFoldOffset ) {

				// If the element is not visible because it
				// is hidden, don't bother testing it.
				if ( ! element.is( ":visible" ) ) {

					return( false );

				}

				// If the height has not yet been calculated,
				// the cache it for the duration of the page.
				if ( height === null ) {

					height = element.height();

				}

				// Update the dimensions of the element.
				var top = element.offset().top;
				var bottom = ( top + height );

				// Return true if the element is:
				// 1. The top offset is in view.
				// 2. The bottom offset is in view.
				// 3. The element is overlapping the viewport.
				return(
				(
				( top <= bottomFoldOffset ) &&
				( top >= topFoldOffset )
				)
				||
				(
				( bottom <= bottomFoldOffset ) &&
				( bottom >= topFoldOffset )
				)
				||
				(
				( top <= topFoldOffset ) &&
				( bottom >= bottomFoldOffset )
				)
				);

			}


			// I move the cached source into the live source.
			function render() {

				isRendered = true;

				renderSource();

			}


			// I set the interpolated source value reported
			// by the directive / AngularJS.
			function setSource( newSource ) {

				source = newSource;

				if ( isRendered ) {

					renderSource();

				}

			}


			// ---
			// PRIVATE METHODS.
			// ---


			// I load the lazy source value into the actual
			// source value of the image element.
			function renderSource() {

				element[ 0 ].src = source;

			}


			// Return the public API.
			return({
				isVisible: isVisible,
				render: render,
				setSource: setSource
			});

		}


		// ------------------------------------------ //
		// ------------------------------------------ //


		// I bind the UI events to the scope.
		function link( $scope, element, attributes ) {

			var lazyImage = new LazyImage( element );

			// Start watching the image for changes in its
			// visibility.
			lazyLoader.addImage( lazyImage );


			// Since the lazy-src will likely need some sort
			// of string interpolation, we don't want to
			attributes.$observe(
				"lazyImg",
				function( newSource ) {

					lazyImage.setSource( newSource );

				}
			);


			// When the scope is destroyed, we need to remove
			// the image from the render queue.
			$scope.$on(
				"$destroy",
				function() {

					lazyLoader.removeImage( lazyImage );

				}
			);

		}


		// Return the directive configuration.
		return({
			link: link,
			restrict: "A"
		});

	}]
);

'use strict';

// Configuring the Articles module
angular.module('payments').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		//Menus.addMenuItem('topbar', 'Payments', 'payments', 'dropdown', '/payments(/create)?');
		//Menus.addSubMenuItem('topbar', 'payments', 'List Payments', 'payments');
		//Menus.addSubMenuItem('topbar', 'payments', 'New Payment', 'payments/create');
	}
]);
'use strict';

//Setting up route
angular.module('payments').config(['$stateProvider',
	function($stateProvider) {
		// Payments state routing
		$stateProvider.
		state('listPayments', {
			url: '/payments',
			templateUrl: 'modules/payments/views/list-payments.client.view.html'
		}).
		state('createPayment', {
			url: '/payments/create',
			templateUrl: 'modules/payments/views/create-payment.client.view.html'
		}).
		state('viewPayment', {
			url: '/payments/:paymentId',
			templateUrl: 'modules/payments/views/view-payment.client.view.html'
		}).
		state('editPayment', {
			url: '/payments/:paymentId/edit',
			templateUrl: 'modules/payments/views/edit-payment.client.view.html'
		});
	}
]);
'use strict';

// Payments controller
angular.module('payments').controller('PaymentsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Payments',
	function($scope, $stateParams, $location, Authentication, Payments ) {
		$scope.authentication = Authentication;

		// Create new Payment
		$scope.create = function() {
			// Create new Payment object
			var payment = new Payments ({
				name: this.name
			});

			// Redirect after save
			payment.$save(function(response) {
				$location.path('payments/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Payment
		$scope.remove = function( payment ) {
			if ( payment ) { payment.$remove();

				for (var i in $scope.payments ) {
					if ($scope.payments [i] === payment ) {
						$scope.payments.splice(i, 1);
					}
				}
			} else {
				$scope.payment.$remove(function() {
					$location.path('payments');
				});
			}
		};

		// Update existing Payment
		$scope.update = function() {
			var payment = $scope.payment ;

			payment.$update(function() {
				$location.path('payments/' + payment._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Payments
		$scope.find = function() {
			$scope.payments = Payments.query();
		};

		// Find existing Payment
		$scope.findOne = function() {
			$scope.payment = Payments.get({ 
				paymentId: $stateParams.paymentId
			});
		};
	}
]);
'use strict';

angular.module('payments').factory('GetPurchaseJWT', ['$resource',
	function($resource) {
		return $resource('purchase/gw_test/:productID/:qty/:optdesc',
			{
				productID: '@_id',
				qty:'@qty',
				optdesc:'@optdesc'
			}, {query: {method:'get', isArray:true}}
		);
	}
]);

'use strict';

//Payments service used to communicate Payments REST endpoints
angular.module('payments').factory('Payments', ['$resource',
	function($resource) {
		return $resource('payments/:paymentId', {
			paymentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('payments').factory('PaymentsBySellerData', ['$resource',
	function($resource) {
		return $resource('payments/:sellerData', {
			sellerData: '@sellerData'
		}, {
		});
	}
]);
'use strict';

//Setting up route
angular.module('products').config(['$stateProvider',
    function($stateProvider) {
        // Products state routing
        $stateProvider.
            state('listProducts', {
                url: '/products',
                templateUrl: 'modules/products/views/list-products.client.view.html'
            }).
            state('listProductsUnderBanner', {
                url: '/products/list/:bannerId',
                templateUrl: 'modules/products/views/list-products-banner.client.view.html'
            }).
            state('createProduct', {
                url: '/products/create/:bannerId',
                templateUrl: 'modules/products/views/create-product.client.view.html'
            }).
            state('viewProduct', {
                url: '/products/:productId',
                templateUrl: 'modules/products/views/view-product.client.view.html'
            }).
            state('editProduct', {
                url: '/products/:productId/edit',
                templateUrl: 'modules/products/views/edit-product.client.view.html'
            });
    }
]);
'use strict';

// Products controller
angular.module('products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Products', 'Banners', 'ProductsBanner',
    function($scope, $stateParams, $location, Authentication, Products, Banners, ProductsBanner) {
        $scope.authentication = Authentication;
        $scope.parentId=$stateParams.bannerId;

        // Create new Product
        $scope.create = function() {
        	// Create new Product object
            var product = new Products({
                name: this.name,
                mainimg: this.mainimg,
                imgs: this.imgs,
                price: this.price,
                description: this.description,
                parentId: $scope.parentId // Product record is under banner content
            });

            // Redirect after save
            product.$save(function(response) {
                $location.path('products/' + response._id);
            }, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

            // Clear form fields
            this.name = '';
            this.mainimg ='';
            this.imgs='';
            this.price=0;
            this.description = '';
        };

        // Remove existing Product
        $scope.remove = function(product) {
            if (product) {
                product.$remove();

                for (var i in $scope.products) {
                    if ($scope.products[i] === product) {
                        $scope.products.splice(i, 1);
                    }
                }
            } else {
                $scope.product.$remove(function() {
                    $location.path('products');
                });
            }
        };

        // Update existing Product
        $scope.update = function() {
            var product = $scope.product;

            product.$update(function() {
                $location.path('products/' + product._id);
            }, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
        };

        // Find a list of Products
        $scope.find = function() {
            $scope.products = Products.query();
        };

        $scope.findBanners = function() {
            $scope.banners = Banners.query();
        };

        // Find existing Product
        $scope.findOne = function() {
            $scope.product = Products.get({
                productId: $stateParams.productId
            });
        };

        $scope.findProductUnderBanner = function() {
            console.log('banner id is '+ $scope.parentId);
            $scope.products = ProductsBanner.query({},{bannerId:$scope.parentId});
        }
    }
]);
/**
 * Created by KevinSo on 9/24/2014.
 */

'use strict';

//Products service used to communicate Products REST endpoints
angular.module('products').factory('ProductsBanner', ['$resource', function($resource) {
    return $resource('products/list/:bannerId', {
        bannerId: '@bannerId'
    }, {
        update: {
            method: 'PUT'
        },
        query: {
            method: 'GET',
            isArray: true
        }
    });
}]);

angular.module('products').factory('ProductByUserId', ['$resource', function($resource) {
    return $resource('products/find/:userId', {
        userId: '@userId'
    }, {
        update: {
            method: 'PUT'
        },
        query: {
            method: 'GET',
            isArray: true
        }
    });
}]);
'use strict';

//Products service used to communicate Products REST endpoints
angular.module('products').factory('Products', ['$resource', function($resource) {
    return $resource('products/:productId', {
        productId: '@_id'
    }, {
        update: {
            query: 'GET',
            method: 'PUT'
        }
    });
}]);

'use strict';

//Setting up route
angular.module('seller-interface').config(['$stateProvider',
	function($stateProvider) {
		// Gdriveapps state routing
		$stateProvider.
			state('weather', {
				url: '/weather',
				templateUrl: 'modules/seller-interface/views/weather.client.view.html'
			}).
			state('listGdriveapps', {
				url: '/gdriveapps',
				templateUrl: 'modules/seller-interface/views/list-gdriveapps.client.view.html'
			}).
			state('createGdriveapp', {
				url: '/gdriveapps/create',
				templateUrl: 'modules/seller-interface/views/create-gdriveapp.client.view.html'
			}).
			state('viewGdriveapp', {
				url: '/gdriveapps/:gdriveappId',
				templateUrl: 'modules/seller-interface/views/view-gdriveapp.client.view.html'
			}).
			state('editGdriveapp', {
				url: '/gdriveapps/:gdriveappId/edit',
				templateUrl: 'modules/seller-interface/views/edit-gdriveapp.client.view.html'
			}).
			state('gDrive', {
				url: '/gDrive',
				templateUrl: 'modules/seller-interface/views/gdrive.html'
			}).
			state('gDrive2', {
				abstract: true,
				url: '/gDrive2',
				templateUrl: 'modules/seller-interface/views/storage.html'
			}).
			state('gDrive2.dashboard', {
				url: '/dashboard',
				templateUrl: 'modules/seller-interface/template/gDrive2.dashboard.tmp.html'
			}).
			state('gDrive2.addNewProduct', {
				url: '/addNewProduct',
				templateUrl: 'modules/seller-interface/template/gDrive2.addNewProduct.tmp.html'
			}).
			state('gDrive2.editProduct', {
				url: '/editProduct/:productId',
				templateUrl: 'modules/seller-interface/template/gDrive2.editProduct.tmp.html'
			}).
			state('gDrive2.historyPayment', {
				url: '/historyPayment',
				templateUrl: 'modules/seller-interface/template/gDrive2.historyPayment.tmp.html'
			})
			/*.

			 state('createFile', {
			 url: '/create',
			 templateUrl:'modules/gdriveapps/views/create-doc.client.view.html',
			 controller: 'CreateDocController'
			 }).
			 state('installTodo', {
			 url: '/install',
			 templateUrl:'modules/gdriveapps/views/install-todo.client.view.html',
			 controller: 'InstallTodoController'
			 }).
			 state('todoState',{
			 url:'/todos/:fileId/:filter',
			 templateUrl:'modules/gdriveapps/views/install-todo.client.view.html',
			 controller:'todoController',
			 resolve: {
			 //realtimeDocument: app.loadFile
			 }
			 })*/;
	}
]);

'use strict';

angular.module('seller-interface').controller('DocsController', ['$scope', '$http', 'gdocs',
	function($scope, $http, gdocs) {
		$scope.test = 'test_123';
		$scope.docs = [];

		// Response handler that caches file icons in the filesystem API.
		function successCallbackWithFsCaching(resp, status, headers, config) {
			var docs = [];
			var totalEntries = resp.items.length;
			console.log(totalEntries);
			resp.items.forEach(function(entry, i) {
				var doc = {
					title: entry.title,
					updatedDate: Util.formatDate(entry.modifiedDate),
					updatedDateFull: entry.modifiedDate,
					icon: entry.iconLink,
					alternateLink: entry.alternateLink,
					size: entry.fileSize ? '( ' + entry.fileSize + ' bytes)' : null
				};

				// 'http://gstatic.google.com/doc_icon_128.png' -> 'doc_icon_128.png'
				doc.iconFilename = doc.icon.substring(doc.icon.lastIndexOf('/') + 1);
				console.log(doc.icon);
				// If file exists, it we'll get back a FileEntry for the filesystem URL.
				// Otherwise, the error callback will fire and we need to XHR it in and
				// write it to the FS.
				var fsURL = fs.root.toURL() + FOLDERNAME + '/' + doc.iconFilename;
				window.webkitResolveLocalFileSystemURL(fsURL, function(entry) {
					console.log('Fetched icon from the FS cache');

					doc.icon = entry.toURL(); // should be === to fsURL, but whatevs.

					$scope.docs.push(doc);

					// Only want to sort and call $apply() when we have all entries.
					if (totalEntries - 1 == i) {
						$scope.docs.sort(Util.sortByDate);
						$scope.$apply(function($scope) {}); // Inform angular we made changes.
					}
				}, function(e) {

					$http.get(doc.icon, {responseType: 'blob'}).success(function(blob) {
						console.log('Fetched icon via XHR');

						blob.name = doc.iconFilename; // Add icon filename to blob.

						writeFile(blob); // Write is async, but that's ok.

						doc.icon = window.URL.createObjectURL(blob);

						$scope.docs.push(doc);
						if (totalEntries - 1 == i) {
							$scope.docs.sort(Util.sortByDate);
						}
					});

				});
			});
		}

		$scope.clearDocs = function() {
			$scope.docs = []; // Clear out old results.
		};

		$scope.fetchDocs = function(retry) {
			this.clearDocs();

			if (gdocs.accessToken) {
				var config = {
					params: {'alt': 'json'},
					headers: {
						'Authorization': 'Bearer ' + gdocs.accessToken

					}
				};

				//https://drive.google.com/open?id=0B8FisuvAYPTfampGWFhXQUs5dVU&authuser=0
				$http.get(gdocs.DOCLIST_FEED, config).
					success(successCallbackWithFsCaching).
					error(function(data, status, headers, config) {
						if (status == 401 && retry) {
							gdocs.removeCachedAuthToken(
								gdocs.auth.bind(gdocs, true,
									$scope.fetchDocs.bind($scope, false)));
						}
					});
			}
		};

		// Toggles the authorization state.
		$scope.toggleAuth = function(interactive) {
			if (!gdocs.accessToken) {
				gdocs.auth(interactive, function() {
					$scope.fetchDocs(false);
				});
			} else {
				gdocs.revokeAuthToken(function() {});
				this.clearDocs();
			}
		}

		// Controls the label of the authorize/deauthorize button.
		$scope.authButtonLabel = function() {
			if (gdocs.accessToken)
				return 'Deauthorize';
			else
				return 'Authorize';
		};

		$scope.toggleAuth(false);
	}
]);

/**
 * Created by Kevin on 2014-11-11.
 */

angular.module('seller-interface').controller('AddNewProductController', ['$scope','$stateParams','Authentication', 'Products', 'BannerByUserId',
    function($scope, $stateParams, Authentication, Products, BannerByUserId) {
        $scope.authentication = Authentication;
        $scope.parentId=$stateParams.bannerId;
        // Create new Product
        $scope.create = function() {
            // Create new Product object
            var product = new Products({
                name: this.name,
                mainimg: this.mainimg,
                imgs: this.imgs,
                price: this.price,
                description: this.description,
                parentId: $scope.selectedBanner._id, // Product record is under banner content
                detailDesc: $scope.detailDesc
            });

            // Redirect after save
            product.$save(function(response) {
                alert('Successfully Added');
                $scope.error = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });

            // Clear form fields
            this.name = '';
            this.mainimg ='';
            this.imgs='';
            this.price=0;
            this.description = '';
        };

        // Update existing Product
        $scope.update = function() {
            var product = $scope.product;

            product.$update(function() {
                //$location.path('products/' + product._id);
                alert('updated successfully')
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Find a list of Products
        $scope.find = function() {
            $scope.products = Products.query();
        };

        $scope.findBanners = function() {
            $scope.banners = Banners.query();
        };

        // Find existing Product
        $scope.findOne = function() {
            Products.get({
                productId: $stateParams.productId
            }).$promise.then(function(result){
                $scope.product = result;
                $scope.selectOption();
            });
        };

        $scope.findProductUnderBanner = function() {
            console.log('banner id is '+ $scope.parentId);
            $scope.products = ProductsBanner.query({},{bannerId:$scope.parentId});
        };

        $scope.getBanners = function() {
            $scope.banners = BannerByUserId.query({userId: Authentication.user._id});
        };

        $scope.selectOption = function(){
            $scope.selectedBanner = $scope.product.parentId;//$scope.product.parentId;
        };
    }
]);


angular.module('seller-interface')
    .controller('gdrive', ['$scope','$state','$http','$q', '$mdDialog', '$mdSidenav','configGdrive', 'Googledrive', 'GooglePlus', 'Products','Authentication','ProductByUserId',
        function ($scope, $state, $http, $q, $mdDialog, $mdSidenav, configGdrive, Googledrive, GooglePlus, Products, Authentication, ProductByUserId) {
            $scope.authentication = Authentication;
            $scope.goChildView = function(stateName){
                $state.go(stateName);
                $mdSidenav('left').close();
            }

            $scope.redirect = function(stateName, param){
                $state.go(stateName, {productId: param});
                $mdSidenav('left').close();
            }

            //$scope.queriedProduct = ProductByUserId.query({userId:$scope.authentication.user._id });

        /*
        google.load('visualization', '1', {
            packages: ['corechart']
        });


         var data = google.visualization.arrayToDataTable([
         ['Year', 'Sales', 'Expenses'],
         ['명이나물', 1000, 400],
         ['더덕나물', 1170, 460],
         ['문어젖갈', 660, 1120],
         ['오징어젖갈', 1030, 540]
         ]);
         var options = {
         title: 'Company Performance'
         };
         var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));

         chart.draw(data, options);
         /**/

        $http({'url': 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfZl9VUnEwcGdFdHc', method:"GET", headers: {
            "Content-Type": "image/jpeg"
        }})
            .success(function(data) {
                console.log(data);
            })
        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;

        $scope.user = {
            title:     "Technical Program Manager",
            email:     "ipsum@lorem.com",
            firstName: "Naomi",
            lastName:  "" ,
            company:   "Google" ,
            address:   "1600 Amphitheatre Pkwy" ,
            city:      "Mountain View" ,
            state:     "CA" ,
            country:   "USA" ,
            postalCode : "94043"
        };

        $scope.todos = [
            {
                product_uri : 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfaTJnaHRWWmozRUU',
                name: '명이나물',
                who: '명이게이',
                when: '3:08PM',
                notes: "아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요 아나니 아나니 아나니리요"
            },
            {
                product_uri : 'http://drive.google.com/uc?export=view&id=0B8FisuvAYPTfcDVGYVc3NEtaSEU',
                name: '더덕나물',
                who: '명이게이',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
        ]

        /*
         * */
        var accessToken;
        $scope.permalLink = 'http://drive.google.com/uc?export=view&id=';
        $scope.arrive = false;
        $scope.authName = 'Authorize';
        $scope.isAuth = false;
        $scope.init = function init(){
            window.gapi.load('auth', $scope.authenticateWithGoogle);
            window.gapi.load('picker');
            gapi.client.load('urlshortener', 'v1');
        }
        $scope.authenticateWithGoogle =function authenticateWithGoogle(){
            window.gapi.auth.authorize({
                'client_id': configGdrive.clientId,
                'scope':configGdrive.scopes,
                'immediate': false
            }, handleAuthentication);
        }
        function handleAuthentication(result){
            if(result && !result.error){
                $scope.isAuth = true;
                $scope.authName = 'Deauthorize';
                accessToken = result.access_token;
                //console.log(accessToken);

                /*
                 callGooglePlus();
                 setFilePicker();
                 listFolder();
                 getGoogleDriveInfo();
                 createFolder();
                 */
                createNewAccountFolder();
                setFilePicker(); // singleFile
                //findTargetUriFolder();
            }else{
                console.log(result);
                console.log(result.error);
                console.log('fail to authentication')
            }
            $scope.$digest();
        }

        function listFolder() {
            Googledrive.listFolder()
        }
        /*
         function createFolder(){
         var folderName;
         Googledrive.createFolder(folderName, accessToken);
         }
         */
        function getGoogleDriveInfo(){
            Googledrive.getGoogleDriveInfo();
        }

        /// Custom file Picker Start ----------------------------------------------------------
        /*
         function setFilePicker() {
         var filePicker = document.getElementById('filePicker');

         filePicker.style.display = 'none';

         // Access token has been successfully retrieved, requests can be sent to the API.
         filePicker.style.display = 'block';
         filePicker.onchange = uploadFile;
         }

         function uploadFile(evt) {
         var callback = function(file) {
         console.log('!!File!!');
         console.log(file);
         }
         gapi.client.load('drive', 'v2', function() {
         var file = evt.target.files[0];
         insertFile(file, callback);
         });
         }

         function insertFile(fileData, callback) {
         var boundary = '-------314159265358979323846';
         var delimiter = "\r\n--" + boundary + "\r\n";
         var close_delim = "\r\n--" + boundary + "--";

         var reader = new FileReader();
         reader.readAsBinaryString(fileData);
         reader.onload = function(e) {
         var contentType = fileData.type || 'application/octet-stream';
         var metadata = {
         'title': fileData.name,
         'mimeType': contentType,
         'writersCanShare':true,
         'parents': [{
         'kind': "drive#fileLink",
         'id': "0B8FisuvAYPTfN1o1Q0d4T2JLTk0"
         }]

         };

         var base64Data = btoa(reader.result);
         var multipartRequestBody =
         delimiter +
         'Content-Type: application/json\r\n\r\n' +
         JSON.stringify(metadata) +
         delimiter +
         'Content-Type: ' + contentType + '\r\n' +
         'Content-Transfer-Encoding: base64\r\n' +
         '\r\n' +
         base64Data +
         close_delim;
         console.log(multipartRequestBody);

         var request = gapi.client.request({
         'path': '/upload/drive/v2/files',
         'method': 'POST',
         'params': {'uploadType': 'multipart'},
         'headers': {
         'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
         },
         'body': multipartRequestBody});
         if (!callback) {
         callback = function(file) {
         console.log(file)
         };
         }
         request.execute(callback);
         }
         }
         */
        /// Custom file Picker End ----------------------------------------------------------

        function callGooglePlus(){
            function callback(resp) {
                console.log(resp);
                var heading = document.createElement('h4');
                var image = document.createElement('img');
                image.src = resp.result.image.url;
                heading.appendChild(image);
                heading.appendChild(document.createTextNode(resp.result.displayName));

                document.getElementById('content').appendChild(heading);
            }
            GooglePlus.callGooglePlus(callback);
        }

        // Google PlatForm Service
        $scope.setupPicker = function() {
            function pickerCallback(data) {
                if(data.action == google.picker.Action.PICKED){
                    //do something
                    $scope.files = data.docs;
                    $scope.arrive = true;

                    // make shorten URL
                    var request = gapi.client.urlshortener.url.get({
                        'shortUrl': 'http://goo.gl/fbsS'
                    });
                    request.then(function(response) {
                        appendResults(response.result.longUrl);
                    }, function(reason) {
                        console.log('Error: ' + reason.result.error.message);
                    });

                    //alert('URL: ' + data.docs[0].url);
                    $scope.$digest()
                }else if(data.action ==google.picker.Action.CANCEL){
                    //alert('goodbye');
                }
            }
            Googledrive.setupPicker(accessToken, pickerCallback);
        }

        function createNewAccountFolder(){
            //Pre. Get User Information
            //check if there exists an
            // API /users/me (only allow to have)

            var callback = function(resp){
                console.log(resp.result.items.length);
                if(resp.result.items.length == 0){
                    $http.get('users/me')
                        .success(function(response) {
                            console.log(response);
                            var folderName = 'URI-'+response._id;
                            //1. Create A New Folder
                            Googledrive.createFolder(folderName, accessToken);
                            //2. Update User Information
                            //$http.get()
                        });
                }
                else{
                    console.log('there is already exist')
                    $scope.rootGdriveFolderID = resp.result.items[0].id
                    $scope.$digest();
                }
            }
            Googledrive.findFolder(callback);
        }

        $scope.find = function() {
            $scope.products = ProductByUserId.query({userId:$scope.authentication.user._id });
        };

        $scope.onChangeStatus = function(){
            console.log('sdfsf');
            $scope.$digest();
        };

        $scope.openNewProductDialog = function(ev) {
            //Open Dialog
            $mdDialog.show({
                templateUrl: 'modules/seller-interface/template/newProductTemplate.html',
                targetEvent: ev,
                controller: newProductDialog,
                clickOutsideToClose  : false
            }).then(function() {
                $scope.alert = 'You said "Okay".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
        };

        function newProductDialog($scope, $mdDialog){
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }

        $scope.toggleLeft = function() {
            $mdSidenav('left').open();
        };

        $scope.getPaymentHistory = function() {
            $scope.payments = Payments.query();
        }
    }]
);

angular.module('seller-interface').controller('BottomSheetExample', ["$scope", "$timeout", "$mdBottomSheet", function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';

    $scope.showListBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'modules/seller-interface/views/bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showGridBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'modules/seller-interface/views/bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
}])
    .controller('LeftCtrl', ["$scope", "$timeout", "$mdSidenav", function($scope, $timeout, $mdSidenav) {
        $scope.close = function() {
            $mdSidenav('left').close();
        };
    }]);

angular.module('seller-interface').controller('ListBottomSheetCtrl', ["$scope", "$mdBottomSheet", function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Upload New Image (Google Drive)', icon: 'share' },
        { name: 'Select Existing Image (Google Drive)', icon: 'upload' },
        { name: 'Product History (Google Sheets)', icon: 'copy' },
        { name: 'Print this page (PDF Printer)', icon: 'print' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]);

angular.module('seller-interface').controller('GridBottomSheetCtrl', ["$scope", "$mdBottomSheet", function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]);

/*
 Copyright 2012 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Author: Eric Bidelman (ericbidelman@chromium.org)
 */
/*
function onError(e) {
    console.log(e);
}

// FILESYSTEM SUPPORT ----------------------------------------------------------
var fs = null;
var FOLDERNAME = 'test';

function writeFile(blob) {
    if (!fs) {
        return;
    }

    fs.root.getDirectory(FOLDERNAME, {create: true}, function(dirEntry) {
        dirEntry.getFile(blob.name, {create: true, exclusive: false}, function(fileEntry) {
            // Create a FileWriter object for our FileEntry, and write out blob.
            fileEntry.createWriter(function(fileWriter) {
                fileWriter.onerror = onError;
                fileWriter.onwriteend = function(e) {
                    console.log('Write completed.');
                };
                fileWriter.write(blob);
            }, onError);
        }, onError);
    }, onError);
}
// -----------------------------------------------------------------------------

var gDriveApp = angular.module('gDriveApp', []);

gDriveApp.factory('gdocs', function() {
    var gdocs = new GDocs();

    var dnd = new DnDFileController('body', function(files) {
        var $scope = angular.element(this).scope();
        Util.toArray(files).forEach(function(file, i) {
            gdocs.upload(file, function() {
                //$scope.fetchDocs(true);
            }, true);
        });
    });

    return gdocs;
});
//gDriveApp.service('gdocs', GDocs);
//gDriveApp.controller('DocsController', ['$scope', '$http', DocsController]);

// Main Angular controller for app.
function DocsController($scope, $http, gdocs) {
    $scope.docs = [];

    // Response handler that caches file icons in the filesystem API.
    function successCallbackWithFsCaching(resp, status, headers, config) {
        var docs = [];
        var totalEntries = resp.items.length;
        console.log(totalEntries);
        resp.items.forEach(function(entry, i) {
            var doc = {
                title: entry.title,
                updatedDate: Util.formatDate(entry.modifiedDate),
                updatedDateFull: entry.modifiedDate,
                icon: entry.iconLink,
                alternateLink: entry.alternateLink,
                size: entry.fileSize ? '( ' + entry.fileSize + ' bytes)' : null
            };

            // 'http://gstatic.google.com/doc_icon_128.png' -> 'doc_icon_128.png'
            doc.iconFilename = doc.icon.substring(doc.icon.lastIndexOf('/') + 1);
            console.log(doc.icon);
            // If file exists, it we'll get back a FileEntry for the filesystem URL.
            // Otherwise, the error callback will fire and we need to XHR it in and
            // write it to the FS.
            var fsURL = fs.root.toURL() + FOLDERNAME + '/' + doc.iconFilename;
            window.webkitResolveLocalFileSystemURL(fsURL, function(entry) {
                console.log('Fetched icon from the FS cache');

                doc.icon = entry.toURL(); // should be === to fsURL, but whatevs.

                $scope.docs.push(doc);

                // Only want to sort and call $apply() when we have all entries.
                if (totalEntries - 1 == i) {
                    $scope.docs.sort(Util.sortByDate);
                    $scope.$apply(function($scope) {}); // Inform angular we made changes.
                }
            }, function(e) {

                $http.get(doc.icon, {responseType: 'blob'}).success(function(blob) {
                    console.log('Fetched icon via XHR');

                    blob.name = doc.iconFilename; // Add icon filename to blob.

                    writeFile(blob); // Write is async, but that's ok.

                    doc.icon = window.URL.createObjectURL(blob);

                    $scope.docs.push(doc);
                    if (totalEntries - 1 == i) {
                        $scope.docs.sort(Util.sortByDate);
                    }
                });

            });
        });
    }

    $scope.clearDocs = function() {
        $scope.docs = []; // Clear out old results.
    };

    $scope.fetchDocs = function(retry) {
        this.clearDocs();

        if (gdocs.accessToken) {
            var config = {
                params: {'alt': 'json'},
                headers: {
                    'Authorization': 'Bearer ' + gdocs.accessToken

                }
            };

            //https://drive.google.com/open?id=0B8FisuvAYPTfampGWFhXQUs5dVU&authuser=0
            $http.get(gdocs.DOCLIST_FEED, config).
                success(successCallbackWithFsCaching).
                error(function(data, status, headers, config) {
                    if (status == 401 && retry) {
                        gdocs.removeCachedAuthToken(
                            gdocs.auth.bind(gdocs, true,
                                $scope.fetchDocs.bind($scope, false)));
                    }
                });
        }
    };

    // Toggles the authorization state.
    $scope.toggleAuth = function(interactive) {
        if (!gdocs.accessToken) {
            gdocs.auth(interactive, function() {
                $scope.fetchDocs(false);
            });
        } else {
            gdocs.revokeAuthToken(function() {});
            this.clearDocs();
        }
    }

    // Controls the label of the authorize/deauthorize button.
    $scope.authButtonLabel = function() {
        if (gdocs.accessToken)
            return 'Deauthorize';
        else
            return 'Authorize';
    };

    $scope.toggleAuth(false);
}

DocsController.$inject = ['$scope', '$http', 'gdocs']; // For code minifiers.

// Init setup and attach event listeners.
document.addEventListener('DOMContentLoaded', function(e) {

    // FILESYSTEM SUPPORT --------------------------------------------------------
    window.webkitRequestFileSystem(TEMPORARY, 1024 * 1024, function(localFs) {
        fs = localFs;
    }, onError);
    // ---------------------------------------------------------------------------
});
*/
'use strict';

// Gdriveapps controller

angular.module('seller-interface').constant('CONFIG', {
    clientId: '574563539488-pctm7fr21vcetcfpdf9hhaje9q5vepee.apps.googleusercontent.com',
    apiKey: 'AIzaSyAFtN5UMzS3aYUfCgd6JoixOVZRORkM1zw',
    scopes: [
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.install'
    ]
});

angular.module('seller-interface').value('config', {
    clientId: '574563539488-pctm7fr21vcetcfpdf9hhaje9q5vepee.apps.googleusercontent.com',
    apiKey: 'AIzaSyAFtN5UMzS3aYUfCgd6JoixOVZRORkM1zw',
    scopes: [
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.install'
    ]});

angular.module('seller-interface').controller('GdriveappsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Gdriveapps',
	function($scope, $stateParams, $location, Authentication, Gdriveapps ) {
		console.log($scope.authentication);
		// Create new Gdriveapp
		$scope.create = function() {
			// Create new Gdriveapp object
			var gdriveapp = new Gdriveapps ({
				name: this.name
			});

			// Redirect after save
			gdriveapp.$save(function(response) {
				$location.path('gdriveapps/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			// Clear form fields
			this.name = '';
		};

		// Remove existing Gdriveapp
		$scope.remove = function( gdriveapp ) {
			if ( gdriveapp ) { gdriveapp.$remove();

				for (var i in $scope.gdriveapps ) {
					if ($scope.gdriveapps [i] === gdriveapp ) {
						$scope.gdriveapps.splice(i, 1);
					}
				}
			} else {
				$scope.gdriveapp.$remove(function() {
					$location.path('gdriveapps');
				});
			}
		};

		// Update existing Gdriveapp
		$scope.update = function() {
			var gdriveapp = $scope.gdriveapp ;

			gdriveapp.$update(function() {
				$location.path('gdriveapps/' + gdriveapp._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Gdriveapps
		$scope.find = function() {
			$scope.gdriveapps = Gdriveapps.query();
		};

		// Find existing Gdriveapp
		$scope.findOne = function() {
			$scope.gdriveapp = Gdriveapps.get({ 
				gdriveappId: $stateParams.gdriveappId
			});
		};
	}
]);

'use strict';

angular.module('seller-interface').controller('HistoryPaymentController', ['$scope','Authentication','Payments','PaymentsBySellerData',
	function($scope, Authentication, Payments, PaymentsBySellerData) {
		$scope.authentication = Authentication;
		console.log($scope.authentication);

		$scope.getPaymentHistory = function() {
			$scope.payments = PaymentsBySellerData.query({sellerData: Authentication.user._id});
		}
	}
]);

/**
 * Created by KevinSo on 10/2/2014.
 */

'use strict';

var googlePlusUserLoader = (function() {

    var STATE_START=1;
    var STATE_ACQUIRING_AUTHTOKEN=2;
    var STATE_AUTHTOKEN_ACQUIRED=3;

    var state = STATE_START;

    var signin_button, xhr_button, revoke_button, user_info_div;

    function disableButton(button) {
        button.setAttribute('disabled', 'disabled');
    }

    function enableButton(button) {
        button.removeAttribute('disabled');
    }

    function changeState(newState) {
        state = newState;
        switch (state) {
            case STATE_START:
                enableButton(signin_button);
                disableButton(xhr_button);
                disableButton(revoke_button);
                break;
            case STATE_ACQUIRING_AUTHTOKEN:
                sampleSupport.log('Acquiring token...');
                disableButton(signin_button);
                disableButton(xhr_button);
                disableButton(revoke_button);
                break;
            case STATE_AUTHTOKEN_ACQUIRED:
                disableButton(signin_button);
                enableButton(xhr_button);
                enableButton(revoke_button);
                break;
        }
    }

    // @corecode_begin getProtectedData
    function xhrWithAuth(method, url, interactive, callback) {
        var access_token;

        var retry = true;

        getToken();

        function getToken() {
            chrome.identity.getAuthToken({ interactive: interactive }, function(token) {
                if (chrome.runtime.lastError) {
                    callback(chrome.runtime.lastError);
                    return;
                }

                access_token = token;
                requestStart();
            });
        }

        function requestStart() {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
            xhr.onload = requestComplete;
            xhr.send();
        }

        function requestComplete() {
            if (this.status == 401 && retry) {
                retry = false;
                chrome.identity.removeCachedAuthToken({ token: access_token },
                    getToken);
            } else {
                callback(null, this.status, this.response);
            }
        }
    }

    function getUserInfo(interactive) {
        xhrWithAuth('GET',
            'https://www.googleapis.com/plus/v1/people/me',
            interactive,
            onUserInfoFetched);
    }
    // @corecode_end getProtectedData


    // Code updating the user interface, when the user information has been
    // fetched or displaying the error.
    function onUserInfoFetched(error, status, response) {
        if (!error && status == 200) {
            changeState(STATE_AUTHTOKEN_ACQUIRED);
            sampleSupport.log(response);
            var user_info = JSON.parse(response);
            populateUserInfo(user_info);
        } else {
            changeState(STATE_START);
        }
    }

    function populateUserInfo(user_info) {
        user_info_div.innerHTML = "Hello " + user_info.displayName;
        fetchImageBytes(user_info);
    }

    function fetchImageBytes(user_info) {
        if (!user_info || !user_info.image || !user_info.image.url) return;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', user_info.image.url, true);
        xhr.responseType = 'blob';
        xhr.onload = onImageFetched;
        xhr.send();
    }

    function onImageFetched(e) {
        if (this.status != 200) return;
        var imgElem = document.createElement('img');
        var objUrl = window.webkitURL.createObjectURL(this.response);
        imgElem.src = objUrl;
        imgElem.onload = function() {
            window.webkitURL.revokeObjectURL(objUrl);
        }
        user_info_div.insertAdjacentElement("afterbegin", imgElem);
    }

    // OnClick event handlers for the buttons.

    /**
     Retrieves a valid token. Since this is initiated by the user
     clicking in the Sign In button, we want it to be interactive -
     ie, when no token is found, the auth window is presented to the user.

     Observe that the token does not need to be cached by the app.
     Chrome caches tokens and takes care of renewing when it is expired.
     In that sense, getAuthToken only goes to the server if there is
     no cached token or if it is expired. If you want to force a new
     token (for example when user changes the password on the service)
     you need to call removeCachedAuthToken()
     **/
    function interactiveSignIn() {
        changeState(STATE_ACQUIRING_AUTHTOKEN);

        // @corecode_begin getAuthToken
        // @description This is the normal flow for authentication/authorization
        // on Google properties. You need to add the oauth2 client_id and scopes
        // to the app manifest. The interactive param indicates if a new window
        // will be opened when the user is not yet authenticated or not.
        // @see http://developer.chrome.com/apps/app_identity.html
        // @see http://developer.chrome.com/apps/identity.html#method-getAuthToken
        chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
            if (chrome.runtime.lastError) {
                sampleSupport.log(chrome.runtime.lastError);
                changeState(STATE_START);
            } else {
                sampleSupport.log('Token acquired:'+token+
                    '. See chrome://identity-internals for details.');
                changeState(STATE_AUTHTOKEN_ACQUIRED);
            }
        });
        // @corecode_end getAuthToken
    }

    function revokeToken() {
        user_info_div.innerHTML="";
        chrome.identity.getAuthToken({ 'interactive': false },
            function(current_token) {
                if (!chrome.runtime.lastError) {

                    // @corecode_begin removeAndRevokeAuthToken
                    // @corecode_begin removeCachedAuthToken
                    // Remove the local cached token
                    chrome.identity.removeCachedAuthToken({ token: current_token },
                        function() {});
                    // @corecode_end removeCachedAuthToken

                    // Make a request to revoke token in the server
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', 'https://accounts.google.com/o/oauth2/revoke?token=' +
                        current_token);
                    xhr.send();
                    // @corecode_end removeAndRevokeAuthToken

                    // Update the user interface accordingly
                    changeState(STATE_START);
                    sampleSupport.log('Token revoked and removed from cache. '+
                        'Check chrome://identity-internals to confirm.');
                }
            });
    }

    return {
        onload: function () {
            signin_button = document.querySelector('#signin');
            signin_button.addEventListener('click', interactiveSignIn);

            xhr_button = document.querySelector('#getxhr');
            xhr_button.addEventListener('click', getUserInfo.bind(xhr_button, true));

            revoke_button = document.querySelector('#revoke');
            revoke_button.addEventListener('click', revokeToken);

            user_info_div = document.querySelector('#user_info');

            // Trying to get user's info without signing in, it will work if the
            // application was previously authorized by the user.
            getUserInfo(false);
        }
    };

})();




'use strict';

angular.module('seller-interface').factory('gdocs', [
	function() {
		var gdocs = new GDocs();

		/*
		var dnd = new DnDFileController('body', function(files) {
			var $scope = angular.element(this).scope();
			Util.toArray(files).forEach(function(file, i) {
				gdocs.upload(file, function() {
					//$scope.fetchDocs(true);
				}, true);
			});
		});
		*/
		return gdocs;
	}
]);

'use strict';

//Gdriveapps service used to communicate Gdriveapps REST endpoints
angular.module('seller-interface').factory('Gdriveapps', ['$resource',
	function($resource) {
		return $resource('gdriveapps/:gdriveappId', { gdriveappId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

/*
 * Created by Kevin on 2014-10-29.
* */

'use strict';

angular.module('seller-interface').factory('Googledrive', ['configGdrive',
	function(configGdrive) {
		return {
			createFolder: createFolder,
			findFolder: findFolder,
			getGoogleDriveInfo: getGoogleDriveInfo,
			setupPicker: setupPicker,
			listFolder: listFolder
		};

		function createFolder(FolderName, accessToken){
			var request = gapi.client.request({
				'path': '/drive/v2/files/',
				'method': 'POST',
				'headers': {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + accessToken
				},
				'body':{
					"title" : FolderName,
					"mimeType" : "application/vnd.google-apps.folder"
				}
			});
			request.execute(function(resp) {
				console.log(resp);
			});
		}

		// Search Folder
		function findFolder(callback){
			gapi.client.load('drive', 'v2').then(function(){
				var request = gapi.client.drive.files.list({
					q: "title contains 'URI-'",
					fields: 'items(id\,title)'
				});
				request.then(function(resp){
					//console.log('result File list');
					//console.log(resp);
					callback(resp);
				});
			});
		}

		function getGoogleDriveInfo(){
			gapi.client.load('drive', 'v2').then(function() {
				var request = gapi.client.drive.about.get();
				request.execute(function (resp) {
					console.log('Current user name: ' + resp.name);
					console.log('Root folder ID: ' + resp.rootFolderId);
					console.log('Total quota (bytes): ' + resp.quotaBytesTotal);
					console.log('Used quota (bytes): ' + resp.quotaBytesUsed);
				});
			});
		}

		//Google File Picker Platform
		function setupPicker(accessToken, callback){
			var callbackAfterFindFolder = function(resp){
				var folderID = resp.result.items[0].id;
				var picker = new google.picker.PickerBuilder()
					.setOAuthToken(accessToken)
					.setDeveloperKey(configGdrive.developerKey)
					.addView(new google.picker.DocsUploadView().setParent(folderID))
					.addView(new google.picker.DocsView().setParent(folderID))
					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
					.setLocale('ko')
					//.enableFeature(google.picker.Feature.NAV_HIDDEN)
					.setCallback(callback)
					.build();
				picker.setVisible(true);
			}
			findFolder(callbackAfterFindFolder);


		}

		function listFolder(){
			gapi.client.load('drive', 'v2').then(function() {

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

				var request = gapi.client.drive.files.list({
					maxResults:10,
					fields: 'items(id,owners(displayName,emailAddress,isAuthenticatedUser,kind,permissionId),selfLink)'
				});
				request.then(function(resp){
					console.log('result File list');
					console.log(resp)
				});

			});
		}
	}
]);

'use strict';

angular.module('seller-interface').factory('GooglePlus', [
	function() {
		return {
			callGooglePlus: callGooglePlus
		};

		function callGooglePlus(callback) {
			gapi.client.load('plus', 'v1').then(function() {
				// Step 5: Assemble the API request
				var request = gapi.client.plus.people.get({
					'userId': 'me'
				});
				// Step 6: Execute the API request
				request.then(callback, function(reason) {
					console.log('Error: ' + reason.result.error.message);
				});
			});
		}
	}
]);

'use strict';

//Setting up route
angular.module('user-interface').config(['$stateProvider','$disqusProvider',
	function($stateProvider,$disqusProvider) {
		// Seller interface state routing
		$disqusProvider.setShortname('urimium');
		$stateProvider.
		state('front-1', {
			url: '/front-1',
			templateUrl: 'modules/user-interface/views/front-1.client.view.html'
		}).
		state('experimental-interface', {
			url: '/experimental-interface',
			templateUrl: 'modules/user-interface/views/experimental-interface.client.view.html'
		}).
		state('listing-product', {
			url: '/',
			templateUrl: 'modules/user-interface/views/listing-product.client.view.html'
		})
		.state('detail-product', {
			url: '/detail-product/:productId',
			templateUrl: 'modules/user-interface/views/detail-product.client.view.html'
		});
	}
]);

'use strict';

angular.module('user-interface').controller('DetailProductController', ['$scope','$stateParams','$sce','Products', 'GetPurchaseJWT','Payments','configGdrive',
	function($scope, $stateParams, $sce, Products, GetPurchaseJWT, Payments, configGdrive) {
		var productId=$stateParams.productId;
		$scope.quantity = 1;

		var tabs = [
			{ title: '반품/배송/교환 문의', content: 'No Contents'},
			{ title: '상세 상품설명', content: ''},
			{ title: '상품분석평/상품문의', content: "No Contents"},
		];

		// Find a Product
		$scope.findOne = function() {
			Products.get({
				productId: productId
			}).$promise.then(
				function(value){
					$scope.product = value;
					tabs[1].content =  $sce.trustAsHtml(value.detailDesc);
				}
			);
		};

		// Tabs Start -----------------------------------------------


		$scope.tabs = tabs;
		$scope.selectedIndex = 1;

		$scope.announceSelected = announceSelected;
		$scope.announceDeselected = announceDeselected;

		$scope.addTab = function (title, view) {
			view = view || title + " Content View";
			tabs.push({ title: title, content: view, disabled: false, style:style});
		};

		$scope.removeTab = function (tab) {
			for (var j = 0; j < tabs.length; j++) {
				if (tab.title == tabs[j].title) {
					$scope.tabs.splice(j, 1);
					break;
				}
			}
		};

		function announceDeselected(tab) {
			$scope.farewell = 'Goodbye ' + tab.title + '!';
		}

		function announceSelected(tab) {
			$scope.greeting = 'Hello ' + tab.title + '!';
		}
		// Tabs End -----------------------------------------------

		$scope.from_one = {
			from_one :'bold data in controller in from_one.js'
		}

		var accessToken;

		$scope.authenticateWithGoogle =function authenticateWithGoogle(){

			window.gapi.auth.authorize({
				'client_id': configGdrive.clientId,
				'scope':configGdrive.scopes,
				'immediate': false
			}, handleAuthentication);
		}

		function buttonReady(params) {
			if (params.status == "SUCCESS") {
				if (document.readyState === "interactive" || document.readyState == "complete" || document.readyState == "loaded") {
					document.getElementById("wallet-button-holder")
						.appendChild(params.walletButtonElement);
				} else {
					document.addEventListener("DOMContentLoaded", function() {
						document.getElementById("wallet-button-holder")
							.appendChild(params.walletButtonElement);
					});
				}
			}
		}

		var createWalletButtonSuccessCallback = function(param) {
			wallet.transactionId = param.response.response.googleTransactionId;

			console.log('Masked Wallet Response:' + JSON.stringify(param.response));
			/*
			$.mobile.changePage('#confirmation-page', {
				transition: 'slide'
			}
			*/
		}

		var createWalletButtonFailureCallback = function(error) {

			// log error message
			console.log('There was an error getting the Masked Wallet: ' +
			JSON.stringify(error));
		}

		function handleAuthentication(result){
			var test2 = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHb29nbGUiLCJyZXF1ZXN0Ijp7ImN1cnJlbmN5Q29kZSI6IlVTRCIsInByaWNlIjoxMiwibmFtZSI6IkxhbTEyIiwic2VsbGVyRGF0YSI6IjU0MmNmM2NkMDZkZDA3NTAxNjRhZDZmOSIsImRlc2NyaXB0aW9uIjoi7KO866y47IiY65-JOiAx6rCcIn0sInJlc3BvbnNlIjp7Im9yZGVySWQiOiJHV0RHX1MuNjJlY2ExNWItMjUwMS00MzEyLTg4NTgtMzE3YWNkNDk0ZjVjIn0sInR5cCI6Imdvb2dsZS9wYXltZW50cy9pbmFwcC9pdGVtL3YxL3Bvc3RiYWNrL2J1eSIsImF1ZCI6IjA4MjQzMzYyMDA3MTc0NzAwNDY2IiwiaWF0IjoxNDE1ODU1NTQ2LCJleHAiOjE0MTU4NTU1NjZ9.C9vt9cNEAvtrpfw5hqQaqJYa1Mqva8jvINWqQMy0NwM'
			console.log(configGdrive.clientId);
			google.wallet.online.authorize({
				"clientId" : configGdrive.clientId,
				"callback" : function(result){
					console.log(result);
					google.wallet.online.createWalletButton({
						"jwt" : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwODI0MzM2MjAwNzE3NDcwMDQ2NiIsImF1ZCI6Ikdvb2dsZSIsInR5cCI6Imdvb2dsZS93YWxsZXQvb25saW5lL21hc2tlZC92Mi9yZXF1ZXN0IiwiaWF0IjoxNDE1ODU5MTYzLCJleHAiOjE2NzI0NjY0MDAwMDAsInJlcXVlc3QiOnsiY2xpZW50SWQiOiI1NzQ1NjM1Mzk0ODgtbjB2cmV2Z2pwMzYwNmwyMGhmazRycWZrMWRjOGozcWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJtZXJjaGFudE5hbWUiOiJwYlNob3AiLCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvIiwicGhvbmVOdW1iZXJSZXF1aXJlZCI6dHJ1ZSwicGF5Ijp7ImVzdGltYXRlZFRvdGFsUHJpY2UiOiIxNS4wMSIsImN1cnJlbmN5Q29kZSI6IlVTRCJ9LCJzaGlwIjp7fX19.ayFuAfhYnlzBWNlJxbuwHT2o-4k01tZ2x41c9_fzeJk',
						"success" : createWalletButtonSuccessCallback,
						"failure" : createWalletButtonFailureCallback,
						"ready" : buttonReady,
						"height": "44",
						"width": "230"
					});
				}
			});
			/*
			if(result && !result.error){
				$scope.isAuth = true;
				$scope.authName = 'Deauthorize';
				accessToken = result.access_token;

			}else{
				console.log(result);
				console.log(result.error);
				console.log('fail to authentication')
			}
			$scope.$digest();
			*/
		}

		$scope.testPurchaseProduct = function(){
			google.wallet.online.setAccessToken(
				"[accessToken]");
		};

		$scope.purchaseProduct = function(productID, quantity){
			console.log(productID);
			console.log(quantity);
			var optdesc= '주문수량: '+ quantity+'개';
			GetPurchaseJWT.query({productID: productID, qty: quantity, optdesc: optdesc}).$promise
				.then(function (response){
					google.payments.inapp.buy({
						parameters: {},
						jwt: response[0],
						success: function(result) {
							//window.alert('success: '+ result);
							//console.log(result.request);
							//console.log(result.response);
							console.log(result.jwt);
							// Insert Payment History
							createPaymentHistory(result);
						},
						failure: function() {
							window.alert('Your Payment transaction is failed')
						}
					})
				});
		};

		var createPaymentHistory = function (result) {
			// Create new Payment object
			var payment = new Payments({
				name: result.request.name,
				price: Number(result.request.price),
				sellerData: result.request.sellerData,
				description: result.request.description,
				currencyCode: result.request.currencyCode,
				orderID: result.response.orderId
			});
			// Redirect after save
			payment.$save(function (response) {
				//$location.path('payments/' + response._id);
				// Clear form fields
				//$scope.name = '';
			}, function (errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);

'use strict';

angular.module('user-interface').controller('ExperimentalinterfaceController', ['$scope',
	function($scope) {

	}
]);

'use strict';
angular.module('user-interface').controller('Front1Controller', ['$scope','$log',
	function($scope, $log) {
		$scope.id = 'frint-1';
		$scope.tests = [];

		for(var index=0; index < 9; index++){
			$scope.tests.push(index);
		}

		$scope.title = '의리미엄으로 가보자';
		$scope.clickProduct = function(index){
			console.log(index);
		};

		/*
		var testSvg = Snap('#workspace');

		if( (/Firefox/i.test(navigator.userAgent)) ) {
			testSvg.node.addEventListener("DOMMouseScroll", mouseWheelHandler, false);
		} else {
			testSvg.node.addEventListener("mousewheel", mouseWheelHandler, false);
		}

		function mouseWheelHandler (ev) {
			ev.preventDefault();
			console.log( ev.target.localName );
		}
		*/


		/*
		var boxGraphic = Snap('.boxSvg');
		var headBox = boxGraphic.select('#box-lead');
		var upperBox = boxGraphic.select('#box-lead-target');
		var open = 0;
		var closedBox;

			var headBoxOpenPath = headBox.attr("d");
			var headBoxClosedPath = boxGraphic.select('#box-lead-target').attr("d");
			headBox.click(function () {
				var path,
					ease;
				if (closedBox) {
					path = headBoxOpenPath;
					ease = mina.easein;
					closedBox = 0;
					console.log('open Box');
				} else {
					path = headBoxClosedPath;
					ease = mina.bounce;
					closedBox = 1;
					console.log('close box');
				}
				headBox.stop().animate({
					d: path
				}, 1000, ease);
			});

			upperBox.click(function () {
				console.log('upperBox')
			});

		/*
		var group = Snap('#boxGraphic');
		var circle1= group.circle(20, 20, 10);
		var circle2 =  group.circle(20, 460, 10);
		var circle3 =  group.circle(480, 460, 10);
		var circle4 = group.circle(480, 20, 10);

		var gruop1 = group.group(circle1, circle2, circle3, circle4);
		gruop1.attr({
			fill: "#ff0000",
			stroke: "#0000ff",
			strokeWidth: 5
		})

		group.rect(50, 65, 70, 20);
		group.rect(130, 65, 70, 20);
		group.rect(210, 65, 70, 20);
		group.rect(290, 65, 70, 20);
		group.rect(370, 65, 70, 20);

		*/
	}

]);

'use strict';

angular.module('user-interface').controller('ListingProductController', ['$scope', '$log', 'Products',
	function($scope, $log, Products) {

		$scope.find = function() {
			$scope.products = Products.query()
			$scope.products.$promise.then(function (result) {
				$scope.partitioned = partition(result, 3);
			});
		};

		$scope.testColumnSystem = function(numberOfColumn){
			$scope.partitioned = partition($scope.products, numberOfColumn);
		}

		$scope.listItemClick = function($index) {
			var clickedItem = $scope.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};

		/*
		$scope.purchaseProduct = function (productID) {
			GetPurchaseJWT.query({ productID: productID }).$promise.then(function (response) {
				console.log(response[0]);
				google.payments.inapp.buy({
					parameters: {},
					jwt: response[0],
					success: function () {
						window.alert('success');
					},
					failure: function () {
						window.alert('failure');
					}
				});
			});
		};
		*/

		function partition(input, size) {
			var newArr = [];
			for (var i=0; i<input.length; i+=size) {
				newArr.push(input.slice(i, i+size));
			}
			return newArr;
		};

	}
]);

'use strict';

angular.module('user-interface').directive('article', ['Articles',
	function(Articles) {
		return {
			templateUrl: 'modules/user-interface/directives/templates/article.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				scope.find = function() {
					scope.articles = Articles.query();
				};
				scope.find();

			}
		};
	}
]);

'use strict';
//http://css-tricks.com/draggable-elements-push-others-way/
angular.module('user-interface').directive('mainInterface', ['$compile',
	function($compile) {
		return {
			templateUrl: 'modules/user-interface/directives/templates/main-interface.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

				var draggableTargets = $('.draggable-target');
				var ids = [];
				angular.forEach(draggableTargets, function(index){ids.push(index.id)})
				console.log(ids);

				scope.clicked=false;
				scope.dragable = false;
				scope.dragin = false;
				var newY, ghost = null;

				var sortable = $("#box");
				var box = Draggable.create(sortable,
					{
						type:"x,y",
						edgeResistance:0.85,
						//throwProps:true,
						//onPress: draggablePress,
						onDragStart:function(){
							TweenMax.to("#box",0.25,{scale:0.8});
							console.log('Click');
						},
						onDrag: function(){
							TweenMax.to(".draggable-target",0,{opacity:1, backgroundColor:'lightgreen'});
							angular.forEach(ids, function(index){
								if (box[0].hitTest("#"+index, 20)) {
									TweenMax.to("#"+index, 0.25,{opacity:0.5, backgroundColor:'lightgreen'});
								}
							});
						},
						onDragEnd:function(){
							angular.forEach(ids, function(index){
								if (box[0].hitTest("#"+index, 20)) {
									var el = $compile( "<article></article>" )(scope );
									angular.element("#"+index).append(el);
									//Set bound to menu
									box[0].applyBounds("#widget_menu");
									//release bound setting
									box[0].vars.bounds="";
								}
							});

							TweenMax.to("#box",0.25,{scale:1});
						}
					});
			}
		};
	}
]);

'use strict';

angular.module('user-interface').factory('Allproducts', ['$resource',
	function($resource) {
		return $resource('products/:productID', {productID: '@_id'});
	}
]);

angular.module('user-interface').factory('AllBanners', ['$resource',
	function($resource) {
		return $resource('banners', {productID: '@_id'});
	}
]);

'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

//Setting up route
angular.module('utility').config(['$stateProvider',
	function($stateProvider) {
		// Utility state routing
		$stateProvider.
		state('test-page-generator', {
			url: '/test-page-generator',
			templateUrl: 'modules/utility/views/test-page-generator.client.view.html'
		});
	}
]);
'use strict';

angular.module('utility').controller('TestpageGeneratorController', ['$scope',
	function($scope) {
		$scope.pageSrc = '<h1>Hello World2</h1>';
		// Test page generator controller logic
		// ...
	}
]);

'use strict';

angular.module('utility').directive('pageFormatCreation', [
	function() {
		return {
			templateUrl: 'modules/utility/directives/template/default-format.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			}
		};
	}
]);

'use strict';

angular.module('utility').directive('pageGenerator', [
	function() {
		return {
			template: '<div ng-bind-html="view"></div>',
			restrict: 'E',
			scope:{
				pageInfo: '='
			},
			link: function postLink(scope, element, attrs) {
				var generateView = function() {
					return '<h2>Hello World</h2><img src="http://www.ilbe.com/mylogo/ilbe.png">'
				};

				if(scope.pageInfo != null){
					console.log(scope.pageInfo);
					scope.view = scope.pageInfo;
				}
				else{
					scope.pageInfo = {
						frame: ['r1c1'],
						name: 'test',
						appliedDirective: {
							Article:['r1c1']
						}
					};
					scope.view ='<h2>There is no Page Content</h2>';
				}
			}
		};
	}
]);
