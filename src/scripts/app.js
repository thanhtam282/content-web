var app = angular.module('fullStackApp', [
	'ngAnimate',
	'ngSanitize',
	// Thự viện
	'toastr', // popup lúc đầu
	'ui.router',
	'ui.bootstrap',
	// Ứng dụng
	'app.config',
	'app.run',
	'app.filters',
	'app.controllers',
	'app.routers',
	'app.directives',
]);
