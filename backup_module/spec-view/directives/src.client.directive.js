'use strict';

angular.module('spec-view').directive('srcCheck', [
	function() {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				var URL_RE = /^http:\/\/[^\/]*/;
				var HTTP_RE = /^(http|https):\/\//;

				var context = {url: attrs.src.match(URL_RE)[0]};
				context.domain = context.url.replace(HTTP_RE, '');
				var templateFn = _.template('<a href="<%= url %>" target="_blank">Photo courtesy of <%= domain %></a>');
				element.after(templateFn(context));

			}
		};
	}
]);
