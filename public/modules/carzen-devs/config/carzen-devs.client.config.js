'use strict';

// Configuring the Articles module
angular.module('carzen-devs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Carzen devs', 'carzen-devs', 'dropdown', '/carzen-devs(/create)?');
		Menus.addSubMenuItem('topbar', 'carzen-devs', 'List Carzen devs', 'carzen-devs');
		Menus.addSubMenuItem('topbar', 'carzen-devs', 'New Carzen dev', 'carzen-devs/create');
	}
]);