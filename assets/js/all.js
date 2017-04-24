
var App = {};

var i = 0;

i += 1;

console.log('i = ' + i);


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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBBcHAgPSB7fTtcblxudmFyIGkgPSAwO1xuXG5pICs9IDE7XG5cbmNvbnNvbGUubG9nKCdpID0gJyArIGkpO1xuXG4iLCJ2YXIgQXBwID0gQXBwIHx8IHt9O1xuXG5BcHAuc2xpZGVyID0gKGZ1bmN0aW9uKCkge1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2luaXQgdGhlIHNsaWRlci4uLicpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBpbml0XG5cdH07XG5cbn0oKSk7XG5cbihmdW5jdGlvbigpIHtcblx0QXBwLnNsaWRlci5pbml0KCk7XG59KSgpO1xuXG4iXX0=
