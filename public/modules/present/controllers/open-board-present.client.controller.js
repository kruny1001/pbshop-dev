'use strict';

angular.module('present').controller('OpenBoardPresentController', ['$scope',
	function($scope) {


		var mdToolBar = $('#open-board-conents #open-board-toolbar');
		var mdContent = $('#open-board-conents #open-board-content');
		TweenMax.set(mdToolBar,{display:"none"});
		var mainBody = $('#revealSlide');
		var reveal = '<div class="slides">' +
			'<section> <h2>Open Board</h2> <p>More time to Teach Less time to Grade</p></section> ' +
			'<section> <h2>Are You Happy with D2L?</h2> <p>Horrible User Interface</p><p>Lots of Mysterious Functionalities you never use </p></section> ' +
			'<section> <h2>Every where we have Cloud Tech</h2> </section>'+
			'<section> <h2>Do We Really Need a Brand New App?</h2> </section> </div>';
		mainBody.append(reveal);

		Reveal.initialize({
			transition: 'linear'
		});

		// Open board present controller logic
		// ...
	}
]);