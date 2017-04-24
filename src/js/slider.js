var App = App || {};

App.slider = (function() {

	function init() {
		console.log('init the slider...');
	}

	return {
		init: init
	};

}());

(function() {
	App.slider.init();
})();

