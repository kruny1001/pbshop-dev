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
			'<section> <h2>Do We Really Need a Brand New App?</h2> </section>'+
			'<section data-markdown>## Markdown Support</section></div>';
		//mainBody.append(reveal);

		Reveal.initialize({

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: true,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Flags if we should show a help overlay when the questionmark
			// key is pressed
			help: true,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Transition style
			transition: 'slide', // none/fade/slide/convex/concave/zoom

			// Transition speed
			transitionSpeed: 'slow', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Parallax background image
			parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

			// Parallax background size
			parallaxBackgroundSize: '' // CSS syntax, e.g. "2100px 900px"
		});

		// Open board present controller logic
		// ...

	}
]);